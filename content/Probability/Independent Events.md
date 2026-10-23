---
type: atomic
tags:
  - probability
aliases:
  - "independence"
  - "independent"
status: seedling
---

Two events are independent when knowing that one happened doesn't change the probability of the other: $P(A \mid B) = P(A)$.

Learning one thing often changes the chances of another; that is what [[Conditional Probability|conditional probability]] measures. Sometimes it changes nothing. Flip a coin and roll a die: knowing the coin landed heads tells you nothing about the die, which still has a 1/6 chance of a six. Those events are independent. Now draw two cards without putting the first one back. If the first was a club, fewer clubs are left, so the chances for the second card change. Those events are dependent.

Formally, events are independent when $P(A \mid B) = P(A)$ and $P(B \mid A) = P(B)$. That is just "knowing B doesn't matter" written as a formula. Independence makes "and" easy: $P(A \cap B) = P(A)P(B)$ ([[Multiplication Rule]]).

Independence is also an [[Test Assumptions|assumption]] behind almost every statistical test: each observation should be independent of the others ([[ANOVA Assumptions]]). The [[Standard Error|standard error]] (SE) formulas treat each observation as bringing new information. Observations that are linked, like the same person measured twice or siblings, bring less, so the SE comes out too small. Linked data need a paired analysis ([[Independent vs Paired Samples]]).

For example, the chance of two fives on two fair dice is $\frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$.

If $P(A) = 0.50$ and $P(B) = 0.35$, and the events are independent:
- $P(A \cap B) = 0.50 \times 0.35 = 0.175$
- $P(A \cup B) = 0.50 + 0.35 - 0.175 = 0.675$

Independent doesn't mean "can't happen together"; that is [[Disjoint Events|disjoint]]. Independent events can, and usually do, happen together. And dependent doesn't mean one causes the other. It only means the probabilities are linked: drawing [[Sampling With and Without Replacement|without replacement]] creates dependence without any cause and effect ([[Association vs Causation]]).

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (p. 105, p. 111).
