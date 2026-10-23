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

**In one line:** the grand mean $\bar{x}$ is the mean of all $N$ observations pooled together; [[One-Way ANOVA|ANOVA]] measures how far each group mean sits from it.

> [!info] Before this, it helps to know
> [[Mean]] · [[Factors and Levels]] · [[Deviations from the Mean]] · [[Sample Size]]

## Start from zero
1. **Each group has its own mean**, $\bar{x}_i$ ([[Mean]], [[Factors and Levels]]).
2. **Pool every observation and average them**: that is the grand mean, $\bar{x} = \frac{1}{N}\sum \text{all values}$ ([[Summation Notation]], [[Sample Size]]).
3. **It is what we would predict for everyone if group didn't matter**, i.e. the fit under $H_0$ ([[Statistical Model]]).
4. **So group means far from the grand mean are evidence against $H_0$.** The between-group sum of squares adds up $n_i(\bar{x}_i - \bar{x})^2$ ([[Deviations from the Mean]], [[Sums of Squares and Mean Squares]]). *Why weight by $n_i$:* each group mean stands for $n_i$ observations.
5. **With unequal groups it is a weighted average of the group means**, so bigger groups pull it harder ([[Balanced Design]]).

## See it

![[Grand mean - FAMuSS.png|700]]
*What to look at:* the three blue group means sit a few points either side of the orange grand mean; the scatter within each genotype is much larger than those gaps.

## Why it exists
ANOVA needs a single reference point to measure "how different are the group means?" The grand mean is the natural one: it is where everything would sit if the groups were the same.

## A tiny example
FAMuSS (checked in R): CC 48.89 (n = 173), CT 53.25 (n = 261), TT 58.08 (n = 161). Grand mean = 53.29 over N = 595. The plain average of the three group means would be 53.41; the grand mean is lower because the big CT group counts more.

## Common confusions
- **"The grand mean is the average of the group means."** Only when the groups are the same size.
- **"Residuals are measured from the grand mean."** Residuals are measured from each value's *group* mean ([[Residuals]]).

## Connections
- **Builds on:** [[Mean]], [[Factors and Levels]], [[Deviations from the Mean]], [[Sample Size]]
- **Leads to:** [[Sums of Squares and Mean Squares]], [[Between- and Within-Group Variability]], [[ANOVA Table]]
- **Part of:** [[MOC - ANOVA]]
