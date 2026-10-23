---
type: atomic
tags:
  - anova
aliases:
  - "residual"
  - "error term"
  - "leftover"
status: seedling
---

A residual is an observed value minus the model's fitted value for it; in one-way [[One-Way ANOVA|ANOVA]], a value minus its own group mean.

1. **A model gives each observation a fitted value** ([[Statistical Model]]).
2. **The residual is what's left:** residual = observed − fitted. *Why compute it:* it is the part of the data the model cannot explain, the [[Signal and Noise|noise]].
3. **In one-way ANOVA the fitted value is the group mean**, so a residual is a deviation from the group mean, $x_{ij} - \bar{x}_i$ ([[Deviations from the Mean]]).
4. **Square and add the residuals and you get SSE**, the within-group sum of squares; divide by $N - k$ and you get MSE, the noise in the [[F-Distribution|F ratio]] ([[Sums of Squares and Mean Squares]]).
5. **Residuals are where the [[Test Assumptions|assumptions]] live.** Put all the residuals together and check: roughly normal (Q-Q plot, Shapiro), similar spread in each group, no pattern ([[Q-Q Plot]], [[ANOVA Assumptions]]). *Why pool them:* each group alone may be small, but the residuals from all groups share one centre (0), so together they give a better look at the shape.

![[Model and residuals - sheep.png|700]]
Each orange line is one residual. Within a group they add to 0, because the group mean is the balance point of its own values.

They measure how well the model fits and they are the material for checking whether the test can be trusted.

For example:

Stem-cell sheep: residuals in the `esc` group are each value minus 3.50: 14.25 → 10.75, −2.75 → −6.25. Squared and added over both groups they give SSE = 275.1 ([[Sums of Squares and Mean Squares]]).

Common mistakes:

- **"Residuals are mistakes in the data."** They are natural [[Variability|variation]] the model doesn't explain.
- **"Residuals should be zero."** They should be centred on zero, with no pattern.
