---
type: atomic
tags:
  - probability
aliases:
  - "distribution"
  - "probability model"
  - "density curve"
  - "area under the curve"
status: seedling
---

**In one line:** a probability distribution lists every possible outcome of a random variable with its probability; for a [[Types of Data|continuous]] variable it is a curve, and the probability of a range is the area under the curve.

> [!info] Before this, it helps to know
> [[Random Variable]] (what the outcomes are) · [[Sample Space and Events]] · [[Classical vs Relative Frequency Probability]]

## Start from zero
1. **A random variable turns outcomes into numbers**, like "number of heads in two flips" ([[Random Variable]]).
2. **List every value it can take and how likely each is.** Two flips: 0 heads (0.25), 1 head (0.5), 2 heads (0.25). That list is the distribution. *Why the probabilities add to 1:* something has to happen, and the outcomes don't overlap ([[Disjoint Events]]).
3. **Continuous variables can't be listed.** Height can be 170.0, 170.01, 170.001 cm... The chance of any *exact* value is 0. So instead we ask about **ranges**: P(between 165 and 175).
4. **Draw a curve and let area be probability.** A density curve is drawn so the total area under it is 1, and the area above any range is the probability of landing in it. *Why area:* it is what a histogram becomes as the sample gets huge and the bars get thin ([[Histogram]]).
5. **Named curves are just famous distributions.** Normal ([[Normal Distribution]]), t ([[t-Distribution]]), F ([[F-Distribution]]). Each is a shape with known areas, which is why tables and R can give probabilities from them.
6. **A [[Parameter vs Statistic|statistic]] has a distribution too.** If you repeated the study, the sample mean would come out differently each time; its distribution is the sampling distribution ([[Sampling Distribution]]), and under $H_0$ the [[Test Statistic|test statistic]]'s distribution is the null distribution ([[Null Distribution]]).

## See it

![[Probability distribution - bars and area.png|700]]
*What to look at:* left, a discrete distribution as bars that add to 1. Right, a continuous one, where the probability of landing between −1 and 1 is the shaded area, 0.683.

## Why it exists
Every probability statement in [[Descriptive vs Inferential Statistics|inference]] (a p-value, a [[Confidence Interval|confidence level]], α) is an area under some distribution. Without distributions there is no way to say how surprising a result is.

## A tiny example
For the standard normal, P(−1 < Z < 1) is the area between −1 and 1: 0.683, the "68" of the empirical rule ([[Empirical Rule]]).

## Common confusions
- **"The height of the curve is the probability."** For a continuous variable, only areas are probabilities.
- **"A distribution is a data set."** A data set is one sample; the distribution describes all the values the process could produce and how often.

## Connections
- **Builds on:** [[Random Variable]], [[Sample Space and Events]], [[Classical vs Relative Frequency Probability]]
- **Leads to:** [[Normal Distribution]], [[Sampling Distribution]], [[Null Distribution]], [[P-Value]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 3]]
