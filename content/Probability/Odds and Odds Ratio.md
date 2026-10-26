---
type: atomic
tags:
  - probability
aliases:
  - "odds"
  - "odds ratio"
  - "OR"
status: seedling
---

The odds of an event are the chance it happens divided by the chance it doesn't: $p / (1 - p)$. An odds ratio divides the odds in one group by the odds in another. An odds ratio of 1 means the groups have the same odds.

A probability compares "happens" with "all tries" ([[Proportions and Percentages]]). Odds compare "happens" with "doesn't happen" ([[Complementary Events]]). A probability of 0.75 gives odds of 3, said "3 to 1". The two scales carry the same information, and you can convert back with $p = \text{odds} / (1 + \text{odds})$. Odds are the natural scale for logistic regression, which models them (Regression).

To compare two groups, divide their odds ([[Ratios and Fractions]]): the odds ratio (OR) is the odds in the exposed group divided by the odds in the unexposed group. An OR of 1 means no association. An OR above 1 means higher odds with the exposure ([[Association vs Causation]]). The odds ratio is the standard [[Effect Size|effect size]] for a yes-or-no outcome compared between two groups ([[Types of Data]]).

![[Odds vs probability.png|700]]
Odds climb slowly at first and then shoot up as p nears 1. Probabilities of 0.5 and 0.2 differ by a factor of 2.5, but their odds differ by a factor of 4.

For example, a probability of 0.5 gives odds of 1, and a probability of 0.2 gives odds of 0.25. The odds ratio is 1 / 0.25 = 4, while the ratio of the probabilities is only 0.5 / 0.2 = 2.5.

Odds and probability are not the same thing: a probability of 0.75 is odds of 3. And an odds ratio of 2 means twice the odds, not "twice as likely". For common outcomes the two can differ a lot.

See also: [[Contingency Table]].
