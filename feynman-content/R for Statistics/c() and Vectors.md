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

`c()` combines values into a vector, R's basic list of values of the same type. Every column of a data frame is a vector.

Everything in R is built from lists of values, and `c()` is how you make one. One variable has many values ([[Variable and Observation]]), and R holds them together in a **vector**. `c()` combines values into one; the c stands for "combine":

```r
x <- c(2.5, 4, 2, 0.5)       # numeric vector
majors <- c("business", "English", "math", "psychology")   # character vector
```

A vector holds one kind of thing. Numbers and text don't mix; if they are mixed, everything becomes text. This matters because a numeric column with one stray word can't be averaged ([[Missing Data]]).

Functions work on whole vectors at once: `mean(x)`, `x - 1`, `length(x)`. That is handy: `x - mean(x)` gives every deviation from the mean in one line ([[Deviations from the Mean]]). A column of a data frame is a vector ([[Data Frames]]).

Small data sets can be typed straight in, which is handy for practice problems. And many arguments take vectors: `na.strings = c("", ".", "NA")`, `levels = c("Poor", "Fair", ...)`, `d[, c(7, 8)]`.

For example, the chicken before-and-after differences, typed in by hand:
```r
diffs <- c(2.5, 4, 2, 0.5)   # post - pre for four chickens
mean(diffs)                  # 2.25
t.test(diffs, mu = 0)        # a paired t-test is a one-sample test on the differences
```

One vector, one type. A vector can't mix numbers and text: mixing turns everything into text.

Try it yourself. What does `c(1, 2, 3) * 2` give? `2 4 6`. R does the multiplication to every element at once, which is why vectors make statistics in R so short to write.

See also: [[R Objects and Assignment]], [[t.test()]], [[factor()]].
