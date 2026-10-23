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

**In one line:** the complement of event $A$ is "everything except $A$", so $P(\text{not } A) = 1 - P(A)$.

> [!info] Before this, it helps to know
> [[Sample Space and Events]] (the complement is the rest of the sample space)

## Start from zero
1. **Every outcome either is in event $A$ or isn't.** Either it rains tomorrow or it does not.
2. **"Not $A$" is itself an event, the complement $A^c$** (also written $\bar{A}$ or $A'$): every outcome in the sample space that isn't in $A$ ([[Sample Space and Events]]).
3. **$A$ and $A^c$ together cover every possibility, and can't both happen.** So their probabilities add to 1:
$$P(A) + P(A^c) = 1 \quad\Rightarrow\quad P(A^c) = 1 - P(A)$$
   *Why they add to 1:* together they are the whole sample space, which has probability 1, and they don't overlap ([[Disjoint Events]]).
4. **Use it whenever "not A" is easier to count.** "At least one" questions are the classic case: "at least one six in three rolls" has many routes, but its complement, "no sixes", has one: $(5/6)^3$. Subtract from 1 ([[Multiplication Rule]]).

## Why it exists
It turns hard counting problems into easy ones. "At least one" questions require adding up many cases, but their complement, "none", is usually a single case.

## A tiny example
Probability of at least one six in 3 rolls of a fair die:
- Directly: one six, two sixes, or three sixes, each with several arrangements. Tedious.
- Complement: $P(\text{no sixes}) = (5/6)^3 \approx 0.579$, so $P(\text{at least one}) \approx 1 - 0.579 = 0.421$.

## Common confusions
- **"The complement of 'at least 2' is 'at most 2'."** No: it is "at most 1" (fewer than 2). The value 2 belongs to the event, not its complement.

## Connections
- **Builds on:** [[Sample Space and Events]]
- **Leads to:** [[Disjoint Events]], [[Multiplication Rule]], [[Family-Wise Type I Error]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (§2.1)
