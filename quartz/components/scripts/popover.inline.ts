import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

// Popovers stack: a link inside a popover opens a child popover above it, like Obsidian's
// nested hover previews. stack[0] was opened from the page, stack[n] from a link in stack[n - 1].
const p = new DOMParser()
const CLOSE_DELAY_MS = 300
const contentCache = new Map<string, Promise<HTMLElement | null>>()
let stack: HTMLElement[] = []
let closeTimer: ReturnType<typeof setTimeout> | undefined
let hoverToken = 0

function closeFrom(level: number) {
  for (const el of stack.splice(level)) el.remove()
}

function cancelClose() {
  clearTimeout(closeTimer)
}

function scheduleClose(level: number) {
  cancelClose()
  closeTimer = setTimeout(() => closeFrom(level), CLOSE_DELAY_MS)
}

// popovers opened from this link sit at this depth in the stack
function levelOf(link: HTMLElement): number {
  const parent = link.closest(".popover") as HTMLElement | null
  return parent ? stack.indexOf(parent) + 1 : 0
}

async function buildInner(targetUrl: URL): Promise<HTMLElement | null> {
  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })
  if (!response) return null
  const rawContentType = response.headers.get("Content-Type")
  if (!rawContentType) return null
  const [contentType] = rawContentType.split(";")
  const [contentTypeCategory, typeInfo] = contentType.split("/")

  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverInner.dataset.contentType = contentType ?? undefined

  switch (contentTypeCategory) {
    case "image":
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname
      popoverInner.appendChild(img)
      break
    case "application":
      switch (typeInfo) {
        case "pdf":
          const pdf = document.createElement("iframe")
          pdf.src = targetUrl.toString()
          popoverInner.appendChild(pdf)
          break
        default:
          break
      }
      break
    default:
      const contents = await response.text()
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)
      // prepend all IDs inside popovers to prevent duplicates
      html.querySelectorAll("[id]").forEach((el) => {
        const targetID = `popover-internal-${el.id}`
        el.id = targetID
      })
      const elts = [...html.getElementsByClassName("popover-hint")]
      if (elts.length === 0) return null
      elts.forEach((elt) => popoverInner.appendChild(elt))
  }
  return popoverInner
}

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = this
  if (link.dataset.noPopover === "true") {
    return
  }

  cancelClose()
  const token = ++hoverToken
  const level = levelOf(link)

  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""
  const key = targetUrl.toString()

  if (!contentCache.has(key)) contentCache.set(key, buildInner(targetUrl))
  const cached = await contentCache.get(key)!
  if (!cached) {
    contentCache.delete(key)
    return
  }
  // the pointer moved on while we were fetching
  if (token !== hoverToken || !link.isConnected) return

  closeFrom(level)
  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  const popoverInner = cached.cloneNode(true) as HTMLElement
  popoverElement.appendChild(popoverInner)
  document.body.appendChild(popoverElement)
  stack.push(popoverElement)

  popoverElement.addEventListener("mouseenter", () => {
    cancelClose()
    // back on this popover: drop any child popovers opened from it
    const depth = stack.indexOf(popoverElement)
    if (depth >= 0 && depth < stack.length - 1) scheduleClose(depth + 1)
  })
  popoverElement.addEventListener("mouseleave", () => scheduleClose(0))
  for (const inner of popoverInner.querySelectorAll(
    "a.internal",
  ) as NodeListOf<HTMLAnchorElement>) {
    inner.addEventListener("mouseenter", mouseEnterHandler)
    inner.addEventListener("mouseleave", mouseLeaveHandler)
  }

  const { x, y } = await computePosition(link, popoverElement, {
    strategy: "fixed",
    middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
  })
  Object.assign(popoverElement.style, {
    transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
  })
  popoverElement.classList.add("active-popover")

  if (hash !== "") {
    const targetAnchor = `#popover-internal-${hash.slice(1)}`
    const heading = popoverInner.querySelector(targetAnchor) as HTMLElement | null
    if (heading) {
      // leave ~12px of buffer when scrolling to a heading
      popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
    }
  }
}

function mouseLeaveHandler(this: HTMLAnchorElement) {
  hoverToken++
  scheduleClose(levelOf(this))
}

function setupPopovers() {
  const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", mouseLeaveHandler)
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", mouseLeaveHandler)
    })
  }
}

document.addEventListener("nav", () => {
  cancelClose()
  closeFrom(0)
  setupPopovers()
})
document.addEventListener("render", setupPopovers)
