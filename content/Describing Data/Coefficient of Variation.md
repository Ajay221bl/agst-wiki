---
type: atomic
tags:
  - describing-data
aliases:
  - "CV"
  - "relative variability"
status: seedling
---

The coefficient of variation (CV) is the standard deviation divided by the mean. It measures spread without units, so you can compare how variable things are even when they are measured on very different scales.

Is a spread of five big or small? You can't answer without asking: five out of what? A [[Standard Deviation|standard deviation]] (SD) has the same units as the data, and its size depends on the scale of what you measured. An SD of 5 pounds is huge for bearded dragons and tiny for humans, so raw SDs can't be compared across very different things. The CV expresses the SD relative to the mean:
$$CV = \frac{s}{\bar{x}} \quad (\text{often} \times 100\%)$$
It asks "how big is the spread compared with a typical value?". The units cancel, so the CV has none ([[Ratios and Fractions]], [[Proportions and Percentages]]).

The CV only makes sense for positive measurements where zero means "none", such as weight or length. If the mean can be near 0 or negative, the ratio blows up or flips sign.

For example:

| Group | Mean weight (lb) | SD (lb) | CV |
|---|---|---|---|
| Humans | 170 | 30 | 0.18 (18%) |
| Bearded dragons | 1.0 | 0.25 | 0.25 (25%) |

These numbers are for illustration. The dragons' SD is tiny in pounds, but compared with their size they are *more* variable.

The general lesson is that a number means little until you know what to compare it with. A smaller SD only means less variability when the things being compared are on the same scale; the CV adjusts for scale. And the CV doesn't work for every variable: a mean near zero makes it explode.

See also: [[Mean]], [[Z-Score]], [[Variability]].
