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

Because a test can only look for evidence against the null, never for it. It starts by assuming the null is true and asks whether the data contradict it. Not finding a contradiction isn't proof. The effect may be small, the sample too small, or the data too noisy. Like a "not guilty" verdict, failing to reject means "not enough evidence", not "innocent".

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect and green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

Look at how a test is built and the wording follows.

The p-value is worked out *assuming* $H_0$. The whole calculation stands on it. So the test never measures evidence *for* $H_0$. It only measures how badly the data fit it ([[P-Value]]).

A large p-value says the data fit with $H_0$. But they usually fit with many alternatives too. A small real effect would produce data that look much the same.

And sometimes a study simply can't see. Low power, from a small $n$, high [[Variability|variability]] or a small effect, produces large p-values even when $H_0$ is false. That's a Type II error ([[Statistical Power]]). Looking for your keys in a dark room and not finding them doesn't mean they aren't there.

So the honest statement is "not enough evidence". It describes what you know, and leaves room for a better study to find what this one missed ([[Hypothesis Testing]]). The standard wording carries this in the word "not": "there is **not** sufficient evidence to support the claim..." ([[Writing a Conclusion]]).

This isn't pedantry. If weak studies could "prove" that treatments don't work, good ideas would be abandoned on the strength of experiments too small to test them. Absence of evidence is not evidence of absence.

Try it yourself. A tiny pilot study of 5 plants finds no significant effect of a fertilizer. Can you conclude the fertilizer does nothing? No. With 5 plants, even a real effect could easily go unseen. All you can say is that this study didn't find evidence of an effect.

See also: [[Null and Alternative Hypotheses]], [[Type I and Type II Errors]], [[Why a p-value is not always meaningful]], [[Statistical vs Practical Significance]].
