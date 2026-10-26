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

`factor()` tells R that a variable is categorical, with a fixed set of levels. ANOVA, grouped summaries and bar charts all need it.

R only knows what you tell it. If you don't tell it a variable is a group, it may treat it as a number. A categorical variable needs to be stored as categories ([[Types of Data]], [[Factors and Levels]]). Unless told otherwise, R stores text as "character" and numbers as "numeric". That is a problem for group codes: codes 1, 2, 3 would be treated as amounts, and `aov()` would fit a line instead of comparing groups. A factor is a categorical variable with a defined list of levels:

```r
d$year <- factor(d$year)                     # numbers → categories
d$HEALTH <- factor(d$HEALTH,
   levels = c("Poor", "Fair", "Good", "Very good", "Excellent"))   # set the order
levels(d$HEALTH)                             # list the levels
```

Levels are in alphabetical order unless you set them. The order matters because it decides the order in plots and the order of subtraction in `t.test()` and `TukeyHSD()`. `read.csv(..., stringsAsFactors = TRUE)` turns all text columns into factors when the file is read. Check the result with `str()` ([[str()]]).

Why it matters:
- If treatments coded 1–4 stay numeric, `aov()` treats them as one number, and the [[Ratios and Fractions|numerator]] degrees of freedom become 1 instead of 3 ([[Why use degrees of freedom as a sanity check]]).
- Levels default to **alphabetical** order, which sets the order of subtraction in `t.test(y ~ group)` and the order of bars and boxes ([[Two-Sample Independent t-Test]]).
- `plot()` only makes a bar chart from a factor ([[Plots for Categorical Data]]).

For example, `str()` before shows `$ trt: int 1 2 3 4 1 2 ...`. After `d$trt <- factor(d$trt)`, it shows `$ trt: Factor w/ 4 levels "1","2","3","4"`.

Tell R what kind of thing each variable is, and it will treat it right. Changing the order of the levels doesn't change the data. It only changes the order R uses.

Try it yourself. You have a column `dose` with values 1, 2 and 3 meaning low, medium and high. When should it be a factor, and when a number? A factor when you want a separate mean for each dose (one-way ANOVA). A number when you think the effect rises in a straight line with dose (regression).

See also: [[aov()]], [[t.test()]].
