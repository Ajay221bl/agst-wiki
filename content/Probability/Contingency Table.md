---
type: atomic
tags:
  - probability
  - describing-data
aliases:
  - "two-way table"
  - "contingency tables"
  - "cross-tabulation"
status: seedling
---

A contingency table counts how many observations fall into each combination of two categorical variables, with row and column totals around the edge.

Suppose you record two yes-or-no facts about the same people, such as "uses drugs" and "tested positive" ([[Types of Data]]). Every person lands in exactly one combination, so you can lay the combinations out as a grid of cells and count. Then add up each row, each column and the grand total. Those totals around the edge matter, because each probability question uses a different total as its whole. A contingency table is like a [[Venn Diagram|Venn diagram]] that has already been drawn and counted for you.

Every basic probability rule becomes a matter of picking cells:

| Want | Top of the fraction | Bottom of the fraction |
|---|---|---|
| $P(A)$ (marginal) | row or column total for $A$ | grand total |
| $P(A \cap B)$ (joint) | the cell where both occur | grand total |
| $P(A \cup B)$ | every cell in $A$ or $B$, each counted once | grand total |
| $P(A \mid B)$ (conditional) | the cell where both occur | **total for $B$ only** |

Because the counts show every overlap, nothing gets counted twice ([[Addition Rule]], [[Multiplication Rule]], [[Conditional Probability]]).

For example:

| | Positive | Negative | Total |
|---|---|---|---|
| Uses drugs | 44 | 6 | 50 |
| Doesn't use | 90 | 860 | 950 |
| Total | 134 | 866 | 1,000 |

- $P(\text{user}) = 50/1000 = 0.05$
- $P(\text{user and positive}) = 44/1000 = 0.044$
- $P(\text{positive} \mid \text{user}) = 44/50 = 0.88$
- $P(\text{user} \mid \text{positive}) = 44/134 \approx 0.33$

A conditional probability uses only the total of the row or column you condition on, not the grand total. And the table holds counts; you get probabilities by dividing.

See also: [[Proportions and Percentages]], [[Sensitivity and Specificity]], [[Bayes' Theorem]], [[Ratios and Fractions]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.5 contingency tables), [[References|Vu and Harrington 2020, Ch. 2]].
