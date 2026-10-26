---
type: atomic
tags:
  - inference
aliases:
  - "one-sided test"
  - "two-sided test"
  - "left-tailed"
  - "right-tailed"
  - "alternative = less"
status: seedling
---

A one-tailed test looks for a difference in one stated direction. A two-tailed test looks for a difference in either direction, and is the safe default.

The alternative hypothesis, $H_A$, says which results count against $H_0$ ([[Null and Alternative Hypotheses]]). "Extreme" means far out in the tail, or tails, of the null distribution that $H_A$ points to ([[Null Distribution]]):

| $H_A$ | Test | Reject when you see... | R `alternative =` |
|---|---|---|---|
| $\mu < \mu_0$ | left-tailed ("**l**ess" goes with "**l**eft") | something unusually low | `"less"` |
| $\mu > \mu_0$ | right-tailed | something unusually high | `"greater"` |
| $\mu \ne \mu_0$ | two-tailed | something unusually low **or** high ($\alpha/2$ per tail) | `"two.sided"` (default) |

A two-tailed test splits α between the tails, because the total false-alarm rate must still be α, so each tail gets α/2 ([[Significance Level]]). A one-tailed test puts all of α in one tail. That makes it easier to reject in that direction, and impossible in the other. The choice must be made in advance: picking the tail after seeing the data doubles the real false-alarm rate ([[Why choose alpha and tails before seeing the data]]).

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each [[Critical Value|cut-off]] is further out (±1.96 instead of 1.645).

Sometimes only one direction matters, such as salmonella *above* a safe level. But choosing one tail means ignoring harm in the other.

For example, in a book example with t = 1.80, the two-sided p = 0.072, so you [[Why we never accept the null hypothesis|fail to reject]] at 0.05. The one-sided p = 0.036, so you reject. The one-sided p-value is exactly half the two-sided one ([[References|Vu and Harrington 2020, Ch. 4]], p. 222).

In an arrhythmia trial described in the book (p. 223), researchers ran a one-sided test because they were sure a new drug would reduce deaths. In fact it was almost 4 times as likely to kill patients as a [[Blinding and Placebo|placebo]]. A one-sided test can't see that.

Never switch to a one-sided test because the two-sided p is almost significant. The choice is made before the data; switching afterwards doubles the real [[Type I and Type II Errors|Type I error]] rate.

See also: [[Tails of a Distribution|tails]], [[P-Value]], [[t.test()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 222–223).
