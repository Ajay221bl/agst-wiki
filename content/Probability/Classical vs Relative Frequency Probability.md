---
type: atomic
tags:
  - probability
aliases:
  - "classical probability"
  - "relative frequency"
  - "empirical probability"
status: seedling
---

**In one line:** classical probability counts equally likely outcomes on paper; relative frequency probability counts how often something actually happened in many tries.

> [!info] Before this, it helps to know
> [[Sample Space and Events]] (the list classical probability counts from) · [[Proportions and Percentages]] (both answers are proportions)

## Start from zero
1. **Question: how likely is a spade?** There are two honest ways to answer.
2. **Classical: count on paper.** List the sample space ([[Sample Space and Events]]). If every simple event is equally likely,
$$P(A) = \frac{\text{number of ways } A \text{ can occur}}{\text{number of simple events in } S}$$
   A deck has 52 cards, 13 of them spades: 13/52. *Why "equally likely" matters:* counting only gives the right share if each outcome carries the same weight; a loaded die breaks it.
3. **Relative frequency (empirical, experimental): count what happened.** Repeat or observe the procedure many times:
$$P(A) \approx \frac{\text{number of times } A \text{ occurred}}{\text{number of times the procedure was repeated}}$$
   No sample space is needed. *Why this matters:* most real questions (will this seed germinate? does this patient respond?) have no equally likely outcomes to count, so data are the only route.
4. **The two meet in the long run.** With more and more repetitions, the relative frequency settles towards the true probability ([[Law of Large Numbers]]). *Why it's written "≈":* any finite run is only an estimate.
5. **Statistics lives on the relative-frequency side**: a sample proportion is a relative frequency used to estimate an unknown probability ([[Parameter vs Statistic]]).

## Why it exists
Most real questions have no neat sample space. Nobody can list "all the ways a person might be a smoker". So we estimate the probability from data, which is the bridge to everything else in statistics: estimating unknown population values from observed samples ([[Population and Sample]]).

## A tiny example
| Question | Approach | Answer |
|---|---|---|
| Odd number on a fair die | classical | 3/6 = 0.5 |
| A ten from a deck | classical | 4/52 |
| Die roll less than 5 | classical | 4/6 |
| Smoker, from a survey of 1,010 adults with 202 smokers | relative frequency | ≈ 0.20 |

## Common confusions
- **"Two outcomes means 50/50."** Win or lose the lottery is two outcomes, nowhere near equally likely.
- **"A relative frequency is the true probability."** It is an estimate, and a noisy one when the number of trials is small.

## Connections
- **Builds on:** [[Sample Space and Events]], [[Proportions and Percentages]]
- **Leads to:** [[Law of Large Numbers]], [[Population and Sample]], [[Point Estimate]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (§2.1, pp. 90–93)
