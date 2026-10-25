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

A normal Q-Q plot puts each sorted data value against where that value "should" be if the data were normal. If the points lie on a straight line, the shape is close to normal.

Our eyes are bad at judging whether a curve is bell-shaped, and very good at judging whether points lie on a straight line. A Q-Q plot uses that. Many tests assume normality somewhere, so you often need to ask whether your data's shape is close to normal ([[Normality Checks]]). A histogram is hard to judge with a small n, because its look changes with the bin width ([[Histogram]]). A Q-Q plot gives a picture where "normal" has one simple look.

To build one:
1. **Sort the data.** The smallest value is the 1st of n, the next is the 2nd, and so on.
2. **Ask where the i-th smallest of n values would sit in a perfect normal sample.** That is a normal quantile: the value with about $(i - 0.5)/n$ of the area below it ([[Percentiles and Quantiles]]). The $- 0.5$ places each point in the middle of its share of the distribution, so the smallest value isn't put at the impossible 0th percentile.
3. **Plot observed against expected.** If the data are normal, each value sits where a normal value of that rank should, apart from a change of centre and scale, so the points form a **straight line**. The line doesn't have to be at 45°, because the data have their own mean and [[Standard Deviation|standard deviation]], which only shift and tilt the line.
4. **Read the bends.** A curve away from the line at one end means a long [[Tails of a Distribution|tail]] on that side, which is skew. An S-shape means heavier or lighter tails than normal ([[Shape of a Distribution]]).

![[Q-Q plot - how it is built.png|700]]
Left, each sorted difference is paired with the normal quantile at its rank (R uses (i − 0.5)/n when n > 10). Right, those pairs fall roughly along the line; the flat runs are tied values.

![[QQ plots - normal vs skewed.png|700]]
Normal data hug the line; skewed data curve away at the ends.

A Shapiro–Wilk test only says "normal or not", and with a large n it rejects tiny, harmless departures. The Q-Q plot shows *how* and *how badly* the data depart from normality, which is what you need to decide whether a test can still be trusted ([[Robustness]]).

For example, take the 12 wetsuit − swimsuit differences. The smallest, 0.05, is paired with the normal quantile for (1 − 0.5)/12 = 0.042, which is −1.73. The largest, 0.11, is paired with +1.73. Plotted, they lie close to a line, which matches the Shapiro p of 0.147 ([[Paired t-Test]]).

The trick is converting a hard question, "is this shape normal?", into an easy one, "is this line straight?". Not every point has to be on the line. Small samples always wiggle, so look for systematic bends. And for a paired test, check the Q-Q plot of the differences, not of each column.

See also: [[Normal Distribution]], [[ANOVA Assumptions]], [[Residuals]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167).
