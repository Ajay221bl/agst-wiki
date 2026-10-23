---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "p-value misreading"
  - "P(data given H0)"
status: seedling
---

> [!summary] In plain words
> A p-value is computed assuming H₀ is true: it is the probability of data at least this extreme given H₀. It is not the probability that H₀ is true given the data, and not the probability the result is significant. Flipping a conditional probability changes its meaning, just as sensitivity is not the chance a positive patient is sick.

## The question
What does a p-value actually measure, and what is the wrong reading?

## Built from
- [[Conditional Probability]]: P(A given B) is not P(B given A).
- [[Null Distribution]]: the world the p-value assumes.
- [[P-Value]]: the definition.
- [[Predictive Values and Prevalence]]: the same flip in [[Sensitivity and Specificity|diagnostic testing]].
- [[Type I and Type II Errors]]: what a small p can still be.

## See it

![[P-value as tail area.png|700]]
*What to look at:* The shaded [[Tails of a Distribution|tail]] is drawn under the null curve. The whole picture assumes H₀; it cannot also tell you how likely H₀ is.

## The reasoning, step by step
1. Every probability is conditional on something: "the chance of 20 heads, given the coin is fair" ([[Conditional Probability]]).
2. A test fixes H₀ as true and builds the [[Null Distribution]] of the [[Test Statistic|test statistic]] from it.
3. The p-value is the area beyond the observed [[Parameter vs Statistic|statistic]] under that curve: P(statistic this extreme or more, given H₀) ([[P-Value]]).
4. P(data given H₀) and P(H₀ given data) are different numbers, just as P(positive given sick) (sensitivity) differs from P(sick given positive) (predictive value) ([[Predictive Values and Prevalence]]).
5. So a p of 0.03 says "data like these would be rare if H₀ were true", not "there is a 3% chance H₀ is true" and not "a 97% chance the effect is real".
6. Even a tiny p can be a false positive; we never know which error we made ([[Type I and Type II Errors]]).

## What would go wrong otherwise
Reading p as the chance H₀ is true makes weak evidence sound strong and treats one study as near-proof.

## Connections
- **Related:** [[Why probability comes before statistics]], [[Why a positive test can still mean you are probably healthy]], [[Why a p-value is not always meaningful]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
