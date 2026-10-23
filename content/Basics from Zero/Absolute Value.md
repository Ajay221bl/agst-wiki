---
type: atomic
tags:
  - basics
aliases:
  - "|x|"
  - "absolute"
status: seedling
---

**In one line:** the absolute value of a number, written $|x|$, is its distance from 0, so it is never negative: $|-3| = |3| = 3$.

> [!info] Before this, it helps to know
> [[Greek Letters and Symbols]] (how to read the bars) · [[Variable and Observation]] (numbers come from measurements)

## Start from zero
1. **A number line has a direction.** Numbers to the right of 0 are positive, to the left negative. The sign tells you *which side*; the size tells you *how far*.
2. **Sometimes only "how far" matters.** If I'm 3 km from home, it doesn't matter whether I'm east or west for asking "am I far away?". *Why this matters for statistics:* a lot of questions are "how far from what we expected?", where both directions count as surprising.
3. **So we need a way to drop the sign.** The absolute value does exactly that: $|x| = x$ if $x \ge 0$, and $|x| = -x$ if $x < 0$.
4. **There are two ways to drop a sign**, and statistics uses both:
   - take the absolute value, $|x|$, which keeps the original units;
   - square it, $x^2$, which also drops the sign but changes the units and stretches big values more ([[Squares and Square Roots]]). *Why squares win for spread:* squares have neat algebra (they add up cleanly), which is why variance uses them ([[Variance]]).

## See it

![[Absolute value - distance from zero.png|700]]
*What to look at:* −3 and 3 sit on opposite sides of 0 but at the same distance, so both have absolute value 3.

## Why it exists
Without it, "far below" and "far above" would cancel out. Two-sided tests ask whether a [[Parameter vs Statistic|statistic]] is far from 0 *in either direction*, so their p-values use $|t|$ ([[One-Tailed vs Two-Tailed Tests]]). [[Effect Size|Effect sizes]] like Cohen's d are often reported as absolute values because their sign only reflects the order of subtraction ([[Cohen's d]]).

## A tiny example
Croaker test: $t = -11.96$. For a two-sided p-value, what matters is $|t| = 11.96$: how far out it sits, on either side ([[One-Sample t-Test]]).

## Common confusions
- **"Absolute value makes a number positive by flipping it."** It gives the distance from 0; for a positive number nothing changes.
- **"|a − b| and a − b say the same thing."** The first is the size of the gap; the second also says which one is bigger.

## Connections
- **Builds on:** [[Greek Letters and Symbols]], [[Variable and Observation]]
- **Leads to:** [[Deviations from the Mean]], [[One-Tailed vs Two-Tailed Tests]], [[Cohen's d]], [[Homogeneity of Variance]]
- **Part of:** [[MOC - Basics from Zero]]
