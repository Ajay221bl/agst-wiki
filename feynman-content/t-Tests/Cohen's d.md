---
type: atomic
tags:
  - t-tests
aliases:
  - "Cohen d"
  - "standardized mean difference"
status: seedling
---

Cohen's d measures how far apart two group averages are, in units of standard deviations. Roughly: 0.2 is small, 0.5 medium, 0.8 large.

Here's a puzzle. One study finds a feed adds 2 kg to animals. Another finds a drug lowers blood pressure by 5 mmHg. Which effect is bigger? You can't even begin, can you? Kilograms and millimetres of mercury aren't the same thing ([[Effect Size]]).

So let's find a common ruler. What does every measurement have? A natural spread: how much individuals vary, the standard deviation (SD). So ask: how many SDs apart are the two groups? That's Cohen's d, exactly the idea of a z-score applied to a difference ([[Z-Score]], [[Standard Deviation]]):
$$d = \frac{\bar{x}_1 - \bar{x}_2}{s_{pooled}} \qquad\text{one-sample: } \frac{\bar{x} - \mu_0}{s} \qquad\text{paired: } \frac{\bar{d}}{s_d}$$

Notice what's on the bottom: the SD, not the [[Standard Error|standard error]]. That's the key choice. The SD describes how individuals vary, so d says how far apart the *groups* are, not how precisely you measured the gap. And because there's no $\sqrt{n}$ in it, d doesn't grow just because you collected more data. Compare that with t, which does.

Cohen suggested rough labels for the size of d, ignoring its sign ([[Absolute Value]]):

| |d| | Label |
|---|---|
| < 0.2 | negligible |
| ≈ 0.2 | small |
| ≈ 0.5 | medium |
| ≈ 0.8 | large |

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

For example, two diets give mean weights of 52 and 50 kg, with a [[Pooled Variance|pooled SD]] of 4. Then d = 2/4 = 0.5, a medium effect. With 10 animals per group or 10,000, d stays about 0.5, while the p-value would change enormously ([[Why report an effect size with the p-value]]).

Try it yourself. Is a d of 0.2 always unimportant? No. The labels are rules of thumb. A small effect can matter a lot if it's cheap and applies to millions, like a vaccine or a feed additive. The labels start your judgment; they don't replace it.

See also: [[cohensD()]], [[Statistical vs Practical Significance]].
