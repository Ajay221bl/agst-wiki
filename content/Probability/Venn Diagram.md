---
type: atomic
tags:
  - probability
aliases:
  - "Venn diagram"
  - "Venn diagrams"
  - "Venn"
status: seedling
---

A Venn diagram draws the sample space as a box and each event as a circle, so "or", "and", "not" and overlaps can be seen as areas.

1. **Draw every possible outcome as the inside of a box**: the sample space, total probability 1 ([[Sample Space and Events]]).
2. **Draw an event as a circle**; its area stands for its probability.
3. **"A or B" is everything inside either circle; "A and B" is the overlap.** *Why the picture helps:* adding the two circles counts the overlap twice, which is exactly why the addition rule subtracts it once ([[Addition Rule]]).
4. **Outside the circle is "not A"**, the complement, $1 - P(A)$ ([[Complementary Events]]).
5. **Circles that don't touch are disjoint**: no shared outcomes, $P(A \text{ and } B) = 0$ ([[Disjoint Events]]).
6. **Conditioning shrinks the box to one circle.** $P(A \mid B)$ is the share of circle B that is also in A ([[Conditional Probability]]).

![[Venn diagrams - addition, disjoint, conditional.png|700]]
The overlap is counted once in "or", is empty for disjoint events, and becomes the [[Ratios and Fractions|numerator]] when you condition on B.

It turns probability rules into pictures of areas, so you can check a formula by asking "which area is this?".

For example:

$P(A) = 0.5$, $P(B) = 0.35$, $P(A \text{ and } B) = 0.175$: the "or" area is $0.5 + 0.35 - 0.175 = 0.675$ ([[Independent Events]]).

Common mistakes:

- **"Overlapping circles means independent."** Overlap only means the events can happen together; independence is a statement about probabilities ([[Independent Events]]).
- **"Separate circles means independent."** Separate circles are disjoint, which makes the events strongly dependent.

See also: [[Proportions and Percentages]], [[Contingency Table]].
