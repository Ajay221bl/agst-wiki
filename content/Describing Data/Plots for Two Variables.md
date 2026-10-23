---
type: atomic
tags:
  - describing-data
aliases:
  - "bivariate visualization"
  - "scatter plot"
  - "comparison box plots"
  - "mean and SE plot"
  - "error bars"
status: seedling
---

The right plot for two variables depends on their types. Use a scatter plot for two quantitative variables, side-by-side box plots for a quantitative measurement compared across groups, and mosaic or grouped bar plots for two categorical variables.

The question about two variables is always "are they related?", and what a relationship can look like depends on their types ([[Types of Data]]). Pick the plot that shows that relationship directly:

| Variables | Plot | Later analysis |
|---|---|---|
| categorical × categorical | mosaic plot, side-by-side bars | chi-square test |
| quantitative × quantitative | **scatter plot** (± line, correlation $r$) | correlation, regression |
| quantitative response × categorical group | **comparison box plots** with [[Mean\|mean]] markers, overlaid densities, plots of the mean ± its standard error | t-tests, ANOVA |

Each plot is paired with the analysis that measures what it shows ([[Test Choice Guide]]). Plotting first lets you see the size and direction of an effect, and problems like [[Outliers|outliers]] or unequal spreads, before any p-value ([[Why visualize data before testing]]).

![[Plots for two variables.png|700]]
The plot follows the variable types: two quantitative variables give a scatter plot, a quantitative response by group gives side-by-side box plots, and two categorical variables give stacked or side-by-side bars.

Always plot. Data sets with identical means, standard deviations and [[Correlation|correlations]] can look completely different; the "Datasaurus" data sets are a famous example. A plot shows curves, clusters, outliers and unequal spreads that summary numbers hide.

For example, in a book example, female frog body size against clutch volume shows an upward trend with no extreme outliers, so summarizing it with a straight line is reasonable.

A significant correlation isn't necessarily a strong one: with a big sample, even weak correlations come out significant. Look at the plot and at $r$ itself ([[Effect Size]]). And error bars showing the mean ± its [[Standard Error|standard error]] don't show how spread out the data are. They show how uncertain the mean is, which shrinks as the sample grows, while the spread of the data doesn't.

See also: [[Box Plot and Five-Number Summary]], [[Plots for Categorical Data]], [[Two-Sample Independent t-Test]], [[One-Way ANOVA]], [[Chi-Square Test]], [[Regression]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.6, p. 38).
