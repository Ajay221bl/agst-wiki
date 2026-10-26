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

Think about predicting a sheep's weight gain. If you know nothing about it, your best guess is the average of all sheep. If you know which treatment it got, you can do better: guess that treatment group's average. Either way, your guess won't be exactly right. The real value is your guess plus some miss. That's all a model is:

observed = fitted value + residual

Some of the [[Variability|variation]] we can explain with something we know, such as the group or the treatment, and some we can't ([[Independent and Dependent Variables]]). The model separates the pattern we care about from the noise we have to allow for ([[Signal and Noise]]).

The simplest model has no explanatory variable. The fitted value is the [[Grand Mean|overall mean]] for everyone, and the residuals are the deviations from that mean ([[Deviations from the Mean]]). The one-way ANOVA model adds a factor: the fitted value is the mean of that observation's group. In symbols, $x_{ij} = \mu_i + \varepsilon_{ij}$: value $j$ in group $i$ is its group's mean plus a residual ([[Residuals]]).

![[Model and residuals - sheep.png|700]]
The black bars are the fitted values (group means); each orange line is a residual, the part of that sheep's value the model doesn't explain.

Now here's the move that ties a lot of statistics together. You have two models: "everyone gets the overall mean" and "everyone gets their group's mean". The second always fits a bit better, since it has more to work with. The question is whether it fits *enough* better to be worth believing. That comparison is the [[One-Way ANOVA|F-test]] ([[Sums of Squares and Mean Squares]]). Comparing models is testing.

And notice where the [[Test Assumptions|assumptions]] live: in the residuals. Independent, roughly normal, the same spread in every group. Why the residuals? Because the fitted value is the part we choose; everything the probability calculation takes on trust is about the leftover noise ([[ANOVA Assumptions]]).

This frame is shared by t-tests, ANOVA and regression. In R, `aov(y ~ group)`, `lm()` and `glm()` all fit "response modelled by explanatory variable" ([[aov()]]).

For example, for the stem-cell sheep, the fitted value for every `esc` sheep is 3.50 and for every `ctrl` sheep −4.33. The sheep that gained 14.25 has a residual of 14.25 − 3.50 = 10.75 ([[Two-Sample Independent t-Test]]).

The trap is to take the model for the truth. It's a useful simplification, and checking the residuals asks whether it's good enough. And "residual" doesn't mean mistake; it means the part the model doesn't explain.

Try it yourself. Another `esc` sheep has a residual of exactly 0. How much did it gain? Observed = fitted + residual = 3.50 + 0, so it gained 3.50: exactly its group's average. And a `ctrl` sheep with a positive residual? It did better than the `ctrl` mean of −4.33.

See also: [[Mean]].
