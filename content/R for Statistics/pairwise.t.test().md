---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "pairwise.t.test"
  - "Bonferroni in R"
  - "p.adjust"
  - "Holm"
status: seedling
---

`pairwise.t.test(y, group, p.adjust.method = "bonferroni")` runs t-tests between every pair of groups and prints a table of adjusted p-values.

Many tests need a correction, and this function builds it in for you. Post hoc tests run many pairwise tests, so the p-values must be adjusted ([[Family-Wise Type I Error]]). `pairwise.t.test()` runs a t-test for every pair and adjusts:

```r
pairwise.t.test(frust$score, frust$major, p.adjust.method = "bonferroni")
# a lower-triangle matrix: each cell is the adjusted p-value for that pair
```

The `bonferroni` method multiplies each p by the number of comparisons, so the chance of any false positive across the family stays at α ([[Bonferroni Correction]]). Other options for `p.adjust.method` include "holm" (R's default, a less [[Conservative Tests|conservative]] step-by-step version) and "none" (which you shouldn't use after many tests). By default it uses one pooled standard deviation from all the groups, the same idea as ANOVA's within-group mean square ([[aov()]], [[Pooled Variance]]).

It is an alternative to [[Tukey HSD|Tukey's test]] in the Bonferroni style. Each p-value has already been multiplied by the number of comparisons, so compare it with the usual α.

For example, a cell of 0.012 is significant at 0.05 after adjustment.

Know whether a number has already been adjusted before you adjust it again. Don't compare the table with 0.05/6. The p-values are already adjusted, so compare them with 0.05.

Try it yourself. You run `pairwise.t.test(score, group, p.adjust.method = "bonferroni")`. What has happened to the p-values it prints? They've already been multiplied by the number of comparisons (capped at 1), so you compare them with the usual α directly.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 269–270).
