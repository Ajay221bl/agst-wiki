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

You want one number that says "how far is a typical value from the average?", in the units you actually measured. The [[Variance|variance]] measures spread, but in squared units. Taking its square root brings back the original units:
$$s = \sqrt{s^2} = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$$
If heights are in centimetres, the SD is in centimetres too, so it can be compared directly with the mean and with individual values ([[Squares and Square Roots]]).

Read it as a typical distance from the mean. A small SD means the values huddle close to the mean; a large SD means they are widely scattered. The SD also works as a ruler. A value's distance from the mean measured in SDs is its [[Z-Score|z-score]], and for bell-shaped data about 68%, 95% and 99.7% of values lie within 1, 2 and 3 SDs of the mean ([[Empirical Rule]]).

![[Deviations from the mean.png|700]]
Each line is one value's distance from the mean. Square them, add them (32), divide by n − 1 (7) and you have the variance; the square root gives the SD back in the original units.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they are identical. Only a spread measure shows how different they are.

A centre on its own is a poor description; centre plus spread gives a much better picture without even plotting ([[Why report both center and spread]]). The SD is the usual measure of spread to report alongside the [[Mean|mean]].

For example, the data 1, 2, 3, 6, 3 have a variance of 3.5, so the SD is $\sqrt{3.5} \approx 1.87$ years.

Two groups, both with a mean of 50:
- 49, 50, 51 have an SD of 1.
- 20, 50, 80 have an SD of 30.

The same mean, but completely different data.

The standard deviation describes the data; almost everything else in inference is about something else. Don't confuse the SD with the [[Standard Error|standard error]] (SE). The SD describes how individual values vary. The SE, $s/\sqrt{n}$, describes how a [[Parameter vs Statistic|statistic]] such as the mean would vary from one sample to the next. Also, a bigger sample doesn't make the SD shrink; it settles towards the population value $\sigma$. It is the SE that shrinks.

Try it yourself. Two classes both average 7 out of 10 on a quiz. One has SD 1, the other SD 3. In which class is a score of 7 a better description of a typical student? The first: most students there scored close to 7. In the second, scores are all over the place.

See also: [[Coefficient of Variation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
