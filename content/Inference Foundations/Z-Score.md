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

**In one line:** a z-score says how many standard deviations a value sits above (+) or below (−) the mean.

> [!info] Before this, it helps to know
> [[Deviations from the Mean]] (the [[Ratios and Fractions|numerator]]) · [[Standard Deviation]] (the unit) · [[Empirical Rule]] (why ±2 is unusual)

## Start from zero
1. **Start with a deviation:** how far a value is from the mean, $x - \bar{x}$ ([[Deviations from the Mean]]). Its size depends on the units: 5 cm means something different for ants and for trees.
2. **Divide it by the SD to measure it in SDs:**
$$z = \frac{\text{observed} - \text{expected}}{\text{deviation measure}} = \frac{x - \bar{x}}{s} \;\;\text{or}\;\; \frac{x - \mu}{\sigma}$$
   *Why divide by the SD:* the units cancel, so $z$ is **unitless**, a **measure of relative standing**, and values on different scales can be compared ([[Standard Deviation]]).
3. **Read the sign:** $z > 0$ above the mean; $z < 0$ below; $z = 0$ exactly at the mean.
4. **Read the size with the empirical rule:** **unusual if $z < -2$ or $z > 2$**, assuming approximate [[Normality Checks|normality]], because only about 5% of values lie that far out ([[Empirical Rule]]).
5. **The same template builds every test statistic:** (observed − expected) ÷ a measure of spread. Swap the individual value for a sample mean and the SD for the standard error and you have z and t tests ([[Test Statistic]]).

## See it

![[Z-scores - exam comparison.png|700]]
*What to look at:* Each exam score becomes a distance from its own class mean in SDs, so three different exams sit on one axis. Chemistry (z = 0) is the relatively best score; psychology (z = −2) is right at the edge of unusual.

## Why it exists
It is the template for **every test statistic in the course**: (observed − expected) / (a measure of spread). The t, F and [[Chi-Square Test|chi-square]] statistics all follow it ([[Test Statistic]]).

For a sample mean, the spread is the standard error:
$$z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$$
In a [[Hypothesis Testing|hypothesis test]], $\mu_0$ from $H_0$ goes in for $\mu$.

## A tiny example
Which exam did the student do relatively best on?
| Exam | Score | Class mean | SD | z |
|---|---|---|---|---|
| Psychology | 85 | 92 | 3.5 | −2 |
| Economics | 67 | 79 | 8 | −1.5 |
| Chemistry | 62 | 62 | 5 | 0 |
Chemistry: the highest relative standing, even with the lowest raw score.

## Common confusions
- **"Standardizing makes data normal."** The shape is unchanged.
- **"z = −2 means 2 units below the mean."** Two *standard deviations* below.

## Connections
- **Builds on:** [[Mean]], [[Standard Deviation]], [[Empirical Rule]], [[Deviations from the Mean]]
- **Leads to:** [[Test Statistic]], [[Standard Error]], [[Outliers]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 3]] (§3.3)
