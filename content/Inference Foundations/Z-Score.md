---
type: atomic
tags:
  - inference
  - describing-data
aliases:
  - "z-scores"
  - "standardized score"
  - "standard score"
status: seedling
---

A z-score says how many standard deviations a value sits above (+) or below (−) the mean.

Start with a deviation: how far a value is from the mean, $x - \bar{x}$ ([[Deviations from the Mean]]). Its size depends on the units: 5 cm means something different for ants and for trees. So divide it by the standard deviation to measure it in standard deviations:
$$z = \frac{\text{observed} - \text{expected}}{\text{deviation measure}} = \frac{x - \bar{x}}{s} \;\;\text{or}\;\; \frac{x - \mu}{\sigma}$$
The units cancel, so $z$ has no units. It measures **relative standing**, and values on different scales can be compared ([[Standard Deviation]]).

Read the sign first. If $z > 0$ the value is above the mean, if $z < 0$ it is below, and if $z = 0$ it is exactly at the mean. Then read the size with the empirical rule. A value is **unusual if $z < -2$ or $z > 2$**, assuming the data are roughly [[Normality Checks|normal]], because only about 5% of values lie that far out ([[Empirical Rule]]).

The same template builds every test statistic: (observed − expected) ÷ a measure of spread. Swap the single value for a sample mean and the standard deviation for the standard error, and you have the z and t tests. The t, F and chi-square statistics all follow it ([[Test Statistic]]). For a sample mean, the spread is the standard error:
$$z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$$
In a [[Hypothesis Testing|hypothesis test]], the value $\mu_0$ from $H_0$ goes in place of $\mu$.

![[Z-scores - exam comparison.png|700]]
Each exam score becomes a distance from its own class mean in SDs, so three different exams sit on one axis. Chemistry (z = 0) is the relatively best score; psychology (z = −2) is right at the edge of unusual.

For example, which exam did a student do relatively best on?

| Exam | Score | Class mean | Standard deviation | z |
|---|---|---|---|---|
| Psychology | 85 | 92 | 3.5 | −2 |
| Economics | 67 | 79 | 8 | −1.5 |
| Chemistry | 62 | 62 | 5 | 0 |

Chemistry has the highest relative standing, even though it has the lowest raw score.

Standardizing doesn't make data normal; the shape is unchanged. And z = −2 doesn't mean 2 units below the mean. It means two *standard deviations* below.

See also: [[Ratios and Fractions|numerator]], [[Mean]], [[Standard Error]], [[Outliers]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3).
