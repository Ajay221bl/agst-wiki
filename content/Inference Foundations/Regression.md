---
type: atomic
tags:
  - inference
aliases:
  - "regression"
  - "linear regression"
  - "simple linear regression"
  - "multiple regression"
  - "logistic regression"
  - "lm"
  - "regression line"
status: seedling
---

**In one line:** regression fits a line (or surface) that predicts a response from one or more predictors; simple linear regression fits $\hat{y} = b_0 + b_1 x$ by making the squared residuals as small as possible.

> [!info] Before this, it helps to know
> [[Correlation]] · [[Statistical Model]] · [[Residuals]] · [[Independent and Dependent Variables]]

> [!note] Short note
> A short note. It gives the idea so the term makes sense where it appears.

## Start from zero
1. **A statistical model splits each value into fit + residual** ([[Statistical Model]], [[Residuals]]).
2. **In ANOVA the fit is the group mean.** When the predictor is [[Types of Data|quantitative]], the natural fit is a straight line: $\hat{y} = b_0 + b_1 x$ ([[Independent and Dependent Variables]]).
3. **Choose the line that makes the squared residuals smallest** ("least squares"). *Why squares:* the same reasons [[Variance|variance]] uses them ([[Why variance squares the deviations]]).
4. **The slope $b_1$ is the effect**: the change in y for one unit more x. Testing $H_0: \beta_1 = 0$ asks whether x predicts y at all ([[Null and Alternative Hypotheses]]).
5. **$R^2$ is the share of the variability in y the line explains**, and in simple regression it equals $r^2$ ([[Correlation]], [[Variability]]).
6. **The family grows**: several predictors (multiple regression), a yes/no outcome (logistic regression, modelling odds; [[Odds and Odds Ratio]]). ANOVA is a special case, which is why `aov`, `lm` and `glm` give the same table ([[aov()]]).

## See it

![[Regression line - swim velocities.png|700]]
*What to look at:* the orange line is the least-squares fit; the short red sticks are the residuals it makes as small as possible.

## Why it exists
t-tests and ANOVA ask whether *groups* differ. Regression asks how a *quantitative* predictor changes the response, and lets you predict.

## A tiny example
Book swim data (checked in R): wetsuit = 0.142 + 0.955 × swimsuit, $R^2 = 0.977$ (= 0.988²). A swimmer 0.1 m/s faster in a swimsuit is predicted to be about 0.095 m/s faster in a wetsuit.

## Common confusions
- **"Regression proves x causes y."** It describes and predicts; causation still needs a design ([[Association vs Causation]]).
- **"Regression and ANOVA are different worlds."** ANOVA is regression with a categorical predictor.

## Connections
- **Builds on:** [[Correlation]], [[Statistical Model]], [[Residuals]], [[Independent and Dependent Variables]]
- **Leads to:** [[Odds and Odds Ratio]], [[Test Choice Guide]]
- **Part of:** [[MOC - Inference Foundations]]
