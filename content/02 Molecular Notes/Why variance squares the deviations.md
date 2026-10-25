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

Why does the variance square the deviations, instead of just adding them or taking absolute values?

Because the obvious approach gives zero every time. Deviations from the mean always add up to zero, since the mean is the balance point. So to measure spread, the signs have to go. Squaring does that. It also makes big deviations count more, and it gives a quantity that adds up across sources, which is exactly what the [[ANOVA Table|sums of squares]] in ANOVA rely on. The square root then brings back the original units, as the standard deviation.

![[Deviations from the mean.png|700]]
Positive and negative deviations cancel exactly. Spread has to ignore the sign.

Try to invent a measure of spread yourself, and you'll walk straight into the reason.

The natural first idea is to average how far each value is from the mean. But the mean is the balance point, so the deviations $x_i-\bar{x}$ always add up to exactly 0 ([[Deviations from the Mean]]). The ones above cancel the ones below. Their plain average says nothing about spread. It's always zero.

So you need to get rid of the sign. There are two ways: absolute values or squares ([[Absolute Value]], [[Squares and Square Roots]]). Absolute values give the mean absolute deviation. It's a perfectly sensible measure, and it exists, but it's little used. Why did squares win?

Two reasons. The first is about weight. Squares count a deviation of 4 sixteen times as much as a deviation of 1. Large departures dominate. That's good when they matter, and bad when they're [[Outliers|outliers]] that inflate the result.

The second reason is the decisive one. Squared deviations add up cleanly. The total sum of squares splits exactly into a between-group part and a within-group part. That split is the whole of ANOVA ([[Sums of Squares and Mean Squares]]). Absolute values don't split like that. So squares aren't just a convention. They're what makes the rest of the theory fit together.

One cost remains: squaring changes the units, so centimetres become cm². So we report the square root, the [[Standard Deviation|standard deviation]], which is back in the data's own units.

The general lesson: in mathematics, the choice that wins is often the one that makes everything else simple. Average signed deviations and every data set has zero spread. Use anything but squares and there's no between-within split for ANOVA.

See also: [[Variance]], [[Why we divide by n minus 1]], [[Why report both center and spread]], [[Why analysis of variance can compare means]].
