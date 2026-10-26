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

A critical value is the line you draw in advance on the "nothing is going on" curve: if your test statistic lands beyond it, you reject. The same number also sets how wide a confidence interval is.

Imagine a high jump bar. The bar is set before anyone jumps. Then each jumper either clears it or doesn't. Nobody gets to move the bar after seeing how high they jumped.

A test needs a bar too. First you choose α, the share of false alarms you'll accept ([[Significance Level]], [[Type I and Type II Errors|false alarms]]). Then you go to the null distribution, the curve of results chance alone would give, and find the point with exactly α of the curve beyond it ([[Null Distribution]]). That point is the critical value. Everything beyond it is the **rejection region**. For a two-sided test you split α, with α/2 beyond the line in each [[Tails of a Distribution|tail]] ([[One-Tailed vs Two-Tailed Tests]]).

In other words, a critical value is just a quantile ([[Percentiles and Quantiles]]). On the normal curve, the point with half of 5% beyond it is the 0.975 quantile, $z^* = 1.96$. For a one-sided test at 5%, it's the 0.95 quantile, 1.645.

Then the rule is simple: if the [[Test Statistic|test statistic]] lands beyond the bar, reject $H_0$ ([[Hypothesis Testing|decision rule]]). That's the same as checking p ≤ α. Landing beyond the bar means the area past your result is at most α. Two ways of saying one thing.

![[One vs two tailed rejection regions.png|700]]
The red regions hold α. Splitting α over two tails pushes each cut-off further out (±1.96 instead of 1.645).

Here's a nice surprise: the same number builds confidence intervals. A 95% confidence interval is [[Point Estimate|estimate]] ± critical value × [[Standard Error|standard error]] ([[Confidence Interval]]). Why the same number? Because the interval is exactly the set of values a two-sided test at 0.05 would *not* reject. The bar and the net are made from the same measurement.

The bar's height depends on the curve. The t-distribution has fatter tails than the normal, so its bar is higher, and with fewer degrees of freedom, fatter still ([[t-Distribution]]).

For example:

| Curve | 90% | 95% | 99% |
|---|---|---|---|
| normal $z^*$ | 1.645 | 1.96 | 2.58 |
| $t^*$, df 14 (croaker) | 1.761 | 2.145 | |
| $t^*$, df 11 (wetsuits) | | 2.201 | |

For ANOVA, the 5% critical value of F with 2 and 592 degrees of freedom is about 3.01. In the FAMuSS data, F = 3.23 cleared it, which matches p = 0.040 ([[One-Way ANOVA]]).

Notice what the bar doesn't depend on: your data. Only on α, how many tails, and the degrees of freedom, all fixed before you look. That's the whole point. Software hides critical values now, but they're still the easiest way to see why higher confidence or smaller samples make intervals wider ([[Why a bigger sample gives a narrower confidence interval]]).

Try it yourself. Is 1.96 always the cut-off? No. It's only for a two-sided 5% test on the normal curve. Change α, switch to one tail, or use the t-distribution, and the bar moves.

See also: [[Parameter vs Statistic|statistic]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]].
