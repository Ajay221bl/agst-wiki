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

**In one line:** a critical value is the cut-off on a null distribution that leaves exactly α (or α/2 per [[Tails of a Distribution|tail]]) beyond it; it sets both the reject line of a test and the width of a confidence interval.

> [!info] Before this, it helps to know
> [[Percentiles and Quantiles]] (a critical value is a quantile) · [[Null Distribution]] · [[Significance Level]]

## Start from zero
1. **Before collecting data, choose α**, the share of [[Type I and Type II Errors|false alarms]] you'll tolerate ([[Significance Level]]).
2. **Find the point on the null distribution with α beyond it.** For a two-sided test split it: α/2 in each tail ([[One-Tailed vs Two-Tailed Tests]]). That point is the critical value; the region beyond it is the **rejection region**. *Why split for two-sided:* surprise in either direction counts, and the total false-alarm rate must still be α.
3. **It is a quantile.** For α = 0.05 two-sided with the normal curve, it's the 0.975 quantile, $z^* = 1.96$. One-sided it's the 0.95 quantile, 1.645 ([[Percentiles and Quantiles]]).
4. **[[Hypothesis Testing|Decision rule]]:** reject $H_0$ if the [[Test Statistic|test statistic]] lands beyond the critical value. *Why this is the same as $p \le \alpha$:* landing beyond the cut-off means the tail area beyond your [[Parameter vs Statistic|statistic]] is at most α.
5. **The same number builds intervals.** A 95% CI is [[Point Estimate|estimate]] ± critical value × [[Standard Error|SE]] ([[Confidence Interval]]). *Why the same number:* the interval holds every $\mu_0$ that a two-sided test at α = 0.05 would *not* reject.
6. **Critical values depend on the curve.** The t-distribution has fatter tails than the normal, so $t^*$ is bigger, and smaller df makes it bigger still ([[t-Distribution]]).

## See it

![[One vs two tailed rejection regions.png|700]]
*What to look at:* the red regions hold α. Splitting α over two tails pushes each cut-off further out (±1.96 instead of 1.645).

## Why it exists
Before software, tables of critical values were how tests were done. They are still the easiest way to see why higher confidence or smaller samples make intervals wider ([[Why a bigger sample gives a narrower confidence interval]]).

## A tiny example
| Curve | 90% | 95% | 99% |
|---|---|---|---|
| normal $z^*$ | 1.645 | 1.96 | 2.58 |
| $t^*$, df 14 (croaker) | 1.761 | 2.145 | |
| $t^*$, df 11 (wetsuits) | | 2.201 | |

For ANOVA, the 5% critical value of F with df 2 and 592 is about 3.01; FAMuSS's F = 3.23 is beyond it, matching p = 0.040 ([[One-Way ANOVA]]).

## Common confusions
- **"The critical value depends on the data."** It depends only on α, the tails and the df, all fixed before looking.
- **"1.96 is always the cut-off."** Only for a two-sided 5% test on the normal curve.

## Connections
- **Builds on:** [[Percentiles and Quantiles]], [[Null Distribution]], [[Significance Level]]
- **Leads to:** [[Confidence Interval]], [[One-Tailed vs Two-Tailed Tests]], [[t-Distribution]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]]
