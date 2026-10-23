---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "center and spread"
status: seedling
---

Why report a measure of center **and** a measure of spread, every time?

A center says where the data sit; it says nothing about how scattered they are. Two groups can share a mean and be completely different. Spread is also what every test divides by, so without it you can't judge whether a difference in means is large or small.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they are identical. Only a spread measure shows how different they are.

1. The bank-robber example: "white male, 18–27, 170 lb" is a center. Add "7'3"" and the picture changes completely.
2. Groups 49, 50, 51 and 20, 50, 80 share a mean of 50 but have SDs of 1 and 30 ([[Standard Deviation]]).
3. Raw deviations from the mean always sum to zero, so spread needs squaring (variance) and a [[Squares and Square Roots|square root]] to return to the original units (SD) ([[Variance]]).
4. Spread is the yardstick for "big": [[Z-Score|z-scores]], t statistics and [[F-Distribution|F ratios]] all divide a difference by a spread ([[Test Statistic]]).
5. Pairings: mean with SD for roughly [[Shape of a Distribution|symmetric]] data; median with IQR or range for skewed data or [[Outliers|outliers]].

- Readers couldn't tell whether a 3-unit difference is huge or trivial.
- Unequal spreads between groups (an ANOVA [[Test Assumptions|assumption]]) would go unnoticed ([[Homogeneity of Variance]]).

See also: [[Mean]], [[Median]], [[Range and IQR]], [[Summation Notation]], [[Between- and Within-Group Variability]], [[Deviations from the Mean]], [[Why the median beats the mean for skewed data]], [[Coefficient of Variation]].
