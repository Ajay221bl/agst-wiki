---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "leveneTest"
  - "Levene's test in R"
  - "car package"
status: seedling
---

`car::leveneTest(y ~ group, data = d)` tests whether the groups have equal variances; a large p-value means homogeneity of variance looks fine.

1. **ANOVA assumes the groups share one [[Variance|variance]]** ([[Homogeneity of Variance]]).
2. **Levene's test checks it.** It runs an ANOVA on each value's distance from its group [[Median|median]] ([[Absolute Value]]); it lives in the `car` package ([[R Packages]]):

```r
library(car)
leveneTest(score ~ major, data = frust)
# Levene's Test for Homogeneity of Variance (center = median)
#        Df F value Pr(>F)
# group   3   ...    ...
```

3. **Why the median as the centre:** distances from the median are less affected by [[Shape of a Distribution|skew]] and [[Outliers|outliers]].
4. **Read it like Shapiro–Wilk: a large p means no evidence of unequal variances,** which is what you want. A small p means the pooled MSE is suspect ([[ANOVA Assumptions]]).

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

It checks the third ANOVA [[Test Assumptions|assumption]] formally ([[ANOVA Assumptions]]). Compare group SDs first with `aggregate()` ([[aggregate() and by()]]).

For example:

Pr(>F) = 0.08 → [[Why we never accept the null hypothesis|fail to reject]] at 0.05 → equal variances are plausible, "close but OK".

Common mistakes:

- **"The F here is the ANOVA F."** It is Levene's own [[Parameter vs Statistic|statistic]], about spreads, not means.

See also: [[aov()]].
