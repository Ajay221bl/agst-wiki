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

> [!summary] In plain words
> A test starts by assuming the null is true and only asks whether the data contradict it. Not finding a contradiction is not proof: the effect may be small, the sample too small, or the data noisy. Like a "not guilty" verdict, failing to reject means "not enough evidence", not "innocent".

## The question
Why "fail to reject $H_0$" and never "accept $H_0$"?

## Built from
- [[Hypothesis Testing]]: the procedure and the courtroom analogy.
- [[Null and Alternative Hypotheses]]: the null is assumed, not believed.
- [[Type I and Type II Errors]]: failing to reject can be a Type II error.
- [[Statistical Power]]: why evidence may be missing.
- [[Writing a Conclusion]]: the wording.

## See it

![[Type I and II errors and power.png|700]]
*What to look at:* Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

## The reasoning, step by step
1. The p-value is computed *assuming* $H_0$; the test never computes evidence *for* it ([[P-Value]]).
2. A large p-value says the data are compatible with $H_0$, and usually with many alternatives too.
3. Low power (small $n$, high [[Variability|variability]], small effect) produces large p-values even when $H_0$ is false: a Type II error ([[Statistical Power]]).
4. So the honest statement is "not enough evidence", leaving room for future studies ([[Hypothesis Testing]]).
5. The conclusion template carries this in the word "not": "there is **not** sufficient evidence to support the claim..." ([[Writing a Conclusion]]).

## What would go wrong otherwise
Underpowered studies would "prove" treatments don't work, and good ideas would be abandoned. "Never get discouraged."

## Connections
- **Related:** [[Why a p-value is not always meaningful]], [[Statistical vs Practical Significance]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
