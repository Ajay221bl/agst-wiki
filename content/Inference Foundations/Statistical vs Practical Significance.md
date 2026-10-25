---
type: atomic
tags:
  - inference
aliases:
  - "practical significance"
  - "clinical significance"
  - "scientific significance"
  - "statistical significance"
  - "statistically significant"
  - "practical importance"
status: seedling
---

Statistical significance says a result is probably not just chance. Practical significance (also called clinical or scientific significance) says it is big enough to matter. The two can disagree.

There are two questions you can ask of any result, and most confusion in research comes from treating them as one. A p-value answers "is there evidence of any effect?" ([[P-Value]]). An effect size answers "how big is it?" ([[Effect Size]]). These are different questions. They come apart because p depends on $n$. The [[Test Statistic|test statistic]] is signal ÷ (noise / $\sqrt{n}$), so with enough data any tiny effect gives a tiny p, and with too little data a big effect may not ([[Signal and Noise]], [[Statistical Power]]).

They can disagree in two ways:
1. **Significant but meaningless.** p < 0.0001 and lots of asterisks, but the pH of the animals' diet changed by 0.01 over four weeks. This usually comes from high power and a large $n$.
2. **Meaningful but not significant.** A big effect from a small study without enough power. The effect size still points to possible importance, so the result is worth following up.

So always report both ([[Why report an effect size with the p-value]], [[Why a p-value is not always meaningful]]).

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in [[Standard Deviation|SD]] units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

Because a p-value depends so heavily on $n$, a study that never asked "how big?" would go wrong both ways: huge studies would report every trivial difference as a discovery, and small studies would bury real ones.

For example:
- In a COVID survey, a paired test of April minus March distress (n = 979) gave p ≈ 0.011. But the difference was about 0.21 points on a 20-point scale, and Cohen's d, a standard effect size, was negligible ([[Paired t-Test]]).
- In a YouGov survey (n = 2,000), a barely visible trend in a scatter plot still gave a significant [[Correlation|correlation]] ([[Plots for Two Variables]]).

So the word "significant" is a trap. In statistics, it doesn't mean important; it means "unlikely if $H_0$ were true". And not significant doesn't mean unimportant; the study may have lacked power. "Is it real?" is for the statistics. "Does it matter?" needs someone who knows the field.

Further reading: [[References|Wasserstein and Lazar 2016]].
