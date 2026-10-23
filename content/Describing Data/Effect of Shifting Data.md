---
type: atomic
tags:
  - describing-data
aliases:
  - "adding a constant"
  - "linear transformation"
  - "rescaling"
status: seedling
---

**In one line:** adding the same constant to every value moves the mean (and [[Median|median]]) by that constant but leaves the [[Standard Deviation|SD]], variance, range and [[Range and IQR|IQR]] unchanged.

> [!info] Before this, it helps to know
> [[Mean]] (the centre that moves) · [[Variance]] (the deviations that do not move) · [[Deviations from the Mean]] (why spread stays put)

## Start from zero
1. **Everyone in a photo stands on a 10 cm box.** Every value goes up by the same amount.
2. **The centre moves by that amount.** Their average height goes up 10 cm ([[Mean]]).
3. **The deviations don't change.** Each person and the mean both moved 10 cm, so each person's distance from the mean is the same as before ([[Deviations from the Mean]]).
4. **So spread doesn't change.** Variance, SD, range and IQR are all built from differences, which a shift leaves alone ([[Variance]]). *Why this is useful:* changing units by adding a constant (°C to K) doesn't affect any spread or any [[Test Statistic|t statistic]].
5. **Multiplying is different:** scale everything by 2 and the mean and the SD both double, and the variance quadruples.

## See it

![[Shifting data.png|700]]
*What to look at:* Every value moved 15 units to the right: the centre moved by exactly 15, but the shape and width of the pile did not change at all.

## Why it exists
It saves recalculation and catches trick questions ("the instrument was miscalibrated by 4 units; what is the new SD?" → the same SD).

The proof: with new values $x_i + c$,
$$\bar{x}_{new} = \frac{\sum (x_i + c)}{n} = \bar{x} + c$$
$$s^2_{new} = \frac{\sum \big((x_i + c) - (\bar{x} + c)\big)^2}{n-1} = \frac{\sum (x_i - \bar{x})^2}{n-1} = s^2$$
The $c$'s cancel inside the deviations.

## A tiny example
Scores 60, 70, 80 (mean 70, SD 10). Add 12 points to everyone: 72, 82, 92 (mean 82, SD still 10).

From the book: **multiplying** every value by $a$ multiplies the mean and SD by $|a|$ (and the variance by $a^2$). Converting cm to mm multiplies the SD by 10.

## Common confusions
- **"Adding a constant increases [[Variability|variability]]."** It moves the whole distribution; the spread is identical.
- **"Multiplying works the same as adding."** Multiplying *does* change spread.

## Connections
- **Builds on:** [[Mean]], [[Variance]], [[Deviations from the Mean]]
- **Leads to:** [[Z-Score]] (standardizing is a shift then a rescale)
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]]
