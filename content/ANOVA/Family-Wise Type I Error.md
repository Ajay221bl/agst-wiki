---
type: atomic
tags:
  - anova
  - inference
aliases:
  - "multiple testing"
  - "multiple comparisons"
  - "Type I error inflation"
  - "family-wise error rate"
  - "data snooping"
  - "p-hacking"
  - "overall Type I error rate"
  - "cherry-picking"
status: seedling
---

**In one line:** when you run many tests, each at α, the chance of at least one false positive across the whole "family" of tests grows quickly: $1 - (1 - \alpha)^c$.

> [!info] Before this, it helps to know
> [[Type I and Type II Errors]] (one test's false alarm) · [[Complementary Events]] ("at least one" via the complement) · [[Multiplication Rule]] (several independent tests)

## Start from zero
1. **One test at α = 0.05 has a 5% false-positive risk** ([[Type I and Type II Errors]]). Each additional test is another 5% lottery ticket.
2. **"At least one false positive" is hard to count directly; its complement, "none", is easy** ([[Complementary Events]]). With $c$ independent tests:
   - P(no Type I error on one test) = $1 - \alpha$ (complement rule)
   - P(no Type I error on all $c$) = $(1 - \alpha)^c$ (multiplication rule: [[Multiplication Rule]])
   - P(at least one) = $1 - (1 - \alpha)^c$ (complement again)
3. **Count the tests.** The number of pairwise comparisons among $k$ groups is $c = k(k-1)/2$. *Why:* each of $k$ groups pairs with $k - 1$ others, and each pair is counted twice.
4. **It grows fast:** 3 groups give 3 tests and $1 - 0.95^3 \approx 0.14$; 4 groups give 6 tests and $1 - 0.95^6 \approx 0.26$. That's why [[One-Way ANOVA|ANOVA]] tests all means at once, and why post hocs adjust their p-values ([[Why ANOVA instead of many t-tests]], [[Bonferroni Correction]], [[Tukey HSD]]).

## See it

![[Family-wise Type I error.png|700]]
*What to look at:* Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

## Why it exists
It is the statistical reason for running one ANOVA instead of many t-tests, and for adjusting post hoc p-values ([[Why ANOVA instead of many t-tests]], [[Bonferroni Correction]]).

## A tiny example
| Groups $k$ | Comparisons $c$ | P(at least one false positive) |
|---|---|---|
| 3 | 3 | $1 - 0.95^3 \approx 0.14$ |
| 4 | 6 | $\approx 0.26$ |
| 6 | 15 | $\approx 0.54$ |
| 10 | 45 | $\approx 0.90$ |
"You almost know you're making an error." Note: $c$ counts *comparisons*, not groups.

## Common confusions
- **"Each test is still at 5%, so the study is at 5%."** Each test is; the study as a whole is not.

## Connections
- **Builds on:** [[Type I and Type II Errors]], [[Complementary Events]], [[Multiplication Rule]]
- **Leads to:** [[Bonferroni Correction]], [[Tukey HSD]], [[Post Hoc Tests]], [[Why ANOVA instead of many t-tests]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (§5.5.3, p. 269)
