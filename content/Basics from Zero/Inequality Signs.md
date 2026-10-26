---
type: atomic
tags:
  - basics
aliases:
  - "inequality"
  - "inequalities"
  - "less than"
  - "greater than"
  - "at least"
  - "at most"
  - "not equal"
status: seedling
---

The signs $<$, $\le$, $>$, $\ge$ and $\ne$ say which side of a boundary a value is on, and whether the boundary itself counts.

$a < b$ reads "a is less than b", and $a > b$ reads "a is greater than b". The open end of the sign always faces the bigger number. Adding a bar underneath means the boundary is included: $x \le 3$ means "at most 3" and includes 3, while $x < 3$ does not. In the same way, $\ge$ means "at least". The sign $\ne$ means "not equal", in either direction. Words like "at least" and "at most" are easy to misread; the signs are not.

![[Inequality signs - number line.png|700]]
A filled dot means the boundary counts ($\le$, $\ge$); an open dot means it doesn't ($<$, $>$).

Hypotheses use these signs. The null hypothesis holds the equals sign, and the alternative uses $<$ or $>$ for a one-tailed test, or $\ne$ for a two-tailed test ([[Null and Alternative Hypotheses]], [[One-Tailed vs Two-Tailed Tests]]). The null needs one exact value so the [[Null Distribution|null distribution]] has a fixed centre ([[Why hypotheses are about parameters, and the null holds the equals sign]]). Decisions use them too: we reject the null if $p \le \alpha$ ([[Significance Level]]).

For example, with two coin flips, the probability of at least 1 head is P(X ≥ 1) = 0.75, but the probability of more than 1 head is P(X > 1) = 0.25 ([[Random Variable]]). One small change in wording gives a different answer.

"At least 3" is not the same as "more than 3": at least 3 includes 3. These notes always write the null hypothesis with "=", never with $\le$ or $\ge$.

See also: [[Greek Letters and Symbols]], [[Complementary Events]], [[Absolute Value]].
