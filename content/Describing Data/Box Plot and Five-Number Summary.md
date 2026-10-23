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

The five-number summary is min, $Q_1$, median, $Q_3$, max, and a box plot draws it as a box (the middle half of the data) with whiskers and flagged outliers.

1. **Five numbers sketch a distribution:** min, $Q_1$, median, $Q_3$, max: the **five-number summary** ([[Range and IQR]]).
2. **Draw them.** The **box** runs from $Q_1$ to $Q_3$, so its length is the IQR: the middle half of the data.
3. **The line inside the box is the median, not the [[Mean|mean]].** ("Under pressure, someone will say it's the mean.") *Why the median:* everything in a box plot is order-based, so it's robust ([[Median]]).
4. **Whiskers** reach toward the min and max.
5. **In the modified box plot** (most software's default), points beyond $Q_1 - 1.5\,IQR$ or $Q_3 + 1.5\,IQR$ are drawn as separate dots (outliers), and the whiskers stop at the most extreme non-outlier ([[Outliers]]).
6. **Its real strength is comparison.** Boxes side by side show differences in centre and spread between groups at a glance, which is exactly what t-tests and ANOVA will test ([[Plots for Two Variables]]). Adding a mean marker shows skew.

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

Box plots are the best tool for **comparing groups** side by side in one window, which is exactly what t-tests and ANOVA do. They are rank-based, so they match nonparametric methods well.

Their limits: they **cannot show the [[Sample Size|sample size]] or [[Shape of a Distribution|modality]]**. A [[Mode|bimodal]] group looks like any other box.

For example:

Canopy trees (n = 22): 25.2 / 35.2 / 37.45 / 40.5 / 48 m.
- IQR = 5.3; 1.5 × IQR = 7.95.
- Upper fence 40.5 + 7.95 = 48.45 → max 48 is **not** an outlier.
- Lower fence 35.2 − 7.95 = 27.25 → min 25.2 **is** an outlier and would be drawn as a dot.

Common mistakes:

- **"The middle line is the mean."** It is the median.
- **"Long whiskers mean outliers."** In a modified box plot, outliers are the separate dots; whiskers stop before them. Check how your software defines them.

See also: [[One-Way ANOVA]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
