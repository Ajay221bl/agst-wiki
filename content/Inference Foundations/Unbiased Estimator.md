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

An estimator is unbiased if, averaged over all possible samples, it hits the population value exactly: its sampling distribution is centered on the parameter.

1. **A statistic is used to guess a parameter** ($\bar{x}$ for $\mu$: [[Parameter vs Statistic]]).
2. **Any one guess misses a little,** because each sample is different ([[Sampling Distribution]]).
3. **So judge the guessing method, not one guess.** Imagine throwing darts. **Unbiased** means the darts are centred on the bullseye on average, even if any single dart misses. **Biased** means they are centred somewhere else. *Formally:* the sampling distribution of the statistic is centred on the parameter.

| Statistic | Estimates | Unbiased? |
|---|---|---|
| $\bar{x}$ | $\mu$ | yes |
| $\hat{p}$ | $p$ | yes |
| $s^2$ (dividing by $n-1$) | $\sigma^2$ | yes, which is why we divide by $n-1$ ([[Why we divide by n minus 1]]) |
| $s$ | $\sigma$ | slightly biased (the [[Squares and Square Roots\|square root]] breaks it), "but that's fine" |
| sample median | population median | technically biased |

4. **Unbiased is not the same as precise.** Darts can be centred on the bullseye and still scattered widely; the scatter is measured by the [[Standard Error]].

![[Dividing by n minus 1.png|700]]
Averaged over many samples, the divide-by-n [[Variance|variance]] (red) comes out too small, especially for small n. Dividing by n − 1 (green) lands on the true value.

Unbiased estimators have "nice statistical properties", especially for theory, which is why the mean and $s^2$ are the defaults. Dividing by $n$ instead of $n - 1$ would systematically underestimate $\sigma^2$ ([[Why we divide by n minus 1]]).

For example:

Population 2, 4, 6 ($\mu = 4$). The nine possible sample means of size 2 ([[Sampling With and Without Replacement|with replacement]]) average exactly 4 ([[Sampling Distribution]]). That is unbiasedness.

Common mistakes:

- **"Unbiased means accurate every time."** Any one sample can miss badly; unbiased is about the average over samples.

See also: [[Point Estimate]], [[Why the median beats the mean for skewed data]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]].
