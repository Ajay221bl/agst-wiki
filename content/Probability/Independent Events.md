---
type: atomic
tags:
  - probability
aliases:
  - "independence"
  - "independent"
status: seedling
---

Two events are independent when knowing that one happened does not change the probability of the other: $P(A \mid B) = P(A)$.

1. **Learning one thing can change the chances of another.** That's what conditional probability measures ([[Conditional Probability]]).
2. **Sometimes it changes nothing.** Flip a coin and roll a die: learning the coin landed heads tells you nothing about the die. The die still has a 1/6 chance of a six. Those events are **independent**.
3. **Sometimes it does.** Draw two cards without putting the first back. If the first was a club, there are fewer clubs left, so the second draw's chances change. Those events are **dependent**.
4. **Formally:** $P(A \mid B) = P(A)$ and $P(B \mid A) = P(B)$. *Why this is the right test:* "knowing B doesn't matter" literally means the conditional and unconditional probabilities are equal.
5. **Independence makes "and" easy:** $P(A \cap B) = P(A)P(B)$ ([[Multiplication Rule]]).
6. **Every test assumes independent observations.** *Why:* the [[Standard Error|standard error]] formulas multiply and add as if each observation brings new information; dependent observations (the same person twice, siblings) bring less, and the SE comes out too small ([[Independent vs Paired Samples]]).

Independence simplifies the [[Multiplication Rule]]: $P(A \text{ and } B) = P(A) \times P(B)$. It is also an **[[Test Assumptions|assumption]] behind almost every test**: observations should be independent of each other ([[ANOVA Assumptions]]). When they are not (the same person measured twice), you need a paired analysis ([[Independent vs Paired Samples]]).

For example:

Two fair dice, both fives: $\frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$.

$P(A) = 0.50$, $P(B) = 0.35$, independent.
- $P(A \cap B) = 0.50 \times 0.35 = 0.175$
- $P(A \cup B) = 0.50 + 0.35 - 0.175 = 0.675$

Common mistakes:

- **"Independent means they can't happen together."** That is disjoint. Independent events can, and usually do, happen together.
- **"Dependent means one causes the other."** It only means the probabilities are linked. Drawing [[Sampling With and Without Replacement|without replacement]] creates dependence with no [[Association vs Causation|causation]] story.

See also: [[Disjoint Events]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (p. 105, p. 111).
