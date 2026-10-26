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

A deviation is how far one value sits from the mean: $x_i - \bar{x}$. Deviations are the raw material for the variance, the standard deviation, z-scores, [[ANOVA Table|sums of squares]] and residuals.

Spread is a vague idea until you decide what to measure it from. To describe spread, you compare each value with a centre, and the natural centre is the [[Mean|mean]], the balance point of the data. The deviation of a value is its distance from the mean, with a sign: positive above the mean, negative below ([[Absolute Value]]).

If you try to average the deviations, you always get 0. The mean is the balance point, so the deviations above it cancel the ones below exactly: $\sum (x_i - \bar{x}) = 0$. So the plain average deviation can't measure spread. Instead, statistics squares each deviation first. Adding the squares gives the **sum of squares**, $\sum (x_i - \bar{x})^2$. Divide that by $n - 1$ and you have the [[Variance|variance]]; take its [[Squares and Square Roots|square root]] and you have the [[Standard Deviation|standard deviation]] ([[Why we divide by n minus 1]]).

The same idea appears all over statistics. Divide one deviation by the standard deviation and you get a [[Z-Score|z-score]]. Measure each value from its own group's mean and you get a [[Residuals|residual]]. Measure the group means from the [[Grand Mean|grand mean]] and you get the between-group part of an ANOVA ([[Sums of Squares and Mean Squares]]). Every measure of spread and every [[Test Statistic|test statistic]] is built from deviations.

![[Deviations from the mean.png|700]]
Each line is one value's deviation. The ones above and below the mean cancel; their squares don't.

For example, take the data 1, 2, 3, 6, 3, whose mean is 3. The deviations are −2, −1, 0, 3 and 0, which add to 0. Squared, they are 4, 1, 0, 9 and 0, which add to 14, so the variance is $s^2 = 14/4 = 3.5$.

Almost every measure of spread in this wiki is built from these simple distances, so it's worth seeing them clearly. A deviation isn't an error; it is just a distance from the mean, and nothing has gone wrong.

Try it yourself. The values 2, 4 and 6 have mean 4. What are the deviations, and what do they add up to? −2, 0 and 2, which add to 0. That always happens, which is why the variance has to square them first.

See also: [[Summation Notation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
