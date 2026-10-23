---
type: atomic
tags:
  - probability
aliases:
  - "mutually exclusive"
  - "disjoint"
status: seedling
---

**In one line:** two events are disjoint (mutually exclusive) when they cannot happen at the same time, so $P(A \text{ and } B) = 0$.

> [!info] Before this, it helps to know
> [[Sample Space and Events]] (events are groups of outcomes) · [[Complementary Events]] (the first example of disjoint events)

## Start from zero
1. **Events are groups of outcomes** ([[Sample Space and Events]]).
2. **Two groups may share outcomes or not.** Roll one die: "get a 2" and "get a 5" share no outcome, so they can't both happen on the same roll.
3. **No shared outcomes = disjoint (mutually exclusive).** Drawn as a [[Venn Diagram|Venn diagram]], their circles do not touch, and $P(A \text{ and } B) = 0$.
4. **A and its complement are always disjoint** ([[Complementary Events]]).
5. **For disjoint events, "or" is just addition:** $P(A \text{ or } B) = P(A) + P(B)$. *Why:* there's no overlap to double-count ([[Addition Rule]]).
6. **Disjoint is not the same as independent.** Disjoint events are actually strongly dependent: if one happens, the other certainly didn't ([[Independent Events]]).

## See it

![[Venn diagrams - addition, disjoint, conditional.png|700]]
*What to look at:* Left: adding A and B counts the overlap twice, so the addition rule subtracts it once. Middle: disjoint events have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

## Why it exists
Disjointness simplifies the [[Addition Rule]]. Normally $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$, subtracting the overlap that was counted twice. If there is no overlap, the subtraction disappears: $P(A \text{ or } B) = P(A) + P(B)$.

## A tiny example
One die: $P(2 \text{ or } 5) = 1/6 + 1/6 = 2/6$. No overlap, so nothing to subtract.

## Common confusions
- **"Disjoint means independent."** The opposite, nearly: two disjoint events with non-zero probabilities are **never** independent. If one happens, the other's probability drops to 0, so knowing one changes the other. See [[Independent Events]].
- **"Disjoint events have probabilities that add to 1."** Only if together they cover the whole sample space (complements). A 2 and a 5 are disjoint but add to 1/3.

## Connections
- **Builds on:** [[Sample Space and Events]], [[Complementary Events]]
- **Leads to:** [[Addition Rule]], [[Independent Events]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (pp. 93–96)
