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

An effect size measures how big an effect is, whatever the [[Sample Size|sample size]]. It complements the p-value.

Imagine a weather forecast that only tells you whether it will rain, never how much. That's a p-value on its own. The p-value answers "is the effect likely real?", and it depends heavily on $n$ ([[P-Value]]), because the [[Test Statistic|test statistic]] grows with $\sqrt{n}$ ([[Signal and Noise]]). We also need to know how big the effect is, using a number that doesn't grow just because we collected more data. That number is the **effect size**, and it is closer to practical importance ([[Statistical vs Practical Significance]]). The two answer different questions, so report both ([[Why report an effect size with the p-value]]).

Common effect sizes, each scaled so it can be compared across studies:
- **Cohen's d** for t-tests: the difference in [[Standard Deviation|standard deviation]] units ([[Cohen's d]]).
- **η² (eta squared)** for ANOVA: the share of the total [[Variance|variance]] explained by the factor, $SS_{between}/SS_{total}$ ([[ANOVA Table]], [[Sums of Squares and Mean Squares]]).
- **[[Correlation|Pearson's r]]**, the correlation coefficient.
- **[[Odds and Odds Ratio|Odds ratios]]** for [[Types of Data|categorical]] outcomes.

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

A large $n$ makes trivial effects significant, and a small $n$ can miss big ones ([[Statistical Power]]). The effect size reads the same either way.

For example, in a COVID survey, a one-sample test found a difference of only 0.14 from the reference value, which is very small even if it had been significant. A paired test in the same survey gave p ≈ 0.011, but d was negligible.

A small p-value doesn't mean a large effect; check the effect size. Whether something is real and whether it's big are separate facts, and you need both to make a decision.

Further reading: [[References|Wasserstein and Lazar 2016]], [[References|Vu and Harrington 2020, Ch. 5]] (§5.4).
