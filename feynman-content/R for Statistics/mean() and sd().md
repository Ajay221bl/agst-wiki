---
type: atomic
tags:
  - r-statistics
aliases:
  - "mean()"
  - "sd()"
  - "median()"
  - "na.rm"
status: seedling
---

`mean(x)`, `median(x)` and `sd(x)` work out the basic summaries. All of them return NA (missing) if any value is missing, unless you add `na.rm = TRUE`.

The basic summaries are one word each. The only trap is missing values. Each basic summary has a one-word R function ([[Mean]], [[Standard Deviation]]):

```r
mean(d$ACE_total, na.rm = TRUE)
median(d$ACE_total, na.rm = TRUE)
sd(d$MHSAS_sum, na.rm = TRUE)
sd(d[, 15], na.rm = TRUE)          # same, by column number
var(x); range(x); IQR(x)
```

`na.rm = TRUE` ("NA remove") tells the function to drop missing values first. Without it, one missing value makes the whole answer `NA`, because R won't guess: it can't know the mean of values it doesn't have ([[Missing Data]]). `sd()` and `var()` divide by $n - 1$ ([[Why we divide by n minus 1]]). For groups, use `aggregate()` ([[aggregate() and by()]]).

For example:

```r
x <- c(1, 2, 3, 6, NA)
mean(x)                # NA
mean(x, na.rm = TRUE)  # 3
```

R refuses to guess, which is a feature, not a bug. An NA answer doesn't usually mean a bug. It usually means there are missing values: add `na.rm = TRUE` and report how many there were.

Try it yourself. `mean(x)` returns `NA`. Why, and what's the fix? There's at least one missing value in `x`, and R won't guess what to do with it. Use `mean(x, na.rm = TRUE)`, and say in your write-up that missing values were dropped.

See also: [[describe() and describeBy()]].
