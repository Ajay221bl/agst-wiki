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
status: seedling
---

RStudio is a program for running R. Write your code in a saved script (an `.R` file) rather than the console, so the analysis can be rerun, shared and reused.

R does arithmetic and statistics when you give it written commands; RStudio is the window you type them in. It has four panes, each with a job:
- **Script (`.R` file):** where you write and save your work. It can be rerun at any time, on any computer, and adapted to new data.
- **Console:** where the code actually runs. Anything typed only here **disappears when the session ends**.
- **Environment:** the objects you have created, for example `YouGov`: 2000 obs. of 25 variables. Looking here confirms that the data loaded with the size you expected.
- **Files / Plots / Packages / Help:** a file finder, the plot window (Zoom enlarges it), the package installer, and the documentation.

Send lines from the script to the console with Ctrl + Enter (Cmd + Enter on a Mac). This runs the current line and moves to the next. Going line by line lets you see each result and catch a mistake where it happens.

Add notes as you go. `#` starts a comment, which R ignores; in a month you won't remember why a line is there. `;` puts several commands on one line. Save often (Ctrl or Cmd + S). The next step is to give results names so you can reuse them ([[R Objects and Assignment]]).

A script is a record of exactly what was done to the data, which is what makes an analysis checkable and repeatable. Scripts with good comments also work as study notes.

For example:

```r
# Load packages and read the data (comments explain each step)
require(report); require(psych)
YouGov <- read.csv(file.choose(), header = TRUE)
summary(YouGov)
```

Running code in the console doesn't save it; only the script is saved.

See also: [[Functions and Arguments]], [[R Packages]].
