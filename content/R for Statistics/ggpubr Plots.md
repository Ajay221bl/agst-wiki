---
type: atomic
tags:
  - r-statistics
aliases:
  - "ggpubr"
  - "ggboxplot"
  - "ggscatter"
  - "ggqqplot"
  - "stat_compare_means"
  - "ggplot2"
status: seedling
---

The ggpubr package ("ggplot publication ready") wraps ggplot2 in simple functions for box plots, scatter plots, plots of means with standard error (SE) bars, [[Histogram|density plots]] and Q-Q plots. It can also print a test's p-value on the plot.

A good plot communicates in seconds what a table takes minutes to say. Base R plots work, but publication-style plots with group colours and test results take many lines ([[hist() and boxplot()]]). ggpubr wraps each one in a single function ([[R Packages]], [[Plots for Two Variables]]):

```r
library(ggpubr)
ggscatter(d, x = "x", y = "y", add = "reg.line", cor.coef = TRUE)   # line + r and p
ggboxplot(frust, x = "major", y = "score", color = "major",
          palette = "nejm", add = "mean") +                     # journal palettes
  stat_compare_means(method = "anova")                          # prints the ANOVA p-value
ggbarplot(frust, x = "major", y = "score", add = "mean_se")
ggline(frust, x = "major", y = "score", add = "mean_se")
ggdensity(frust, x = "score", color = "major")
ggqqplot(x)
```

Use `add = "mean"` because the box shows the [[Median|median]], while the mean marker shows what ANOVA compares. Use `mean_se` because error bars of ± 1 standard error show how precisely each mean is known ([[Standard Error]]). `ggqqplot` adds a confidence band, so you can see which departures are bigger than expected ([[Q-Q Plot]]). Other useful tools are `lattice` (histograms by group) and `gridExtra::grid.arrange(p1, p2, ...)` to combine plots.

For example, `ggboxplot(..., add = "mean")` puts a dot at each group mean on top of the median-based box ([[Box Plot and Five-Number Summary]]).

Make the plot beautiful, but keep the analysis honest. A p-value on the plot doesn't replace the analysis. It skips the [[Test Assumptions|assumption]] checks, so run the full workflow.

See also: [[Normality Checks]], [[emmeans() and cld()]].
