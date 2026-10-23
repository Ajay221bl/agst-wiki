---
type: atomic
tags:
  - r-statistics
aliases:
  - "assignment"
  - "objects"
status: seedling
---

`name <- value` stores a value (a number, a data set, a test result) under a name so it can be used again later.

1. **A result you can't refer to has to be recomputed.** So R remembers things by name.
2. **The arrow `<-` means "store the thing on the right under the name on the left":**

```r
x <- 5
frust <- read.csv(file.choose(), header = TRUE)
frustration.aov <- aov(score ~ major, data = frust)
```

3. **Each name now appears in the Environment pane** ([[RStudio and Scripts]]). Typing a name prints it. *Why store a model:* later functions (`summary()`, `TukeyHSD()`, `residuals()`) take the stored model, so it is fitted once.
4. **Assigning to an existing name overwrites it silently.** *Why it matters:* reusing a name like `d` for a cleaned version replaces the original, so rerun the script from the top if results look odd.
5. **Objects come in kinds:** a single value, a vector of values ([[c() and Vectors]]), or a whole table ([[Data Frames]]).

A model or test result stored as an object can be passed to other functions: `summary(frustration.aov)`, `TukeyHSD(frustration.aov)`. Without names, every step would need to be redone.

For example:

```r
COVIDtime <- COVID[, c(7, 8)]          # keep columns 7 and 8
names(COVIDtime) <- c("March", "April")   # rename them
```
The second line changes the column names of the stored object.

Common mistakes:

- **"R is case-insensitive."** `Frust` and `frust` are different objects.
- **"Spaces in names are fine."** They break code; use `_` or `.`.

See also: [[Functions and Arguments]].
