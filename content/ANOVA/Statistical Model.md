---
type: atomic
tags:
  - anova
aliases:
  - "model"
  - "linear model"
  - "data = fit + residual"
  - "fitted value"
status: seedling
---

A statistical model writes each observation as a predictable part, the fitted value, plus a leftover part, the residual: data = fit + residual.

Values vary. Some of that [[Variability|variation]] we can explain with something we know, such as the group or the treatment, and some we can't ([[Independent and Dependent Variables]]). A model splits each value into those two parts: observed = fitted value + residual. This separates the pattern we care about from the noise we have to allow for ([[Signal and Noise]]).

The simplest model has no explanatory variable. The fitted value is the [[Grand Mean|overall mean]] for everyone, and the residuals are the deviations from that mean ([[Deviations from the Mean]]). The one-way ANOVA model adds a factor: the fitted value is the mean of that observation's group. In symbols, $x_{ij} = \mu_i + \varepsilon_{ij}$: value $j$ in group $i$ is its group's mean plus a residual ([[Residuals]]).

The [[Test Assumptions|assumptions]] are about the residuals: independent, roughly normal, and with the same spread in every group. They are about the residuals because the fitted value is the part we model, and everything the test's probability calculation assumes is about the leftover noise ([[ANOVA Assumptions]]).

Comparing models is testing. ANOVA asks whether the group-means model explains enough more than the overall-mean model to be worth it, and that comparison is the [[One-Way ANOVA|F-test]] ([[Sums of Squares and Mean Squares]]).

![[Model and residuals - sheep.png|700]]
The black bars are the fitted values (group means); each orange line is a residual, the part of that sheep's value the model doesn't explain.

This frame is shared by t-tests, ANOVA and [[Regression|regression]]. In R, `aov(y ~ group)`, `lm()` and `glm()` all fit "response modelled by explanatory variable" ([[aov()]]).

For example, for the stem-cell sheep, the fitted value for every `esc` sheep is 3.50 and for every `ctrl` sheep −4.33. The sheep that gained 14.25 has a residual of 14.25 − 3.50 = 10.75 ([[Two-Sample Independent t-Test]]).

A model isn't the truth. It is a useful simplification, and checking the residuals asks whether it is good enough. And "residual" doesn't mean mistake; it means the part the model doesn't explain.

See also: [[Mean]].
