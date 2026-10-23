---
type: atomic
tags:
  - r-statistics
aliases:
  - "shapiro.test"
  - "Shapiro-Wilk in R"
status: seedling
---

**In one line:** `shapiro.test(x)` runs the Shapiro–Wilk normality test; a large p-value means no evidence against normality.

> [!info] Before this, it helps to know
> [[Normality Checks]] · [[aggregate() and by()]]

## Start from zero
1. **Normality is an [[Test Assumptions|assumption]] of t-tests and ANOVA** ([[Normality Checks]]).
2. **Test whatever the test actually assumes is normal:**

```r
shapiro.test(COVID$distress)                          # one sample
shapiro.test(COVIDtime$April - COVIDtime$March)       # paired: the DIFFERENCES
by(COVIDkids$March, COVIDkids$child12, shapiro.test)  # two-sample: each group
by(frust$score, frust$major, shapiro.test)            # ANOVA: each group
shapiro.test(residuals(frustration.aov))              # or the model residuals
ggpubr::ggqqplot(COVID$distress)                      # always pair with a picture
```

3. **Why the differences for paired data:** the paired test only uses them ([[Paired t-Test]]). **Why each group or the residuals:** the errors around each group mean are what must be normal ([[Residuals]], [[aggregate() and by()]]).
4. **Read it backwards from usual:** a large p means no evidence against normality, which is what you want ([[Null and Alternative Hypotheses]]).
5. **Always pair it with a picture.** *Why:* with large $n$ it flags trivial departures; with small $n$ it misses real ones ([[Q-Q Plot]]).

## See it

![[QQ plots - normal vs skewed.png|700]]
*What to look at:* If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals [[Shape of a Distribution|skew]].

## Why it exists
A formal check to go with the [[Histogram|histogram]] and Q-Q plot ([[Normality Checks]]).

## A tiny example
`W = 0.97, p-value < 2.2e-16` on n = 939 → normality rejected, but with n that large the CLT supports proceeding with caution and a nonparametric confirmation ([[Central Limit Theorem]]).

## Common confusions
- **"Small p is good."** Small p rejects normality.

## Connections
- **Builds on:** [[Normality Checks]]
- **Leads to:** [[Nonparametric Alternatives]], [[aov()]]
- **Part of:** [[MOC - R for Statistics]]
