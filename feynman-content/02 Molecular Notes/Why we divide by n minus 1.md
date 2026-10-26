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

Why is the sample variance $s^2 = \sum (x_i - \bar{x})^2 / (n - 1)$, and not divided by $n$?

The sample variance measures distances from the sample mean, and the sample mean is always the point that makes those distances as small as possible. So they come out a little too small compared with distances from the true mean. Dividing by $n - 1$ instead of $n$ makes the result just big enough to be right on average, which is called unbiased. And $n - 1$ is also the number of deviations that are free to vary.

![[Dividing by n minus 1.png|700]]
Averaged over many samples, the divide-by-n variance (red) comes out too small, especially for small n. Dividing by n − 1 (green) lands on the true value.

This looks like an arbitrary rule to memorize. It isn't. It falls out of one fact about the sample mean.

You want the spread around the true mean, $\mu$. But you don't know $\mu$, so you measure distances from $\bar{x}$ instead. And here's the catch: $\bar{x}$ is calculated from these same data. It's the point that sits as close as possible to them. In fact, the sample mean sits closer to its own data than the population mean does. So squared distances to $\bar{x}$ systematically underestimate squared distances to $\mu$. You've measured the spread from the one point guaranteed to make it look smallest.

There's a second way to see the same thing. Deviations from the sample mean always add up to zero ([[Summation Notation]]). So once you know $n - 1$ of them, the last one is forced. Only $n - 1$ pieces of information are actually free ([[Degrees of Freedom]]). You spent one on estimating the mean.

Both views point to the same fix. Divide by the smaller number, $n - 1$, and you correct exactly for the shrinkage. That makes $s^2$ an **unbiased** estimator of $\sigma^2$: right on average ([[Unbiased Estimator]]).

One small footnote. Taking the [[Squares and Square Roots|square root]] breaks this slightly: $s$ is a little biased for $\sigma$, but not enough to matter.

Why care? Because dividing by $n$ would always understate [[Variability|variability]]. That would make [[Standard Error|standard errors]] too small and [[Confidence Interval|confidence intervals]] too narrow, and tests would reject too often, especially in small samples. When you use your data twice, once to find the centre and again to measure spread around it, you have to pay for the reuse.

Try it yourself. You have just 2 values, 4 and 6. Their mean is 5, and each sits 1 away from it. Divide the sum of squared deviations by n and you get 1; divide by n − 1 and you get 2. Which is closer to the true variance, on average? The n − 1 version, because the sample mean always sits right between your values and makes the distances look smaller than they really are.

See also: [[Variance]], [[Deviations from the Mean]], [[Standard Deviation]], [[t-Distribution]].
