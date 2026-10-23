---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "square root"
  - "squaring"
status: seedling
---

Squaring a number multiplies it by itself ($3^2 = 9$) and always gives a non-negative answer; the square root undoes it ($\sqrt{9} = 3$).

1. **Squaring multiplies a number by itself:** $3^2 = 9$, $(-3)^2 = 9$.
2. **It removes signs.** A distance below the mean and one above it both become positive. *Why statistics needs that:* deviations from the mean cancel to zero if you just add them ([[Deviations from the Mean]]). The [[Absolute Value]] also removes signs, but squares are what variance uses because they combine neatly in algebra (variances of independent things add).
3. **It punishes big distances more.** A distance of 1 stays 1, but 10 becomes 100. *Consequence:* values far from the mean dominate the variance, which is why outliers inflate the SD ([[Outliers]]).
4. **It changes the units.** Kilograms squared are "kg²", which nobody can picture.
5. **The square root undoes the square:** $\sqrt{9} = 3$. *Why we need it:* taking the root of the variance brings the units back, giving the [[Standard Deviation]] in kg. It also appears in $\sqrt{n}$ in the standard error, because the variance of a mean shrinks with $n$, so its SD shrinks with $\sqrt{n}$ ([[Standard Error]]).

Two places depend on it:
- **Spread:** raw deviations from the mean sum to zero, so [[Variance]] squares them first, and the SD takes the square root to return to the original units.
- **[[Sample Size|Sample size]]:** the [[Standard Error]] is $s/\sqrt{n}$. Because of the square root, quadrupling $n$ only halves the SE.

For example:

Deviations −2, −1, 0, 3, 0. Squared: 4, 1, 0, 9, 0. Sum = 14. Divided by $n-1 = 4$: variance 3.5. Square root: SD ≈ 1.87.

And for the SE: with $s = 10$, $n = 25$ gives $10/5 = 2$; $n = 100$ gives $10/10 = 1$. Four times the data, half the SE.

Common mistakes:

- **"The square root of the variance is unbiased too."** $s^2$ is unbiased for $\sigma^2$, but $s$ is slightly biased for $\sigma$. "That's fine" ([[Unbiased Estimator]]).
- **"Doubling n halves the SE."** You need four times the sample size to halve it.

See also: [[Summation Notation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (variance and SD, §1.4).
