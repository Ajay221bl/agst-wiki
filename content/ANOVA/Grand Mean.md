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

Each group has its own mean, $\bar{x}_i$ ([[Mean]], [[Factors and Levels]]). Put every observation together and average them, and you get the grand mean, $\bar{x} = \frac{1}{N}\sum \text{all values}$ ([[Summation Notation]], [[Sample Size]]). It is what we would predict for everyone if the group didn't matter, which is the fitted value when $H_0$ is true ([[Statistical Model]]).

So group means far from the grand mean are evidence against $H_0$. The between-group sum of squares adds up $n_i(\bar{x}_i - \bar{x})^2$ ([[Deviations from the Mean]], [[Sums of Squares and Mean Squares]]). Each term is weighted by $n_i$ because each group mean stands for $n_i$ observations.

With unequal groups, the grand mean is a weighted average of the group means, so bigger groups pull it harder ([[Balanced Design]]).

![[Grand mean - FAMuSS.png|700]]
The three blue group means sit a few points either side of the orange grand mean; the scatter within each genotype is much larger than those gaps.

ANOVA needs a single reference point to measure how different the group means are. The grand mean is the natural one: it is where everything would sit if the groups were the same.

For example, in the FAMuSS data (checked in R), the group means are CC 48.89 (n = 173), CT 53.25 (n = 261) and TT 58.08 (n = 161). The grand mean is 53.29 over N = 595. The plain average of the three group means would be 53.41; the grand mean is lower because the big CT group counts more.

The grand mean is the average of the group means only when the groups are the same size. And residuals aren't measured from the grand mean; they are measured from each value's own *group* mean ([[Residuals]]).

See also: [[Between- and Within-Group Variability]], [[ANOVA Table]].
