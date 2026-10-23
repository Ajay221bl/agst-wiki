---
type: atomic
tags:
  - r-statistics
aliases:
  - "pnorm"
  - "qnorm"
  - "pt"
  - "qt"
  - "pf"
  - "qf"
  - "qchisq"
  - "distribution functions in R"
  - "p and q functions"
status: seedling
---

R's p-functions (`pnorm`, `pt`, `pf`) turn a value into the area to its left. The q-functions (`qnorm`, `qt`, `qf`) do the reverse: they turn an area into the value with that much area below it.

Areas under a distribution curve are probabilities ([[Probability Distribution]]). Two questions come up again and again: "how much area is below this value?", for p-values, and "which value has this much area below it?", for critical values ([[P-Value]], [[Critical Value]]).

R has a function for each question and each curve. `p` plus the curve's name gives the area, and `q` plus the name gives the value, called the quantile ([[Percentiles and Quantiles]]). `norm` is the normal curve, `t` the t, `f` the F, and `chisq` the [[Chi-Square Test|chi-square]].

They give the area to the left by default. For a right tail, use `lower.tail = FALSE`, or 1 minus the answer ([[Tails of a Distribution]]). The t, F and chi-square versions need degrees of freedom ([[Degrees of Freedom]]). A two-sided p-value doubles one tail: `2 * pt(-abs(t), df)`. The `-abs` puts the [[Parameter vs Statistic|statistic]] in the left tail whatever its sign, so one formula works for both signs ([[Absolute Value]]).

![[Distribution functions in R.png|700]]
The same 1.96 and 0.975, read in opposite directions.

These functions replace printed z, t and F tables: any area or cut-off, for any degrees of freedom, is one line.

For example:

```r
pnorm(1.96)                # 0.975   area left of 1.96
qnorm(0.975)               # 1.96    95% critical z
qt(0.975, df = 11)         # 2.201   95% critical t for 12 swimmers
2 * pt(-abs(12.32), 11)    # 8.9e-08 two-sided p, paired wetsuit test
pf(3.231, 2, 592, lower.tail = FALSE)  # 0.040  FAMuSS ANOVA p
qchisq(0.95, df = 2)       # 5.99    5% chi-square cut-off
```
All values checked in R.

pnorm gives the area to the left, not the right, unless you set `lower.tail = FALSE`. And `qnorm(0.95)` isn't the two-sided 95% cut-off. It is 1.645, the one-sided cut-off; the two-sided 95% cut-off uses `qnorm(0.975)`.

See also: [[Functions and Arguments]], [[Confidence Interval]], [[One-Sample t-Test]].
