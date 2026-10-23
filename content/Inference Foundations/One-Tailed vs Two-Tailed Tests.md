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

A one-tailed test looks for a difference in one stated direction; a two-tailed test looks for a difference in either direction and is the safe default.

1. **$H_A$ says which results count against $H_0$** ([[Null and Alternative Hypotheses]]).
2. **"Extreme" means far out in the tail(s) of the null distribution that $H_A$ points to** ([[Null Distribution]]):

| $H_A$ | Test | Reject when you see... | R `alternative =` |
|---|---|---|---|
| $\mu < \mu_0$ | left-tailed ("**l**ess → **l**eft") | something unusually low | `"less"` |
| $\mu > \mu_0$ | right-tailed | something unusually high | `"greater"` |
| $\mu \ne \mu_0$ | two-tailed | unusually low **or** high ($\alpha/2$ per tail) | `"two.sided"` (default) |

3. **A two-tailed test splits α between the tails.** *Why:* the total false-alarm rate must still be α, so each tail gets α/2 ([[Significance Level]]).
4. **A one-tailed test puts all of α in one tail:** easier to reject in that direction, impossible in the other. *Why decide in advance:* picking the tail after seeing the data doubles the real false-alarm rate ([[Why choose alpha and tails before seeing the data]]).

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each [[Critical Value|cut-off]] is further out (±1.96 instead of 1.645).

Sometimes only one direction matters (salmonella *above* a safe level). But choosing one tail ignores harm in the other.

For example:

Book: t = 1.80. Two-sided p = 0.072 ([[Why we never accept the null hypothesis|fail to reject]] at 0.05); one-sided p = 0.036 (reject). The p-value for a one-sided test is exactly half the two-sided one ([[References|Vu and Harrington 2020, Ch. 4]], p. 222).

**The arrhythmia trial** (p. 223): researchers ran a one-sided trial, sure a new drug would reduce deaths. It was almost 4 times as likely to kill patients as [[Blinding and Placebo|placebo]]. A one-sided test is blind to that.

Common mistakes:

- **"Switch to one-sided when the two-sided p is almost significant."** Never. The choice is made before the data; switching after doubles the real [[Type I and Type II Errors|Type I error]] rate ([[Why choose alpha and tails before seeing the data]]).

See also: [[Tails of a Distribution|tails]], [[P-Value]], [[t.test()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 222–223).
