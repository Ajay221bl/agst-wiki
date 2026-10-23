---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "fail to reject"
  - "not guilty is not innocent"
status: seedling
---

Why do we say "fail to reject $H_0$" and never "accept $H_0$"?

A test starts by assuming the null is true and only asks whether the data contradict it. Not finding a contradiction is not proof: the effect may be small, the sample too small, or the data noisy. Like a "not guilty" verdict, failing to reject means "not enough evidence", not "innocent".

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

1. The p-value is worked out *assuming* $H_0$; the test never measures evidence *for* it ([[P-Value]]).
2. A large p-value says the data fit with $H_0$, and usually with many alternatives too.
3. Low power, from a small $n$, high [[Variability|variability]] or a small effect, produces large p-values even when $H_0$ is false. That is a Type II error ([[Statistical Power]]).
4. So the honest statement is "not enough evidence", which leaves room for future studies ([[Hypothesis Testing]]).
5. The standard wording carries this in the word "not": "there is **not** sufficient evidence to support the claim..." ([[Writing a Conclusion]]).

Otherwise studies without enough power would "prove" that treatments don't work, and good ideas would be abandoned.

See also: [[Null and Alternative Hypotheses]], [[Type I and Type II Errors]], [[Why a p-value is not always meaningful]], [[Statistical vs Practical Significance]].
