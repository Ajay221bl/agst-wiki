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

The shape of a distribution is how the values pile up: how many peaks (modality), whether it is symmetric or has a long [[Tails of a Distribution|tail]] on one side (skew), and how peaked or flat it is (kurtosis).

1. **Draw a histogram and describe the silhouette** ([[Histogram]]). Three questions cover it.
2. **How many peaks? (modality)** Unimodal (one peak), [[Mode|bimodal]] (two), multimodal ("given up hope"), uniform (flat, no peak). *Why it matters:* two peaks often mean two groups mixed together.
3. **Symmetric or skewed?** Symmetric folds over onto itself. **Right (positive) skew** = a long tail to the right (income, time outdoors); **left (negative) skew** = a long tail to the left. *Why it matters:* the tail pulls the mean towards it, away from the median, so the choice of centre depends on skew ([[Mean]], [[Median]]).
4. **How peaked? (kurtosis)** Sharply peaked (leptokurtic) or flat (platykurtic). `psych::describe()` prints skew and kurtosis; you need to know they exist, not compute them.
5. **Normal is one specific shape:** unimodal, symmetric, bell-shaped. Not every symmetric unimodal shape is normal ([[Normal Distribution]]). *Why the shape matters for tests:* many tests assume normality somewhere, checked with a Q-Q plot ([[Q-Q Plot]], [[Normality Checks]]).

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed median: they agree for symmetric data and the mean chases the long tail when the data are skewed.

Shape decides which summaries to trust and which tests are safe.
- Skew pulls the mean toward the tail, so the median becomes the better center ([[Why the median beats the mean for skewed data]]).
- Most tests assume roughly normal data or sample means ([[Normality Checks]]).

For example:

Quick skew check with mean vs median:
| Mean vs median | Shape |
|---|---|
| mean > median | right skew |
| mean < median | left skew |
| mean ≈ median | symmetric (normal, uniform, even symmetric bimodal) |

Time outdoors: mean 3.72 h, median 1.07 h → right-skewed.

Common mistakes:

- **"Right skew means most values are on the right."** The *tail* is on the right; most values pile up on the left.
- **"Symmetric means normal."** A uniform distribution is symmetric but flat.

See also: [[Outliers]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
