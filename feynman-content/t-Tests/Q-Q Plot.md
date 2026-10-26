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

A normal Q-Q plot lines up each of your sorted values against where it "should" be if the data were perfectly normal. If the points fall on a straight line, your data are close to normal.

Here's a fact about your eyes. Show someone a histogram and ask "is that a bell curve?", and they'll hesitate; it's lumpy, and with a few points it changes shape every time you change the bin width ([[Histogram]]). But show them some dots and ask "is that a straight line?", and they'll answer instantly. We're very good at straight lines. So the trick is to turn "is it normal?" into "is it straight?" ([[Normality Checks]]).

How? Let's build one.
1. **Sort the data.** The smallest value is 1st of n, the next is 2nd, and so on.
2. **Ask where each one would be in a perfect normal sample.** If you had a perfectly normal sample of n values, where would the smallest one sit? The second smallest? Each has a natural spot, a normal quantile: the value with about $(i - 0.5)/n$ of the area below it ([[Percentiles and Quantiles]]). The $- 0.5$ puts each point in the middle of its slice, so the smallest isn't placed at an impossible 0th percentile.
3. **Plot what you got against where it should be.** If your data really are normal, each value sits where a normal value of that rank should, apart from a shift and a stretch. So the dots form a **straight line**. It doesn't have to be at 45°, because your data have their own mean and [[Standard Deviation|standard deviation]], which just slide and tilt the line.
4. **Read the bends.** If the dots curve away at one end, that end has a long [[Tails of a Distribution|tail]]: skew. An S-shape means the tails are heavier or lighter than normal ([[Shape of a Distribution]]).

![[Q-Q plot - how it is built.png|700]]
Left, each sorted difference is paired with the normal quantile at its rank (R uses (i − 0.5)/n when n > 10). Right, those pairs fall roughly along the line; the flat runs are tied values.

![[QQ plots - normal vs skewed.png|700]]
Normal data hug the line; skewed data curve away at the ends.

For example, take the 12 wetsuit − swimsuit differences. The smallest, 0.05, is paired with the normal quantile for (1 − 0.5)/12 = 0.042, which is −1.73. The largest, 0.11, is paired with +1.73. Plotted, they lie close to a line, which matches the Shapiro p of 0.147 ([[Paired t-Test]]).

Why prefer this to a Shapiro–Wilk test alone? The test only says "normal or not", and with a large n it rejects tiny, harmless departures. The plot shows *how* and *how badly* the data depart, which is what you need to judge whether a test can still be trusted ([[Robustness]]).

Try it yourself. A Q-Q plot from 8 values wiggles a bit around the line but has no clear bend. Should you worry? Not much. Small samples always wiggle. Worry about systematic curves, like both ends bending the same way. (And for a paired test, plot the differences, not each column.)

See also: [[Normal Distribution]], [[ANOVA Assumptions]], [[Residuals]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167).
