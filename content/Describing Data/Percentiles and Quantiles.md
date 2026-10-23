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

The p-th percentile is the value with p% of the data below it; quantile is the same idea written as a proportion (the 0.25 quantile = the 25th percentile).

1. **Sort the data.** Order is all a percentile uses. *Why order:* "how many values are below this one?" only needs ranks, not distances ([[Ranks]]).
2. **Ask: what value has a given share of the data below it?** Half below is the median. A quarter below is the first quartile $Q_1$; three quarters below is $Q_3$ ([[Range and IQR]]).
3. **Generalise to any share p:** that value is the p-th percentile. Written as a proportion (0 to 1) it is called a **quantile**. *Why two names:* percentiles are friendlier for data; quantiles are the word used for theoretical distributions, as in "Q-Q plot".
4. **Theoretical distributions have quantiles too.** The 0.975 quantile of the [[Normal Distribution|standard normal]] is 1.96: 97.5% of the area lies below it ([[Probability Distribution]]). *Why that matters:* critical values are quantiles ([[Critical Value]]), and a Q-Q plot compares data quantiles with normal quantiles ([[Q-Q Plot]]).
5. **With small samples there is no single exact answer**, because the cut can fall between two values. Software interpolates, and different programs use slightly different rules.

![[Percentiles - sorted swim data.png|700]]
The dashed lines cut the 12 sorted values into quarters. Q1 and Q3 fall between data values, so R interpolates.

Percentiles describe position and spread without being pulled by extreme values: the IQR, the box plot and outlier fences are built from them ([[Box Plot and Five-Number Summary]], [[Outliers]]). And every "look it up in the table" step in [[Descriptive vs Inferential Statistics|inference]] is really reading off a quantile.

For example:

The 12 swimsuit velocities from the book's wetsuit study: R's `quantile()` gives $Q_1$ = 1.365, median = 1.445, $Q_3$ = 1.505 m/s, so IQR = 0.14 m/s ([[Paired t-Test]]).

Common mistakes:

- **"The 90th percentile means 90% correct."** It means 90% of the values are below it.
- **"Quartiles must be data values."** With interpolation they can fall between values.

See also: [[Proportions and Percentages]], [[Median]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
