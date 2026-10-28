// Patches the installed @quartz-community/graph plugin so the page graph
// colours nodes by topic folder (Why notes in their own colour), hides hub
// pages (home, maps, start-here, guides, tags, folder indexes) and draws a
// small legend. Runs after `npx quartz plugin install`; safe to run twice.
// Restore the plugin with `npx quartz plugin install --from-config`.
import fs from "node:fs"

const MARK = "/*agst-graph*/"
const files = [
  "node_modules/@quartz-community/graph/dist/index.js",
  "node_modules/@quartz-community/graph/dist/components/index.js",
]

// Code inserted into the client script, which is a template literal:
// no backticks, no dollar-brace and no backslashes allowed here.
const helpers =
  MARK +
  'var AGT=[["02-molecular-notes","Why notes","#d62728"],["basics-from-zero","Basics","#8c564b"],["probability","Probability","#1f77b4"],["describing-data","Describing data","#2ca02c"],["study-design-and-sampling","Study design","#bcbd22"],["inference-foundations","Inference","#ff7f0e"],["t-tests","t-tests","#17becf"],["anova","ANOVA","#9467bd"],["r-for-statistics","R","#7f7f7f"]];' +
  'function agTopic(id){var f=id.split("/")[0];for(var q=0;q<AGT.length;q++)if(AGT[q][0]===f)return AGT[q];return null}' +
  'function agHub(id){var f=id.split("/")[0];return id==="index"||f==="tags"||f==="00-start-here"||f==="01-maps-of-content"||f==="guides"||/[/]index$/.test(id)}' +
  'function agLegend(box,nodes,here){var seen={},items=[];for(var q=0;q<nodes.length;q++){var tp=agTopic(nodes[q].id);if(tp&&!seen[tp[0]]){seen[tp[0]]=1;items.push(tp)}}items.sort(function(a,b){return AGT.indexOf(a)-AGT.indexOf(b)});var d=document.createElement("div");d.className="agst-graph-legend";d.style.cssText="position:absolute;left:4px;bottom:4px;display:flex;flex-wrap:wrap;gap:2px 8px;max-width:calc(100% - 8px);font-size:0.62rem;line-height:1.3;color:var(--darkgray);background:var(--light);opacity:0.92;padding:2px 5px;border-radius:4px;pointer-events:none;z-index:2";function add(c,label){var s=document.createElement("span");s.style.cssText="white-space:nowrap";var dot=document.createElement("span");dot.style.cssText="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:3px;vertical-align:middle;background:"+c;s.appendChild(dot);s.appendChild(document.createTextNode(label));d.appendChild(s)}if(here)add("var(--dark)","This page");for(var q=0;q<items.length;q++)add(items[q][2],items[q][1]);box.appendChild(d)}'

const reps = [
  // drop hub pages from the data before the graph is built (keep the current page)
  ["var O=_.offsetWidth,", "uu.forEach(function(v,k){agHub(k)&&k!==g&&uu.delete(k)});var O=_.offsetWidth,"],
  // node colour: current page dark, otherwise its topic colour
  [
    'function $e(i){var l=i.id===g;return l?Ie:K.has(i.id)||i.id.startsWith("tags/")?Qu:ue}',
    'function $e(i){if(i.id===g)return ze;var tp=agTopic(i.id);return tp?h(tp[2],"#888888"):ue}',
  ],
  // legend after the canvas is attached
  ["_.appendChild(Q.canvas);", "_.appendChild(Q.canvas);agLegend(_,ru,ru.some(function(n){return n.id===g}));"],
]

for (const f of files) {
  let t = fs.readFileSync(f, "utf8")
  if (t.includes(MARK)) {
    console.log("already patched", f)
    continue
  }
  const head = "var graph_inline_default = `"
  const start = t.indexOf(head)
  if (start < 0) throw new Error("graph script not found in " + f)
  t = t.slice(0, start + head.length) + helpers + t.slice(start + head.length)
  for (const [a, b] of reps) {
    if (t.split(a).length !== 2) throw new Error("anchor not found once in " + f + ": " + a.slice(0, 40))
    t = t.replace(a, () => b)
  }
  fs.writeFileSync(f, t)
  console.log("patched", f)
}
