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

`pairwise.t.test(y, group, p.adjust.method = "bonferroni")` runs t-tests between every pair of groups and prints a matrix of adjusted p-values.

1. **Post hocs run many pairwise tests,** so p-values must be adjusted ([[Family-Wise Type I Error]]).
2. **`pairwise.t.test()` runs a t-test for every pair and adjusts:**

```r
pairwise.t.test(frust$score, frust$major, p.adjust.method = "bonferroni")
# a lower-triangle matrix: each cell is the adjusted p-value for that pair
```

3. **Why `bonferroni`:** it multiplies each p by the number of comparisons, so the family-wise error stays at α ([[Bonferroni Correction]]).
4. **Other options for `p.adjust.method`:** "holm" (R's default, a less [[Conservative Tests|conservative]] step-down version), "none" (don't, after many tests).
5. **By default it uses the pooled SD from all groups,** the same idea as ANOVA's MSE ([[aov()]], [[Pooled Variance]]).

A Bonferroni-style alternative to [[Tukey HSD|Tukey]]; each p-value has already been multiplied by the number of comparisons, so compare it with the usual α ([[Bonferroni Correction]]).

For example:

A cell of 0.012 → significant at 0.05 after adjustment.

Common mistakes:

- **"Compare the matrix to 0.05/6."** The p-values are already adjusted; compare to 0.05.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 269–270).
