---
type: atomic
tags:
  - inference
  - describing-data
aliases:
  - "68-95-99.7 rule"
status: seedling
---

For roughly normal data, about 68% of values fall within 1 standard deviation (SD) of the mean, 95% within 2 SD, and 99.7% within 3 SD.

For a normal curve, the share of values within a given distance of the mean depends only on that distance measured in SDs. The curve is fixed by $\mu$ and $\sigma$ alone, so measuring in SDs makes every normal curve look the same ([[Normal Distribution]]). So the SD works like a ruler for bell-shaped data ([[Standard Deviation]]):
- **68%** fall within $\bar{x} \pm 1s$
- **95%** fall within $\bar{x} \pm 2s$ (more precisely 1.96)
- **99.7%** fall within $\bar{x} \pm 3s$

As areas: the area under the standard normal curve between $z = -1$ and $1$ is about 0.68, and between $-2$ and $2$ it is about 0.95 ([[Probability Distribution]]).

This is where "unusual" comes from. Only about 5% of values lie beyond ±2 SD, so a value there is called unusual ([[Z-Score]], [[Outliers]]), and 1.96 is the 95% critical value ([[Critical Value]]). The rule only holds for roughly bell-shaped data. For skewed data the [[Tails of a Distribution|tails]] hold different shares, so the percentages are wrong.

![[Empirical rule - dog heights.png|700]]
With the dog heights example (mean 394 mm, SD 147), each band adds one SD on each side. Note that −3 SD is a negative height: the normal model is only an approximation.

The rule gives a quick sense of usual and unusual without software. It is used to flag outliers beyond ±2 SD (±3 for extreme ones), to define unusual z-scores, and it is the basis of confidence intervals: 95% of sample means fall within about 2 [[Standard Error|standard errors]] of $\mu$ ([[Confidence Interval]]).

For example, dog heights have mean 394 mm and SD 147:
- 68%: 394 ± 147, so 247 to 541
- 95%: 394 ± 294, so 100 to 688
- 99.7%: 394 ± 441, so −47 to 835 (heights below 0 are impossible, because the normal curve is only an approximation)

Chick-fil-A fillets: 68% weigh between 144 and 231 g, and 95% between 100.4 and 274.8 g.

The rule doesn't work for any data, only for roughly normal ([[Shape of a Distribution|symmetric]], single-peaked) data. For skewed data, use the interquartile range (IQR) rule instead.

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3).
