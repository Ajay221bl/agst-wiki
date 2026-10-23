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

**In one line:** the plot for a relationship depends on the two variable types: scatter plots for two quantitative variables, side-by-side box plots for a quantitative response across groups, and mosaic or grouped bar plots for two categorical variables.

> [!info] Before this, it helps to know
> [[Types of Data]] (the pair of types picks the plot) · [[Box Plot and Five-Number Summary]] (for groups) · [[Plots for Categorical Data]] (for two categorical variables)

## Start from zero
1. **The question about two variables is "are they related?"** What "related" can look like depends on their types ([[Types of Data]]).
2. **Pick the plot that shows that relation directly:**

| Variables | Plot | Later analysis |
|---|---|---|
| categorical × categorical | mosaic plot, side-by-side bars | chi-square test |
| quantitative × quantitative | **scatter plot** (± line, correlation $r$) | correlation, regression |
| quantitative response × categorical group | **comparison box plots** with [[Mean\|mean]] markers, overlaid densities, mean ± SE plots | t-tests, ANOVA |

3. **The pairing of plot and analysis is not an accident:** the plot shows what the test will measure ([[Test Choice Guide]]). *Why plot first:* you see the size and direction of the effect, and problems like [[Outliers|outliers]] or unequal spreads, before any p-value ([[Why visualize data before testing]]).

## See it

![[Plots for two variables.png|700]]
*What to look at:* The plot follows the variable types: two quantitative variables give a scatter plot, a quantitative response by group gives side-by-side box plots, and two categorical variables give stacked or side-by-side bars.

## Why it exists
**Always visualize.** Datasets with identical means, SDs and [[Correlation|correlations]] can look completely different (the "Datasaurus" example). A plot reveals curves, clusters, outliers and unequal spreads that summary numbers hide ([[Why visualize data before testing]]).

## A tiny example
Book example: female frog body size vs clutch volume shows an upward trend with no extreme outliers, so a straight-line summary is reasonable.

## Common confusions
- **"A significant correlation means a strong one."** With big $n$, weak correlations are significant. Look at the plot and at $r$ itself ([[Effect Size]]).
- **"Mean ± SE bars show the data's spread."** They show the uncertainty of the mean, which shrinks with $n$; the data's spread does not ([[Standard Error]]).

## Connections
- **Builds on:** [[Types of Data]], [[Box Plot and Five-Number Summary]], [[Plots for Categorical Data]]
- **Leads to:** [[Two-Sample Independent t-Test]], [[One-Way ANOVA]], [[Test Choice Guide]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.6, p. 38)
- **Terms used:** [[Chi-Square Test]], [[Regression]]
