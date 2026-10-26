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

Because every test is a small bet that chance won't fool you, and bets add up. With three or more groups, testing every pair means many tests, and each one carries its own 5% risk of a [[Type I and Type II Errors|false positive]]. Those risks pile up: 15 tests give more than a 50% chance of at least one false positive. A one-way ANOVA asks the overall question in a single test that keeps the risk at 5%, and it's less work.

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), and ten groups need 45 (90%).

Start by counting. $k$ groups give $k(k-1)/2$ pairwise comparisons: 6 for 4 groups, 15 for 6, and 45 for 10 ([[Family-Wise Type I Error]]). The number of pairs grows much faster than the number of groups.

There's a practical cost to that. So many tests are tedious, waste resources, and each one has its own [[Test Assumptions|requirements]] to check.

But the real cost is statistical, and it's simple probability. In one test with no real effect, the chance of no false positive is 0.95. In $c$ independent tests, the chance that every one of them stays quiet is $0.95^c$. So the chance of at least one false alarm is $1 - 0.95^c$ ([[Complementary Events]], [[Multiplication Rule]]).

Put in the numbers. For 15 tests, $1 - 0.95^{15} \approx 0.54$. For 45 tests, it's about 0.90, so a false positive is almost certain. Run enough tests on pure noise and something will always look significant. It's like flipping a coin until it lands heads ten times in a row: keep going long enough and it happens, and it means nothing.

ANOVA fixes this by asking **one overall test** at α: is there any difference among these groups at all? It acts as a gatekeeper. Only if it rejects do adjusted pairwise tests follow ([[Post Hoc Tests]]).

So the principle is: ask one good question before many small ones. Without it, studies with many groups would almost always "find" a difference, whether or not one exists.

Try it yourself. You have 4 groups and run every pairwise t-test at 5%, with no adjustment. How many tests, and what's the rough chance of at least one false alarm if nothing is going on? 6 tests, and about 26%, roughly a one-in-four chance of announcing a difference that isn't there. With one ANOVA, the risk stays at 5%.

See also: [[One-Way ANOVA]], [[Why post hoc tests only after a significant ANOVA]], [[Bonferroni Correction]].
