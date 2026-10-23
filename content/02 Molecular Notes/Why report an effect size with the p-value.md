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

> [!summary] In plain words
> The p-value says whether an effect is likely real; the effect size says how big it is. Because the p-value shrinks with [[Sample Size|sample size]] and the effect size doesn't, only the pair lets a reader judge practical importance. They are complementary.

## The question
"What is the benefit of reporting an effect size along with a p-value?"

## Built from
- [[P-Value]]: statistical significance.
- [[Effect Size]] and [[Cohen's d]]: magnitude.
- [[Test Statistic]]: why p depends on $n$ (the [[Standard Error|SE]] in the [[Ratios and Fractions|denominator]]).
- [[Statistical vs Practical Significance]]: the gap they bridge.
- [[Signal and Noise]]: why p depends on n but d doesn't.

## See it

![[Cohens d overlap.png|700]]
*What to look at:* d measures how far apart two group means are in [[Standard Deviation|SD]] units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

## The reasoning, step by step
1. A t statistic is a difference divided by $s/\sqrt{n}$; as $n$ grows, the same difference gives a bigger t and a smaller p ([[Test Statistic]]).
2. Cohen's d divides by $s$ alone, with no $\sqrt{n}$, so it measures size regardless of sample size ([[Cohen's d]]).
3. COVID paired test: p ≈ 0.011 but d negligible, a real but trivial change ([[Paired t-Test]]).
4. Conversely, a small study with a large d but p > 0.05 may be underpowered, not null ([[Statistical Power]]).
5. Effect sizes: d for t-tests, η² for ANOVA, r for [[Correlation|correlations]]; with 50,000 yield and temperature observations, r = 0.14 can be significant but weak ("I wouldn't bet money on it").

## What would go wrong otherwise
Readers would mistake large-sample significance for importance, and small-sample non-significance for no effect.

## Connections
- **Related:** [[Why a p-value is not always meaningful]], [[Why go with the confidence interval when the hypothesis is weak]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - t-Tests]]
