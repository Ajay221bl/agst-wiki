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

Why run one one-way ANOVA instead of several [[Two-Sample Independent t-Test|two-sample independent t-tests]] when you have 3 or more groups?

With three or more groups, testing every pair means many tests, and each one carries its own 5% risk of a [[Type I and Type II Errors|false positive]]. Those risks pile up: 15 tests give more than a 50% chance of at least one false positive. A one-way ANOVA asks the overall question in a single test that keeps the risk at 5%, and it is less work.

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

1. $k$ groups give $k(k-1)/2$ pairwise comparisons: 6 for 4 groups, 15 for 6, and 45 for 10 ([[Family-Wise Type I Error]]).
2. **The practical reason:** that many tests is tedious and wastes resources, and each one has [[Test Assumptions|requirements]] to check.
3. **The statistical reason:** the chance of no false positive in one test is 0.95. In $c$ independent tests it is $0.95^c$, so the chance of at least one is $1 - 0.95^c$ ([[Complementary Events]], [[Multiplication Rule]]).
4. For 15 tests, $1 - 0.95^{15} \approx 0.54$. For 45 tests, it is about 0.90, so a false positive is almost certain.
5. ANOVA is **one overall test** at α. It acts as a gatekeeper: only if it rejects do adjusted pairwise tests follow ([[Post Hoc Tests]]).

Without it, studies with many groups would almost always "find" a difference, whether or not one exists.

See also: [[One-Way ANOVA]], [[Why post hoc tests only after a significant ANOVA]], [[Bonferroni Correction]].
