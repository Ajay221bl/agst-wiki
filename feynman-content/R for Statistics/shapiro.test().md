---
type: atomic
tags:
  - r-statistics
aliases:
  - "shapiro.test"
  - "Shapiro-Wilk in R"
status: seedling
---

`shapiro.test(x)` runs the Shapiro–Wilk test of normality. A large p-value means there is no evidence against normality.

Checking an assumption is only useful if you check the right thing. Normality is an [[Test Assumptions|assumption]] of t-tests and ANOVA ([[Normality Checks]]). Test whatever the test actually assumes is normal:

```r
shapiro.test(COVID$distress)                          # one sample
shapiro.test(COVIDtime$April - COVIDtime$March)       # paired: the DIFFERENCES
by(COVIDkids$March, COVIDkids$child12, shapiro.test)  # two-sample: each group
by(frust$score, frust$major, shapiro.test)            # ANOVA: each group
shapiro.test(residuals(frustration.aov))              # or the model residuals
ggpubr::ggqqplot(COVID$distress)                      # always pair with a picture
```

For paired data, test the differences, because the paired test only uses them ([[Paired t-Test]]). For two-sample tests and ANOVA, test each group or the residuals, because the errors around each group mean are what must be normal ([[Residuals]], [[aggregate() and by()]]).

Read it the opposite way from usual: a large p means no evidence against normality, which is what you want ([[Null and Alternative Hypotheses]]). Always pair it with a picture. With a large $n$ it flags trivial departures, and with a small $n$ it misses real ones ([[Q-Q Plot]]).

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals [[Shape of a Distribution|skew]].

It is a formal check to go with the [[Histogram|histogram]] and the Q-Q plot.

For example, `W = 0.97, p-value < 2.2e-16` on n = 939 means normality is rejected. But with an n that large, the central limit theorem supports going ahead with caution, confirmed by a nonparametric test ([[Central Limit Theorem]]).

Read the hypothesis before you read the p-value. A small p isn't good news: it rejects normality.

Try it yourself. `shapiro.test()` on one group gives a small p-value. Good or bad news? Bad: it's evidence that the group isn't normal. But look at a Q-Q plot too. With big samples this test flags tiny wobbles that don't matter.

See also: [[Nonparametric Alternatives]], [[aov()]].
