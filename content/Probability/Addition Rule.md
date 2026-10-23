---
type: atomic
tags:
  - probability
aliases:
  - "or rule"
  - "union"
status: seedling
---

**In one line:** the chance that $A$ or $B$ happens is the chance of $A$ plus the chance of $B$, minus the chance of both (so the overlap is not counted twice).

> [!info] Before this, it helps to know
> [[Sample Space and Events]] (events as groups of outcomes) · [[Disjoint Events]] (when the overlap is zero)

## Start from zero
1. **Question: what's the chance of A or B?** In statistics "or" means **A or B or both**. People forget the "both".
2. **First try: add the two probabilities.** Count the students who take biology, then those who take chemistry, and add.
3. **That double-counts the overlap.** Anyone taking **both** is on both lists ([[Sample Space and Events]]).
4. **Fix it by subtracting the overlap once:**
$$P(A \text{ or } B) = P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
   *Why once:* the overlap was counted twice and should be counted once.
5. **If the events are disjoint, the overlap is 0** and the rule shrinks to $P(A) + P(B)$ ([[Disjoint Events]]).
6. **The overlap $P(A \cap B)$ itself comes from the multiplication rule** ([[Multiplication Rule]]) or straight from a table ([[Contingency Table]]).

## See it

![[Venn diagrams - addition, disjoint, conditional.png|700]]
*What to look at:* Left: adding A and B counts the overlap twice, so the addition rule subtracts it once. Middle: disjoint events have no overlap at all. Right: conditioning on B throws away everything outside B, so P(A | B) is the dark overlap as a share of B.

## Why it exists
"Or" questions come up constantly (positive test or drug user; male or smoker), and simply adding probabilities overshoots whenever events overlap. If $A$ and $B$ are [[Disjoint Events|disjoint]], $P(A \cap B) = 0$ and it simplifies to $P(A) + P(B)$.

## A tiny example
Drug test table from class (n = 1,000):

| | Positive | Negative | Total |
|---|---|---|---|
| Uses drugs | 44 | 6 | 50 |
| Doesn't use | 90 | 860 | 950 |
| Total | 134 | 866 | 1,000 |

$P(\text{positive or user}) = \frac{134}{1000} + \frac{50}{1000} - \frac{44}{1000} = \frac{140}{1000} = 0.14$

Check by reading the table directly, counting each cell once: $(44 + 90 + 6)/1000 = 0.14$.

## Common confusions
- **"Or means one or the other but not both."** In probability it includes both.
- **"Always just add."** Only for disjoint events.

## Connections
- **Builds on:** [[Sample Space and Events]], [[Disjoint Events]]
- **Leads to:** [[Contingency Table]], [[Multiplication Rule]]
- **Part of:** [[MOC - Probability]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 2]] (pp. 94–96)
