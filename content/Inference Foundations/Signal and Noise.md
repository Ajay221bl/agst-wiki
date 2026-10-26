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

Every test asks the same thing: is the signal louder than the noise? The signal is the effect you see. The noise is how much that effect would bounce around by chance. Divide one by the other, and that's the test statistic.

Imagine trying to hear a friend whisper across a room. In a quiet library, you'd hear every word. At a rock concert, the same whisper vanishes. The whisper didn't change; the background did. Whether you can hear it depends on the whisper *compared to* the noise.

Data work the same way. Say two groups of babies differ in average weight by 0.4 lb. Is that a real difference? You can't tell from 0.4 alone. If babies' weights barely vary, 0.4 lb stands out like a whisper in a library. If they vary a lot, 0.4 lb is lost in the din. A difference only means something compared to the background wobble.

So let's give them names. The **signal** is the effect in the data: how far a mean is from $\mu_0$, how far apart two means are, or how spread out several group means are. The **noise** is how much that signal would wobble by chance alone. For a mean, the noise is the [[Standard Error|standard error]], $s/\sqrt{n}$. For several groups, it's how much values vary *inside* the groups ([[Between- and Within-Group Variability]], [[Variability]]).

Divide signal by noise, and the units cancel, so the result can be compared with one standard curve of what chance produces ([[Null Distribution]]):
- t-tests: $t = \dfrac{\text{difference}}{SE}$
- ANOVA: $F = \dfrac{MSG}{MSE} = \dfrac{\text{between-group variance}}{\text{within-group variance}}$, where each mean square is a variance estimate.

![[Between vs within variability.png|700]]
The same gaps between means (signal) are obvious when the groups are tight (left) and lost when they are spread out (right, more noise).

Look at the two panels. The group means are in exactly the same places. On the left you'd say "obviously different". On the right you'd say "who knows?" Same signal, different noise.

Now you can see every way to make a test more sensitive. There are only three: a bigger real effect, less noisy measurements (careful lab work, or pairing each unit with itself), or more data, since a bigger $n$ shrinks the standard error ([[Why use a paired test for paired data]], [[Statistical Power]]). And notice: the first one is mostly out of your hands. The other two are design choices.

For example, with wetsuits the signal is 0.0775 m/s and the noise (the standard error of the differences) is 0.0063, so t = 12.32. Treat the same swimmers as two independent groups and the signal stays the same, but the noise is about ten times bigger, and t drops to 1.37 ([[Paired t-Test]]). Same data, different noise, completely different verdict.

The trap: a big t doesn't mean a big effect. A tiny signal with almost no noise also gives a big t, which is what happens with huge samples ([[Statistical vs Practical Significance]]).

Try it yourself. You double the measurement error in your lab by using a cheaper scale. What happens to t, if the true effect stays the same? The noise grows, so t shrinks, and the test becomes less likely to notice the effect.

See also: [[Deviations from the Mean]], [[Variance]], [[Test Statistic]], [[Ratios and Fractions|ratio]], [[Welch's t-Test|Welch's]] t.
