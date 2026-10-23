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

`aggregate(y ~ group, data = d, FUN = mean)` computes one [[Parameter vs Statistic|statistic]] per group; `by(d$y, d$group, f)` runs any function (summary, shapiro.test) separately for each group.

1. **Comparing groups starts with each group's summary** ([[Factors and Levels]]).
2. **`aggregate()` applies one function to the response in each group,** using the formula `response ~ group` ([[Functions and Arguments]]):

```r
aggregate(score ~ major, data = frust, FUN = mean)   # group means
aggregate(score ~ major, data = frust, FUN = sd)     # group SDs
by(d, d$REGION, summary)                             # full summary per region
by(frust$score, frust$major, shapiro.test)           # normality per group
```

3. **Why group means:** they're the effect you're testing. **Why group SDs:** a quick screen for equal variances ([[Homogeneity of Variance]]).
4. **`by()` runs any function on each group's slice,** which is how you get a Shapiro–Wilk test per group ([[shapiro.test()]]).

t-tests and ANOVA compare groups, so every check (center, spread, [[Normality Checks|normality]]) has to be done per group. Similar group SDs are the first, informal sign that equal variances are reasonable ([[Homogeneity of Variance]]).

For example:

Group SDs 4.1, 4.8, 5.2, 3.9 → largest/smallest [[Variance|variance]] [[Ratios and Fractions|ratio]] about 1.8 → well under 9:1.

Common mistakes:

- **"One Shapiro test on all the data is enough for ANOVA."** Check each group (or the [[Residuals|residuals]]).

See also: [[leveneTest()]], [[aov()]].
