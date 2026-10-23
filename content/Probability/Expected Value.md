---
type: atomic
tags:
  - probability
aliases:
  - "expected value"
  - "E(X)"
  - "long-run average"
  - "expectation"
status: seedling
---

**In one line:** the expected value $E(X)$ of a random variable is its long-run average: each possible value weighted by its probability, $E(X) = \sum x_i P(X = x_i)$.

> [!info] Before this, it helps to know
> [[Random Variable]] · [[Probability Distribution]] · [[Mean]] · [[Summation Notation]]

## Start from zero
1. **A random variable turns outcomes into numbers** (heads in two flips: 0, 1 or 2; [[Random Variable]]).
2. **Its distribution gives each value a probability**, adding to 1 ([[Probability Distribution]]).
3. **If we repeated the experiment forever, what would the average be?** Each value turns up a share of the time equal to its probability ([[Law of Large Numbers]]). *Why weight by probability:* a value that happens half the time should count half.
4. **So multiply each value by its probability and add:** $E(X) = \sum x_i P(X = x_i)$ ([[Summation Notation]]). It is the mean of the population, written $\mu$ ([[Mean]], [[Parameter vs Statistic]]).
5. **It is the balance point of the distribution**, just as the mean is the balance point of data.
6. **[[Descriptive vs Inferential Statistics|Inference]] uses it constantly.** "Unbiased" means $E(\text{statistic}) = \text{parameter}$, e.g. $E(\bar{x}) = \mu$ ([[Unbiased Estimator]]). The "expected" value under $H_0$ is what the test statistic compares against ([[Test Statistic]]).

## See it

![[Random variable - heads in two flips.png|700]]
*What to look at:* the bars at 0, 1 and 2 heads with heights 0.25, 0.5, 0.25 balance at 1.

## Why it exists
It gives a single number for "what to expect" from something random, and it is the yardstick for asking whether a statistic is biased.

## A tiny example
Heads in two fair flips: $E(X) = 0(0.25) + 1(0.5) + 2(0.25) = 1$ head ([[Random Variable]]).

## Common confusions
- **"The expected value is the most likely value."** Not necessarily; for one die it is 3.5, which never happens.
- **"Expected means guaranteed."** It is a long-run average; any one result can be far from it.

## Connections
- **Builds on:** [[Random Variable]], [[Probability Distribution]], [[Mean]], [[Summation Notation]]
- **Leads to:** [[Unbiased Estimator]], [[Test Statistic]], [[Law of Large Numbers]]
- **Part of:** [[MOC - Probability]]
