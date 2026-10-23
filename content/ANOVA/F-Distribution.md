---
type: atomic
tags:
  - anova
aliases:
  - "F statistic"
  - "F ratio"
  - "Fisher"
status: seedling
---

**In one line:** the F-distribution is the right-skewed, never-negative distribution of a [[Ratios and Fractions|ratio]] of two variances, with two degrees of freedom; ANOVA's p-value is the area in its upper [[Tails of a Distribution|tail]].

> [!info] Before this, it helps to know
> [[Between- and Within-Group Variability]] (the two variances in the ratio) · [[Degrees of Freedom]] (it has two) · [[Null Distribution]] (F's null distribution) · [[Probability Distribution]] (it is a density curve)

## Start from zero
1. **ANOVA's [[Test Statistic|test statistic]] is a ratio of two variances:** $F = MSG/MSE$ ([[Between- and Within-Group Variability]]). The F statistic is the course's first test statistic that is a **ratio of two variances**.
2. **To get a p-value we need its distribution when $H_0$ is true** ([[Null Distribution]]). That distribution is the **F-distribution**, named after **Sir R. A. Fisher** (the pipe-smoking man on the day-one slides: "don't smoke").
3. **Its shape follows from what it is:**
   - **Not [[Shape of a Distribution|symmetric]]:** usually right-skewed; can't be negative. *Why:* variances are ≥ 0, so the ratio is too.
   - **Centred near 1 under $H_0$.** *Why:* both mean squares [[Point Estimate|estimate]] the same $\sigma^2$.
   - **Two df:** numerator $df_1 = k - 1$, denominator $df_2 = N - k$. They change its shape. *Why two:* each [[Variance|variance]] estimate has its own df ([[Degrees of Freedom]]).
4. **The p-value is the upper-tail area beyond the observed F.** *Why only the upper tail:* differences between means can only make MSG bigger, never smaller ([[P-Value]]). For FAMuSS, F(2, 592) = 3.231 is beyond the critical value 3.01, so p = 0.040 < 0.05 ([[Critical Value]]).

## See it

![[F-distribution.png|700]]
*What to look at:* F can't be negative and has a long right tail; its exact shape depends on its two df. The book's example (F = 3.23 on 2 and 592 df) gives p ≈ 0.04, the small red tail.

## Why it exists
If $H_0$ is true and the [[Test Assumptions|assumptions]] hold, $MSG$ and $MSE$ estimate the same variance, and their ratio follows an F-distribution. That is what turns an F value into a p-value.

## A tiny example
- **F ≈ 1:** between-group variability looks like [[Signal and Noise|noise]]. Consistent with $H_0$.
- **F ≫ 1:** the group means are farther apart than noise explains. Evidence against $H_0$.
Book FAMuSS: F = 3.23 on 2 and 592 df → p ≈ 0.04 ([[References|Vu and Harrington 2020, Ch. 5]], p. 268).

## Common confusions
- **"F can be negative if group 1 is smaller."** It is a ratio of non-negative quantities.
- **"An ANOVA p-value uses both tails."** Only the upper tail.

## Connections
- **Builds on:** [[Between- and Within-Group Variability]], [[Degrees of Freedom]], [[Null Distribution]], [[Probability Distribution]]
- **Leads to:** [[ANOVA Table]], [[One-Way ANOVA]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (p. 268)
