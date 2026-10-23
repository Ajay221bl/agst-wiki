---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "observed minus expected over spread"
  - "test statistic structure"
status: seedling
---

> [!summary] In plain words
> Every test statistic in the course has the same shape: how far what I saw is from what H₀ expects, divided by how much that distance would vary by chance. A big [[Ratios and Fractions|ratio]] means the difference is hard to explain by chance alone, so the p-value is small. z, t and F differ only in what counts as signal and noise.

## The question
Why do z, t and F all look like a fraction, and what makes one large?

## Built from
- [[Signal and Noise]]: the idea in one picture.
- [[Test Statistic]]: the number a test computes.
- [[Z-Score]]: the first measure of relative standing.
- [[Standard Error]]: the noise for a mean.
- [[Between- and Within-Group Variability]]: signal and noise in ANOVA.
- [[P-Value]]: how a big ratio becomes a small probability.

## See it

![[Test statistics as signal over noise.png|700]]
*What to look at:* The numerator is always a distance (signal); the denominator is always chance [[Variability|variation]] (noise). Only the ingredients change.

## The reasoning, step by step
1. A raw difference means nothing alone: 2 cm is huge for lizard tails measured to 0.1 cm and tiny for tree heights ([[Signal and Noise]]).
2. So we divide by how much that difference would wobble by chance. *Why:* that turns any unit into "how many chance-wobbles away", a unitless measure of relative standing ([[Z-Score]]).
3. For a mean the wobble is the standard error, $\sigma/\sqrt{n}$ or $s/\sqrt{n}$, which includes the [[Sample Size|sample size]] ([[Standard Error]]). This gives z and t.
4. For three or more groups the signal is how far the group means sit apart (MS between) and the noise is the spread inside groups (MS within); their ratio is F ([[Between- and Within-Group Variability]]).
5. Large ratio: data this far out are rare if H₀ is true, so the p-value is small ([[P-Value]]).
6. Signal can grow (a bigger real effect) or noise can shrink (bigger n, less variable units, better measurement). Either makes the statistic larger.

## What would go wrong otherwise
Without the denominator, the same difference would be called significant or not depending only on the units, and a large noisy study and a small precise one could not be compared.

## Connections
- **Related:** [[Why analysis of variance can compare means]], [[Why t instead of z when sigma is unknown]], [[Why pairing, blocking and good measurement raise power]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
