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

**In one line:** a contingency table counts how many observations fall into each combination of two categorical variables, with row and column totals around the edge.

> [!info] Before this, it helps to know
> [[Types of Data]] (both variables are categorical) · [[Proportions and Percentages]] (cells become proportions)

## Start from zero
1. **Two categorical variables measured on the same people**, for example "uses drugs: yes/no" and "test result: positive/negative" ([[Types of Data]]).
2. **Every person lands in exactly one combination**, so cross the categories into a grid of cells and count.
3. **Add the rows, the columns and the grand total around the edge.** That's a contingency table. *Why the margins:* each probability question picks a different total as its whole.
4. **Read probabilities by choosing the whole:**
   - a cell ÷ the grand total = "and" ([[Multiplication Rule]]);
   - a row or column total ÷ the grand total = one variable alone;
   - a cell ÷ its row (or column) total = "given" ([[Conditional Probability]]).
   *Why this beats formulas:* the counts make every overlap visible, so nothing gets double-counted ([[Addition Rule]]).
5. Think of it as a [[Venn Diagram|Venn diagram]] that has already been drawn for you.

## Why it exists
It turns probability rules into reading exercises. Every basic probability rule can be applied by pointing at cells:

| Want | Numerator | Denominator |
|---|---|---|
| $P(A)$ (marginal) | row or column total for $A$ | grand total |
| $P(A \cap B)$ (joint) | the cell where both occur | grand total |
| $P(A \cup B)$ | every cell in $A$ or $B$, each counted once | grand total |
| $P(A \mid B)$ (conditional) | the cell where both occur | **total for $B$ only** |

## A tiny example
| | Positive | Negative | Total |
|---|---|---|---|
| Uses drugs | 44 | 6 | 50 |
| Doesn't use | 90 | 860 | 950 |
| Total | 134 | 866 | 1,000 |

- $P(\text{user}) = 50/1000 = 0.05$
- $P(\text{user and positive}) = 44/1000 = 0.044$
- $P(\text{positive} \mid \text{user}) = 44/50 = 0.88$
- $P(\text{user} \mid \text{positive}) = 44/134 \approx 0.33$

## Common confusions
- **"Conditional probabilities use the grand total."** They use only the total of the row or column you condition on.
- **"The table holds probabilities."** It holds counts; probabilities come from dividing.

## Connections
- **Builds on:** [[Types of Data]], [[Proportions and Percentages]]
- **Leads to:** [[Conditional Probability]], [[Addition Rule]], [[Sensitivity and Specificity]], [[Bayes' Theorem]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.5 contingency tables), [[References|Vu and Harrington 2020, Ch. 2]]
- **Terms used:** [[Ratios and Fractions]]
