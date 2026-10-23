---
type: atomic
tags:
  - describing-data
aliases:
  - "deviation"
  - "deviations"
  - "x minus x-bar"
status: seedling
---

**In one line:** a deviation is how far one value sits from the mean, $x_i - \bar{x}$; deviations are the raw material for variance, SD, z-scores, [[ANOVA Table|sums of squares]] and residuals.

> [!info] Before this, it helps to know
> [[Mean]] (the reference point) · [[Absolute Value]] (distance vs direction) · [[Summation Notation]]

## Start from zero
1. **To describe spread, compare each value with a centre.** The natural centre is the mean ([[Mean]]). *Why the mean:* it is the balancing point of the data, so it is the fairest single reference.
2. **The deviation of value $i$ is $x_i - \bar{x}$.** Positive means above the mean, negative below. Its size is the distance ([[Absolute Value]]).
3. **Try to average the deviations, and you always get 0.** The mean is defined as the balance point, so the positive and negative deviations cancel exactly: $\sum (x_i - \bar{x}) = 0$. *Why this matters:* the plain average deviation can't measure spread; it is 0 for every data set.
4. **So remove the signs first.** Squaring them is the route statistics takes: $\sum (x_i - \bar{x})^2$ is the **sum of squares**. Divide by $n - 1$ and you have the variance; take the [[Squares and Square Roots|square root]] and you have the SD ([[Variance]], [[Standard Deviation]], [[Why we divide by n minus 1]]).
5. **The same idea reappears everywhere.** Divide one deviation by the SD and you get a z-score ([[Z-Score]]). Measure each value from its *group* mean and you get a residual ([[Residuals]]). Measure group means from the [[Grand Mean|grand mean]] and you get ANOVA's between-group sum of squares ([[Sums of Squares and Mean Squares]]).

## See it

![[Deviations from the mean.png|700]]
*What to look at:* each line is one value's deviation. The ones above and below the mean cancel; their squares don't.

## Why it exists
Spread is "how far values are from the centre", and the deviation is that distance for one value. Every measure of spread and every [[Test Statistic|test statistic]] in the course is built from deviations.

## A tiny example
Data 1, 2, 3, 6, 3 (mean 3). Deviations −2, −1, 0, 3, 0: they sum to 0. Squared: 4, 1, 0, 9, 0, which sum to 14, so $s^2 = 14/4 = 3.5$ ([[Variance]]).

## Common confusions
- **"The average deviation measures spread."** It is always 0. Square first (or use absolute values).
- **"A deviation is an error."** It is just a distance from the mean; nothing went wrong.

## Connections
- **Builds on:** [[Mean]], [[Absolute Value]], [[Summation Notation]]
- **Leads to:** [[Variance]], [[Standard Deviation]], [[Z-Score]], [[Residuals]], [[Sums of Squares and Mean Squares]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4)
