---
type: atomic
tags:
  - probability
aliases:
  - "random variables"
  - "probability distribution"
  - "density curve"
  - "discrete vs continuous random variable"
status: seedling
---

A random variable is a number whose value is decided by chance. Its probability distribution says how likely each value, or range of values, is.

Many chance outcomes are numbers already, or can be turned into numbers. Roll two dice and record the total. Before you roll, you don't know the total, but you know the possible values (2 to 12) and how likely each is. Turning outcomes into numbers is useful because numbers can be averaged and compared, while outcomes like "heads, tails" can't. List the values with their probabilities and you have the [[Probability Distribution|probability distribution]].

There are two kinds, matching the two kinds of numerical data ([[Types of Data]]). A **discrete** random variable takes countable values ("the number of..."). Its distribution lists each value with a probability, and the probabilities add to 1, since exactly one value must happen. A **continuous** random variable can take any value on a scale. Its distribution is a curve with a total area of 1, and the probability of a range is the area above it.

This is the link to statistics. A measurement on a randomly chosen person or plant is a random variable, and so is a [[Parameter vs Statistic|statistic]] like the sample mean $\bar{x}$. The distribution of the sample mean is called the [[Sampling Distribution|sampling distribution]]. Every [[Test Statistic|test statistic]] ($z$, $t$, $F$) is a random variable with a known distribution, which is what lets software turn it into a p-value by measuring an area under the right curve ([[P-Value]]).

For example, the number of heads in 2 fair coin flips:

| Heads | 0 | 1 | 2 |
|---|---|---|---|
| Probability | 0.25 | 0.50 | 0.25 |

The probabilities add to 1. The [[Expected Value|expected value]] is $0(0.25) + 1(0.5) + 2(0.25) = 1$ head.

For a continuous variable, the chance of any single exact value, such as P(X = 3.0), is 0; only ranges have probabilities. And for [[Independent and Dependent Variables|independent variables]], the variance of a difference is the sum of their variances, not the difference.

See also: [[Sample Space and Events]], [[Normal Distribution]], [[Variable and Observation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.1, p. 140).
