---
type: atomic
tags:
  - inference
  - describing-data
aliases:
  - "68-95-99.7 rule"
status: seedling
---

For data shaped like a bell, about 68% of values sit within 1 standard deviation (SD) of the mean, about 95% within 2, and about 99.7% within 3.

Here's a party trick. Tell me only the average and the standard deviation of something bell-shaped, dog heights, say, and I can tell you the range where most dogs fall, without seeing a single dog. How?

Because every bell curve is the same curve, just slid over and stretched ([[Normal Distribution]]). So if you measure distances in SDs instead of millimetres, every bell looks identical, and the share of values within "1 SD of the middle" is always the same. The SD becomes a ruler that works for any bell ([[Standard Deviation]]):
- **68%** fall within $\bar{x} \pm 1s$
- **95%** fall within $\bar{x} \pm 2s$ (more precisely 1.96)
- **99.7%** fall within $\bar{x} \pm 3s$

In area language: under the standard normal curve, the area between $z = -1$ and $1$ is about 0.68, and between $-2$ and $2$ about 0.95 ([[Probability Distribution]]).

![[Empirical rule - dog heights.png|700]]
With the dog heights example (mean 394 mm, SD 147), each band adds one SD on each side. Note that −3 SD is a negative height: the normal model is only an approximation.

For example, dog heights have mean 394 mm and SD 147:
- 68%: 394 ± 147, so 247 to 541
- 95%: 394 ± 294, so 100 to 688
- 99.7%: 394 ± 441, so −47 to 835

Wait, −47 mm? A dog with negative height? That's the curve telling you something honest: it's only a model. Real heights can't go below zero, so the bell is a good approximation in the middle and a poor one far out.

Chick-fil-A fillets: 68% weigh between 144 and 231 g, and 95% between 100.4 and 274.8 g.

This rule is where our everyday sense of "unusual" comes from. Only about 5% of values lie beyond 2 SDs, so a value out there gets called unusual ([[Z-Score]], [[Outliers]]), and 1.96 becomes the 95% [[Critical Value|critical value]]. It's a convention, not a law of nature. And it's the root of confidence intervals: about 95% of sample means land within 2 [[Standard Error|standard errors]] of $\mu$ ([[Confidence Interval]]).

But notice the catch, right there in the first sentence: *bell-shaped*. For skewed data the [[Tails of a Distribution|tails]] hold different shares, and the percentages are just wrong. Use the interquartile range (IQR) rule instead ([[Shape of a Distribution|symmetric]]).

Try it yourself. Using the dog heights, roughly what share of dogs are taller than 688 mm? 688 is 2 SDs above the mean. About 95% are within 2 SDs, so about 5% are outside, split between the two ends: about 2 to 3% above 688.

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3).
