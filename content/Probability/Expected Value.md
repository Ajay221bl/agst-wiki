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

The expected value $E(X)$ of a random variable is its long-run average: each possible value multiplied by its probability, then added up. In symbols, $E(X) = \sum x_i P(X = x_i)$.

A [[Random Variable|random variable]] turns chance outcomes into numbers, such as the number of heads in two coin flips (0, 1 or 2). Its [[Probability Distribution|distribution]] gives each value a probability. If you repeated the experiment forever, each value would come up a share of the time equal to its probability ([[Law of Large Numbers]]). So to find the long-run average, weight each value by its probability: a value that happens half the time should count half ([[Summation Notation]]).

The expected value is the mean of the whole population, written $\mu$ ([[Mean]], [[Parameter vs Statistic]]). It is the balance point of the distribution, just as the mean is the balance point of a set of data.

![[Random variable - heads in two flips.png|700]]
The bars at 0, 1 and 2 heads, with heights 0.25, 0.5 and 0.25, balance at 1.

Inference uses expected values all the time ([[Descriptive vs Inferential Statistics]]). A statistic is called unbiased when its expected value equals the thing it estimates, for example $E(\bar{x}) = \mu$ ([[Unbiased Estimator]]). And a [[Test Statistic|test statistic]] compares what you saw with what you would expect if the null hypothesis were true.

For example, for heads in two fair flips, $E(X) = 0(0.25) + 1(0.5) + 2(0.25) = 1$ head.

The expected value isn't necessarily the most likely value. For one die it is 3.5, which never comes up. And "expected" doesn't mean guaranteed: it is a long-run average, and any single result can be far from it.
