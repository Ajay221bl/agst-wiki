---
type: atomic
tags:
  - r-statistics
aliases:
  - "stack"
status: seedling
---

`stack(wide)` turns a table with one column per group into long format, with a `values` column and an `ind` column naming the group.

Reshaping data sounds hard, but here it's one function. Sometimes data arrive wide, with one column per group ([[Wide vs Long Format]]). `stack()` piles the columns into one, and adds a column saying which original column each value came from:

```r
frust <- read.csv(file.choose(), header = TRUE)   # wide: business, English, math, psychology
frust <- stack(frust)                              # values + ind
names(frust) <- c("score", "major")                # friendlier names
str(frust)                                         # want: num score, Factor major (4 levels)
```

Rename the columns, because `values` and `ind` say nothing, and the names appear in every output and formula. Then check with `str()` ([[str()]]): you want one numeric response and one factor with the right number of levels ([[Data Frames]]).

It is the one-line base R reshape that gets wide data ready for `aov()` ([[aov()]]).

For example, a wide row of business 12, English 15, math 14 and psychology 18 becomes four long rows: (12, business), (15, English), (14, math) and (18, psychology).

The simplest tool that works is usually the best one. stack() doesn't need the tidyverse; it is part of base R.
