---
type: molecular
tags:
  - molecular
  - probability
  - inference
aliases:
  - "why start with probability"
status: seedling
---

> [!summary] In plain words
> Every hypothesis test asks "how likely is what I saw, if nothing is going on?", and that is a probability question. The p-value is a conditional probability, and the logic of rejecting a null is the rare event rule from the first week. So the course teaches probability first, even though the probability unit feels like a detour.

## The question
The first unit is all coins, cards and [[Contingency Table|contingency tables]]. Why does a course on experimentation start there instead of with data?

## Built from
- [[Rare Event Rule]]: the reasoning pattern every test reuses.
- [[Conditional Probability]]: a p-value is computed *given* that $H_0$ is true.
- [[Random Variable]]: [[Test Statistic|test statistics]] are random variables with known distributions.
- [[Complementary Events]] and [[Multiplication Rule]]: needed later for the family-wise error formula.
- [[P-Value]]: the payoff.

## The reasoning, step by step
1. A test starts by **assuming** something (a fair coin, no diet effect).
2. It then asks how probable the observed result would be under that [[Test Assumptions|assumption]]: a **conditional probability** ([[Conditional Probability]]).
3. If that probability is tiny, we doubt the assumption, not the data: the **rare event rule** ([[Rare Event Rule]]).
4. To get that probability, the test statistic must follow a known distribution, which is a [[Probability Distribution|probability model]] for a **random variable** ([[Random Variable]], [[Sampling Distribution]]).
5. Later tools reuse the basic rules directly: $1 - (1-\alpha)^c$ combines the complement and multiplication rules ([[Family-Wise Type I Error]]).
6. Even diagnostic-test vocabulary (false positive, false negative) returns as Type I and Type II errors ([[Type I and Type II Errors]]).

## What would go wrong otherwise
- P-values would be memorized as "small = good" without knowing what they measure, which leads to the classic error "the p-value is the probability $H_0$ is true" ([[P-Value]]).
- The multiple-testing argument for ANOVA would be an unexplained rule rather than a two-line calculation.

## Connections
- **Related:** [[Hypothesis Testing]], [[Sensitivity and Specificity]], [[Why a positive test can still mean you are probably healthy]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Probability]]
