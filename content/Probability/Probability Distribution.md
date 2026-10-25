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

A probability distribution lists every possible value of a random variable with its probability. For a [[Types of Data|continuous]] variable it is a curve, and the probability of a range of values is the area under the curve.

A distribution is a complete description of what chance can do: every possible value and how often it happens. A [[Random Variable|random variable]] turns outcomes into numbers, like "number of heads in two flips". List every value it can take and how likely each one is: 0 heads (0.25), 1 head (0.5), 2 heads (0.25). That list is the distribution. The probabilities add to 1 because something has to happen and the outcomes don't overlap ([[Disjoint Events]]).

Continuous variables can't be listed this way. A height could be 170.0, 170.01 or 170.001 cm, and the chance of any exact value is 0. So we ask about ranges instead, such as "between 165 and 175". The distribution is drawn as a curve whose total area is 1, and the area above a range is the chance of landing in it. You can think of the curve as what a [[Histogram|histogram]] becomes when the sample is huge and the bars are very thin.

The well-known curves are just famous distributions: the [[Normal Distribution|normal]], the [[t-Distribution|t]] and the [[F-Distribution|F]]. Each has a known shape with known areas, which is why tables and R can give probabilities from them. A [[Parameter vs Statistic|statistic]] has a distribution too. If you repeated a study, the sample mean would come out a little differently each time; its distribution is the [[Sampling Distribution|sampling distribution]]. If the null hypothesis is true, the [[Test Statistic|test statistic]] follows the [[Null Distribution|null distribution]].

![[Probability distribution - bars and area.png|700]]
Left, a discrete distribution as bars that add to 1. Right, a continuous one, where the probability of landing between −1 and 1 is the shaded area, 0.683.

Every probability statement in [[Descriptive vs Inferential Statistics|inference]], whether a p-value, a [[Confidence Interval|confidence level]] or α, is an area under some distribution. Without distributions there would be no way to say how surprising a result is ([[P-Value]]).

For example, for the standard normal curve, P(−1 < Z < 1) is the area between −1 and 1, which is 0.683. That is the "68" in the [[Empirical Rule|empirical rule]].

Once you can picture the distribution, every probability question becomes a question about area. For a continuous variable, the height of the curve is not a probability; only areas are. And a distribution is not a data set. A data set is one sample, while the distribution describes all the values the process could produce and how often.

See also: [[Sample Space and Events]], [[Classical vs Relative Frequency Probability]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]].
