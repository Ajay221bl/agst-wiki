---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "factor"
  - "levels()"
  - "stringsAsFactors"
  - "relevel"
status: seedling
---

`factor()` tells R a variable is categorical, with a fixed set of levels; ANOVA, grouped summaries and bar charts all need it.

1. **A categorical variable needs to be stored as categories** ([[Types of Data]], [[Factors and Levels]]).
2. **R stores text as "character" and numbers as "numeric" unless told otherwise.** *Why that's a problem:* group codes 1, 2, 3 would be treated as a quantity, and `aov()` would fit a line instead of comparing groups.
3. **A factor is a categorical variable with a defined list of levels:**

```r
d$year <- factor(d$year)                     # numbers → categories
d$HEALTH <- factor(d$HEALTH,
   levels = c("Poor", "Fair", "Good", "Very good", "Excellent"))   # set the order
levels(d$HEALTH)                             # list the levels
```

4. **Levels are alphabetical unless you set them.** *Why set them:* the order decides plot order and the order of subtraction in `t.test()` and `TukeyHSD()`.
5. **`read.csv(..., stringsAsFactors = TRUE)` converts all text columns to factors on import.** Check with `str()` ([[str()]]).

- If treatments coded 1–4 stay numeric, `aov()` treats them as one number and the [[Ratios and Fractions|numerator]] df becomes 1 instead of 3 ([[Why use degrees of freedom as a sanity check]]).
- Levels default to **alphabetical**, which sets the order of subtraction in `t.test(y ~ group)` and the order of bars and boxes ([[Two-Sample Independent t-Test]]).
- `plot()` only makes a bar chart from a factor ([[Plots for Categorical Data]]).

For example:

`str()` before: `$ trt: int 1 2 3 4 1 2 ...`. After `d$trt <- factor(d$trt)`: `$ trt: Factor w/ 4 levels "1","2","3","4"`.

Common mistakes:

- **"Re-levelling changes the data."** It only changes the order R uses.

See also: [[aov()]], [[t.test()]].
