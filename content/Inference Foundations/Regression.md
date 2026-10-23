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

Regression fits a line that predicts a response from one or more predictors. Simple linear regression fits $\hat{y} = b_0 + b_1 x$ by making the squared residuals as small as possible.

A statistical model splits each value into a fitted part plus a leftover part, the residual ([[Statistical Model]], [[Residuals]]). In ANOVA the fitted part is the group mean. When the predictor is [[Types of Data|quantitative]], the natural fit is a straight line, $\hat{y} = b_0 + b_1 x$ ([[Independent and Dependent Variables]]).

The line chosen is the one that makes the squared residuals smallest, called "least squares". Squares are used for the same reasons [[Variance|variance]] uses them ([[Why variance squares the deviations]]).

The slope $b_1$ is the effect: the change in y for each extra unit of x. Testing $H_0: \beta_1 = 0$ asks whether x predicts y at all ([[Null and Alternative Hypotheses]]). $R^2$ is the share of the variability in y that the line explains, and in simple regression it equals $r^2$, the squared correlation ([[Correlation]], [[Variability]]).

The family grows from there: several predictors give multiple regression, and a yes-or-no outcome gives logistic regression, which models odds ([[Odds and Odds Ratio]]). ANOVA is a special case, which is why R's `aov`, `lm` and `glm` give the same table ([[aov()]]).

![[Regression line - swim velocities.png|700]]
The orange line is the least-squares fit; the short red sticks are the residuals it makes as small as possible.

t-tests and ANOVA ask whether *groups* differ. Regression asks how a *quantitative* predictor changes the response, and lets you make predictions.

For example, in the book's swim data (checked in R), wetsuit speed = 0.142 + 0.955 × swimsuit speed, with $R^2 = 0.977$ (which is 0.988²). A swimmer who is 0.1 m/s faster in a swimsuit is predicted to be about 0.095 m/s faster in a wetsuit.

Regression doesn't prove that x causes y. It describes and predicts; causation still needs a design that supports it ([[Association vs Causation]]). And regression and ANOVA aren't separate worlds: ANOVA is regression with a categorical predictor.

See also: [[Test Choice Guide]].
