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

`car::leveneTest(y ~ group, data = d)` tests whether the groups have equal variances. A large p-value means equal variances look fine.

Before comparing means, check that the groups have similar noise. ANOVA assumes the groups share one [[Variance|variance]] ([[Homogeneity of Variance]]). Levene's test checks this. It runs an ANOVA on each value's distance from its group [[Median|median]] ([[Absolute Value]]), and it lives in the `car` package ([[R Packages]]):

```r
library(car)
leveneTest(score ~ major, data = frust)
# Levene's Test for Homogeneity of Variance (center = median)
#        Df F value Pr(>F)
# group   3   ...    ...
```

It uses the median as the centre because distances from the median are less affected by [[Shape of a Distribution|skew]] and [[Outliers|outliers]]. Read it like a Shapiro–Wilk test: a large p means no evidence of unequal variances, which is what you want. A small p means the pooled within-group variance, the mean square error, can't be trusted ([[ANOVA Assumptions]]).

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

It is the formal check of ANOVA's third [[Test Assumptions|assumption]]. Compare the group standard deviations first with `aggregate()` ([[aggregate() and by()]]).

For example, Pr(>F) = 0.08 means you [[Why we never accept the null hypothesis|fail to reject]] at 0.05, so equal variances are believable, though the result is close.

Same letter, different question. The F here isn't the ANOVA F. It is Levene's own [[Parameter vs Statistic|statistic]], about spreads, not means.

Try it yourself. `leveneTest()` gives a large p-value. Can you go ahead with a pooled ANOVA? Yes, as far as variances go. A large p means no evidence that the spreads differ. A small one would be the warning.

See also: [[aov()]].
