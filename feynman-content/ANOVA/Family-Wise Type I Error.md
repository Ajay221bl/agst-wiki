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

Imagine a lottery where each ticket has a 5% chance of winning, and every prize is fake. Buy one ticket and you'll probably lose. Buy lots and you're almost sure to "win" something. Each test at α = 0.05 is one of those tickets: a 5% chance of a false positive when nothing is really going on ([[Type I and Type II Errors]]).

How fast does the risk grow? Let's work it out. "At least one false positive" is hard to count directly, but its opposite, "none at all", is easy ([[Complementary Events]]). With $c$ independent tests:
- the chance of no Type I error on one test is $1 - \alpha$ (the complement rule);
- the chance of no Type I error on all $c$ tests is $(1 - \alpha)^c$, because independent chances multiply ([[Multiplication Rule]]);
- so the chance of at least one is $1 - (1 - \alpha)^c$ (the complement again).

Next, count the tests. With $k$ groups, the number of pairs is $c = k(k-1)/2$. Why? Each of the $k$ groups pairs with the $k - 1$ others, but that counts every pair twice (A with B, and B with A), so divide by 2.

Put them together and the risk climbs fast. 3 groups give 3 tests and $1 - 0.95^3 \approx 0.14$; 4 groups give 6 tests and $1 - 0.95^6 \approx 0.26$. That is why [[One-Way ANOVA|ANOVA]] tests all the means at once, and why post hoc tests adjust their p-values ([[Why ANOVA instead of many t-tests]], [[Bonferroni Correction]], [[Tukey HSD]]).

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

For example:

| Groups $k$ | Comparisons $c$ | Chance of at least one false positive |
|---|---|---|
| 3 | 3 | $1 - 0.95^3 \approx 0.14$ |
| 4 | 6 | $\approx 0.26$ |
| 6 | 15 | $\approx 0.54$ |
| 10 | 45 | $\approx 0.90$ |

With ten groups, a false positive is almost certain. Notice that the number of tests grows much faster than the number of groups, because $c$ counts *pairs*.

So a careful analyst asks two questions, not one: "Is this test fair?" and "How many tests did I run before I found it?" Each test on its own is still at 5%. The study as a whole isn't.

Try it yourself. You compare 5 groups, every pair, with no adjustment. How many tests is that? 5 × 4 / 2 = 10. With that many 5% tickets, would a single "significant" pair surprise you if nothing were going on? Not much. That's the problem adjustment fixes.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.5.3, p. 269).
