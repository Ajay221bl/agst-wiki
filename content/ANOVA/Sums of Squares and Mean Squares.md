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

A sum of squares adds up squared deviations. ANOVA splits the total sum of squares into a between-group part and a within-group part. Dividing each part by its degrees of freedom (df) gives a mean square, which is a variance [[Point Estimate|estimate]].

This looks like algebra, but it's really accounting: where did all the variation come from? Start with the total [[Variability|variation]]. Measure every value from the [[Grand Mean|grand mean]], square, and add: $SST = \sum\sum (x_{ij} - \bar{x})^2$. The deviations are squared because plain deviations cancel to 0 ([[Deviations from the Mean]]).

Each deviation splits in two: $x_{ij} - \bar{x} = (\bar{x}_i - \bar{x}) + (x_{ij} - \bar{x}_i)$. That is the group's distance from the grand mean, plus the value's distance from its own group [[Mean|mean]], which is its residual ([[Residuals]]). Square and add, and the cross terms vanish, because residuals add to 0 within each group. So $SST = SSG + SSE$:
- $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$, the sum of squares between groups: the signal
- $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$, the sum of squares within groups: the noise

But raw totals aren't fair to compare. Sums grow with the number of pieces, so divide by the df to get averages: $MSG = SSG/(k-1)$ and $MSE = SSE/(N-k)$. These are the mean squares, and each estimates a variance. They divide by df rather than the count for the same reason the variance divides by $n - 1$: each estimated mean uses up one piece of information ([[Degrees of Freedom]], [[Why we divide by n minus 1]]).

Then compare them. If $H_0$ is true, both mean squares estimate the same noise variance, so $F = MSG/MSE$ should be near 1. Group means that differ inflate the between-group mean square, and F grows ([[F-Distribution]], [[Signal and Noise]]).

![[Sums of squares - sheep.png|700]]
The total bar equals the two pieces laid end to end: 276.1 + 275.1 = 551.2.

This split is what "[[One-Way ANOVA|analysis of variance]]" means: dividing variation into an explained part and an unexplained part ([[Why analysis of variance can compare means]]).

For example, the stem-cell sheep (2 groups, N = 18) have SSG = 276.1, SSE = 275.1 and SST = 551.2. Then MSG = 276.1/1 = 276.1, MSE = 275.1/16 = 17.2, and F = 16.06. With two groups, F is the pooled t squared: 4.007² = 16.06 ([[Two-Sample Independent t-Test]]).

So the whole machine is: split the variation, make each part a fair average, then compare. A sum of squares and a mean square aren't the same thing: the mean square is the sum of squares divided by its df. And the "error" in mean square error doesn't mean a mistake. It is the average within-group (residual) variance.

See also: [[Variance]], [[ANOVA Table]], [[Between- and Within-Group Variability]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 266–267).
