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

**In one line:** every test statistic is a [[Ratios and Fractions|ratio]] of signal (the effect you see) to noise (how much that effect would wobble by chance); a big ratio means the signal stands out.

> [!info] Before this, it helps to know
> [[Deviations from the Mean]] · [[Standard Error]] · [[Variance]]

## Start from zero
1. **An observed difference has two possible sources:** a real effect, or chance variation between samples. *Why we can't just look at the difference:* the same 0.4 lb gap is huge if babies' weights barely vary and trivial if they vary a lot.
2. **Signal = the effect in the data.** A gap between a mean and $\mu_0$, between two means, or how spread out several group means are.
3. **Noise = how much that signal would vary by chance.** For a mean, it's the standard error, $s/\sqrt{n}$ ([[Standard Error]]). For several groups, it's the [[Variability|variability]] inside the groups ([[Between- and Within-Group Variability]]).
4. **Divide signal by noise.** The result has no units, so it can be compared with a single null distribution ([[Null Distribution]]).
   - t-tests: $t = \dfrac{\text{difference}}{SE}$
   - ANOVA: $F = \dfrac{MSG}{MSE} = \dfrac{\text{between-group variance}}{\text{within-group variance}}$
5. **Three ways to make the ratio bigger**: a bigger real effect, less noisy measurements (pairing, careful lab work), or more data (n shrinks the SE). *Why this matters for design:* only the first is outside your control ([[Why use a paired test for paired data]], [[Statistical Power]]).

## See it

![[Between vs within variability.png|700]]
*What to look at:* the same gaps between means (signal) are obvious when the groups are tight (left) and lost when they are spread out (right, more noise).

## Why it exists
It is the one idea that unifies t, paired t, [[Welch's t-Test|Welch]] t and F. Knowing it, you can predict what any change to the design does to the test.

## A tiny example
Wetsuits: signal 0.0775 m/s, noise (SE of the differences) 0.0063, so t = 12.32. Treat the same swimmers as two independent groups and the signal is the same, but the noise is about ten times bigger, and t drops to 1.37 ([[Paired t-Test]]).

## Common confusions
- **"A big t means a big effect."** A big t can come from a small signal with very little noise, for example a huge n ([[Statistical vs Practical Significance]]).

## Connections
- **Builds on:** [[Deviations from the Mean]], [[Standard Error]], [[Variance]]
- **Leads to:** [[Test Statistic]], [[Between- and Within-Group Variability]], [[Statistical Power]]
- **Part of:** [[MOC - Inference Foundations]]
