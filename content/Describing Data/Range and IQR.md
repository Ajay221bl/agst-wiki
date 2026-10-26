---
type: atomic
tags:
  - describing-data
aliases:
  - "range"
  - "IQR"
  - "interquartile range"
  - "quartiles"
  - "middle half"
status: seedling
---

The range is the biggest value minus the smallest. The interquartile range (IQR) is the spread of the middle half of the data: $Q_3 - Q_1$.

The simplest measure of spread asks how far apart the extremes are: the **range** is the maximum minus the minimum. The problem is that it depends on just two values, the two most extreme ones, so one outlier can inflate it ([[Outliers]]).

The fix is to ignore the extremes and measure the middle. Sort the data and cut it into four equal parts. The cut points are the **quartiles** ([[Percentiles and Quantiles]]):
- $Q_1$, the 25th percentile, has a quarter of the data below it.
- $Q_2$ is the [[Median|median]].
- $Q_3$, the 75th percentile, has three quarters of the data below it.

The interquartile range is $Q_3 - Q_1$, the width of the middle half. It ignores the top and bottom quarters, so outliers can't move it: it is **robust**. It goes naturally with the median, since both depend only on order. It is also the ruler for the box plot and for the outlier fences at $Q_1 - 1.5\,IQR$ and $Q_3 + 1.5\,IQR$ ([[Box Plot and Five-Number Summary]]).

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

For example, 22 canopy tree heights have a minimum of 25.2, $Q_1$ of 35.2, a median of 37.45, $Q_3$ of 40.5 and a maximum of 48 m.
- Range = 48 − 25.2 = **22.8 m**
- Interquartile range = 40.5 − 35.2 = **5.3 m**
- 1.5 × 5.3 = 7.95, so the fences are at 27.25 and 48.45.

The interquartile range holds the middle 50% of the data, but that doesn't make it half the range; it depends on the shape of the data. And quartiles aren't always data values: software uses several rules and may interpolate.

See also: [[Standard Deviation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
