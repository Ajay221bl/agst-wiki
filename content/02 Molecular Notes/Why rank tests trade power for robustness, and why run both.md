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

> [!summary] In plain words
> Rank tests replace each value by its rank, so an [[Outliers|outlier]] or a long [[Tails of a Distribution|tail]] can pull no harder than one place in the order. That makes them robust when normality fails, at the cost of some power when the data really are normal. Running both and getting the same answer makes a result stronger; when they disagree you have to argue from plots, [[Effect Size|effect sizes]] and intervals.

## The question
Why use a nonparametric test, what does it cost, and why report it alongside the t-test or ANOVA?

## Built from
- [[Ranks]]: replacing values by their order.
- [[Nonparametric Alternatives]]: the common rank-based tests.
- [[Robustness]]: how much a test cares about broken [[Test Assumptions|assumptions]].
- [[Normality Checks]]: when the parametric test is in doubt.
- [[Statistical Power]]: what is given up.

## See it

![[Ranks tame outliers.png|700]]
*What to look at:* The value 100 dominates a mean or an [[Standard Deviation|SD]], but as a rank it is just 5, one place above 4.

## The reasoning, step by step
1. t-tests and ANOVA use the actual values, and their p-values assume (near) normal data or [[Residuals|residuals]] ([[Normality Checks]]).
2. Ranks keep only the order: the largest value is rank n whether it is 10% or 1,000% bigger ([[Ranks]]). *Why:* an outlier cannot dominate.
3. So rank tests need much weaker assumptions; they are robust ([[Robustness]], [[Nonparametric Alternatives]]).
4. Throwing away the distances throws away information. When the data really are normal, the rank test is slightly less likely to detect a real effect ([[Statistical Power]]).
5. In the grey zone (a normality test rejects but the plots look close), run both. Same conclusion: report the parametric result and say the rank test confirmed it. Different conclusions: say so, and argue from plots, effect sizes and intervals.

## What would go wrong otherwise
Ignoring a clear violation can give p-values that are too small or too large; using only rank tests on normal data wastes some power.

## Connections
- **Related:** [[Why check assumptions before trusting a test]], [[Why big samples make almost everything significant]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - t-Tests]]
