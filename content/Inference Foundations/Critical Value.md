---
type: atomic
tags:
  - inference
aliases:
  - "critical values"
  - "z star"
  - "t star"
  - "cut-off"
  - "rejection region"
  - "cutoff"
status: seedling
---

A critical value is the cut-off on a null distribution that leaves exactly α beyond it, or α/2 in each [[Tails of a Distribution|tail]] for a two-sided test. It sets both the line for rejecting in a test and the width of a confidence interval.

Before collecting data, you choose α, the share of [[Type I and Type II Errors|false alarms]] you'll accept ([[Significance Level]]). Then you find the point on the null distribution with α beyond it. That point is the critical value, and the region beyond it is the **rejection region**. For a two-sided test, α is split, with α/2 in each tail ([[One-Tailed vs Two-Tailed Tests]]). Surprise in either direction counts, and the total false-alarm rate must still be α.

A critical value is a quantile ([[Percentiles and Quantiles]]). For a two-sided test at α = 0.05 on the normal curve, it is the 0.975 quantile, $z^* = 1.96$. For a one-sided test it is the 0.95 quantile, 1.645.

The [[Hypothesis Testing|decision rule]] is: reject $H_0$ if the [[Test Statistic|test statistic]] lands beyond the critical value. This is the same as $p \le \alpha$, because landing beyond the cut-off means the tail area beyond your [[Parameter vs Statistic|statistic]] is at most α.

The same number builds intervals. A 95% confidence interval is [[Point Estimate|estimate]] ± critical value × [[Standard Error|standard error]] ([[Confidence Interval]]). It is the same number because the interval holds every $\mu_0$ that a two-sided test at α = 0.05 would *not* reject.

Critical values depend on the curve. The t-distribution has fatter tails than the normal, so $t^*$ is bigger, and fewer degrees of freedom (df) make it bigger still ([[t-Distribution]]).

![[One vs two tailed rejection regions.png|700]]
The red regions hold α. Splitting α over two tails pushes each cut-off further out (±1.96 instead of 1.645).

Before software, tables of critical values were how tests were done. They are still the easiest way to see why higher confidence or smaller samples make intervals wider ([[Why a bigger sample gives a narrower confidence interval]]).

For example:

| Curve | 90% | 95% | 99% |
|---|---|---|---|
| normal $z^*$ | 1.645 | 1.96 | 2.58 |
| $t^*$, df 14 (croaker) | 1.761 | 2.145 | |
| $t^*$, df 11 (wetsuits) | | 2.201 | |

For ANOVA, the 5% critical value of F with df 2 and 592 is about 3.01. In the FAMuSS data, F = 3.23 is beyond it, which matches p = 0.040 ([[One-Way ANOVA]]).

The critical value doesn't depend on the data. It depends only on α, the tails and the df, all fixed before looking. And 1.96 isn't always the cut-off; it is only for a two-sided 5% test on the normal curve.

See also: [[Null Distribution]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]].
