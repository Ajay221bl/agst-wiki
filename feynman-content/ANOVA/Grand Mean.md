---
type: atomic
tags:
  - anova
aliases:
  - "grand mean"
  - "overall mean"
  - "group mean"
  - "group means"
  - "x double bar"
status: seedling
---

The grand mean $\bar{x}$ is the mean of all $N$ observations taken together. [[One-Way ANOVA|ANOVA]] measures how far each group mean sits from it.

If you want to say group means are "far apart", you have to measure from somewhere. Where? Here's a natural place. Suppose you knew nothing about which group anyone was in. What would be your best single guess for any value? You'd pour all the observations into one pot and take the average. That's the grand mean: $\bar{x} = \frac{1}{N}\sum \text{all values}$ ([[Mean]], [[Summation Notation]], [[Sample Size]]).

Each group also has its own mean, $\bar{x}_i$ ([[Factors and Levels]]). Now the question ANOVA asks becomes simple: do the group means stay close to the grand mean, or do they wander away? If the groups didn't matter, every group mean would sit near the grand mean, and the grand mean would be the right prediction for everyone. That is the fitted value when $H_0$ is true ([[Statistical Model]]). So group means far from it are evidence against $H_0$.

The between-group sum of squares adds up $n_i(\bar{x}_i - \bar{x})^2$ ([[Deviations from the Mean]], [[Sums of Squares and Mean Squares]]). Why multiply by $n_i$? Because each group mean speaks for $n_i$ observations. A group of many counts more than a group of a few.

![[Grand mean - FAMuSS.png|700]]
The three blue group means sit a few points either side of the orange grand mean; the scatter within each genotype is much larger than those gaps.

For example, in the FAMuSS data (checked in R), the group means are CC 48.89 (n = 173), CT 53.25 (n = 261) and TT 58.08 (n = 161). The grand mean is 53.29 over N = 595.

Now here's a little trap. Isn't the grand mean just the average of the three group means? Let's check: that would be 53.41, not 53.29. Why the difference? Because the big CT group has more people in the pot, so it pulls the grand mean toward itself. The grand mean equals the average of the group means only when the groups are the same size ([[Balanced Design]]).

And one more: residuals aren't measured from the grand mean. Each value's residual is its distance from its own *group* mean ([[Residuals]]).

Try it yourself. Group 1 has 2 values with mean 5; group 2 has 8 values with mean 0. Is the grand mean halfway between them? No. Pour them together: the total is 2 × 5 = 10, over 10 values, so the grand mean is 1. The bigger group pulls it down.

See also: [[Between- and Within-Group Variability]], [[ANOVA Table]].
