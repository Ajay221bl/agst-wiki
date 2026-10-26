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

The standard error (SE) tells you how much an estimate, like a sample mean, would bounce around if you repeated the study with new samples. Small standard error, steady estimate.

Think about one person's height versus the average height of a group of 9 people. Pick people one at a time and the heights jump all over the place: a tall one, a short one. Now pick groups of 9 and average each group. Those averages jump around much less. Why? Because inside each group, the tall ones and the short ones partly cancel. A group would need to be *all* tall to give a very high average, and that's rare.

So there are two different "spreads" here, and it's worth keeping them apart:
- How much **individual values** vary. That's the standard deviation (SD) ([[Standard Deviation]]).
- How much **averages** vary from sample to sample. That's the standard error. Officially, it's the standard deviation of the sampling distribution ([[Sampling Distribution]]).

How much smaller is the second one? Let's figure it out. The [[Variance|variance]] of a sum of $n$ independent values is $n$ times the variance of one, $n\sigma^2$, because independent variances add. An average is that sum divided by $n$, and dividing a quantity by $n$ divides its variance by $n^2$. So the variance of an average is $n\sigma^2/n^2 = \sigma^2/n$. Take the square root to get back to an SD ([[Squares and Square Roots]]):
$$SE = \frac{\sigma}{\sqrt{n}}$$
Notice it's $\sqrt{n}$, not $n$. That has a sobering consequence: to cut the standard error in half, you need four times as much data ([[Why a bigger sample gives a narrower confidence interval]]). In practice we don't know $\sigma$, so we use the sample's $s$ instead, $s/\sqrt{n}$. That extra guesswork is why the t-distribution replaces the normal ([[Why t instead of z when sigma is unknown]]).

The same idea gives a standard error for other statistics:

| Statistic | Standard error |
|---|---|
| Mean, $\sigma$ known | $\sigma/\sqrt{n}$ |
| Mean, $\sigma$ unknown (usual) | $s/\sqrt{n}$, with the [[t-Distribution]] |
| Difference of two independent means | $\sqrt{s_1^2/n_1 + s_2^2/n_2}$ (the variances add) |
| Mean of paired differences | $s_d/\sqrt{n}$ |
| [[Proportions and Percentages\|Proportion]] | $\sqrt{p(1-p)/n}$ |

![[Standard error vs sample size.png|700]]
The SE drops fast at first and then slowly: going from 4 to 16 observations halves it, and halving it again needs 64.

For example, with $s = 12$:
- $n = 9$ gives SE = 12/3 = 4
- $n = 36$ gives SE = 12/6 = 2

Four times the [[Sample Size|sample size]], half the standard error.

Why care? Because the standard error is the ruler for everything in inference. A confidence interval is your estimate plus or minus a few standard errors; the "plus or minus" part is called the **margin of error**, a [[Critical Value|critical value]] times the standard error ([[Confidence Interval]]). A test statistic counts how many standard errors your result is from the boring prediction ([[Test Statistic]]).

The trap: people sometimes report the standard error instead of the SD because it's smaller and looks tidier. But they answer different questions. Want to describe how varied the data are? Use the SD. Want to say how precisely you've pinned down the mean? Use the standard error, or better, a confidence interval ([[Random Error and Precision|precision]], [[Point Estimate|estimate]]).

Try it yourself. A sample of 4 has a standard error of 6. How big a sample gives a standard error of 3? Halving needs four times the data, so 16.

See also: [[Pooled Variance]], [[Parameter vs Statistic|statistic]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.1).
