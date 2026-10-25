---
type: atomic
tags:
  - probability
aliases:
  - "mutually exclusive"
  - "disjoint"
status: seedling
---

Two events are disjoint, or mutually exclusive, when they can't happen at the same time. Then $P(A \text{ and } B) = 0$.

Some things can't happen at the same time. That simple fact makes adding probabilities easy. An event is a group of outcomes ([[Sample Space and Events]]). Two events either share some outcomes or they don't. On one roll of a die, "get a 2" and "get a 5" share no outcome, so they can't both happen. In a [[Venn Diagram|Venn diagram]], their circles don't touch. An event and its complement are always disjoint ([[Complementary Events]]).

For disjoint events, "or" is plain addition: $P(A \text{ or } B) = P(A) + P(B)$. Normally the [[Addition Rule]] subtracts the overlap, $P(A \text{ and } B)$, which would otherwise be counted twice. With no overlap, there is nothing to subtract.

![[Venn diagrams - addition, disjoint, conditional.png|700]]
Left: adding A and B counts the overlap twice, so the addition rule subtracts it once. Middle: disjoint events have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

For example, on one die, $P(2 \text{ or } 5) = 1/6 + 1/6 = 2/6$.

Disjoint is about whether events can share outcomes; independence is about whether one tells you about the other. Disjoint is not the same as independent. It is nearly the opposite: two disjoint events that each have some chance of happening are never independent. If one happens, the other's chance drops to 0, so knowing one tells you about the other ([[Independent Events]]). Also, disjoint events only add to 1 if together they cover every outcome. A 2 and a 5 are disjoint, but together they make only 1/3.

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (pp. 93–96).
