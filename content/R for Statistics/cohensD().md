---
type: atomic
tags:
  - r-statistics
aliases:
  - "cohensD"
  - "lsr package"
status: seedling
---

`lsr::cohensD()` works out Cohen's d for one-sample, paired or two-sample comparisons, and reports it without a sign.

A p-value tells you whether there's an effect; it doesn't tell you whether it matters. A t-test gives a p-value, but you also need the size of the effect ([[Cohen's d]], [[Why report an effect size with the p-value]]). `lsr::cohensD()` works out d using the same layouts as `t.test()` ([[t.test()]]):

```r
lsr::cohensD(COVID$distress, mu = 10)                              # one-sample
lsr::cohensD(COVIDtime$April, COVIDtime$March, method = "paired")  # paired
lsr::cohensD(March ~ child12, data = COVIDkids)                    # two-sample
```

Use `method = "paired"` for paired data, because paired d divides by the [[Standard Deviation|standard deviation]] of the differences, $\bar{d}/s_d$, to match the paired test. The result is the size of d without its sign ([[Absolute Value]]), so take the direction from the t-test or the means.

The t-test gives significance; this gives the size of the effect.

For example, an output of `0.08` is below 0.2, so the effect is negligible, whatever the p-value said.

Size and direction are two different questions, so answer both. cohensD doesn't tell you which group is bigger, because it has no sign. Look at the means, or use report().

See also: [[report()]], [[Statistical vs Practical Significance]].
