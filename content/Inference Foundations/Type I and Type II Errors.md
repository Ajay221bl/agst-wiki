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

A Type I error is a false alarm: you conclude there's an effect when there really isn't. A Type II error is a miss: there really is an effect and you don't catch it.

Think of a doctor looking at an X-ray for a broken bone. There are four ways it can go. The bone is broken and the doctor sees it: good. The bone is fine and the doctor says so: good. The bone is fine but the doctor says "broken": a false alarm. The bone is broken but the doctor says "fine": a miss. Two right answers, two kinds of wrong.

A test is in the same spot. It has to decide without ever seeing the truth. The truth is either "$H_0$ is true" or "$H_0$ is false", and the decision is either "reject" or "don't". Lay them out and you get four boxes, two of them mistakes ([[Hypothesis Testing]], [[Null and Alternative Hypotheses|null hypothesis]]):

| | $H_0$ actually true | $H_0$ actually false |
|---|---|---|
| **Reject $H_0$** | **Type I error**, probability **α** | correct, probability = **power** = 1 − β |
| **[[Why we never accept the null hypothesis\|Fail to reject]]** | correct, probability 1 − α | **Type II error**, probability **β** |

Why is the false-alarm chance exactly α? Because if $H_0$ is true, results land in the rejection region α of the time, by construction; that's how we set the line ([[Significance Level]]). The chance of a miss is called β, and it's big when the study is too small or the effect is subtle. Its flip side, 1 − β, is called power: the chance of catching an effect that's really there ([[Statistical Power]]).

It's the same table as for a medical test: a false positive is a Type I error, and a false negative is a Type II error ([[Sensitivity and Specificity]]).

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

Look at that picture. The cut-off line slides left and right. Push it right, and the red area, false alarms, shrinks. But the grey area, misses, grows. You can't shrink both by sliding the line. The only way to shrink both at once is to make the two humps overlap less, and the usual way to do that is more data.

Here's an uncomfortable fact. In a real study you never know whether you made an error. But you do know *which* error you could have made. If you rejected $H_0$, the only possible mistake is a false alarm. If you didn't, the only possible mistake is a miss.

For example, take a pacemaker battery, with $H_0: \mu \le 300$ days and $H_A: \mu > 300$.
- **Type I error:** telling patients the battery lasts more than 300 days when it doesn't. They book their check-up for day 500, and the battery may fail before then.
- **Type II error:** failing to find evidence that it lasts beyond 300 days when it does. Patients come in at day 295, which is safe.

Here the false alarm could kill someone and the miss costs a little inconvenience, so you'd use a smaller α.

Try it yourself. Which error is worse, in general? Neither. It depends entirely on what each one costs in your situation. That's why choosing α is a judgment, not a formula.

See also: [[Family-Wise Type I Error]], [[Why we never accept the null hypothesis|fail to reject]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 220–222).
