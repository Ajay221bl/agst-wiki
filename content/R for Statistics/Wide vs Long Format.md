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

Wide format has one column per group. Long format has one column of responses and one column saying which group each response belongs to. `aov()` and the formula version of `t.test()` need long format.

The same data can be laid out two ways, and R's modelling functions only understand one of them. When recording data, it is natural to give each group its own column, such as control, 5 mm, 10 mm and 15 mm. That is **wide** format. Modelling functions want one row per observation, with a response column and a group column ([[Data Table Rows and Columns]], [[Factors and Levels]]). That is **long** format. It is needed because the formula `response ~ group` needs one column for each side ([[Functions and Arguments]]).

| Wide (natural when recording) | Long (what modelling functions want) |
|---|---|
| columns: control, 5 mm, 10 mm, 15 mm | columns: `score` (num), `major` (Factor) |
| `str()` shows several numeric columns, so `aov()` can't find the groups | `str()` shows one response and one factor |

Convert with `stack()` ([[stack()]]) and confirm with `str()` ([[str()]]). The formula `score ~ major` needs a column called `major`, but in wide data the group lives in the column *names*, not in a variable.

For example:

```r
long <- stack(wide)                       # base R: values + ind
names(long) <- c("score", "major")
# tidyverse: tidyr::pivot_longer(wide, everything(), names_to = "major", values_to = "score")
```

Wide is for people reading, long is for models. Long format doesn't lose information. It holds the same numbers, rearranged.

See also: [[aov()]].
