---
type: atomic
tags:
  - describing-data
aliases:
  - "skew"
  - "skewness"
  - "modality"
  - "kurtosis"
  - "symmetric"
  - "uniform"
  - "unimodal"
  - "right skew"
  - "left skew"
status: seedling
---

The shape of a distribution is how its values pile up: how many peaks it has, whether it is symmetric or has a long [[Tails of a Distribution|tail]] on one side (skew), and how peaked or flat it is.

Shape matters because it decides which summaries you can trust and which tests you can use. Draw a [[Histogram|histogram]] and describe its outline with three questions.

**How many peaks?** One peak is unimodal, two is [[Mode|bimodal]], several is multimodal, and none (flat) is uniform. Two peaks often mean two different groups have been mixed together.

**Symmetric or skewed?** A symmetric shape folds onto itself. **Right skew** (positive skew) means a long tail to the right, as with income or time spent outdoors. **Left skew** (negative skew) means a long tail to the left. The tail pulls the mean towards it and away from the median, so the skew decides which centre to report ([[Mean]], [[Median]]).

**How peaked?** A distribution can be sharply peaked or flat; the technical word is kurtosis. R's `psych::describe()` prints skew and kurtosis, and it is enough to know what they mean.

The [[Normal Distribution|normal distribution]] is one particular shape: one peak, symmetric and bell-shaped. Not every symmetric shape with one peak is normal. Many tests assume normality somewhere, which is checked with a [[Q-Q Plot|Q-Q plot]] ([[Normality Checks]]).

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed median: they agree for symmetric data and the mean chases the long tail when the data are skewed.

Shape decides which summaries to trust and which tests are safe. Skew pulls the mean towards the tail, so the median becomes the better centre ([[Why the median beats the mean for skewed data]]).

For example, comparing the mean with the median gives a quick check of skew:

| Mean vs median | Shape |
|---|---|
| mean > median | right skew |
| mean < median | left skew |
| mean ≈ median | symmetric (normal, uniform, even symmetric bimodal) |

For time spent outdoors, the mean is 3.72 hours and the median is 1.07 hours, so the data are right-skewed.

A shape is a clue about the process that produced the data, so read it before you summarize. Right skew doesn't mean most values are on the right: the tail is on the right, and most values pile up on the left. And symmetric doesn't mean normal: a uniform distribution is symmetric but flat.

See also: [[Outliers]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
