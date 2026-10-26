---
type: atomic
tags:
  - describing-data
aliases:
  - "box plot"
  - "boxplot"
  - "five-number summary"
  - "modified box plot"
  - "whiskers"
  - "whisker"
status: seedling
---

The five-number summary is the minimum, the first quartile ($Q_1$), the median, the third quartile ($Q_3$) and the maximum. A box plot draws these five numbers as a box with whiskers, and marks unusual values separately.

The box runs from $Q_1$ to $Q_3$, so it holds the middle half of the data. Its length is the interquartile range (IQR) ([[Range and IQR]]). The line inside the box is the [[Median|median]], not the [[Mean|mean]]: everything in a box plot is based on the order of the values, which makes it hard for extreme values to distort. The whiskers reach out towards the smallest and largest values.

Most software draws a "modified" box plot. Any point below $Q_1 - 1.5\,IQR$ or above $Q_3 + 1.5\,IQR$ is drawn as a separate dot, an outlier, and the whiskers stop at the most extreme value that isn't one ([[Outliers]]).

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

Box plots are best for comparing groups. Boxes side by side show differences in centre and spread at a glance, which is exactly what t-tests and ANOVA go on to test ([[Plots for Two Variables]], [[One-Way ANOVA]]). Adding a marker for the mean shows skew. Because they are based on order, box plots also suit rank-based tests. Their limits: they can't show the [[Sample Size|sample size]], or whether a group has two peaks ([[Shape of a Distribution]], [[Mode]]).

For example, 22 canopy tree heights have the five-number summary 25.2 / 35.2 / 37.45 / 40.5 / 48 m.
- IQR = 5.3, so 1.5 × IQR = 7.95.
- The upper fence is 40.5 + 7.95 = 48.45, so the maximum of 48 is **not** an outlier.
- The lower fence is 35.2 − 7.95 = 27.25, so the minimum of 25.2 **is** an outlier and is drawn as a dot.

The middle line is the median, not the mean. And long whiskers don't mean outliers: in a modified box plot, outliers are the separate dots beyond the whiskers. Check how your software defines them.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
