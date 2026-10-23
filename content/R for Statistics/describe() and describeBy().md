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

`psych::describe()` prints n, mean, [[Standard Deviation|SD]], [[Median|median]], trimmed mean, MAD, min, max, range, skew, kurtosis and SE for every variable; `describeBy()` does it per group.

1. **`summary()` skips the SD and the shape** ([[summary()]]).
2. **`psych::describe()` gives a fuller table:** n, mean, SD, median, min, max, range, skew, kurtosis, SE ([[Mean]], [[Shape of a Distribution]]):

```r
psych::describe(d)
psych::describeBy(d$PHQ9_sum, group = d$REGION)
```

3. **`describeBy()` does it per group.** *Why:* comparing groups needs each group's n, centre and spread side by side.
4. **Rows marked `*` are factors; ignore their means.** *Why:* the "mean" of category codes means nothing ([[Types of Data]]). It comes from a package ([[R Packages]]).

One call gives center, spread and shape together, including skew and kurtosis, which `summary()` lacks ([[summary()]]). Grouped versions are the descriptive first step before t-tests and ANOVA.

For example:

A variable with mean 4.6, median 1.7 and skew 2.3 → strongly right-skewed → report the median.

Common mistakes:

- **"The se column is the SD."** It is the standard error of the mean ([[Standard Error]]).

See also: [[aggregate() and by()]], [[report()]].
