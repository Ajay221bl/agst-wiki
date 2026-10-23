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

Ggpubr ("ggplot publication ready") wraps ggplot2 in simple functions for box plots, scatter plots, mean ± SE plots, [[Histogram|density plots]] and Q-Q plots, and can print a test's p-value on the plot.

1. **Base plots work, but publication-style plots with group colours and test results take many lines** ([[hist() and boxplot()]]).
2. **ggpubr wraps them in one function per plot** ([[R Packages]], [[Plots for Two Variables]]):

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

3. **Why `add = "mean"`:** the box shows the [[Median|median]], and the mean marker shows what ANOVA compares. **Why `mean_se`:** error bars of ± 1 SE show how precisely each mean is known ([[Standard Error]]).
4. **Why `ggqqplot`:** it adds a confidence band, so you can see which deviations are bigger than expected ([[Q-Q Plot]]).
5. Other tools: `lattice` (histograms by group) and `gridExtra::grid.arrange(p1, p2, ...)` to combine plots.

Publication-quality plots in one line, with mean markers (`add = "mean"`) for comparing means.

For example:

`ggboxplot(..., add = "mean")` puts a dot at each group mean on top of the median-based box ([[Box Plot and Five-Number Summary]]).

Common mistakes:

- **"A p-value on the plot replaces the analysis."** It skips the [[Test Assumptions|assumption]] checks; run the full workflow.

See also: [[Normality Checks]], [[emmeans() and cld()]].
