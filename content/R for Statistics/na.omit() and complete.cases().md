---
type: atomic
tags:
  - r-statistics
aliases:
  - "na.omit"
  - "complete.cases"
  - "missmap"
  - "removing NA"
status: seedling
---

**In one line:** `na.omit(d)` drops every row that has a missing value in any column; `d[complete.cases(d), ]` does the same, and is easy to aim at only the columns you need.

> [!info] Before this, it helps to know
> [[Missing Data]] · [[Data Frames]]

## Start from zero
1. **Missing values stop many functions and change $n$** ([[Missing Data]]).
2. **Decide which rows to keep, then drop the rest explicitly:**

```r
d <- na.omit(d)                                     # any NA anywhere → row dropped
COVIDtime <- COVID[, c(7, 8)]                       # keep only the columns needed
COVIDtime <- COVIDtime[complete.cases(COVIDtime), ] # 1000 → 979 rows
Amelia::missmap(d); dev.off()                       # picture of where NAs are
```

3. **Why keep only the needed columns first:** `na.omit()` drops a row if *any* column is missing, so an unrelated empty column could throw away good data ([[Data Frames]]).
4. **Why drop explicitly:** then you know your $n$, and the df in the test output should match it ([[Why use degrees of freedom as a sanity check]]).
5. **Look at where the NAs are first.** *Why:* if missingness follows a pattern, the complete rows may be biased ([[Sampling Bias]]).

## Why it exists
Tests need complete observations, but dropping rows changes $n$, the df and possibly who is in the sample. So select the needed columns first, then drop, then **record the count** ([[Missing Data]]).

## A tiny example
COVID one-sample: `na.omit` on the full data left 939 rows (df 938); the paired analysis, after keeping only March and April, kept 979. Different choices, different $n$.

## Common confusions
- **"na.omit only removes NAs in the variable I'm analyzing."** It looks at every column.

## Connections
- **Builds on:** [[Missing Data]], [[Data Frames]]
- **Leads to:** [[Degrees of Freedom]], [[t.test()]]
- **Part of:** [[MOC - R for Statistics]]
