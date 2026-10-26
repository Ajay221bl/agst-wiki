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

`psych::describe()` prints a fuller summary of every variable: n, mean, [[Standard Deviation|standard deviation]] (SD), [[Median|median]], trimmed mean, median absolute deviation (MAD), min, max, range, skew, kurtosis and standard error (SE). `describeBy()` does the same for each group.

`summary()` skips the SD and the shape of the data ([[summary()]]). `psych::describe()` gives a fuller table, including the SD and measures of shape such as skew ([[Mean]], [[Shape of a Distribution]]):

```r
psych::describe(d)
psych::describeBy(d$PHQ9_sum, group = d$REGION)
```

`describeBy()` does it for each group, because comparing groups needs each group's n, centre and spread side by side. Rows marked `*` are factors, so ignore their means: the "mean" of category codes means nothing ([[Types of Data]]). These functions come from a package ([[R Packages]]).

One call gives centre, spread and shape together, including skew and kurtosis, which `summary()` lacks. The grouped version is the descriptive first step before t-tests and ANOVA.

For example, a variable with mean 4.6, median 1.7 and skew 2.3 is strongly skewed to the right, so report the median.

The `se` column isn't the SD. It is the standard error of the mean ([[Standard Error]]).

See also: [[aggregate() and by()]], [[report()]].
