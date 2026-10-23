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

A Type I error is rejecting a [[Null and Alternative Hypotheses|null hypothesis]] that is actually true (a false positive); a Type II error is failing to reject a null that is actually false (a false negative).

1. **A test makes a decision without knowing the truth.** The truth ($H_0$ true or false) and the decision (reject or not) give four combinations ([[Hypothesis Testing]]).
2. **Two of them are mistakes:**

| | $H_0$ actually true | $H_0$ actually false |
|---|---|---|
| **Reject $H_0$** | **Type I error**, probability **α** | correct, probability = **power** = 1 − β |
| **[[Why we never accept the null hypothesis\|Fail to reject]]** | correct, probability 1 − α | **Type II error**, probability **β** |

3. **Type I: finding significance that isn't there.** *Why its probability is α:* if $H_0$ is true, results land in the rejection region exactly α of the time ([[Significance Level]]).
4. **Type II: missing significance that is there,** often because the study was **underpowered** (small $n$) ([[Statistical Power]]).
5. **It is the same table as a medical test:** a false positive is a Type I error and a false negative is a Type II error ([[Sensitivity and Specificity]]).
6. **The two trade off.** Lowering α makes Type I errors rarer and Type II errors more common, unless $n$ increases.

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

**You never know whether you made an error**; you might have drawn a highly unusual sample. What you should know is **which** error you *could* have made: after rejecting, a Type I; after failing to reject, a Type II. Weighing their costs is how α gets chosen.

For example:

**Pacemaker**: $H_0: \mu \le 300$ days vs $H_A: \mu > 300$.
- **Type I:** telling patients the battery lasts more than 300 days when it doesn't. They book their check-up for day 500 and "don't make it".
- **Type II:** failing to find evidence it lasts beyond 300 days when it does. Patients come in at day 295. Safe.
The Type I error is worse, so **use a smaller α**.

Common mistakes:

- **"α is the chance I made a Type I error in this study."** α is the error rate *if $H_0$ is true*; for this study you don't know which world you're in.

See also: [[Family-Wise Type I Error]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 220–222).
