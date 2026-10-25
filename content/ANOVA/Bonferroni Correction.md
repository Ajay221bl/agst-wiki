---
type: atomic
tags:
  - anova
aliases:
  - "Bonferroni"
  - "Bonferroni adjustment"
status: seedling
---

The Bonferroni correction divides α by the number of comparisons, or equivalently multiplies each p-value by it. It is the simplest and most [[Conservative Tests|conservative]] way to control the chance of any false positive across a family of tests.

Think of α as a budget for false alarms. Run one test and you spend it all on that test. Run many and you need to split the budget. With $c$ tests, the chance of at least one [[Type I and Type II Errors|false positive]] is far above α ([[Family-Wise Type I Error]]). But it can be no more than the sum of the separate error rates, $c \times \alpha^*$, because P(A or B) ≤ P(A) + P(B) ([[Addition Rule]]). So make that sum α by giving each test α divided by the number of tests ([[Significance Level]]):
$$\alpha^* = \frac{\alpha}{c}, \qquad c = \frac{k(k-1)}{2}$$

Divide by the number of comparisons, not the number of groups:
- 4 groups give 6 comparisons, so $\alpha^* = 0.05/6 \approx 0.0083$
- 6 groups give 15 comparisons, so $\alpha^* = 0.05/15 \approx 0.0033$

Software usually multiplies each p-value by $c$ instead (capped at 1) and compares it with the usual α. The decision is the same. The cost is that the method is conservative: it loses power as $c$ grows, which is why Tukey's method is usually preferred for comparing all pairs ([[Tukey HSD]]).

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

If each of $c$ tests is run at $\alpha/c$, the chance of any false positive is at most α overall.

For example, the book's FAMuSS data have 3 genotypes and 3 comparisons, so $\alpha^* = 0.05/3 = 0.0167$. CC against CT has p = 0.18 (not significant), CC against TT has p = 0.01 (significant), and CT against TT has p = 0.14 (not significant) ([[References|Vu and Harrington 2020, Ch. 5]], pp. 269–270).

Its virtue is simplicity: anyone can apply it and anyone can check it. Its vice is caution. Don't divide by the number of groups; divide by the number of comparisons. And more conservative isn't always safer: it costs power, which raises the risk of a Type II error ([[Statistical Power]]).

See also: [[pairwise.t.test()]], [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 269).
