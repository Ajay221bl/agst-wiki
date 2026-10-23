---
type: atomic
tags:
  - describing-data
aliases:
  - "correlation"
  - "correlation coefficient"
  - "Pearson's r"
  - "r"
  - "correlated"
status: seedling
---

**In one line:** the correlation coefficient $r$ measures how closely two [[Types of Data|quantitative]] variables follow a straight line, from −1 (perfect downhill) through 0 (no straight-line pattern) to +1 (perfect uphill).

> [!info] Before this, it helps to know
> [[Plots for Two Variables]] (the scatter plot) · [[Z-Score]] · [[Standard Deviation]]

## Start from zero
1. **Two quantitative measurements on each unit can be drawn as a scatter plot** ([[Plots for Two Variables]]).
2. **Ask: when one is above its [[Mean|mean]], is the other too?** If yes for most points, the cloud runs uphill.
3. **Put both on the same scale with z-scores**, multiply each pair, and average: $r = \frac{1}{n-1}\sum z_x z_y$ ([[Z-Score]]). *Why z-scores:* so the units cancel and r is always between −1 and 1.
4. **The sign gives the direction; the size gives the tightness** around a straight line.
5. **r only sees straight lines.** A perfect curve can have r near 0. Always look at the plot ([[Why visualize data before testing]]).
6. **r is also an effect size** ([[Effect Size]]), and $r^2$ is the share of [[Variability|variability]] a straight line explains ([[Regression]]).

## See it

![[Correlation - swim velocities.png|700]]
*What to look at:* the 12 swimmers' two velocities lie almost on a line (r = 0.988); the [[Simulation|simulated]] clouds show what weaker and negative correlations look like.

## Why it exists
It gives one number for "do these two go together, and how strongly?", which is the first question for two quantitative variables.

## A tiny example
Book swim data (checked in R): swimsuit and wetsuit velocities, r = 0.988. Fast swimmers are fast in both. That strong correlation is exactly why the paired test is so powerful here: the differences remove the swimmer-to-swimmer variability ([[Why pairing, blocking and good measurement raise power]]).

## Common confusions
- **"Correlation means causation."** See [[Association vs Causation]].
- **"r = 0 means no relationship."** It means no *straight-line* relationship.

## Connections
- **Builds on:** [[Plots for Two Variables]], [[Z-Score]], [[Standard Deviation]]
- **Leads to:** [[Regression]], [[Effect Size]], [[Association vs Causation]]
- **Part of:** [[MOC - Describing Data]]
