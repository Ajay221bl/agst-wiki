---
type: atomic
tags:
  - anova
aliases:
  - "Bonferroni"
  - "Bonferroni adjustment"
status: seedling
---

The Bonferroni correction divides α by the number of comparisons (equivalently, multiplies each p-value by it), the simplest and most [[Conservative Tests|conservative]] way to control the family-wise error rate.

1. **With $c$ tests, the chance of at least one [[Type I and Type II Errors|false positive]] is far above α** ([[Family-Wise Type I Error]]).
2. **It can be no more than the sum of the individual error rates,** $c \times \alpha^*$. *Why:* P(A or B) ≤ P(A) + P(B) ([[Addition Rule]]).
3. **So make that sum α:** give each test α divided by the number of tests ([[Significance Level]]):
$$\alpha^* = \frac{\alpha}{c}, \qquad c = \frac{k(k-1)}{2}$$
4. **Divide by the number of comparisons, not the number of groups.**
   - 4 groups → 6 comparisons → $\alpha^* = 0.05/6 \approx 0.0083$
   - 6 groups → 15 comparisons → $0.05/15 \approx 0.0033$
5. **Software usually multiplies each p-value by $c$ instead** (capping at 1) and compares with the usual α. Same decision. *The cost:* it is conservative, so it loses power as $c$ grows, which is why Tukey is usually preferred for all pairs ([[Tukey HSD]]).

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

If each of $c$ tests is run at $\alpha/c$, the chance of any false positive is at most α overall.

For example:

Book FAMuSS (3 genotypes, 3 comparisons): $\alpha^* = 0.05/3 = 0.0167$. CC vs CT p = 0.18 (no), CC vs TT p = 0.01 (yes), CT vs TT p = 0.14 (no) ([[References|Vu and Harrington 2020, Ch. 5]], pp. 269–270).

Common mistakes:

- **"Divide by the number of groups."** By the number of comparisons.
- **"More conservative is always safer."** It costs power, raising the Type II error risk ([[Statistical Power]]).

See also: [[pairwise.t.test()]], [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 269).
