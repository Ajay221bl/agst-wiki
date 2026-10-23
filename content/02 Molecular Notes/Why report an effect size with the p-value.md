---
type: molecular
tags:
  - molecular
  - inference
  - t-tests
aliases:
  - "benefit of effect size"
status: seedling
---

What is the benefit of reporting an effect size along with a p-value?

The p-value says whether an effect is likely real; the effect size says how big it is. The p-value shrinks as the [[Sample Size|sample size]] grows, and the effect size doesn't, so only the two together let a reader judge practical importance. They complement each other.

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in [[Standard Deviation|SD]] units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

1. A t statistic is a difference divided by $s/\sqrt{n}$. As $n$ grows, the same difference gives a bigger t and a smaller p ([[Test Statistic]]).
2. Cohen's d divides by $s$ alone, with no $\sqrt{n}$, so it measures size whatever the sample size ([[Cohen's d]]).
3. In a COVID survey, a paired test gave p ≈ 0.011 but a negligible d: a real but trivial change ([[Paired t-Test]]).
4. The other way round, a small study with a large d but p > 0.05 may simply lack power, rather than show no effect ([[Statistical Power]]).
5. Common effect sizes are d for t-tests, η² for ANOVA and r for [[Correlation|correlations]]. With 50,000 observations of yield and temperature, a correlation of r = 0.14 can be significant but still weak.

Without effect sizes, readers would mistake significance in a large sample for importance, and non-significance in a small sample for no effect.

See also: [[P-Value]], [[Effect Size]], [[Standard Error|standard error]], [[Ratios and Fractions|denominator]], [[Statistical vs Practical Significance]], [[Signal and Noise]], [[Why a p-value is not always meaningful]], [[Why go with the confidence interval when the hypothesis is weak]].
