---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "why square deviations"
  - "squares vs absolute values"
status: seedling
---

Why does the variance square the deviations instead of just adding them, or taking absolute values?

Deviations from the mean always add to zero, because the mean is the balance point. To measure spread, the signs have to go. Squaring does that, makes big deviations count more, and gives a quantity that adds up across sources, which is exactly what the [[ANOVA Table|sums of squares]] in ANOVA rely on. The square root then brings the units back as the standard deviation.

![[Deviations from the mean.png|700]]
Positive and negative deviations cancel exactly. Spread has to ignore the sign.

1. The mean is the balance point, so the deviations $x_i-\bar{x}$ always sum to exactly 0 ([[Deviations from the Mean]]). *Why it matters:* their plain average says nothing about spread.
2. Two ways to drop the sign: absolute values or squares ([[Absolute Value]], [[Squares and Square Roots]]). Absolute values give the mean absolute deviation, which exists but is little used.
3. Squares count a deviation of 4 sixteen times as much as a deviation of 1. Large departures dominate, for better (they matter) or worse ([[Outliers|outliers]] inflate it).
4. Squared deviations add up cleanly: the total sum of squares splits exactly into a between-group part and a within-group part. That split is the whole of ANOVA ([[Sums of Squares and Mean Squares]]).
5. Squaring changes units (cm become cm²), so we report the square root: the [[Standard Deviation]], in the data's own units.

Averaging signed deviations would give zero spread for every data set, and without additive squares there would be no between-within split for ANOVA.

See also: [[Variance]], [[Why we divide by n minus 1]], [[Why report both center and spread]], [[Why analysis of variance can compare means]].
