---
type: atomic
tags:
  - probability
aliases:
  - "or rule"
  - "union"
status: seedling
---

The chance that $A$ or $B$ happens is the chance of $A$, plus the chance of $B$, minus the chance of both. Subtracting "both" stops the overlap being counted twice.

In probability, "A or B" means A, or B, or both. Suppose you want the chance that a student takes biology or chemistry. If you simply add the biology students and the chemistry students, anyone taking both subjects gets counted twice ([[Sample Space and Events]]). So you subtract the overlap once:
$$P(A \text{ or } B) = P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

If the two events can't happen together, the overlap is 0 and the rule shrinks to $P(A) + P(B)$ ([[Disjoint Events]]). The overlap itself, $P(A \cap B)$, comes from the [[Multiplication Rule]] or can be read straight from a [[Contingency Table]].

![[Venn diagrams - addition, disjoint, conditional.png|700]]
Left: adding A and B counts the overlap twice, so the addition rule subtracts it once. Middle: disjoint events have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

"Or" questions come up all the time (a positive test or a drug user; male or a smoker), and just adding the probabilities gives too big an answer whenever the events overlap.

For example, here are 1,000 people grouped by drug use and test result:

| | Positive | Negative | Total |
|---|---|---|---|
| Uses drugs | 44 | 6 | 50 |
| Doesn't use | 90 | 860 | 950 |
| Total | 134 | 866 | 1,000 |

$P(\text{positive or user}) = \frac{134}{1000} + \frac{50}{1000} - \frac{44}{1000} = \frac{140}{1000} = 0.14$

You can check this by adding the cells that are positive or a user, each counted once: $(44 + 90 + 6)/1000 = 0.14$.

Remember that "or" includes "both", and that plain adding only works when the events can't happen together.

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (pp. 94–96).
