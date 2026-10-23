---
type: atomic
tags:
  - r-statistics
aliases:
  - "describe"
  - "describeBy"
  - "psych package"
status: seedling
---

**In one line:** `psych::describe()` prints n, mean, [[Standard Deviation|SD]], [[Median|median]], trimmed mean, MAD, min, max, range, skew, kurtosis and SE for every variable; `describeBy()` does it per group.

> [!info] Before this, it helps to know
> [[R Packages]] · [[Mean]] · [[Shape of a Distribution]]

## Start from zero
1. **`summary()` skips the SD and the shape** ([[summary()]]).
2. **`psych::describe()` gives a fuller table:** n, mean, SD, median, min, max, range, skew, kurtosis, SE ([[Mean]], [[Shape of a Distribution]]):

```r
psych::describe(d)
psych::describeBy(d$PHQ9_sum, group = d$REGION)
```

3. **`describeBy()` does it per group.** *Why:* comparing groups needs each group's n, centre and spread side by side.
4. **Rows marked `*` are factors; ignore their means.** *Why:* the "mean" of category codes means nothing ([[Types of Data]]). It comes from a package ([[R Packages]]).

## Why it exists
One call gives center, spread and shape together, including skew and kurtosis, which `summary()` lacks ([[summary()]]). Grouped versions are the descriptive first step before t-tests and ANOVA.

## A tiny example
A variable with mean 4.6, median 1.7 and skew 2.3 → strongly right-skewed → report the median.

## Common confusions
- **"The se column is the SD."** It is the standard error of the mean ([[Standard Error]]).

## Connections
- **Builds on:** [[R Packages]], [[Mean]], [[Shape of a Distribution]]
- **Leads to:** [[aggregate() and by()]], [[report()]]
- **Part of:** [[MOC - R for Statistics]]
