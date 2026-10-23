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

A random variable is a number whose value is decided by chance, and its probability distribution says how likely each value (or range of values) is.

1. **Many chance outcomes are naturally numbers, or can be turned into numbers.** Roll two dice and record the **total**.
2. **Before you roll, you don't know it, but you know the possible values** (2 to 12) and how likely each is. A number decided by chance is a **random variable**. *Why turn outcomes into numbers:* numbers can be averaged and compared, which outcomes like "HT" can't.
3. **List the values with their probabilities and you have its probability distribution** ([[Probability Distribution]]).
4. **Two kinds, matching [[Types of Data]]:**
   - **Discrete:** countable values ("number of..."). The distribution lists each value with a probability, and **the probabilities sum to 1**. If the outcomes are 0, 1 or 2, then $P(0) + P(1) + P(2) = 1$. *Why 1:* exactly one value must occur.
   - **Continuous:** any value on a scale (the half-unit check). The distribution is a **density curve**; the **total area under the curve is 1**, and probability is the **area** over an interval.
5. **This is the bridge to statistics.** A measurement on a randomly chosen unit is a random variable, and so is a [[Parameter vs Statistic|statistic]] like $\bar{x}$, whose distribution is the sampling distribution ([[Sampling Distribution]]).

Every test statistic ($z$, $t$, $F$) is a random variable with a known distribution. That is what lets software turn a test statistic into a p-value: it measures an area under the right curve ([[P-Value]]).

For example:

Number of heads in 2 fair coin flips:

| Heads | 0 | 1 | 2 |
|---|---|---|---|
| Probability | 0.25 | 0.50 | 0.25 |

The probabilities add to 1. The [[Expected Value|expected value]] is $0(0.25) + 1(0.5) + 2(0.25) = 1$ head.

Common mistakes:

- **"For a continuous [[Variable and Observation|variable]], P(X = 3.0) is the height of the curve."** For a continuous variable the probability of any single exact value is 0; only intervals have probability.
- **"Variances of a difference subtract."** They add, for [[Independent and Dependent Variables|independent variables]].

See also: [[Sample Space and Events]], [[Normal Distribution]], [[Test Statistic]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.1, p. 140).
