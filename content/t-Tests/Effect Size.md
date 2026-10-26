---
type: atomic
tags:
  - t-tests
  - inference
aliases:
  - "effect sizes"
  - "magnitude of effect"
  - "eta squared"
status: seedling
---

An effect size tells you how big an effect is, in a way that doesn't depend on how much data you collected. The p-value says whether there's an effect; the effect size says how much.

Imagine a weather forecast that only tells you *whether* it will rain, never how much. "Yes, rain tomorrow." A drizzle? A flood? You'd want to know, wouldn't you? A p-value on its own is that forecast.

Here's why the p-value can't tell you the size. A test statistic grows with $\sqrt{n}$ ([[Test Statistic]], [[Signal and Noise]]). Collect enough data and even a microscopic effect gives a tiny p ([[P-Value]]). So we need a second number that measures size and *doesn't* grow just because the sample did. That's the effect size, and it's much closer to "does this matter?" ([[Statistical vs Practical Significance]]). The two answer different questions, so you report both ([[Why report an effect size with the p-value]]).

The trick in every effect size is to put the effect on a scale without units, so you can compare across studies:
- **Cohen's d** for t-tests: the difference in means, measured in [[Standard Deviation|standard deviations]] ([[Cohen's d]]).
- **η² (eta squared)** for ANOVA: the share of all the variation that the groups explain, $SS_{between}/SS_{total}$ ([[ANOVA Table]], [[Sums of Squares and Mean Squares]], [[Variance]]).
- **[[Correlation|Pearson's r]]**, the correlation coefficient.
- **[[Odds and Odds Ratio|Odds ratios]]** for [[Types of Data|categorical]] outcomes.

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

Look at that picture. Even a "large" effect leaves the two groups overlapping a lot. Many individuals in the lower group still beat many in the higher one.

For example, in a COVID survey, a one-sample test found a difference of only 0.14 from the reference value, which is very small even if it had been significant. A paired test in the same survey gave p ≈ 0.011, but d was negligible. Real, yes. Big, no.

Try it yourself. Study A, with a few dozen animals, finds a big effect but p just misses the cutoff. Study B, with thousands, finds a tiny effect with a tiny p. Which effect is bigger? Study A's. The p-values mostly reflect the [[Sample Size|sample sizes]] ([[Statistical Power]]). Whether something is real and whether it's big are separate facts, and you need both to decide anything.

Further reading: [[References|Wasserstein and Lazar 2016]], [[References|Vu and Harrington 2020, Ch. 5]] (§5.4).
