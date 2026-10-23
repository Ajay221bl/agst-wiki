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

Statistical significance says a result is probably not just chance; practical (clinical, scientific) significance says it is big enough to matter, and the two can disagree.

1. **A p-value answers "is there evidence of any effect?"** ([[P-Value]]).
2. **An effect size answers "how big is it?"** ([[Effect Size]]). These are different questions. "It will come up again and again and again."
3. **They come apart because p depends on $n$.** The [[Test Statistic|test statistic]] is signal ÷ (noise / $\sqrt{n}$), so with enough data any tiny effect gives a tiny p, and with too little data a big effect may not ([[Signal and Noise]], [[Statistical Power]]).
4. **Two ways they disagree:**
   1. **Significant but meaningless.** p < 0.0001, lots of asterisks... and the pH change in the animals' diet is 0.01 over four weeks. Usually from high power and a large $n$.
   2. **Meaningful but not significant.** A big effect from a small, underpowered study. The effect size still points to possible importance. "Never get discouraged."
5. **So always report both** ([[Why report an effect size with the p-value]], [[Why a p-value is not always meaningful]]).

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in [[Standard Deviation|SD]] units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

A p-value depends heavily on $n$. Without asking "how big?", huge studies would report every trivial difference as a discovery and small studies would bury real ones ([[Why a p-value is not always meaningful]]).

For example:

- COVID paired test, April − March distress (n = 979): **p ≈ 0.011**, but the difference was about 0.21 points on a 20-point scale and **Cohen's d was negligible** ([[Paired t-Test]]).
- YouGov (n = 2,000): a barely visible scatter trend still gave a significant [[Correlation|correlation]] ([[Plots for Two Variables]]).

Common mistakes:

- **"Significant means important."** It means "unlikely under $H_0$".
- **"Not significant means unimportant."** It may mean underpowered.

Further reading: [[References|Wasserstein and Lazar 2016]].
