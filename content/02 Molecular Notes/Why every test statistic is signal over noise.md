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

Why do z, t and F all look like a fraction, and what makes one large?

Every test statistic has the same shape: how far what you saw is from what H₀ expects, divided by how much that distance would vary by chance. A big [[Ratios and Fractions|ratio]] means the difference is hard to explain by chance alone, so the p-value is small. z, t and F differ only in what counts as signal and what counts as noise.

![[Test statistics as signal over noise.png|700]]
The numerator is always a distance (signal); the denominator is always chance [[Variability|variation]] (noise). Only the ingredients change.

1. A raw difference means nothing on its own. 2 cm is huge for lizard tails measured to 0.1 cm, and tiny for tree heights ([[Signal and Noise]]).
2. So we divide by how much that difference would wobble by chance. That turns any unit into "how many chance-wobbles away", a measure of relative standing with no units ([[Z-Score]]).
3. For a mean, the wobble is the standard error, $\sigma/\sqrt{n}$ or $s/\sqrt{n}$, which includes the [[Sample Size|sample size]] ([[Standard Error]]). This gives z and t.
4. For three or more groups, the signal is how far apart the group means are (the mean square between groups), and the noise is the spread inside the groups (the mean square within groups). Their ratio is F ([[Between- and Within-Group Variability]]).
5. If the ratio is large, data this far out would be rare if H₀ were true, so the p-value is small ([[P-Value]]).
6. The signal can grow (a bigger real effect) or the noise can shrink (a bigger n, less variable units, better measurement). Either makes the statistic larger.

Without the denominator, the same difference would be called significant or not depending only on the units, and a large noisy study couldn't be compared with a small precise one.

See also: [[Test Statistic]], [[Why analysis of variance can compare means]], [[Why t instead of z when sigma is unknown]], [[Why pairing, blocking and good measurement raise power]].
