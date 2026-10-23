---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "center and spread"
status: seedling
---

Why report a measure of centre **and** a measure of spread, every time?

A centre says where the data sit, but nothing about how scattered they are. Two groups can share a mean and be completely different. Spread is also what every test divides by, so without it you can't judge whether a difference in means is large or small.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they are identical. Only a spread measure shows how different they are.

1. Imagine a description of a bank robber: "white male, 18–27, 170 lb". That is a centre. Add "7'3"" and the picture changes completely.
2. The groups 49, 50, 51 and 20, 50, 80 share a mean of 50, but have standard deviations (SD) of 1 and 30 ([[Standard Deviation]]).
3. Raw deviations from the mean always add up to zero, so a measure of spread needs squaring (the variance) and then a [[Squares and Square Roots|square root]] to return to the original units (the SD) ([[Variance]]).
4. Spread is the yardstick for "big": [[Z-Score|z-scores]], t statistics and [[F-Distribution|F ratios]] all divide a difference by a spread ([[Test Statistic]]).
5. Report the mean with the SD for roughly [[Shape of a Distribution|symmetric]] data, and the median with the interquartile range (IQR) or the range for skewed data or data with [[Outliers|outliers]].

Without spread, readers couldn't tell whether a 3-unit difference is huge or trivial, and unequal spreads between groups, which break an ANOVA [[Test Assumptions|assumption]], would go unnoticed ([[Homogeneity of Variance]]).

See also: [[Mean]], [[Median]], [[Range and IQR]], [[Summation Notation]], [[Between- and Within-Group Variability]], [[Deviations from the Mean]], [[Why the median beats the mean for skewed data]], [[Coefficient of Variation]].
