---
type: atomic
tags:
  - inference
aliases:
  - "p-value"
  - "p value"
  - "P-value low"
status: seedling
---

The p-value is the probability of getting a test statistic as extreme as, or more extreme than, the one observed, **assuming the [[Null and Alternative Hypotheses|null hypothesis]] is true**.

Assume $H_0$ is true and picture repeating the study forever. The test statistics from those studies form the null distribution ([[Null Distribution]]). Find your observed test statistic on it ([[Test Statistic]]). The p-value is the share of those imaginary studies that would give a result at least as extreme as yours.

It is "at least as extreme" rather than "exactly yours" because any single exact value has a tiny probability; what matters is how far out in the [[Tails of a Distribution|tail]] you are. Which tail or tails count depends on $H_A$ ([[One-Tailed vs Two-Tailed Tests]]).

A p-value is a conditional probability: the probability of data this extreme *given* that $H_0$ is true. It is not the probability that $H_0$ is true given the data ([[Conditional Probability]]). A small p-value means your result would be rare in a world where $H_0$ is true. So either you saw something unusual, or $H_0$ is wrong. That is the [[Rare Event Rule]]. "Small" needs a [[Critical Value|cutoff]] decided in advance, called the [[Significance Level|significance level]] α.

![[P-value as tail area.png|700]]
Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both tails for a two-sided test).

The p-value puts the rare event rule on a number scale so it can be compared with α. If p ≤ α, reject $H_0$. If p > α, [[Why we never accept the null hypothesis|fail to reject]] it.

For example, testing whether salmonella is above 0.3 ($H_A: \mu > 0.3$) gave p ≈ 0.029. You would reject at α = 0.05, but fail to reject at α = 0.01. The conclusion depends on α, which must be set beforehand ([[Why choose alpha and tails before seeing the data]]).

Common misreadings:
- It is not the probability that $H_0$ is true. It is calculated *assuming* $H_0$. This is the most common mistake.
- It is not the probability that the result happened by chance.
- A large p doesn't mean $H_0$ is true. You only fail to reject it.
- A small p doesn't mean a big or important effect. With a huge $n$, trivial effects get tiny p-values ([[Statistical vs Practical Significance]]).

A p-value can't be above 1 or below 0. R prints very small values in [[Scientific Notation|scientific notation]]; these are tiny numbers, not large ones. Report the actual p-value, not just "below 0.05", so readers can apply their own α. Fisher used p-values informally, as a measure of evidence rather than a strict cutoff, and the American Statistical Association warns against treating 0.05 as a bright line.

See also: [[Writing a Conclusion]], [[Effect Size]], [[Why a p-value is not always meaningful]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3), [[References|Wasserstein and Lazar 2016]].
