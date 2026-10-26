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

The correlation coefficient $r$ measures how closely two [[Types of Data|quantitative]] variables follow a straight line. It runs from −1 (a perfect downhill line) through 0 (no straight-line pattern) to +1 (a perfect uphill line).

When you measure two quantities on each person or plant, you can draw them as a scatter plot ([[Plots for Two Variables]]). Then ask: when one value is above its [[Mean|mean]], is the other usually above its mean too? If so, the cloud of points runs uphill. To turn this into a number, put both variables on the same scale using [[Z-Score|z-scores]], multiply each pair, and average: $r = \frac{1}{n-1}\sum z_x z_y$. Using z-scores makes the units cancel, so $r$ always lies between −1 and 1. Its sign gives the direction, and its size says how tightly the points hug a straight line.

$r$ only detects straight lines: points lying on a perfect curve can have $r$ near 0, so always look at the plot ([[Why visualize data before testing]]). $r$ is also an [[Effect Size|effect size]], and $r^2$ is the share of the [[Variability|variability]] that a straight line explains (Regression).

![[Correlation - swim velocities.png|700]]
The 12 swimmers' two velocities lie almost on a line (r = 0.988); the [[Simulation|simulated]] clouds show what weaker and negative correlations look like.

For example, in the book's swimming data (checked in R), each swimmer's speed in a swimsuit and in a wetsuit have r = 0.988: fast swimmers are fast in both. That strong correlation is why a paired test works so well here. Taking each swimmer's difference removes the differences between swimmers ([[Why pairing, blocking and good measurement raise power]]).

Correlation doesn't mean causation ([[Association vs Causation]]). And $r = 0$ doesn't mean "no relationship", only no straight-line relationship.

See also: [[Standard Deviation]].
