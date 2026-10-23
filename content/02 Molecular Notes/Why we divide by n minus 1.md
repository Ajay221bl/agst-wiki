---
type: molecular
tags:
  - molecular
  - describing-data
  - inference
aliases:
  - "n-1"
  - "Bessel's correction"
status: seedling
---

Why is $s^2 = \sum (x_i - \bar{x})^2 / (n - 1)$ and not divided by $n$?

The sample variance measures distances from the sample mean, and the sample mean is always the point that makes those distances as small as possible. So they come out a little too small compared with distances from the true mean. Dividing by $n - 1$ instead of $n$ inflates the result just enough to be right on average (unbiased), and $n - 1$ is also the number of deviations that are free to vary.

![[Dividing by n minus 1.png|700]]
Averaged over many samples, the divide-by-n variance (red) comes out too small, especially for small n. Dividing by n − 1 (green) lands on the true value.

1. Deviations from the sample mean always sum to zero ([[Summation Notation]]).
2. So once $n - 1$ deviations are known, the last is forced: only $n - 1$ are free ([[Degrees of Freedom]]).
3. The sample mean sits closer to its own data than the population mean does, so squared distances to $\bar{x}$ underestimate squared distances to $\mu$.
4. Dividing by the smaller number $n - 1$ corrects exactly for that, making $s^2$ an **unbiased** estimator of $\sigma^2$ ([[Unbiased Estimator]]).
5. Taking the [[Squares and Square Roots|square root]] breaks unbiasedness slightly ($s$ is a little biased for $\sigma$), "but that's fine".

Dividing by $n$ would systematically understate [[Variability|variability]], making [[Standard Error|standard errors]] too small, [[Confidence Interval|confidence intervals]] too narrow and tests reject too often, especially in small samples.

See also: [[Variance]], [[Deviations from the Mean]], [[Standard Deviation]], [[t-Distribution]].
