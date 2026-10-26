---
type: atomic
tags:
  - probability
aliases:
  - "complement"
  - "complement rule"
  - "at least one"
status: seedling
---

The complement of an event $A$ is "everything except $A$". Its probability is $P(\text{not } A) = 1 - P(A)$.

Every outcome either is in $A$ or isn't: either it rains tomorrow or it doesn't. "Not $A$" is itself an event, the complement, written $A^c$ (or $\bar{A}$ or $A'$). It holds every outcome in the sample space that isn't in $A$ ([[Sample Space and Events]]). $A$ and its complement can't both happen, and together they cover every possibility, so their probabilities add to 1 ([[Disjoint Events]]):
$$P(A) + P(A^c) = 1 \quad\Rightarrow\quad P(A^c) = 1 - P(A)$$

The complement is useful whenever "not A" is easier to work out than A. "At least one" questions are the classic case. "At least one six in three rolls" can happen in many ways, but its complement, "no sixes", happens in only one way: $(5/6)^3$ ([[Multiplication Rule]]). Work that out and subtract it from 1.

For example, the probability of at least one six in 3 rolls of a fair die. Counting directly means adding up one six, two sixes and three sixes, each in several arrangements, which is tedious. With the complement: $P(\text{no sixes}) = (5/6)^3 \approx 0.579$, so $P(\text{at least one}) \approx 1 - 0.579 = 0.421$.

Be careful with boundaries. The complement of "at least 2" is "at most 1" (fewer than 2), not "at most 2", because the value 2 belongs to the event itself.

See also: [[Family-Wise Type I Error]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (§2.1).
