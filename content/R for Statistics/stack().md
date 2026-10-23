---
type: atomic
tags:
  - r-statistics
aliases:
  - "stack"
status: seedling
---

**In one line:** `stack(wide)` turns a table with one column per group into long format, with a `values` column and an `ind` column naming the group.

> [!info] Before this, it helps to know
> [[Wide vs Long Format]] · [[Data Frames]]

## Start from zero
1. **Data arrived wide: one column per group** ([[Wide vs Long Format]]).
2. **`stack()` piles the columns into one,** and adds a column saying which original column each value came from:

```r
frust <- read.csv(file.choose(), header = TRUE)   # wide: business, English, math, psychology
frust <- stack(frust)                              # values + ind
names(frust) <- c("score", "major")                # friendlier names
str(frust)                                         # want: num score, Factor major (4 levels)
```

3. **Rename the columns.** *Why:* `values` and `ind` say nothing, and the names appear in every output and formula.
4. **Check with `str()`** ([[str()]]): one numeric response and one factor with the right number of levels ([[Data Frames]]).

## Why it exists
It is the one-line base-R reshape that gets wide data ready for `aov()` ([[aov()]]).

## A tiny example
Wide row 1: business 12, English 15, math 14, psychology 18 → long: four rows, (12, business), (15, English), (14, math), (18, psychology).

## Common confusions
- **"stack() needs the tidyverse."** It is base R.

## Connections
- **Builds on:** [[Wide vs Long Format]], [[Data Frames]]
- **Leads to:** [[str()]], [[aov()]]
- **Part of:** [[MOC - R for Statistics]]
