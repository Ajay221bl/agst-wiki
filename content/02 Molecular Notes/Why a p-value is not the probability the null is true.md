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

What does a p-value actually measure, and what is the wrong way to read it?

A p-value is worked out assuming H₀ is true: it is the probability of data at least this extreme, given H₀. It is not the probability that H₀ is true given the data, and not the probability that the result is significant. Flipping a conditional probability changes its meaning, just as a test's sensitivity is not the chance that a patient who tests positive is sick.

![[P-value as tail area.png|700]]
The shaded [[Tails of a Distribution|tail]] is drawn under the null curve. The whole picture assumes H₀; it cannot also tell you how likely H₀ is.

1. Every probability is conditional on something, for example "the chance of 20 heads, given the coin is fair" ([[Conditional Probability]]).
2. A test takes H₀ as true and builds the [[Null Distribution|null distribution]] of the [[Test Statistic|test statistic]] from it.
3. The p-value is the area beyond the observed [[Parameter vs Statistic|statistic]] under that curve: the probability of a statistic this extreme or more, given H₀ ([[P-Value]]).
4. P(data given H₀) and P(H₀ given data) are different numbers, just as P(positive given sick), the sensitivity, differs from P(sick given positive), the predictive value ([[Predictive Values and Prevalence]]).
5. So a p of 0.03 says "data like these would be rare if H₀ were true". It doesn't say "there is a 3% chance H₀ is true", and it doesn't say "there is a 97% chance the effect is real".
6. Even a tiny p can be a false positive, and we never know which error we made ([[Type I and Type II Errors]]).

Reading p as the chance that H₀ is true makes weak evidence sound strong and treats one study as near-proof.

See also: [[Sensitivity and Specificity|diagnostic testing]], [[Why probability comes before statistics]], [[Why a positive test can still mean you are probably healthy]], [[Why a p-value is not always meaningful]].
