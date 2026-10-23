---
type: atomic
tags:
  - basics
aliases:
  - "ratio"
  - "ratios"
  - "fraction"
  - "numerator"
  - "denominator"
status: seedling
---

A ratio compares two amounts by dividing one by the other; the top number is the **numerator**, the bottom the **denominator**, and the answer says how many "bottoms" fit into the "top".

1. **Dividing answers "how many times bigger?"** 12 ÷ 3 = 4 means 12 holds four 3s. Written as a fraction, $\frac{12}{3}$: the top is the **numerator**, the bottom is the **denominator**.
2. **A ratio is any comparison done this way.** It turns two numbers into one that has no units when both share the same units (seeds ÷ seeds, m/s ÷ m/s). *Why that matters:* a unit-free number can be compared across studies ([[Coefficient of Variation]]).
3. **Bigger numerator → bigger ratio; bigger denominator → smaller ratio.** Almost every "why does this get significant?" question is this one fact.
4. **Part ÷ whole is a proportion** ([[Proportions and Percentages]]), between 0 and 1. Other ratios can be any size.
5. **Statistics' key ratio is signal ÷ noise.** A test statistic puts the effect you saw in the numerator and its [[Standard Error|standard error]] in the denominator ([[Signal and Noise]], [[Test Statistic]]). The F statistic is a ratio of two variances ([[F-Distribution]]). *Why a ratio:* "is this effect big?" only has an answer *relative to* how much it would wobble by chance.

![[Ratio - numerator and denominator.png|700]]
The same shape three times. The wetsuit test statistic is 0.0775 ÷ 0.0063 ≈ 12.3: the effect is about twelve standard errors big.

It is the simplest way to say "large compared with what?". Without the denominator, a 0.08 m/s difference means nothing; next to its SE of 0.006 it is enormous.

For example:

Book swim data: mean wetsuit gain 0.0775 m/s, SE 0.0063 m/s, so $t = 0.0775 / 0.0063 \approx 12.3$ (R gives 12.32 with unrounded numbers; [[Paired t-Test]]).

Common mistakes:

- **"A bigger denominator makes the result bigger."** It makes it smaller. That is why more noise hides an effect.
- **"A ratio of 2 means a difference of 2."** A ratio says *times*, a difference says *how much more*.

See also: [[Variable and Observation]], [[Odds and Odds Ratio]].
