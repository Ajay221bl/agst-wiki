---
type: atomic
tags:
  - r-statistics
aliases:
  - "RStudio"
  - "R script"
  - "console"
  - "Ctrl Enter"
  - "comment"
  - "#"
status: seedling
---

**In one line:** RStudio is the program I use to run R; I write code in a saved script (an `.R` file) rather than the console so the analysis can be rerun, shared and reused.

> [!info] Before this, it helps to know
> Nothing about programming. This is the starting point for the R notes.

## Start from zero
1. **R does arithmetic and statistics when you give it written commands.** RStudio is the window you type them in.
2. **It has four panes, each with a job:**
   - **Script (`.R` file):** where I write and save work. *Why work here:* it can be rerun anytime, on any computer, and adapted to new data.
   - **Console:** where code actually runs. Anything typed only here **disappears when the session ends**.
   - **Environment:** the objects I have created (e.g. `YouGov`: 2000 obs. of 25 variables). *Why look here:* it confirms the data loaded with the size you expected.
   - **Files / Plots / Packages / Help:** file finder, plot window (Zoom enlarges), package installer, documentation.
3. **Send lines from the script to the console with Ctrl + Enter** (Mac **Cmd + Enter**): it runs the current line and moves to the next. *Why line by line:* you see each result and catch a mistake where it happens.
4. **Annotate as you go.** `#` starts a comment R ignores. *Why:* in a month you won't remember why a line is there. `;` puts several commands on one line.
5. **Save often (Ctrl/Cmd + S).** Next: give results names so you can reuse them ([[R Objects and Assignment]]).

## Why it exists
A script is a record of exactly what was done to the data, which is what makes an analysis checkable and repeatable. Annotated scripts also double as study notes.

## A tiny example
```r
# Load packages and read the data (comments explain each step)
require(report); require(psych)
YouGov <- read.csv(file.choose(), header = TRUE)
summary(YouGov)
```

## Common confusions
- **"I ran it in the console, so it's saved."** Only the script is saved.

## Connections
- **Builds on:** nothing; start here for R
- **Leads to:** [[R Objects and Assignment]], [[Functions and Arguments]], [[R Packages]]
- **Part of:** [[MOC - R for Statistics]]
