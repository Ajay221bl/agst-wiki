---
type: atomic
tags:
  - t-tests
aliases:
  - "QQ plot"
  - "normal probability plot"
  - "quantile-quantile plot"
  - "qqnorm"
status: seedling
---

**In one line:** a normal Q-Q plot puts each sorted data value against where that value "should" be if the data were normal; points on a straight line mean the shape is close to normal.

> [!info] Before this, it helps to know
> [[Percentiles and Quantiles]] (the Q in Q-Q) · [[Normal Distribution]] · [[Shape of a Distribution]]

## Start from zero
1. **Question: is the shape of my data close to normal?** Many tests assume it somewhere ([[Normality Checks]]).
2. **A histogram is hard to judge with small n**: its look changes with the bin width ([[Histogram]]). We want a picture where "normal" has one simple look.
3. **Sort the data.** The smallest value is the 1st of n, the next is the 2nd, and so on.
4. **Ask where the i-th smallest of n values would sit in a perfect normal sample.** That is a normal quantile: the value with about $(i - 0.5)/n$ of the area below it ([[Percentiles and Quantiles]]). *Why $(i - 0.5)/n$:* it places each point in the middle of its share of the distribution, so the smallest isn't at the impossible 0th percentile.
5. **Plot observed against expected.** If the data are normal, each value sits where a normal value of that rank should, up to a change of centre and scale, so the points form a **straight line**. *Why a straight line and not the 45° line:* the data have their own mean and [[Standard Deviation|SD]]; those only shift and tilt the line.
6. **Read the bends.** A curve away from the line at one end means a long [[Tails of a Distribution|tail]] on that side (skew); an S-shape means heavier or lighter tails than normal ([[Shape of a Distribution]]).

## See it

![[Q-Q plot - how it is built.png|700]]
*What to look at:* left, each sorted difference is paired with the normal quantile at its rank (R uses (i − 0.5)/n when n > 10). Right, those pairs fall roughly along the line; the flat runs are tied values.

![[QQ plots - normal vs skewed.png|700]]
*What to look at:* normal data hug the line; skewed data curve away at the ends.

## Why it exists
Shapiro–Wilk only says "normal or not", and with large n it rejects tiny, harmless deviations. The Q-Q plot shows *how* and *how badly* the data depart from normality, which is what you need to decide whether the test is still trustworthy ([[Robustness]]).

## A tiny example
The 12 wetsuit − swimsuit differences: the smallest, 0.05, is paired with the normal quantile for (1 − 0.5)/12 = 0.042, which is −1.73. The largest, 0.11, is paired with +1.73. Plotted, they lie close to a line, which matches Shapiro's p = 0.147 ([[Paired t-Test]]).

## Common confusions
- **"Every point must be on the line."** Small samples always wiggle; look for systematic bends.
- **"Check the Q-Q plot of each column for a paired test."** Check the differences.

## Connections
- **Builds on:** [[Percentiles and Quantiles]], [[Normal Distribution]], [[Shape of a Distribution]]
- **Leads to:** [[Normality Checks]], [[ANOVA Assumptions]], [[Residuals]]
- **Part of:** [[MOC - t-Tests]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167)
