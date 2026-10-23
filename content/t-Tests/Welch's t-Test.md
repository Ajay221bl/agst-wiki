---
type: atomic
tags:
  - t-tests
aliases:
  - "Welch"
  - "Welch test"
  - "unequal variances t-test"
  - "Welch-Satterthwaite"
status: seedling
---

**In one line:** Welch's t-test compares two independent means without assuming the groups have equal variances; it is R's default two-sample test.

> [!info] Before this, it helps to know
> [[Standard Error]] · [[Pooled Variance]] (the alternative) · [[Degrees of Freedom]]

## Start from zero
1. **Signal:** the difference in sample means, $\bar{x}_1 - \bar{x}_2$ ([[Signal and Noise]]).
2. **Noise: how much that difference would vary by chance.** Each mean has its own SE, $s_i/\sqrt{n_i}$. Variances of independent quantities add, so $SE = \sqrt{s_1^2/n_1 + s_2^2/n_2}$ ([[Standard Error]]). *Why add variances, not SEs:* it is variances that add for independent quantities; SDs don't.
3. **Each group keeps its own [[Variance|variance]].** Nothing is pooled. *Why:* if the spreads really differ, pooling would give one group's noise the wrong weight ([[Pooled Variance]], [[Homogeneity of Variance]]).
4. **$t = (\bar{x}_1 - \bar{x}_2)/SE$, as for every t-test.**
5. **The df come from the Welch–Satterthwaite formula**, which blends the two [[Sample Size|sample sizes]] and variances. It is usually not a whole number. By hand, the safe shortcut is the smaller of $n_1 - 1$ and $n_2 - 1$. *Why the shortcut is safe:* fewer df means a bigger critical value, so you are less likely to reject by mistake ([[Degrees of Freedom]], [[Critical Value]]).
6. **Cost and benefit.** When variances really are equal, Welch loses almost nothing compared with the pooled test; when they differ, it protects the error rate. That's why it is the default ([[Robustness]]).

## See it

![[Worked example - two-sample t-test.png|700]]
*What to look at:* the two groups have quite different spreads ([[Standard Deviation|SD]] 2.76 and 5.17). Welch uses each one as it is.

## Why it exists
The pooled t-test needs equal variances, a strong [[Test Assumptions|assumption]] that needs a rationale. Welch removes the need, so it is the safer default.

## A tiny example
Stem-cell sheep: SE = √(5.17²/9 + 2.76²/9) = 1.95, t = 7.83/1.95 = 4.01. R's Welch df is 12.2, between the by-hand shortcut (8) and the pooled df (16) ([[Two-Sample Independent t-Test]]).

## Common confusions
- **"A decimal df is an error."** It's normal for Welch.
- **"Welch is for when the variances fail Levene's test."** It is the default either way.

## Connections
- **Builds on:** [[Standard Error]], [[Pooled Variance]], [[Degrees of Freedom]]
- **Leads to:** [[Two-Sample Independent t-Test]], [[t.test()]]
- **Part of:** [[MOC - t-Tests]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (§5.3)
