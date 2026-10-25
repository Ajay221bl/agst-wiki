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

A p-value is worked out by assuming H₀ is true. It's the probability of data at least this extreme, given H₀. It is not the probability that H₀ is true given the data, and not the probability that the result is real. Flip a conditional probability around and you change its meaning, the same way a test's sensitivity is not the chance that a patient who tests positive is sick.

![[P-value as tail area.png|700]]
The shaded [[Tails of a Distribution|tail]] is drawn under the null curve. The whole picture assumes H₀, so it can't also tell you how likely H₀ is.

This is the most common misreading in all of statistics, so it's worth going slowly.

Every probability is conditional on something. "The chance of 20 heads" only means something once you add "given the coin is fair" ([[Conditional Probability]]).

A test picks its condition up front. It assumes H₀ is true, and from that assumption it works out how the [[Test Statistic|test statistic]] would behave: the [[Null Distribution|null distribution]]. Then it finds where your observed [[Parameter vs Statistic|statistic]] lands, and measures the area beyond it. That area is the p-value: the probability of a statistic this extreme or more, given H₀ ([[P-Value]]).

Now see the trap. The p-value is P(data given H₀). What people want is P(H₀ given data). Those are different numbers, and the order matters. P(positive given sick) is a test's sensitivity. P(sick given positive) is what a patient wants to know, and it can be wildly different ([[Predictive Values and Prevalence]]). The p-value and the probability of H₀ are related in exactly that way.

So a p of 0.03 says "data like these would be rare if H₀ were true". It does not say "there is a 3% chance H₀ is true". And it certainly doesn't say "there is a 97% chance the effect is real". Even a tiny p can be a false positive, and we never learn which error we made ([[Type I and Type II Errors]]).

The reason this matters: reading p as the chance that H₀ is true makes weak evidence sound strong, and turns one study into something close to proof. A p-value tells you how surprised to be. It doesn't tell you what to believe.

See also: [[Sensitivity and Specificity|diagnostic testing]], [[Why probability comes before statistics]], [[Why a positive test can still mean you are probably healthy]], [[Why a p-value is not always meaningful]].
