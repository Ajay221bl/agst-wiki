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

Think of α as a budget for false alarms. With one test, you spend the whole budget on it. But what if you run several? Each test gets its own chance to fire falsely, and the chance that *at least one* does is far above α ([[Family-Wise Type I Error]], [[Type I and Type II Errors|false positive]]). So you need to split the budget.

How much can the total be? Here's a simple fact: the chance that A or B happens can't be more than the chance of A plus the chance of B, P(A or B) ≤ P(A) + P(B) ([[Addition Rule]]). (It's less when they overlap, but never more.) So if you run $c$ tests each at $\alpha^*$, the chance of any false alarm is at most $c \times \alpha^*$. Want that to be α? Then give each test an equal slice ([[Significance Level]]):
$$\alpha^* = \frac{\alpha}{c}, \qquad c = \frac{k(k-1)}{2}$$

That's the whole method. Notice you divide by the number of *comparisons*, not the number of groups:
- 4 groups give 6 comparisons, so $\alpha^* = 0.05/6 \approx 0.0083$
- 6 groups give 15 comparisons, so $\alpha^* = 0.05/15 \approx 0.0033$

Software usually does it the other way round: it multiplies each p-value by $c$ (capped at 1) and compares it with the usual α. The decision comes out the same.

![[Family-wise Type I error.png|700]]
Each extra test adds another 5% chance of a false alarm. Four groups need 6 t-tests (26% risk), six groups need 15 (54%), ten groups need 45 (90%).

If each of $c$ tests is run at $\alpha/c$, the chance of any false positive is at most α overall.

For example, the book's FAMuSS data have 3 genotypes and 3 comparisons, so $\alpha^* = 0.05/3 = 0.0167$. CC against CT has p = 0.18 (not significant), CC against TT has p = 0.01 (significant), and CT against TT has p = 0.14 (not significant) ([[References|Vu and Harrington 2020, Ch. 5]], pp. 269–270).

So what's the catch? The "at most" is a ceiling, and real tests often overlap, so the true risk is below α. Bonferroni plays it safe by planning for the worst case. That safety has a price: as $c$ grows, each slice gets so thin that real differences get missed. Being more conservative isn't automatically safer. It trades false alarms for missed findings, which means lower power and more Type II errors ([[Statistical Power]]). That's why Tukey's method is usually preferred for comparing all pairs ([[Tukey HSD]]).

Try it yourself. You compare 4 groups and one pair has p = 0.01. Is it significant after Bonferroni? There are 6 comparisons, so the cutoff is about 0.0083. 0.01 is above that, so no. Or, the software's way: multiply 0.01 by 6 and you land above 0.05. Same answer.

See also: [[pairwise.t.test()]], [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 269).
