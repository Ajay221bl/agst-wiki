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

A statistical model writes each observation as a predictable part (the fit) plus a leftover part (the residual): data = fit + residual.

1. **Values vary.** Some of that [[Variability|variation]] we can explain with something we know (the group, the treatment); some we can't ([[Independent and Dependent Variables]]).
2. **Split each value into those two parts:** observed = fitted value + residual. *Why split:* it separates the pattern we care about from the noise we must allow for ([[Signal and Noise]]).
3. **The simplest model has no explanatory variable:** fitted value = the [[Grand Mean|overall mean]] for everyone, and the residuals are the deviations from the mean ([[Deviations from the Mean]]).
4. **The one-way ANOVA model adds a factor:** fitted value = the mean of that observation's group. In symbols, $x_{ij} = \mu_i + \varepsilon_{ij}$: value $j$ in group $i$ is its group's mean plus a residual ([[Residuals]]).
5. **The [[Test Assumptions|assumptions]] are about the residuals.** Independent, roughly normal, same spread in every group. *Why on the residuals:* the fit is the part we model; everything the test's probability calculation assumes is about the leftover noise ([[ANOVA Assumptions]]).
6. **Comparing models is testing.** ANOVA asks whether the group-means model explains enough more than the overall-mean model to be worth it; that comparison is the [[One-Way ANOVA|F-test]] ([[Sums of Squares and Mean Squares]]).

![[Model and residuals - sheep.png|700]]
The black bars are the fitted values (group means); each orange line is a residual, the part of that sheep's value the model doesn't explain.

It is the frame that t-tests, ANOVA and later [[Regression|regression]] all share. In R, `aov(y ~ group)`, `lm()` and `glm()` all fit "response modelled by explanatory variable" ([[aov()]]).

For example:

Stem-cell sheep: the fitted value for every `esc` sheep is 3.50 and for every `ctrl` sheep −4.33. The sheep that gained 14.25 has residual 14.25 − 3.50 = 10.75 ([[Two-Sample Independent t-Test]]).

Common mistakes:

- **"The model is the truth."** It is a useful simplification; residual checks ask whether it is good enough.
- **"Residual means mistake."** It means the part not explained by the model ([[Residuals]]).

See also: [[Mean]].
