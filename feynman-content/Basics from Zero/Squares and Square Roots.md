---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "square root"
  - "squaring"
status: seedling
---

Squaring a number multiplies it by itself, so $3^2 = 9$, and the answer is never negative. The square root undoes it: $\sqrt{9} = 3$.

Squaring shows up everywhere in statistics, and it's not arbitrary. It solves real problems. Squaring does three things that matter in statistics. First, it removes signs: $(-3)^2 = 9$ as well. Distances below the mean and above it both become positive, which is needed because plain deviations from the mean always add up to zero ([[Deviations from the Mean]]). The [[Absolute Value]] removes signs too, but squares are easier to work with in algebra, so the variance uses them. Second, squaring makes big distances count much more: 1 stays 1, but 10 becomes 100. That is why a few values far from the mean can inflate the [[Variance]] and the standard deviation (SD) ([[Outliers]]). Third, it changes the units: kilograms become "kg²", which is hard to picture.

The square root brings the units back. Taking the square root of the variance gives the [[Standard Deviation]], in kilograms again.

Square roots also explain why bigger samples help less than you might expect. The [[Standard Error|standard error]] (SE) of a mean is $s/\sqrt{n}$, where $n$ is the [[Sample Size|sample size]]. Because of the square root, you need four times as much data to halve the SE.

For example, take deviations of −2, −1, 0, 3 and 0. Squared, they are 4, 1, 0, 9 and 0, which sum to 14. Divided by $n-1 = 4$, the variance is 3.5, and its square root, the SD, is about 1.87.

And for the SE: with $s = 10$, a sample of $n = 25$ gives $10/5 = 2$, while $n = 100$ gives $10/10 = 1$. Four times the data, half the SE.

Square to get rid of signs, take the root to get back to real units. One subtle point: the sample variance $s^2$ is unbiased for the population variance $\sigma^2$, but its square root $s$ is very slightly biased for $\sigma$. In practice this doesn't matter ([[Unbiased Estimator]]).

Try it yourself. To halve the width of a confidence interval, how much must the sample grow? The width shrinks with the square root of n, and √4 = 2, so you need 4 times as many observations. That's why precision gets expensive fast.

See also: [[Summation Notation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (variance and SD, §1.4).
