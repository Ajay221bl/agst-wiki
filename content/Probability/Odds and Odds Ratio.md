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

The odds of an event are $p / (1 - p)$, the chance it happens over the chance it doesn't; an **odds ratio** divides the odds in one group by the odds in another, and OR = 1 means no association.

1. **Probability is "happens" out of "all tries"**: p ([[Proportions and Percentages]]).
2. **Odds compare "happens" with "doesn't happen"**: $p / (1 - p)$ ([[Complementary Events]]). p = 0.75 gives odds of 3, "3 to 1". *Why another scale:* it is the natural scale for logistic regression, which models odds ([[Regression]]).
3. **The two carry the same information.** You can go back: $p = \text{odds} / (1 + \text{odds})$.
4. **To compare two groups, divide their odds**: OR = odds(exposed) ÷ odds(unexposed) ([[Ratios and Fractions]]). OR = 1: the same odds, no association. OR > 1: higher odds with the exposure ([[Association vs Causation]]).
5. **An odds ratio is not a probability ratio.** For common outcomes they can differ a lot.

![[Odds vs probability.png|700]]
Odds climb slowly at first and then shoot up as p nears 1. Probabilities of 0.5 and 0.2 differ by a factor of 2.5, but their odds differ by a factor of 4.

It is the standard effect size for a [[Types of Data|categorical]] outcome measured in two groups ([[Effect Size]]), and logistic regression is built on it.

For example:

Exact arithmetic: p = 0.5 gives odds 1; p = 0.2 gives odds 0.25; OR = 1 / 0.25 = 4, while the ratio of probabilities is 0.5 / 0.2 = 2.5.

Common mistakes:

- **"Odds and probability are the same."** p = 0.75 is odds of 3.
- **"OR = 2 means twice as likely."** It means twice the *odds*; "twice as likely" is a probability ratio.

See also: [[Contingency Table]], [[Chi-Square Test]].
