---
type: atomic
tags:
  - r-statistics
aliases:
  - "c()"
  - "vector"
  - "combine"
status: seedling
---

`c()` combines values into a vector, R's basic list of same-type values; every column of a data frame is a vector.

1. **One variable has many values** ([[Variable and Observation]]). R holds them together in a **vector**.
2. **`c()` combines values into one** (c for "combine"):

```r
x <- c(2.5, 4, 2, 0.5)       # numeric vector
majors <- c("business", "English", "math", "psychology")   # character vector
```

3. **A vector holds one kind of thing.** Numbers and text don't mix; if they do, everything becomes text. *Why it matters:* a numeric column with one stray word can't be averaged ([[Missing Data]]).
4. **Functions work on whole vectors at once:** `mean(x)`, `x - 1`, `length(x)`. *Why that's handy:* `x - mean(x)` gives every deviation in one line ([[Deviations from the Mean]]).
5. **A column of a data frame is a vector** ([[Data Frames]]).

Small datasets can be typed straight in, which is handy for practice problems. And many arguments take vectors: `na.strings = c("", ".", "NA")`, `levels = c("Poor", "Fair", ...)`, `d[, c(7, 8)]`.

For example:

The chicken pre/post differences, typed in by hand:
```r
diffs <- c(2.5, 4, 2, 0.5)   # post - pre for four chickens
mean(diffs)                  # 2.25
t.test(diffs, mu = 0)        # a paired t-test is a one-sample test on the differences
```

Common mistakes:

- **"A vector can mix numbers and text."** Mixing turns everything into text.

See also: [[R Objects and Assignment]], [[t.test()]], [[factor()]].
