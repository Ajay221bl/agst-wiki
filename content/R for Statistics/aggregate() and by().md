---
type: atomic
tags:
  - r-statistics
aliases:
  - "aggregate"
  - "by"
  - "group summaries"
status: seedling
---

`aggregate(y ~ group, data = d, FUN = mean)` works out one [[Parameter vs Statistic|statistic]] for each group. `by(d$y, d$group, f)` runs any function, such as summary or shapiro.test, separately for each group.

Comparing groups starts with a summary of each group ([[Factors and Levels]]). `aggregate()` applies one function to the response in each group, using the formula `response ~ group` ([[Functions and Arguments]]):

```r
aggregate(score ~ major, data = frust, FUN = mean)   # group means
aggregate(score ~ major, data = frust, FUN = sd)     # group SDs
by(d, d$REGION, summary)                             # full summary per region
by(frust$score, frust$major, shapiro.test)           # normality per group
```

The group means are the effect you are testing. The group standard deviations (SD) are a quick check of equal variances ([[Homogeneity of Variance]]). `by()` runs any function on each group's slice of the data, which is how you get a Shapiro–Wilk test for each group ([[shapiro.test()]]).

t-tests and ANOVA compare groups, so every check (centre, spread, [[Normality Checks|normality]]) has to be done group by group. Similar group SDs are the first, informal sign that equal variances are reasonable.

For example, group SDs of 4.1, 4.8, 5.2 and 3.9 give a largest-to-smallest [[Variance|variance]] [[Ratios and Fractions|ratio]] of about 1.8, well under 9:1.

One Shapiro test on all the data isn't enough for ANOVA. Check each group, or the [[Residuals|residuals]].

See also: [[leveneTest()]], [[aov()]].
