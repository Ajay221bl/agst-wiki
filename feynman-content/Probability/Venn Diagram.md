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

A Venn diagram draws all possible outcomes as a box and each event as a circle, so that "or", "and", "not" and overlaps can be seen as areas.

A good picture can replace a page of formulas. In a Venn diagram, probability is just area. The box is the sample space, with a total probability of 1 ([[Sample Space and Events]]). Each event is a circle, and its area stands for its probability. "A or B" is everything inside either circle, and "A and B" is the part where they overlap. The picture shows why adding two circles counts the overlap twice, which is why the [[Addition Rule|addition rule]] subtracts it once. Everything outside a circle is "not A", the complement, with probability $1 - P(A)$ ([[Complementary Events]]). Circles that don't touch are [[Disjoint Events|disjoint]]: they share no outcomes, so $P(A \text{ and } B) = 0$. Conditioning on B means looking only inside circle B: $P(A \mid B)$ is the share of circle B that is also in A ([[Conditional Probability]]).

![[Venn diagrams - addition, disjoint, conditional.png|700]]
The overlap is counted once in "or", is empty for disjoint events, and becomes the [[Ratios and Fractions|numerator]] when you condition on B.

Turning probability rules into pictures of areas lets you check a formula by asking "which area is this?".

For example, with $P(A) = 0.5$, $P(B) = 0.35$ and $P(A \text{ and } B) = 0.175$, the "or" area is $0.5 + 0.35 - 0.175 = 0.675$.

Use the picture to count, but don't let it fool you about independence. Overlapping circles don't mean the events are independent; overlap only means they can happen together. Independence is a statement about probabilities ([[Independent Events]]). And separate circles mean disjoint, which actually makes the events strongly dependent.

Try it yourself. Draw two overlapping circles, A and B, inside a box. Shade "A and not B". Which region is it? The part of circle A that's outside circle B: the crescent on A's side. Most probability rules become obvious once you can shade the right region.

See also: [[Proportions and Percentages]], [[Contingency Table]].
