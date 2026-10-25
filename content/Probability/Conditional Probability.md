---
type: atomic
tags:
  - probability
aliases:
  - "given"
  - "P(A|B)"
status: seedling
---

$P(A \mid B)$, read "the probability of A given B", is the chance of $A$ when you already know $B$ happened. You find it by shrinking your attention down to the cases where $B$ is true.

Information changes the odds. Conditional probability is just the arithmetic of narrowing your attention. "What fraction of a class smokes?" is an ordinary probability: smokers divided by everyone. "What fraction of the women in the class smoke?" is a conditional one. Once you know the person is a woman, everyone else is irrelevant: the women become the new, smaller whole ([[Sample Space and Events]]). Only the smokers who are women still count. So:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
$B$ goes on the bottom of the fraction because it is the new whole ([[Ratios and Fractions]]). In a table, a conditional probability is a cell divided by its row or column total ([[Contingency Table]]).

The order matters. $P(\text{smoker} \mid \text{woman})$ is not the same as $P(\text{woman} \mid \text{smoker})$, because they are shares of different groups. Mixing them up is the root of the diagnostic test puzzle that [[Bayes' Theorem]] solves.

![[Venn diagrams - addition, disjoint, conditional.png|700]]
Left: adding A and B counts the overlap twice, so the [[Addition Rule|addition rule]] subtracts it once. Middle: [[Disjoint Events|disjoint events]] have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

Most interesting questions are conditional: the chance of disease given a positive test, or the chance of the data given that the null hypothesis is true. The [[P-Value]] itself is a conditional probability ([[Why probability comes before statistics]]).

For example, a table of tutoring visits covers 58 students. 13 of them are part-time, and 2 of those visited once or not at all.
$$P(\le 1 \text{ visit} \mid \text{part-time}) = \frac{2/58}{13/58} = \frac{2}{13} \approx 0.154$$
The 58s cancel, so you can go straight to "2 out of the 13 part-time students".

Always ask: out of whom? Most probability mistakes come from answering for the wrong group. $P(A \mid B)$ and $P(B \mid A)$ are almost never equal. The chance of a positive test given disease can be 0.89 while the chance of disease given a positive test is 0.04 ([[Why a positive test can still mean you are probably healthy]]). And for a conditional probability, divide by the total of the condition only, not the grand total.

See also: [[Sensitivity and Specificity]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (§2.2, pp. 106–111).
