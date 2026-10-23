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

`mean(x)`, `median(x)` and `sd(x)` compute the basic summaries, and all return NA if any value is missing unless you add `na.rm = TRUE`.

1. **Each summary in Describing Data has a one-word R function** ([[Mean]], [[Standard Deviation]]):

```r
mean(d$ACE_total, na.rm = TRUE)
median(d$ACE_total, na.rm = TRUE)
sd(d$MHSAS_sum, na.rm = TRUE)
sd(d[, 15], na.rm = TRUE)          # same, by column number
var(x); range(x); IQR(x)
```

2. **Why `na.rm = TRUE`:** one missing value makes the answer `NA`, because R won't guess. This tells it to drop the missing values first ([[Missing Data]]).
3. **`sd()` and `var()` divide by $n - 1$** ([[Why we divide by n minus 1]]).
4. **For groups, use `aggregate()`** ([[aggregate() and by()]]).

`na.rm = TRUE` ("NA remove") makes the function skip missing values. Without it, one NA makes the whole answer NA, which is R being honest: it can't know the mean of values it doesn't have.

For example:

```r
x <- c(1, 2, 3, 6, NA)
mean(x)                # NA
mean(x, na.rm = TRUE)  # 3
```

Common mistakes:

- **"NA output means a bug."** It usually means missing values; add `na.rm = TRUE` and report how many there were.

See also: [[describe() and describeBy()]].
