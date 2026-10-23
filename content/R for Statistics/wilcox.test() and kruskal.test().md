---
type: atomic
tags:
  - r-statistics
aliases:
  - "wilcox.test"
  - "kruskal.test"
  - "Wilcoxon in R"
  - "Kruskal-Wallis in R"
status: seedling
---

`wilcox.test()` runs the rank-based versions of the one-sample, paired and two-sample t-tests. `kruskal.test()` runs the rank-based version of one-way ANOVA.

Rank tests replace values by their ranks, so [[Outliers|outliers]] and [[Shape of a Distribution|skew]] can't dominate ([[Ranks]], [[Nonparametric Alternatives]]). Each standard test has a rank partner, and R mirrors the arguments of the standard function ([[t.test()]], [[aov()]]):
- `wilcox.test(x, mu = m0)`: signed-rank test, one sample.
- `wilcox.test(x, y, paired = TRUE)`: signed-rank test, paired.
- `wilcox.test(y ~ group, data = d)`: rank-sum (Mann–Whitney) test, two groups.
- `kruskal.test(y ~ group, data = d)`: Kruskal–Wallis test, 3 or more groups.

Read the [[Parameter vs Statistic|statistic]] (V, W or chi-squared) and the p-value. Kruskal–Wallis reports a chi-squared value because its statistic is compared with a chi-square curve on k − 1 degrees of freedom ([[Chi-Square Test]]). Tied values give the warning "cannot compute exact p-value with ties". R then switches to an approximation; it isn't an error.

Run them alongside the t-test or ANOVA, not instead of looking at the data. If they agree, the conclusion doesn't depend on normality ([[Why rank tests trade power for robustness, and why run both]]).

![[Worked example - rank-based test.png|700]]
The outlying stem-cell sheep is far out as a value but only one step up as a rank.

They give a rank-based check in one line for each design, in the same formula style as the tests they check.

For example:

```r
wilcox.test(swim$wetsuit, swim$swimsuit, paired = TRUE)  # V = 78, p = 0.0025
wilcox.test(change ~ trmt, data = sheep)                 # W = 6,  p = 0.0027
kruskal.test(ndrm.ch ~ genotype, data = famuss)          # chi-squared = 5.75, df = 2, p = 0.057
```
Checked in R on the book data ([[Nonparametric Alternatives]]).

wilcox.test is really two tests: the signed-rank test (one sample or paired) and the rank-sum test (two groups), chosen by the arguments. And a tie warning doesn't mean the result is invalid, only that the p-value is approximate.

See also: [[Functions and Arguments]], [[Test Choice Guide]].
