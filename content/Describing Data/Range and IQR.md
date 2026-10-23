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

**In one line:** the range is the biggest value minus the smallest; the interquartile range (IQR) is the spread of the middle half of the data, $Q_3 - Q_1$.

> [!info] Before this, it helps to know
> [[Median]] (quartiles split the data the same way) · [[Percentiles and Quantiles]] (Q1 and Q3 are percentiles)

## Start from zero
1. **Spread, simplest version: how far apart are the extremes?** **Range** = max − min.
2. **Problem: the range depends on just two values**, the two most extreme. One outlier inflates it ([[Outliers]]).
3. **Fix: ignore the extremes and measure the middle.** Sort the data and cut it into four equal parts. The cut points are the **quartiles** ([[Percentiles and Quantiles]]):
   - $Q_1$ (25th percentile): a quarter of the data below
   - $Q_2$ = the median ([[Median]])
   - $Q_3$ (75th percentile): three quarters below
4. **IQR = $Q_3 - Q_1$**, the width of the middle half. *Why it's robust:* it ignores the top and bottom quarters, so outliers can't move it.
5. **It pairs with the median** (both depend only on order), and it builds the box plot and the outlier fences ([[Box Plot and Five-Number Summary]], [[Outliers]]).

## See it

![[Box plot anatomy - canopy trees.png|700]]
*What to look at:* The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

## Why it exists
Both describe spread. The range depends on just two values, the two most extreme ones, so a single outlier inflates it. The IQR ignores the top and bottom quarters, so it is **robust**, and it pairs naturally with the median. It is also the ruler for the box-plot outlier fences, $Q_1 - 1.5\,IQR$ and $Q_3 + 1.5\,IQR$ ([[Outliers]]).

## A tiny example
Canopy tree heights (n = 22): min 25.2, $Q_1$ 35.2, median 37.45, $Q_3$ 40.5, max 48 m.
- Range = 48 − 25.2 = **22.8 m**
- IQR = 40.5 − 35.2 = **5.3 m**
- 1.5 × IQR = 7.95 → fences at 27.25 and 48.45

## Common confusions
- **"The IQR contains the middle 50% of the data, so it's half the range."** Not in general; it depends on the shape.
- **"Quartiles are always data values."** Software uses several rules and may interpolate.

## Connections
- **Builds on:** [[Median]], [[Percentiles and Quantiles]]
- **Leads to:** [[Box Plot and Five-Number Summary]], [[Outliers]], [[Standard Deviation]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4)
