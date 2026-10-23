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

$<$, $\le$, $>$, $\ge$ and $\ne$ say which side of a boundary a value is on, and whether the boundary itself counts.

1. **Numbers sit in order on a line.** Left is smaller, right is bigger ([[Absolute Value]]).
2. **$a < b$ reads "a is less than b"; $a > b$, "greater than".** The open end of the sign faces the bigger number. *Why a symbol:* "at least" and "at most" are easy to misread, especially across languages; the sign isn't.
3. **Add a bar and the boundary is included.** $x \le 3$ (at most 3) includes 3; $x < 3$ does not. $\ge$ is "at least".
4. **$\ne$ means "not equal"**: either side.
5. **Hypotheses use them.** The null holds the equals sign; the alternative is a strict inequality: $<$ or $>$ for one-tailed, $\ne$ for two-tailed ([[Null and Alternative Hypotheses]], [[One-Tailed vs Two-Tailed Tests]]). *Why:* the null needs one exact value to centre the [[Null Distribution|null distribution]] ([[Why hypotheses are about parameters, and the null holds the equals sign]]).
6. **Decisions use them too.** Reject $H_0$ if $p \le \alpha$ ([[Significance Level]]).

![[Inequality signs - number line.png|700]]
Filled dot = the boundary counts ($\le$, $\ge$); open dot = it doesn't ($<$, $>$).

It removes ambiguity. "More than 2 heads" and "at least 2 heads" are different events with different probabilities.

For example:

Two coin flips: P(at least 1 head) = P(X ≥ 1) = 0.75, but P(more than 1 head) = P(X > 1) = 0.25 ([[Random Variable]]).

Common mistakes:

- **"At least 3" = "more than 3".** No: at least 3 includes 3 ($\ge$).
- **"The null can be $\le$."** These notes write the null with "=".

See also: [[Greek Letters and Symbols]], [[Complementary Events]].
