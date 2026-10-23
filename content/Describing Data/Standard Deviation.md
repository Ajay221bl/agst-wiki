---
type: atomic
tags:
  - describing-data
aliases:
  - "SD"
  - "s"
  - "sigma"
  - "measures of spread"
status: seedling
---

The standard deviation (SD) is roughly the typical distance of a value from the mean, in the data's own units.

1. **The variance measures spread, but in squared units** ([[Variance]]).
2. **Take the square root to get back to the original units:**
$$s = \sqrt{s^2} = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$$
   If heights are in cm, the SD is in cm too. *Why that matters:* now spread can be compared with the mean and with individual values.
3. **Read it as a typical distance from the mean.** A small SD means values huddle near the mean; a large SD means they scatter widely.
4. **It becomes a ruler.** Measuring a value's distance from the mean in SDs gives the z-score ([[Z-Score]]); for bell-shaped data about 68% / 95% / 99.7% lie within 1 / 2 / 3 SD ([[Empirical Rule]]).
5. **Do not confuse it with the standard error.** The SD describes how individuals vary; the SE describes how a *mean* varies from sample to sample, $s/\sqrt{n}$ ([[Standard Error]]).

![[Deviations from the mean.png|700]]
Each line is one value's distance from the mean. Square them, add them (32), divide by n − 1 (7) and you have the variance; the square root gives the SD back in the original units.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they are identical. Only a spread measure shows how different they are.

Center alone is a poor description. A bank-robber example: "white male, 18–27, 170 lb" gives a center. Add "7'3"" and suddenly you know he is very thin. Center **plus** spread gives a much better picture without even plotting ([[Why report both center and spread]]).

The SD is the default spread to report with the mean, and it drives the [[Empirical Rule]] and [[Z-Score|z-scores]].

For example:

Data 1, 2, 3, 6, 3: variance 3.5, so SD = $\sqrt{3.5} \approx 1.87$ years.

Two groups, both with mean 50:
- 49, 50, 51 → SD 1
- 20, 50, 80 → SD 30

Same mean, completely different data.

Common mistakes:

- **"SD and SE are the same."** The SD describes individual values; the [[Standard Error]] describes how much a *[[Parameter vs Statistic|statistic]]* varies between samples.
- **"A bigger sample makes the SD shrink."** The SD settles toward $\sigma$; it does not systematically shrink. The SE does.

See also: [[Squares and Square Roots|square root]], [[Mean]], [[Coefficient of Variation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
