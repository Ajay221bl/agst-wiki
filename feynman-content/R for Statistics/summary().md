---
type: atomic
tags:
  - r-statistics
aliases:
  - "summary"
status: seedling
---

`summary()` prints a quick overview. For numbers it gives the five-number summary plus the mean and the count of missing values; for factors, the count in each level; and for fitted models, their results table.

Look before you test. This is the quickest look there is. Before any test, look at the numbers ([[Why visualize data before testing]]). `summary()` gives the quick look:

```r
summary(d)              # every column
summary(d$ACE_total)    # one variable: Min, 1st Qu., Median, Mean, 3rd Qu., Max, NA's
summary(frustration.aov)   # on an aov object: the ANOVA table
```

For a number it gives the five-number summary plus the mean and the number of missing values ([[Box Plot and Five-Number Summary]]). The minimum and maximum catch typing errors, a gap between the mean and median hints at skew, and the missing count tells you how many rows a test will drop ([[Missing Data]]).

It is a "generic" function: what it prints depends on what you give it. A data frame gives a summary of each column ([[Data Frames]]); a fitted `aov` model gives the ANOVA table ([[aov()]]). One line gives the centre, spread, range and missing data for every variable, which makes it a good first check after reading in data.

For example, a mean much bigger than the [[Median|median]] in the output means [[Shape of a Distribution|right skew]], so report the median ([[Why the median beats the mean for skewed data]]).

Know what a tool leaves out, not only what it gives. summary() doesn't give the [[Standard Deviation|standard deviation]]. Use `sd()` or `describe()` for that ([[mean() and sd()]], [[describe() and describeBy()]]).

Try it yourself. You run `summary()` on a column and see `NA's: 2`. What does that tell you? Two values are missing. Before testing, decide how to handle them, and say what you did.
