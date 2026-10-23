---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "nonparametric backup"
  - "parametric vs nonparametric"
status: seedling
---

Why use a nonparametric test, what does it cost, and why report it alongside the t-test or ANOVA?

Rank tests replace each value by its rank, so an [[Outliers|outlier]] or a long [[Tails of a Distribution|tail]] can pull no harder than one place in the order. That makes them robust when normality fails, at the cost of some power when the data really are normal. Running both and getting the same answer makes a result stronger. When they disagree, you have to argue from plots, [[Effect Size|effect sizes]] and intervals.

![[Ranks tame outliers.png|700]]
The value 100 dominates a mean or an [[Standard Deviation|SD]], but as a rank it is just 5, one place above 4.

1. t-tests and ANOVA use the actual values, and their p-values assume that the data, or the [[Residuals|residuals]], are close to normal ([[Normality Checks]]).
2. Ranks keep only the order: the largest value is rank n whether it is 10% or 1,000% bigger ([[Ranks]]). So an outlier can't dominate.
3. That means rank tests need much weaker assumptions; they are robust ([[Robustness]], [[Nonparametric Alternatives]]).
4. But throwing away the distances throws away information. When the data really are normal, the rank test is slightly less likely to detect a real effect ([[Statistical Power]]).
5. In the grey zone, where a normality test rejects but the plots look close to normal, run both. If they reach the same conclusion, report the standard result and say the rank test confirmed it. If they differ, say so, and argue from plots, effect sizes and intervals.

Ignoring a clear violation can give p-values that are too small or too large, while using only rank tests on normal data wastes some power.

See also: [[Test Assumptions|assumptions]], [[Why check assumptions before trusting a test]], [[Why big samples make almost everything significant]].
