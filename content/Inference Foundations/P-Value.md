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

**In one line:** the p-value is the probability of getting a test statistic as extreme as, or more extreme than, the one observed, **assuming the [[Null and Alternative Hypotheses|null hypothesis]] is true**.

> [!info] Before this, it helps to know
> [[Rare Event Rule]] (the logic) · [[Test Statistic]] (what is being judged) · [[Null Distribution]] (where the probability comes from) · [[Conditional Probability]] (it is computed *given* $H_0$)

## Start from zero
1. **Assume $H_0$ is true** and picture repeating the study forever. The test statistics from those studies form the null distribution ([[Null Distribution]]).
2. **Locate your observed test statistic on it** ([[Test Statistic]]).
3. **The p-value is the share of those imaginary studies that would produce a result at least as extreme as yours.** *Why "at least as extreme" and not "exactly yours":* any single exact value has tiny probability; what matters is how far out in the [[Tails of a Distribution|tail]] you are. Which tail(s) count depends on $H_A$ ([[One-Tailed vs Two-Tailed Tests]]).
4. **It is a conditional probability:** P(data this extreme | $H_0$ true), not P($H_0$ true | data) ([[Conditional Probability]]).
5. **Small p-value: your result would be rare in a world where $H_0$ is true,** so either you saw something unusual or $H_0$ is wrong. That is the [[Rare Event Rule]].
6. **"Small" needs a [[Critical Value|cutoff]] decided in advance:** the [[Significance Level]].

## See it

![[P-value as tail area.png|700]]
*What to look at:* Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both tails for a two-sided test).

## Why it exists
It puts the rare event rule on a numeric scale so it can be compared with α: **p ≤ α → reject $H_0$**; **p > α → [[Why we never accept the null hypothesis|fail to reject]]** ([[Significance Level]]).

## A tiny example
Salmonella ($H_A: \mu > 0.3$): p ≈ 0.029. Reject at α = 0.05, **fail to reject at α = 0.01**. The conclusion depends on α, which must be set beforehand ([[Why choose alpha and tails before seeing the data]]).

## Common confusions
See the list above; the first one is the most common trap.

## Connections
- **Builds on:** [[Rare Event Rule]], [[Test Statistic]], [[Conditional Probability]], [[Null Distribution]]
- **Leads to:** [[Significance Level]], [[Writing a Conclusion]], [[Effect Size]], [[Why a p-value is not always meaningful]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (§4.3), [[References|Wasserstein and Lazar 2016]]
