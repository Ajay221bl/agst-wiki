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

These are base R's quick plots for exploring data: `hist()` for one [[Types of Data|quantitative]] variable, `boxplot(y ~ group)` for comparing groups, plus `plot()`, `barplot()`, `mosaicplot()` and `qqnorm()`.

Plot before testing ([[Why visualize data before testing]]). Base R has a function for each of the common plots ([[Histogram]], [[Box Plot and Five-Number Summary]]):

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

Some of these choices have reasons:
- The mean and [[Median|median]] lines show skew at a glance, from the gap between them ([[Shape of a Distribution]]).
- `boxplot(score ~ major)` shows side-by-side boxes, which is what ANOVA will test ([[Plots for Two Variables]]).
- `beside = TRUE` puts bars side by side, so they share a baseline; stacked bars don't ([[Plots for Categorical Data]]).
- `qqline` adds a reference line, which makes departures from normality visible ([[Q-Q Plot]]).

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree numbers: the box is the [[Range and IQR|middle half]] (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

These give fast looks at shape, [[Outliers|outliers]] and group differences before any test.

For example, if the mean line sits far to the right of the median line on a histogram, the data are skewed to the right.

A bar graph and a histogram aren't the same function. A factor goes to `plot()` or `barplot()`; a number goes to `hist()`.

See also: [[ggpubr Plots]], [[Normality Checks]].
