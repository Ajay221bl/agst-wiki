---
type: atomic
tags:
  - r-statistics
aliases:
  - "hist"
  - "boxplot"
  - "base R plots"
  - "abline"
  - "qqnorm"
  - "mosaicplot"
  - "barplot"
  - "plot()"
status: seedling
---

**In one line:** base R's quick exploratory plots: `hist()` for one [[Types of Data|quantitative]] variable, `boxplot(y ~ group)` for comparing groups, plus `plot()`, `barplot()`, `mosaicplot()` and `qqnorm()`.

> [!info] Before this, it helps to know
> [[Histogram]] · [[Box Plot and Five-Number Summary]]

## Start from zero
1. **Plot before testing** ([[Why visualize data before testing]]). Base R has a function for each plot in Describing Data ([[Histogram]], [[Box Plot and Five-Number Summary]]):

```r
hist(d$ACE_total, main = "ACE total", xlab = "ACE score", col = "lavender")
abline(v = mean(d$ACE_total, na.rm = TRUE), col = "red")      # mean line
abline(v = median(d$ACE_total, na.rm = TRUE), col = "blue")   # median line
boxplot(score ~ major, data = frust, col = c("salmon", "forestgreen"))
points(mean(d$ACE_total, na.rm = TRUE), pch = 19)             # mean marker
plot(d$HEALTH, main = "Health\nBar graph")                    # factor → bar graph; \n = new line
barplot(tab, beside = TRUE, legend = TRUE)                    # side-by-side bars
mosaicplot(table(d$PHYS_ACT, d$HEALTH))
qqnorm(x); qqline(x)                                          # Q-Q plot
colors()                                                      # built-in colour names
```

2. **Why the mean and [[Median|median]] lines:** the gap between them shows skew at a glance ([[Shape of a Distribution]]).
3. **Why `boxplot(score ~ major)`:** side-by-side boxes show what ANOVA will test ([[Plots for Two Variables]]).
4. **Why `beside = TRUE`:** side-by-side bars share a baseline, stacked ones don't ([[Plots for Categorical Data]]).
5. **Why `qqline`:** the reference line makes departures from normality visible ([[Q-Q Plot]]).

## See it

![[Box plot anatomy - canopy trees.png|700]]
*What to look at:* The canopy-tree numbers: the box is the [[Range and IQR|middle half]] (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

## Why it exists
Fast looks at shape, [[Outliers|outliers]] and group differences before any test ([[Why visualize data before testing]]).

## A tiny example
Mean line far right of the median line on a histogram → right skew.

## Common confusions
- **"Bar graph and histogram are the same function."** Factor → `plot()`/`barplot()`; number → `hist()`.

## Connections
- **Builds on:** [[Histogram]], [[Box Plot and Five-Number Summary]]
- **Leads to:** [[ggpubr Plots]], [[Normality Checks]]
- **Part of:** [[MOC - R for Statistics]]
