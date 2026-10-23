---
type: atomic
tags:
  - probability
aliases:
  - "given"
  - "P(A|B)"
status: seedling
---

**In one line:** $P(A \mid B)$ is the chance of $A$ when you already know $B$ happened, found by shrinking the sample space down to $B$.

> [!info] Before this, it helps to know
> [[Sample Space and Events]] (what gets shrunk) · [[Contingency Table]] (where the course reads these off)

## Start from zero
1. **Out of a whole class, what fraction smoke?** That's an ordinary probability: smokers ÷ everyone.
2. **Now: out of the women in the class, what fraction smoke?** We already know the person is a woman, so everyone else is irrelevant.
3. **"Given B" shrinks the sample space to B.** The women are the new, smaller whole ([[Sample Space and Events]]).
4. **Only the part of A inside B survives**, the smokers who are women. So:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
   *Why $B$ goes in the [[Ratios and Fractions|denominator]]:* it is the new whole.
5. **The order matters.** $P(\text{smoker} \mid \text{woman})$ is not $P(\text{woman} \mid \text{smoker})$: different wholes. Confusing them is the root of the diagnostic-test paradox ([[Bayes' Theorem]]).
6. **In a table, it's a cell ÷ its row or column total** ([[Contingency Table]]).

## See it

![[Venn diagrams - addition, disjoint, conditional.png|700]]
*What to look at:* Left: adding A and B counts the overlap twice, so the [[Addition Rule|addition rule]] subtracts it once. Middle: [[Disjoint Events|disjoint events]] have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

## Why it exists
Most interesting questions are conditional: the chance of disease *given* a positive test, the chance of the data *given* that $H_0$ is true. The [[P-Value]] itself is a conditional probability ([[Why probability comes before statistics]]).

## A tiny example
Tutoring visits table from class (n = 58): 13 part-time students, 2 of whom visited one time or fewer.
$$P(\le 1 \text{ visit} \mid \text{part-time}) = \frac{2/58}{13/58} = \frac{2}{13} \approx 0.154$$
The 58s cancel, so you can go straight to "among the 13 part-time students, 2".

## Common confusions
- **"$P(A \mid B) = P(B \mid A)$."** Almost never. P(positive | disease) can be 0.89 while P(disease | positive) is 0.04 ([[Why a positive test can still mean you are probably healthy]]).
- **"Divide by the grand total."** For a conditional probability, divide by the total of the condition only.

## Connections
- **Builds on:** [[Sample Space and Events]], [[Contingency Table]]
- **Leads to:** [[Bayes' Theorem]], [[Sensitivity and Specificity]], [[P-Value]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (§2.2, pp. 106–111)
