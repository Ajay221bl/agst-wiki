---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "why one-way ANOVA"
  - "multiple t-tests problem"
status: seedling
---

"Why perform a one-way ANOVA rather than multiple [[Two-Sample Independent t-Test|two-sample independent t-tests]] when you have 3+ groups?"

With three or more groups, testing every pair means many tests, and each one carries its own 5% [[Type I and Type II Errors|false-positive]] risk. Those risks pile up: 15 tests give more than a 50% chance of at least one false positive. One-way ANOVA asks the overall question in a single test that keeps the risk at 5%, and it is less work.

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

1. $k$ groups give $k(k-1)/2$ pairwise comparisons: 6 for 4 groups, 15 for 6, 45 for 10 ([[Family-Wise Type I Error]]).
2. **Practical:** that many tests is tedious, wastes resources, and each has [[Test Assumptions|requirements]] to check.
3. **Statistical:** P(no false positive in one test) = 0.95; in $c$ independent tests, $0.95^c$; so P(at least one) = $1 - 0.95^c$ ([[Complementary Events]], [[Multiplication Rule]]).
4. For 15 tests: $1 - 0.95^{15} \approx 0.54$. For 45: about 0.90. "You almost know you're making an error."
5. ANOVA is **one omnibus test** at α, a "gatekeeper"; only if it rejects do adjusted pairwise tests follow ([[Post Hoc Tests]]).

Studies with many groups would almost always "find" a difference, whether or not one exists.

See also: [[One-Way ANOVA]], [[Why post hoc tests only after a significant ANOVA]], [[Bonferroni Correction]].
