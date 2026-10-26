---
type: atomic
tags:
  - inference
aliases:
  - "unbiased"
  - "biased estimator"
  - "bias of an estimator"
  - "estimator"
  - "unbiasedness"
status: seedling
---

An estimator is unbiased if, averaged over all possible samples, it hits the population value exactly. In other words, its sampling distribution is centred on the parameter.

A statistic is used to guess a parameter, such as $\bar{x}$ for $\mu$ ([[Parameter vs Statistic]]). Any one guess misses a little, because each sample is different ([[Sampling Distribution]]). So you can't judge an estimator by one guess. You judge the method, by how it behaves over all the guesses it could make.

Imagine throwing darts. **Unbiased** means the darts are centred on the bullseye on average, even if any single dart misses. **Biased** means they are centred somewhere else. More formally, the sampling distribution of the statistic is centred on the parameter.

| Statistic | Estimates | Unbiased? |
|---|---|---|
| $\bar{x}$ | $\mu$ | yes |
| $\hat{p}$ | $p$ | yes |
| $s^2$ (dividing by $n-1$) | $\sigma^2$ | yes, which is why we divide by $n-1$ ([[Why we divide by n minus 1]]) |
| $s$ | $\sigma$ | slightly biased, because the [[Squares and Square Roots\|square root]] breaks it, but the bias is small enough to ignore |
| sample median | population median | technically biased |
| sample range | population range | biased low, because a sample rarely catches the most extreme values |

Unbiased is not the same as precise. Darts can be centred on the bullseye and still widely scattered; the scatter is measured by the [[Standard Error|standard error]].

![[Dividing by n minus 1.png|700]]
Averaged over many samples, the divide-by-n [[Variance|variance]] (red) comes out too small, especially for small n. Dividing by n − 1 (green) lands on the true value.

Unbiased estimators are convenient, especially in theory, which is why the mean and $s^2$ are the defaults. Dividing by $n$ instead of $n - 1$ would always tend to underestimate $\sigma^2$.

For example, take the population 2, 4, 6, with $\mu = 4$. The nine possible means of samples of size 2, taken [[Sampling With and Without Replacement|with replacement]], average exactly 4. That is what unbiased means.

Unbiased doesn't mean accurate every time. It's a property of the method, not a guarantee about your result. Any one sample can miss badly; unbiased is about the average over all samples.

See also: [[Point Estimate]], [[Why the median beats the mean for skewed data]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]].
