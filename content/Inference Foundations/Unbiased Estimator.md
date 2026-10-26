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

An estimator is unbiased if, averaged over every sample you could have drawn, it lands exactly on the true value. Any one guess can miss, but it doesn't miss in a favourite direction.

Back to darts. You throw a dart at a bullseye. It misses a little. Is your aim bad? You can't tell from one dart. Throw a hundred. If they scatter around the bullseye, centred on it, your aim is fine; you just wobble. If they all cluster to the upper left, your aim is off. That's bias.

A statistic, like $\bar{x}$, is a dart thrown at a parameter, like $\mu$ ([[Parameter vs Statistic]]). Each sample is one throw. Any one throw misses a bit, because each sample is different ([[Sampling Distribution]]). So you can't judge the method by one throw. You judge it by where the throws land *on average*. If that's right on the target, the estimator is unbiased. In more formal words: its sampling distribution is centred on the parameter.

Let's check one completely. Take the tiny population 2, 4, 6, with $\mu = 4$. List all nine possible samples of size 2, taken [[Sampling With and Without Replacement|with replacement]], and their means. They average exactly 4. That's unbiased, and you can see it with your own eyes.

Which common statistics are unbiased?

| Statistic | Estimates | Unbiased? |
|---|---|---|
| $\bar{x}$ | $\mu$ | yes |
| $\hat{p}$ | $p$ | yes |
| $s^2$ (dividing by $n-1$) | $\sigma^2$ | yes, which is why we divide by $n-1$ ([[Why we divide by n minus 1]]) |
| $s$ | $\sigma$ | slightly biased, because the [[Squares and Square Roots\|square root]] breaks it, but the bias is small enough to ignore |
| sample median | population median | technically biased |
| sample range | population range | biased low, because a sample rarely catches the most extreme values |

The variance is the interesting one. Why divide by $n - 1$ instead of $n$? Because deviations are measured from the *sample's* mean, which sits closer to its own data than the true mean does. So the deviations come out a little too small, and dividing by $n$ would underestimate $\sigma^2$ every time. Dividing by $n - 1$ exactly corrects it ([[Why we divide by n minus 1]], [[Variance]]).

![[Dividing by n minus 1.png|700]]
Averaged over many samples, the divide-by-n [[Variance|variance]] (red) comes out too small, especially for small n. Dividing by n − 1 (green) lands on the true value.

The trap: unbiased doesn't mean precise. Darts can be centred on the bullseye and still scattered all over the board; that scatter is measured by the [[Standard Error|standard error]]. And unbiased doesn't mean your one result is right. It's a property of the method, averaged over all samples, not a promise about yours.

Try it yourself. Is the sample range unbiased for the population range? No. A sample rarely catches the very biggest and very smallest values in the population, so its range comes out too small on average. That's a bias with a direction.

See also: [[Point Estimate]], [[Why the median beats the mean for skewed data]], [[Squares and Square Roots|square root]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]].
