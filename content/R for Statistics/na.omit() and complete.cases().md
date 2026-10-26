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

`na.omit(d)` drops every row that has a missing value (NA) in any column. `d[complete.cases(d), ]` does the same, and is easy to aim at only the columns you need.

Dropping missing data is easy. Dropping only what you meant to is the skill. Missing values stop many functions and change $n$ ([[Missing Data]]). Decide which rows to keep, then drop the rest on purpose:

```r
d <- na.omit(d)                                     # any NA anywhere → row dropped
COVIDtime <- COVID[, c(7, 8)]                       # keep only the columns needed
COVIDtime <- COVIDtime[complete.cases(COVIDtime), ] # 1000 → 979 rows
Amelia::missmap(d); dev.off()                       # picture of where NAs are
```

Keep only the needed columns first. `na.omit()` drops a row if *any* column is missing, so an unrelated empty column could throw away good data ([[Data Frames]]). Dropping on purpose means you know your $n$, and the degrees of freedom in the test output should match it ([[Why use degrees of freedom as a sanity check]]). Look at where the missing values are first: if they follow a pattern, the complete rows may be biased ([[Sampling Bias]]).

Tests need complete observations, but dropping rows changes $n$, the degrees of freedom, and possibly who is in the sample. So select the needed columns, then drop, then **record the count**.

For example, in a COVID survey, `na.omit` on the full data left 939 rows for a one-sample test (938 degrees of freedom). The paired analysis, which kept only the March and April columns, kept 979. Different choices give a different $n$.

Choose your columns first, then clean. na.omit doesn't only remove missing values in the variable you are analysing; it looks at every column.

Try it yourself. Your data have 10 rows, and 2 of them have a blank in a column you're not using. What happens if you run `na.omit()` on the whole table? Those 2 rows disappear, and your test runs on 8 rows. Select the columns you need first, then drop missing values.

See also: [[Degrees of Freedom]], [[t.test()]].
