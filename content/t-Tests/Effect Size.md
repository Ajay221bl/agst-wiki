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

**In one line:** an effect size measures how big an effect is (its magnitude or strength), independent of [[Sample Size|sample size]], so it complements the p-value.

> [!info] Before this, it helps to know
> [[P-Value]] (what it can't tell you) · [[Statistical vs Practical Significance]] (why both are needed) · [[Signal and Noise]] (effect size is the signal without the n)

## Start from zero
1. **The p-value answers "is it likely real?", and depends heavily on $n$** ([[P-Value]]). *Why:* the [[Test Statistic|test statistic]] grows with $\sqrt{n}$ ([[Signal and Noise]]).
2. **We also need "how big is it?",** a number that doesn't grow just because we collected more data. That is the **effect size**, which is closer to practical importance ([[Statistical vs Practical Significance]]).
3. **Report both.** "They're complementary, not meant to hate on each other." ([[Why report an effect size with the p-value]])
4. **Common effect sizes**, each scaled to be comparable across studies:
   - **Cohen's d** for t-tests: the difference in [[Standard Deviation|SD]] units ([[Cohen's d]]).
   - **η² (eta squared)** for ANOVA: the share of total [[Variance|variance]] explained by the factor, $SS_{between}/SS_{total}$ ([[ANOVA Table]], [[Sums of Squares and Mean Squares]]).
   - **[[Correlation|Pearson's r]]**, the correlation coefficient.
   - **[[Odds and Odds Ratio|Odds ratios]]** for [[Types of Data|categorical]] outcomes.

## See it

![[Cohens d overlap.png|700]]
*What to look at:* d measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

## Why it exists
A large $n$ makes trivial effects significant; a small $n$ can miss big ones ([[Statistical Power]]). The effect size reads the same either way ([[Why report an effect size with the p-value]]).

## A tiny example
COVID one-sample: a difference of 0.14 from the reference value, "crazy small" even if it had been significant. COVID paired: p ≈ 0.011 but d negligible.

## Common confusions
- **"A small p-value means a large effect."** No; check the effect size.

## Connections
- **Builds on:** [[P-Value]], [[Statistical vs Practical Significance]], [[Signal and Noise]]
- **Leads to:** [[Cohen's d]], [[Statistical Power]], [[Why report an effect size with the p-value]]
- **Part of:** [[MOC - t-Tests]], [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Wasserstein and Lazar 2016]], [[References|Vu and Harrington 2020, Ch. 5]] (§5.4)
