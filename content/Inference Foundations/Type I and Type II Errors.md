---
type: atomic
tags:
  - inference
aliases:
  - "Type I error"
  - "Type II error"
  - "false positive"
  - "false negative"
  - "beta"
  - "false alarm"
  - "false alarms"
status: seedling
---

A Type I error is rejecting a [[Null and Alternative Hypotheses|null hypothesis]] that is actually true: a false positive. A Type II error is failing to reject a null that is actually false: a false negative.

A test makes a decision without knowing the truth. The truth ($H_0$ true or false) and the decision (reject or not) give four combinations, and two of them are mistakes ([[Hypothesis Testing]]):

| | $H_0$ actually true | $H_0$ actually false |
|---|---|---|
| **Reject $H_0$** | **Type I error**, probability **α** | correct, probability = **power** = 1 − β |
| **[[Why we never accept the null hypothesis\|Fail to reject]]** | correct, probability 1 − α | **Type II error**, probability **β** |

A Type I error is finding a significant result that isn't really there. Its probability is α because, if $H_0$ is true, results land in the rejection region exactly α of the time ([[Significance Level]]). A Type II error is missing a real effect, often because the study had too little power, for example a small $n$ ([[Statistical Power]]).

It is the same table as for a medical test: a false positive is a Type I error and a false negative is a Type II error ([[Sensitivity and Specificity]]). The two errors trade off. Lowering α makes Type I errors rarer and Type II errors more common, unless $n$ increases.

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

You never know whether you made an error; you might have drawn a very unusual sample. What you do know is **which** error you *could* have made: after rejecting, a Type I error; after failing to reject, a Type II error. Weighing their costs is how α gets chosen.

For example, take a pacemaker battery, with $H_0: \mu \le 300$ days and $H_A: \mu > 300$.
- **Type I error:** telling patients the battery lasts more than 300 days when it doesn't. They book their check-up for day 500, and the battery may fail before then.
- **Type II error:** failing to find evidence that it lasts beyond 300 days when it does. Patients come in at day 295, which is safe.

The Type I error is worse, so use a smaller α.

α isn't the chance that you made a Type I error in this particular study. It is the error rate *if $H_0$ is true*, and for any one study you don't know which world you are in.

See also: [[Family-Wise Type I Error]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 220–222).
