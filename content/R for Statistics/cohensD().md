---
type: atomic
tags:
  - r-statistics
aliases:
  - "cohensD"
  - "lsr package"
status: seedling
---

`lsr::cohensD()` computes Cohen's d for one-sample, paired or two-sample comparisons, reported as an absolute value.

1. **A t-test gives p; you also need the size of the effect** ([[Cohen's d]], [[Why report an effect size with the p-value]]).
2. **`lsr::cohensD()` computes d with the same layouts as `t.test()`** ([[t.test()]]):

```r
lsr::cohensD(COVID$distress, mu = 10)                              # one-sample
lsr::cohensD(COVIDtime$April, COVIDtime$March, method = "paired")  # paired
lsr::cohensD(March ~ child12, data = COVIDkids)                    # two-sample
```

3. **Why `method = "paired"`:** paired d divides by the [[Standard Deviation|SD]] of the differences, $\bar{d}/s_d$, matching the paired test.
4. **It reports |d|, without a sign.** *Why it matters:* take the direction from the t-test or the means ([[Absolute Value]]).

The t-test gives significance; this gives magnitude ([[Why report an effect size with the p-value]]).

For example:

Output `0.08` → below 0.2 → negligible, whatever the p-value said.

Common mistakes:

- **"cohensD tells me which group is bigger."** It is unsigned; look at the means or use report().

See also: [[report()]], [[Statistical vs Practical Significance]].
