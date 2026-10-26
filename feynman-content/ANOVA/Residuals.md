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

Suppose you guess a friend will take 5 minutes to arrive, and they take 8. The 3 minutes you missed by is the residual: the part your guess didn't capture. A model makes guesses like that for every observation, called fitted values ([[Statistical Model]]). The residual is what's left over: residual = observed − fitted. It's the part of the data the model can't explain, the [[Signal and Noise|noise]].

In one-way ANOVA the model's guess for anyone is simply their group's mean. So a residual is a deviation from the group mean, $x_{ij} - \bar{x}_i$ ([[Deviations from the Mean]]). Square the residuals and add them up, and you get the within-group sum of squares (SSE). Divide that by $N - k$ and you get the within-group mean square (MSE), the noise in the [[F-Distribution|F ratio]] ([[Sums of Squares and Mean Squares]]).

![[Model and residuals - sheep.png|700]]
Each orange line is one residual. Within a group they add to 0, because the group mean is the balance point of its own values.

Notice something in the picture: within each group the residuals add to exactly 0. That's not luck. The mean is the balance point of its group, so the misses above and below cancel.

For example, for the stem-cell sheep, the residuals in the `esc` group are each value minus 3.50: 14.25 becomes 10.75, and −2.75 becomes −6.25. Squared and added over both groups, they give SSE = 275.1 ([[Sums of Squares and Mean Squares]]).

Now here's why residuals matter more than they look. They're where the [[Test Assumptions|assumptions]] get checked. Put all the residuals together and check that they are roughly normal (with a Q-Q plot or a Shapiro test), have a similar spread in each group, and show no pattern ([[Q-Q Plot]], [[ANOVA Assumptions]]). Why can you lump them together? Each group alone may be small, but the residuals from every group share one centre, 0, so together they give a much better view of the shape. Look at what the model leaves behind and you learn whether to trust what it says.

Two traps. Residuals aren't mistakes in the data. They are natural [[Variability|variation]] the model doesn't explain. And they shouldn't all be zero; they should be centred on zero, with no pattern.

Try it yourself. A group's values are 4, 6 and 8. What's its mean, and what are the residuals? The mean is 6, so the residuals are −2, 0 and 2. Add them: 0, as promised.
