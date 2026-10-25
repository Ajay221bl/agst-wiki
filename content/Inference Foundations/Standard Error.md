---
type: atomic
tags:
  - inference
aliases:
  - "SE"
  - "standard error of the mean"
  - "SEM"
status: seedling
---

The standard error (SE) is the standard deviation of a sampling distribution: how much a [[Parameter vs Statistic|statistic]] would bounce around from sample to sample.

The standard deviation (SD) describes how much individual values vary ([[Standard Deviation]]). A statistic also varies, from sample to sample ([[Sampling Distribution]]). The SD of that sampling distribution is the standard error.

Here's the question that matters: how much does the mean bounce? Averages vary less than individual values, because in a mean, high and low values partly cancel. How much less? The [[Variance|variance]] of a mean of $n$ independent values is $\sigma^2/n$. This is because the variance of a sum of independent values is the sum of their variances, $n\sigma^2$, and dividing the sum by $n$ divides its variance by $n^2$.

Taking the square root gets back to an SD: $SE = \sigma/\sqrt{n}$ ([[Squares and Square Roots]]). So to halve the standard error you need four times the data ([[Why a bigger sample gives a narrower confidence interval]]). In practice $\sigma$ is unknown, so we plug in $s$ and use $s/\sqrt{n}$. That extra uncertainty is why the t-distribution replaces the normal ([[Why t instead of z when sigma is unknown]]).

| Statistic | Standard error |
|---|---|
| Mean, $\sigma$ known | $\sigma/\sqrt{n}$ |
| Mean, $\sigma$ unknown (usual) | $s/\sqrt{n}$, with the [[t-Distribution]] |
| Difference of two independent means | $\sqrt{s_1^2/n_1 + s_2^2/n_2}$ (the variances add) |
| Mean of paired differences | $s_d/\sqrt{n}$ |
| [[Proportions and Percentages\|Proportion]] | $\sqrt{p(1-p)/n}$ |

![[Standard error vs sample size.png|700]]
The SE drops fast at first and then slowly: going from 4 to 16 observations halves it, and halving it again needs 64.

So the standard error is the yardstick of uncertainty. It's the answer to "if I did this again, how different might my estimate be?" The **margin of error** of a confidence interval is a [[Critical Value|critical value]] times the standard error ([[Confidence Interval]]), and test statistics divide by it ([[Test Statistic]]).

For example, with $s = 12$:
- $n = 9$ gives SE = 12/3 = 4
- $n = 36$ gives SE = 12/6 = 2

To halve the standard error you need four times the [[Sample Size|sample size]].

The common mistake is mixing up the two spreads. Don't report the standard error just because it looks smaller. Report what answers the question: the SD to describe data, and the standard error (or a confidence interval) to describe the [[Random Error and Precision|precision]] of an [[Point Estimate|estimate]]. The standard error doesn't measure the data's spread; it measures how precise the statistic is.

See also: [[Pooled Variance]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.1).
