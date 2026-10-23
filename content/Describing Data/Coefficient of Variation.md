---
type: atomic
tags:
  - describing-data
aliases:
  - "CV"
  - "relative variability"
status: seedling
---

**In one line:** the coefficient of [[Variability|variation]] (CV) is the SD divided by the mean, a unitless measure of spread that lets you compare variability across very different scales.

> [!info] Before this, it helps to know
> [[Standard Deviation]] (the spread being rescaled) · [[Mean]] (the yardstick) · [[Proportions and Percentages]] (the result is a [[Ratios and Fractions|ratio]])

## Start from zero
1. **An SD has the units of the data**, and its size depends on the scale of what's measured ([[Standard Deviation]]).
2. **So raw SDs can't be compared across very different things.** An SD of 5 pounds is huge for bearded dragons and trivial for humans.
3. **Express the SD relative to the mean:**
$$CV = \frac{s}{\bar{x}} \quad (\text{often} \times 100\%)$$
   *Why divide by the mean:* it asks "how big is the spread compared with a typical value?"
4. **The units cancel, so the CV has none** ([[Proportions and Percentages]]), and spreads of different variables, or of the same variable on very different scales, become comparable.
5. **Only meaningful when zero means "none"** (a ratio scale with positive values). *Why:* if the mean can be near 0 or negative, the ratio blows up or flips sign.

## Why it exists
Raw SDs cannot be compared when the means or units differ. The CV asks "how big is the spread *relative to the typical size*?"

## A tiny example
| Group | Mean weight (lb) | SD (lb) | CV |
|---|---|---|---|
| Humans | 170 | 30 | 0.18 (18%) |
| Bearded dragons | 1.0 | 0.25 | 0.25 (25%) |

(Illustrative numbers.) The dragons' SD is tiny in pounds, but relative to their size they are *more* variable.

## Common confusions
- **"A smaller SD always means less variability."** Only on the same scale; the CV adjusts for scale.
- **"CV works for any variable."** It only makes sense for positive, ratio-scale measurements; a mean near zero makes it explode.

## Connections
- **Builds on:** [[Standard Deviation]], [[Mean]], [[Proportions and Percentages]]
- **Leads to:** [[Z-Score]] (another unitless comparison)
- **Part of:** [[MOC - Describing Data]]
