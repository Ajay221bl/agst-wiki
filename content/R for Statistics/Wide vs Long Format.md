---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "wide format"
  - "long format"
  - "reshaping data"
  - "pivot_longer"
status: seedling
---

**In one line:** wide format has one column per group; long format has one column of responses and one column saying which group each belongs to, which is what `aov()` and formula-based `t.test()` need.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] · [[Factors and Levels]]

## Start from zero
1. **When recording, it's natural to give each group its own column** (control, 5 mm, 10 mm, 15 mm). That's **wide** format.
2. **Modeling functions want one row per observation:** a response column and a group column ([[Data Table Rows and Columns]], [[Factors and Levels]]). That's **long** format. *Why:* the formula `response ~ group` needs one column for each side ([[Functions and Arguments]]).

| Wide (natural when recording) | Long (what modeling functions want) |
|---|---|
| columns: control, 5 mm, 10 mm, 15 mm | columns: `score` (num), `major` (Factor) |
| `str()` shows several numeric columns, so `aov()` can't find the groups | `str()` shows one response and one factor |

3. **Convert with `stack()`** ([[stack()]]) and confirm with `str()` ([[str()]]).

## Why it exists
The formula `score ~ major` needs a column called `major`. In wide data the group lives in the column *names*, not in a variable.

## A tiny example
```r
long <- stack(wide)                       # base R: values + ind
names(long) <- c("score", "major")
# tidyverse: tidyr::pivot_longer(wide, everything(), names_to = "major", values_to = "score")
```
See [[stack()]].

## Common confusions
- **"Long format loses information."** It holds the same numbers, rearranged.

## Connections
- **Builds on:** [[Data Table Rows and Columns]], [[Factors and Levels]]
- **Leads to:** [[stack()]], [[aov()]]
- **Part of:** [[MOC - R for Statistics]]
