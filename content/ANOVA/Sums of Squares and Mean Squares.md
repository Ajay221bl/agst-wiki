---
type: atomic
tags:
  - anova
aliases:
  - "sum of squares"
  - "SS"
  - "SST"
  - "SSG"
  - "SSE"
  - "mean square"
  - "MSG"
  - "MSE"
status: seedling
---

**In one line:** a sum of squares adds up squared deviations; ANOVA splits the total sum of squares into a between-group part and a within-group part, and dividing each by its df gives a mean square, a variance [[Point Estimate|estimate]].

> [!info] Before this, it helps to know
> [[Deviations from the Mean]] · [[Variance]] · [[Residuals]] · [[Degrees of Freedom]]

## Start from zero
1. **Total [[Variability|variation]].** Measure every value from the [[Grand Mean|grand mean]], square and add: $SST = \sum\sum (x_{ij} - \bar{x})^2$. *Why squared deviations:* plain deviations cancel to 0 ([[Deviations from the Mean]]).
2. **Each deviation splits in two:** $x_{ij} - \bar{x} = (\bar{x}_i - \bar{x}) + (x_{ij} - \bar{x}_i)$, the group's distance from the grand mean plus the value's distance from its group [[Mean|mean]] (its residual, [[Residuals]]).
3. **Square and add, and the cross terms vanish**, because residuals add to 0 within each group. So $SST = SSG + SSE$:
   - $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$, between groups, the signal
   - $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$, within groups, the noise
4. **Sums grow with the number of pieces, so divide by df to get averages:** $MSG = SSG/(k-1)$, $MSE = SSE/(N-k)$. These are mean squares, and each estimates a variance. *Why df and not the count:* the same reason the variance divides by $n - 1$; each estimated mean uses up one piece of information ([[Degrees of Freedom]], [[Why we divide by n minus 1]]).
5. **Compare them.** If $H_0$ is true, both MSG and MSE estimate the same noise variance, so $F = MSG/MSE$ should be near 1. Group means that differ inflate MSG, and F grows ([[F-Distribution]], [[Signal and Noise]]).

## See it

![[Sums of squares - sheep.png|700]]
*What to look at:* the total bar equals the two pieces laid end to end: 276.1 + 275.1 = 551.2.

## Why it exists
This split is what "[[One-Way ANOVA|analysis of variance]]" means: partitioning variation into explained and unexplained parts ([[Why analysis of variance can compare means]]).

## A tiny example
Stem-cell sheep (2 groups, N = 18): SSG = 276.1, SSE = 275.1, SST = 551.2. MSG = 276.1/1 = 276.1; MSE = 275.1/16 = 17.2; F = 16.06. With two groups, F is the pooled t squared: 4.007² = 16.06 ([[Two-Sample Independent t-Test]]).

## Common confusions
- **"SS and MS are the same thing."** MS is SS divided by its df.
- **"MSE means a mistake."** It is the average within-group (residual) variance.

## Connections
- **Builds on:** [[Deviations from the Mean]], [[Variance]], [[Residuals]], [[Degrees of Freedom]]
- **Leads to:** [[ANOVA Table]], [[F-Distribution]], [[Between- and Within-Group Variability]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (pp. 266–267)
