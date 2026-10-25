---
type: atomic
tags:
  - describing-data
aliases:
  - "percentile"
  - "quantile"
  - "quantiles"
  - "percentiles"
status: seedling
---

The p-th percentile is the value with p% of the data below it. A quantile is the same idea written as a proportion: the 0.25 quantile is the 25th percentile.

A percentile answers a very human question: where do I stand compared to everyone else? Percentiles only need the data sorted, because "how many values are below this one?" only depends on order, not distances ([[Ranks]]). The value with half the data below it is the median. The value with a quarter below is the first quartile, $Q_1$, and with three quarters below it is the third quartile, $Q_3$ ([[Range and IQR]], [[Median]]). Any share p works the same way. Written as a proportion between 0 and 1, the same value is called a **quantile**. "Percentile" is the friendlier word for data; "quantile" is the word used for theoretical distributions, as in "Q-Q plot".

Theoretical distributions have quantiles too. The 0.975 quantile of the [[Normal Distribution|standard normal]] curve is 1.96, because 97.5% of the area lies below it ([[Probability Distribution]]). Critical values are quantiles ([[Critical Value]]), and a [[Q-Q Plot|Q-Q plot]] compares the quantiles of your data with normal quantiles. Every "look it up in the table" step in [[Descriptive vs Inferential Statistics|inference]] is really reading off a quantile.

With small samples there is no single exact answer, because the cut can fall between two values. Software fills the gap by interpolating, and different programs use slightly different rules.

![[Percentiles - sorted swim data.png|700]]
The dashed lines cut the 12 sorted values into quarters. Q1 and Q3 fall between data values, so R interpolates.

Percentiles describe position and spread without being pulled by extreme values. The interquartile range, the box plot and the outlier fences are all built from them ([[Box Plot and Five-Number Summary]], [[Outliers]]).

For example, for the 12 swimsuit speeds in the book's wetsuit study, R's `quantile()` gives $Q_1$ = 1.365, median = 1.445 and $Q_3$ = 1.505 m/s, so the interquartile range is 0.14 m/s ([[Paired t-Test]]).

It's a rank, not a score, and that's what makes it robust. The 90th percentile doesn't mean 90% correct; it means 90% of the values are below it. And quartiles don't have to be actual data values.

See also: [[Proportions and Percentages]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
