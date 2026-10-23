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

`wilcox.test()` runs the rank-based versions of the one-sample, paired and two-sample t-tests, and `kruskal.test()` the rank-based version of one-way ANOVA.

1. **Rank tests replace values by their ranks**, so [[Outliers|outliers]] and [[Shape of a Distribution|skew]] can't dominate ([[Ranks]], [[Nonparametric Alternatives]]).
2. **Each parametric test has a rank partner**, and R mirrors the arguments of the parametric function ([[t.test()]], [[aov()]]):
   - `wilcox.test(x, mu = m0)`: signed-rank, one sample.
   - `wilcox.test(x, y, paired = TRUE)`: signed-rank, paired.
   - `wilcox.test(y ~ group, data = d)`: rank-sum (Mann–Whitney), two groups.
   - `kruskal.test(y ~ group, data = d)`: Kruskal–Wallis, 3+ groups.
3. **Read the [[Parameter vs Statistic|statistic]] and the p-value** (V, W or chi-squared). *Why chi-squared for Kruskal–Wallis:* its statistic is compared with a chi-square curve on k − 1 df ([[Chi-Square Test]]).
4. **Ties give a warning**: "cannot compute exact p-value with ties". R switches to an approximation; it is not an error.
5. **Run them beside the t-test or ANOVA**, not instead of looking. Agreement means the conclusion doesn't hinge on normality ([[Why rank tests trade power for robustness, and why run both]]).

![[Worked example - rank-based test.png|700]]
The outlying stem-cell sheep is far out as a value but only one step up as a rank.

It gives a rank-based check in one line per design, with the same formula style as the tests it checks.

For example:

```r
wilcox.test(swim$wetsuit, swim$swimsuit, paired = TRUE)  # V = 78, p = 0.0025
wilcox.test(change ~ trmt, data = sheep)                 # W = 6,  p = 0.0027
kruskal.test(ndrm.ch ~ genotype, data = famuss)          # chi-squared = 5.75, df = 2, p = 0.057
```
Checked in R on the book data ([[Nonparametric Alternatives]]).

Common mistakes:

- **"wilcox.test is one test."** It is two: signed-rank (one sample or paired) and rank-sum (two groups), chosen by the arguments.
- **"A tie warning means the result is invalid."** It means the p-value is approximate.

See also: [[Functions and Arguments]], [[Test Choice Guide]].
