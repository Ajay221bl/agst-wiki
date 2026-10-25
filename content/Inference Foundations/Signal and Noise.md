---
type: atomic
tags:
  - inference
aliases:
  - "signal to noise"
  - "signal-to-noise ratio"
  - "signal over noise"
  - "signal"
  - "noise"
status: seedling
---

Every test statistic is a [[Ratios and Fractions|ratio]] of signal to noise. The signal is the effect you see; the noise is how much that effect would wobble by chance. A big ratio means the signal stands out.

This is the one idea that, once you see it, makes every test feel familiar. An observed difference has two possible sources: a real effect, or chance variation between samples. You can't judge the difference on its own. For example, the same 0.4 lb gap is huge if babies' weights barely vary, and trivial if they vary a lot.

The **signal** is the effect in the data: a gap between a mean and $\mu_0$, a gap between two means, or how spread out several group means are. The **noise** is how much that signal would vary by chance. For a mean, it is the [[Standard Error|standard error]], $s/\sqrt{n}$. For several groups, it is the [[Variability|variability]] inside the groups ([[Between- and Within-Group Variability]]).

Dividing signal by noise gives a number with no units, so it can be compared with a single null distribution ([[Null Distribution]]):
- t-tests: $t = \dfrac{\text{difference}}{SE}$
- ANOVA: $F = \dfrac{MSG}{MSE} = \dfrac{\text{between-group variance}}{\text{within-group variance}}$, where each mean square is a variance estimate.

There are three ways to make the ratio bigger: a bigger real effect, less noisy measurements (pairing, careful lab work), or more data, since a bigger n shrinks the standard error. This matters for design because only the first is outside your control ([[Why use a paired test for paired data]], [[Statistical Power]]).

![[Between vs within variability.png|700]]
The same gaps between means (signal) are obvious when the groups are tight (left) and lost when they are spread out (right, more noise).

Whatever the test, the question is the same: is the signal louder than the noise? This one idea ties together t, paired t, [[Welch's t-Test|Welch's]] t and F. Once you know it, you can predict what any change to the design does to the test.

For example, with wetsuits the signal is 0.0775 m/s and the noise (the standard error of the differences) is 0.0063, so t = 12.32. Treat the same swimmers as two independent groups and the signal stays the same, but the noise is about ten times bigger, and t drops to 1.37 ([[Paired t-Test]]).

One caution. A big t doesn't mean a big effect. It can come from a small signal with very little noise, for example with a huge n ([[Statistical vs Practical Significance]]).

See also: [[Deviations from the Mean]], [[Variance]], [[Test Statistic]].
