---
type: atomic
tags:
  - r-statistics
aliases:
  - "assignment"
  - "objects"
status: seedling
---

`name <- value` stores a value, such as a number, a data set or a test result, under a name so it can be used again later.

A result you can't refer to has to be worked out again, so R remembers things by name. The arrow `<-` means "store the thing on the right under the name on the left":

```r
x <- 5
frust <- read.csv(file.choose(), header = TRUE)
frustration.aov <- aov(score ~ major, data = frust)
```

Each name now appears in the Environment pane ([[RStudio and Scripts]]), and typing a name prints it. Storing a model is useful because later functions, such as `summary()`, `TukeyHSD()` and `residuals()`, take the stored model, so it only has to be fitted once.

Assigning to an existing name overwrites it without warning. For example, reusing a name like `d` for a cleaned version replaces the original, so if results look odd, rerun the script from the top.

Objects come in several kinds: a single value, a vector of values ([[c() and Vectors]]), or a whole table ([[Data Frames]]). A stored model or test result can be passed to other functions, as in `summary(frustration.aov)` or `TukeyHSD(frustration.aov)`. Without names, every step would have to be redone.

For example:

```r
COVIDtime <- COVID[, c(7, 8)]          # keep columns 7 and 8
names(COVIDtime) <- c("March", "April")   # rename them
```
The second line changes the column names of the stored object.

R cares about capital letters: `Frust` and `frust` are different objects. And spaces in names break code, so use `_` or `.` instead.

See also: [[Functions and Arguments]].
