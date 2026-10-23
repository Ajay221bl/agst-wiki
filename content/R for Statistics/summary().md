---
type: atomic
tags:
  - r-statistics
aliases:
  - "summary"
status: seedling
---

`summary()` prints a quick overview: for numbers the five-number summary plus the mean and NA count, for factors the count per level, and for fitted models their results table.

1. **Before any test, look at the numbers** ([[Why visualize data before testing]]).
2. **`summary()` gives the quick look:**

```r
summary(d)              # every column
summary(d$ACE_total)    # one variable: Min, 1st Qu., Median, Mean, 3rd Qu., Max, NA's
summary(frustration.aov)   # on an aov object: the ANOVA table
```

3. **For a number it gives the five-number summary plus the mean and the NA count** ([[Box Plot and Five-Number Summary]]). *Why those:* min/max catch typos, mean vs median hints at skew, and NA's tells you how many rows a test will drop ([[Missing Data]]).
4. **It is a "generic" function: what it prints depends on what you give it.** A data frame gives column summaries ([[Data Frames]]); a fitted `aov` model gives the ANOVA table ([[aov()]]).

One line gives center, spread, range and missing data for every variable: a first sanity check after importing ([[Missing Data]]). On a model it gives the test results.

For example:

Mean much bigger than [[Median|median]] in the output → [[Shape of a Distribution|right skew]] → report the median ([[Why the median beats the mean for skewed data]]).

Common mistakes:

- **"summary() gives the [[Standard Deviation|SD]]."** It doesn't; use `sd()` or `describe()` ([[mean() and sd()]], [[describe() and describeBy()]]).
