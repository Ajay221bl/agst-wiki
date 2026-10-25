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

Because every hypothesis test is a probability question in disguise. It asks: "how likely is what I saw, if nothing is going on?" The p-value is a conditional probability, and the logic of rejecting a null hypothesis is the rare event rule. Coins and cards are just the cleanest place to learn the rules before the data get messy. So probability comes first, even though it can feel like a detour.

Watch what a test actually does, step by step, and you'll see probability at every joint.

It starts by **assuming** something: a fair coin, or a diet with no effect.

It then asks how probable the observed result would be under that [[Test Assumptions|assumption]]. "How likely is this, given that?" is a **conditional probability** ([[Conditional Probability]]).

If that probability is tiny, we doubt the assumption, not the data. That's the **rare event rule** ([[Rare Event Rule]]). It's the same reasoning a detective uses: if your story makes the evidence nearly impossible, your story is probably wrong.

To get that probability at all, the test statistic has to follow a known distribution, which is a [[Probability Distribution|probability model]] for a **random variable** ([[Random Variable]], [[Sampling Distribution]]).

Later tools reuse the basic rules directly. For example, $1 - (1-\alpha)^c$, the chance of at least one false positive in many tests, is just the complement and multiplication rules put together ([[Family-Wise Type I Error]]). Even the words for diagnostic tests, false positive and false negative, come back as Type I and Type II errors ([[Type I and Type II Errors]]).

So skipping probability doesn't save time. It just means memorizing. Without it, p-values become "small means good", with no idea what they measure. That leads straight to the classic mistake of calling the p-value the probability that $H_0$ is true ([[P-Value]]). And the argument for ANOVA becomes an unexplained rule instead of a two-line calculation.

Learn the foundations and the rest of the subject becomes derivable. Skip them and it becomes a list of rules.

See also: [[Test Statistic|test statistics]], [[Complementary Events]], [[Multiplication Rule]], [[Hypothesis Testing]], [[Sensitivity and Specificity]], [[Why a positive test can still mean you are probably healthy]].
