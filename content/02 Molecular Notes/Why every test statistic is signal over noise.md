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

Because they're all answering the same question: is what I saw bigger than what chance would give me anyway? Every test statistic has the same shape. On top, how far what you saw is from what H₀ expects. Underneath, how much that distance would vary by chance. A big [[Ratios and Fractions|ratio]] means the difference is hard to explain by chance alone, so the p-value is small. z, t and F differ only in what counts as signal and what counts as noise.

![[Test statistics as signal over noise.png|700]]
The numerator is always a distance, the signal. The denominator is always chance [[Variability|variation]], the noise. Only the ingredients change.

If you understand this one idea, you understand every test in the course. So build it from scratch.

A raw difference means nothing on its own. 2 cm is huge for lizard tails measured to 0.1 cm, and tiny for tree heights ([[Signal and Noise]]). A number only becomes big or small when you compare it with something.

The right thing to compare it with is how much it would wobble by chance. Divide by that, and any unit, centimetres, grams, dollars, turns into "how many chance-wobbles away". It's a measure of relative standing with no units at all ([[Z-Score]]).

For a mean, the wobble is the standard error, $\sigma/\sqrt{n}$ or $s/\sqrt{n}$, which includes the [[Sample Size|sample size]] ([[Standard Error]]). That gives z and t.

For three or more groups, the signal is how far apart the group means are, the mean square between groups. The noise is the spread inside the groups, the mean square within groups. Their ratio is F ([[Between- and Within-Group Variability]]). Same shape, new ingredients.

If the ratio is large, data this far out would be rare if H₀ were true, so the p-value is small ([[P-Value]]).

And now you can see every way to make a test more sensitive. The signal can grow, through a bigger real effect. Or the noise can shrink, through a bigger n, less variable units, or better measurement. Either one makes the statistic larger. Most of good study design is just shrinking the denominator.

Without the denominator, the same difference would be called significant or not depending only on the units, and a large noisy study couldn't be compared with a small precise one. Signal only means something against noise. That's true well beyond statistics.

Try it yourself. Two experiments find the same difference between group means, 5 units. In the first, the standard error is 1; in the second, it's 5. Which has the bigger test statistic, and which gives stronger evidence? The first: 5 over 1 is 5, while 5 over 5 is 1. Same signal, much less noise.

See also: [[Test Statistic]], [[Why analysis of variance can compare means]], [[Why t instead of z when sigma is unknown]], [[Why pairing, blocking and good measurement raise power]].
