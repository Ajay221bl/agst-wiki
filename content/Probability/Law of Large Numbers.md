---
type: atomic
tags:
  - probability
  - inference
aliases:
  - "LLN"
  - "weak law of large numbers"
  - "gambler's fallacy"
status: seedling
---

The more times you repeat a chance process, or the bigger your sample, the closer the observed [[Proportions and Percentages|proportion]] or average gets to the true probability or mean.

Chance is wild in the short run and steady in the long run. This law explains why. A relative frequency is an [[Point Estimate|estimate]] of a probability ([[Classical vs Relative Frequency Probability]]). With few tries it can be far off: flip a fair coin 10 times and you might get 7 heads, which is 70%. With many tries it gets close: flip it 10,000 times and you will be very near 50%. Nothing "corrects" the coin. The early streaks simply get swamped by all the later flips, so they matter less and less to the overall share.

The same holds for averages. As the [[Sample Size|sample size]] grows, the sample mean $\bar{x}$ settles towards the population mean $\mu$, and the sample standard deviation $s$ settles towards $\sigma$ ([[Mean]], [[Parameter vs Statistic]]). This is why bigger samples are trusted more. The [[Standard Error|standard error]] makes the idea precise by measuring how much $\bar{x}$ varies for a given sample size ([[Sampling Distribution]], [[Variability]]).

![[Law of large numbers.png|700]]
Early on the proportion of heads swings wildly; after thousands of flips it hugs 0.5. Short runs can mislead, long runs settle.

This law is the reason we can learn about populations from samples at all. If bigger samples didn't get closer to the truth, collecting more data would be pointless. The [[Central Limit Theorem]] goes further and describes the shape and spread of sample means, not just where they settle.

For example, the proportion of heads after:

| Flips | Heads | Proportion |
|---|---|---|
| 5 | 4 | 0.80 |
| 50 | 28 | 0.56 |
| 5,000 | 2,513 | 0.503 |

These are made-up but typical numbers. The proportion wanders early, then settles near 0.5.

Patience, not luck, is what makes averages reliable. After five tails, heads is not "due". That belief is the gambler's fallacy: each flip is still 50/50 ([[Independent Events]]). The law works by dilution, not correction. And a huge sample only gets close to the truth if it is unbiased and representative.

See also: [[Why a bigger sample gives a narrower confidence interval]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (p. 92).
