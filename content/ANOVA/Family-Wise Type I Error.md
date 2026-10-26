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

When you run many tests, each at α, the chance of at least one false positive across the whole "family" of tests grows quickly. It equals $1 - (1 - \alpha)^c$ for $c$ independent tests.

One test at α = 0.05 has a 5% risk of a false positive ([[Type I and Type II Errors]]). Each extra test is another 5% lottery ticket.

"At least one false positive" is hard to count directly, but its opposite, "none", is easy ([[Complementary Events]]). With $c$ independent tests:
- the chance of no Type I error on one test is $1 - \alpha$ (the complement rule);
- the chance of no Type I error on all $c$ tests is $(1 - \alpha)^c$ ([[Multiplication Rule]]);
- so the chance of at least one is $1 - (1 - \alpha)^c$ (the complement again).

Next, count the tests. The number of pairwise comparisons among $k$ groups is $c = k(k-1)/2$, because each of the $k$ groups pairs with $k - 1$ others, and each pair is counted twice.

The risk grows fast. 3 groups give 3 tests and $1 - 0.95^3 \approx 0.14$; 4 groups give 6 tests and $1 - 0.95^6 \approx 0.26$. That is why [[One-Way ANOVA|ANOVA]] tests all the means at once, and why post hoc tests adjust their p-values ([[Why ANOVA instead of many t-tests]], [[Bonferroni Correction]], [[Tukey HSD]]).

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

For example:

| Groups $k$ | Comparisons $c$ | Chance of at least one false positive |
|---|---|---|
| 3 | 3 | $1 - 0.95^3 \approx 0.14$ |
| 4 | 6 | $\approx 0.26$ |
| 6 | 15 | $\approx 0.54$ |
| 10 | 45 | $\approx 0.90$ |

With ten groups, a false positive is almost certain. Note that $c$ counts *comparisons*, not groups.

Each test is still at 5%, but the study as a whole isn't.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.5.3, p. 269).
