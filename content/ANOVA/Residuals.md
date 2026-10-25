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

A residual is an observed value minus the model's fitted value for it. In one-way [[One-Way ANOVA|ANOVA]], it is a value minus its own group mean.

Every model is a guess, and residuals are how the data talks back. A model gives each observation a fitted value ([[Statistical Model]]). The residual is what is left over: residual = observed − fitted. It is the part of the data the model can't explain, the [[Signal and Noise|noise]].

In one-way ANOVA the fitted value is the group mean, so a residual is a deviation from the group mean, $x_{ij} - \bar{x}_i$ ([[Deviations from the Mean]]). Square the residuals and add them up, and you get the within-group sum of squares (SSE). Divide that by $N - k$ and you get the within-group mean square (MSE), the noise in the [[F-Distribution|F ratio]] ([[Sums of Squares and Mean Squares]]).

That's why most people underrate them. Residuals are where the [[Test Assumptions|assumptions]] are checked. Put all the residuals together and check that they are roughly normal (with a Q-Q plot or a Shapiro test), have a similar spread in each group, and show no pattern ([[Q-Q Plot]], [[ANOVA Assumptions]]). They can be pooled because, although each group alone may be small, the residuals from all groups share one centre (0), so together they give a better view of the shape.

![[Model and residuals - sheep.png|700]]
Each orange line is one residual. Within a group they add to 0, because the group mean is the balance point of its own values.

Residuals measure how well the model fits, and they are the material for checking whether the test can be trusted.

For example, for the stem-cell sheep, the residuals in the `esc` group are each value minus 3.50: 14.25 becomes 10.75, and −2.75 becomes −6.25. Squared and added over both groups, they give SSE = 275.1 ([[Sums of Squares and Mean Squares]]).

Look at what the model leaves behind and you learn whether to trust what it says. Residuals aren't mistakes in the data. They are natural [[Variability|variation]] that the model doesn't explain. And they shouldn't all be zero; they should be centred on zero, with no pattern.
