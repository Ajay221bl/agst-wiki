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

They answer two different questions. The p-value says whether an effect is likely real. The effect size says how big it is. The p-value shrinks as the [[Sample Size|sample size]] grows, while the effect size doesn't, so only the two together let a reader judge whether a result matters.

![[Cohens d overlap.png|700]]
d measures how far apart two group means are, in standard deviation (SD) units. Even a large effect, d = 0.8, leaves the two groups overlapping heavily.

Look inside the formulas and you can see why one number can't do both jobs.

A t statistic is a difference divided by $s/\sqrt{n}$. That $\sqrt{n}$ is the giveaway. As $n$ grows, the same difference gives a bigger t and a smaller p ([[Test Statistic]]). So the p-value partly measures the effect, and partly measures how much data you collected.

Cohen's d divides by $s$ alone, with no $\sqrt{n}$. So it measures size, whatever the sample size ([[Cohen's d]]). Collect ten times the data and d stays put.

Now see what goes wrong with only one of them. In a COVID survey, a paired test gave p ≈ 0.011 but a negligible d: a change that was real and trivial ([[Paired t-Test]]). The other way round, a small study with a large d but p > 0.05 may simply lack power. It hasn't shown there's no effect. It's shown it was too small to tell ([[Statistical Power]]).

Different designs have their own effect sizes: d for t-tests, η² for ANOVA and r for [[Correlation|correlations]]. With 50,000 observations of yield and temperature, a correlation of r = 0.14 can be significant but still weak.

So report both. Without effect sizes, readers mistake significance in a large sample for importance, and non-significance in a small sample for no effect. "Is it real?" and "does it matter?" are separate questions, and a good report answers both.

See also: [[P-Value]], [[Effect Size]], [[Standard Error|standard error]], [[Ratios and Fractions|denominator]], [[Statistical vs Practical Significance]], [[Signal and Noise]], [[Why a p-value is not always meaningful]], [[Why go with the confidence interval when the hypothesis is weak]].
