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

Rank tests replace each value with its place in the order, so an [[Outliers|outlier]] or a long [[Tails of a Distribution|tail]] can pull no harder than one step in the ranking. That makes them robust when normality fails. The cost is a little power when the data really are normal. Run both, and if they agree, the result is stronger, because it no longer depends on the assumption. When they disagree, you have to argue from plots, [[Effect Size|effect sizes]] and intervals.

![[Ranks tame outliers.png|700]]
The value 100 dominates a mean or a standard deviation (SD), but as a rank it's just 5, one place above 4.

Every method makes a trade between using information and being fooled by it. Rank tests make that trade on purpose.

t-tests and ANOVA use the actual values, every distance between them. That's a lot of information. But their p-values assume that the data, or the [[Residuals|residuals]], are close to normal ([[Normality Checks]]). And a single extreme value, one typo or one freak measurement, can drag the mean and the spread a long way.

Ranks keep only the order. The largest value is rank n whether it's 10% or 1,000% bigger than the next one ([[Ranks]]). So an outlier can't dominate. It just comes last. That means rank tests need much weaker assumptions. They're robust ([[Robustness]], [[Nonparametric Alternatives]]).

But nothing is free. Throwing away the distances throws away information. When the data really are normal, the rank test is slightly less likely to detect a real effect ([[Statistical Power]]). You've bought insurance, and insurance has a premium.

So in the grey zone, where a normality test rejects but the plots look close to normal, don't agonize over which one to pick. Run both. If they reach the same conclusion, report the standard result and say the rank test confirmed it. If they differ, say so honestly, and argue from plots, effect sizes and intervals.

That's a good general habit. When you're unsure whether an assumption holds, check whether your conclusion survives without it. Ignoring a clear violation can give p-values that are too small or too large. Using only rank tests on normal data wastes some power. Running both tells you which world you're in.

Try it yourself. Replace the values 2, 3, 4 and 1000 by their ranks. What do you get, and what happened to the huge value? The ranks are 1, 2, 3 and 4. The 1000 counts only as "the largest", one step above the next, so it can't drag the result around the way it would drag a mean.

See also: [[Test Assumptions|assumptions]], [[Why check assumptions before trusting a test]], [[Why big samples make almost everything significant]].
