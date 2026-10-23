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

Probability is mostly coins, cards and [[Contingency Table|contingency tables]]. Why does the statistics of experiments start there instead of with data?

Every hypothesis test asks "how likely is what I saw, if nothing is going on?", and that is a probability question. The p-value is a conditional probability, and the logic of rejecting a null hypothesis is the rare event rule. So probability comes first, even though it can feel like a detour.

1. A test starts by **assuming** something, such as a fair coin or no effect of a diet.
2. It then asks how probable the observed result would be under that [[Test Assumptions|assumption]]. That is a **conditional probability** ([[Conditional Probability]]).
3. If that probability is tiny, we doubt the assumption, not the data. That is the **rare event rule** ([[Rare Event Rule]]).
4. To get that probability, the test statistic must follow a known distribution, which is a [[Probability Distribution|probability model]] for a **random variable** ([[Random Variable]], [[Sampling Distribution]]).
5. Later tools reuse the basic rules directly. For example, $1 - (1-\alpha)^c$ combines the complement and multiplication rules ([[Family-Wise Type I Error]]).
6. Even the words used for diagnostic tests, false positive and false negative, come back as Type I and Type II errors ([[Type I and Type II Errors]]).

Without probability, p-values would be memorized as "small means good" without knowing what they measure. That leads to the classic mistake of saying the p-value is the probability that $H_0$ is true ([[P-Value]]). And the multiple-testing argument for ANOVA would be an unexplained rule rather than a two-line calculation.

See also: [[Test Statistic|test statistics]], [[Complementary Events]], [[Multiplication Rule]], [[Hypothesis Testing]], [[Sensitivity and Specificity]], [[Why a positive test can still mean you are probably healthy]].
