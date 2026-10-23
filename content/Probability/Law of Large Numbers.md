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

**In one line:** the more times you repeat a chance process (or the bigger your sample), the closer the observed [[Proportions and Percentages|proportion]] or average gets to the true probability or mean.

> [!info] Before this, it helps to know
> [[Classical vs Relative Frequency Probability]] (the two numbers this law connects) · [[Mean]] (the same holds for averages)

## Start from zero
1. **A relative frequency is an [[Point Estimate|estimate]] of a probability** ([[Classical vs Relative Frequency Probability]]). How good an estimate?
2. **With few tries, it can be far off.** Flip a fair coin 10 times and you might get 7 heads (70%).
3. **With many tries, it gets close.** Flip it 10,000 times and you will get very close to 50%. *Why:* nothing "corrects" the coin; the early streaks just get swamped by the many later flips, so they matter less and less to the overall share.
4. **The same holds for averages.** As the [[Sample Size|sample size]] grows, the sample mean $\bar{x}$ settles toward the population mean $\mu$, and $s$ settles toward $\sigma$ ([[Mean]], [[Parameter vs Statistic]]).
5. **This is why bigger samples are trusted more.** It's the first step towards the idea that the [[Variability|variability]] of $\bar{x}$ shrinks as $n$ grows, which the standard error makes precise ([[Standard Error]], [[Sampling Distribution]]).

## See it

![[Law of large numbers.png|700]]
*What to look at:* Early on the proportion of heads swings wildly; after thousands of flips it hugs 0.5. Short runs can mislead, long runs settle.

## Why it exists
It is the justification for learning about populations from samples at all. If bigger samples did not get closer to the truth, collecting more data would be pointless. It also sets up the [[Central Limit Theorem]], which goes further and describes the *shape and spread* of sample means, not just where they settle.

## A tiny example
Proportion of heads after:

| Flips | Heads | Proportion |
|---|---|---|
| 5 | 4 | 0.80 |
| 50 | 28 | 0.56 |
| 5,000 | 2,513 | 0.503 |

(Made-up but typical numbers.) The proportion wanders early, then settles near 0.5.

## Common confusions
- **"After five tails, heads is due."** That is the gambler's fallacy. Each flip is still 50/50 ([[Independent Events]]); the law works by dilution, not correction.
- **"A huge sample guarantees the right answer."** Only for an unbiased, representative sample.

## Connections
- **Builds on:** [[Classical vs Relative Frequency Probability]], [[Mean]]
- **Leads to:** [[Central Limit Theorem]], [[Standard Error]], [[Why a bigger sample gives a narrower confidence interval]]
- **Part of:** [[MOC - Probability]], [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (p. 92)
