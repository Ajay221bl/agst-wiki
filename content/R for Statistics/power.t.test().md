---
type: atomic
tags:
  - r-statistics
  - inference
aliases:
  - "power.t.test"
  - "sample size in R"
status: seedling
---

`power.t.test()` solves for whichever one of [[Sample Size|sample size]], difference, [[Standard Deviation|standard deviation]] (SD), α or power you leave out, for a t-test.

The best time to think about a study is before you run it, and this function is how. Power depends on five linked quantities: the sample size, the effect size, the SD, α and the power itself ([[Statistical Power]], [[Effect Size]]). Fix any four and the fifth is decided, because they all enter one formula: signal ÷ (noise/√n), compared with a [[Critical Value|critical value]] ([[Signal and Noise]]).

`power.t.test()` solves for whichever one you leave out. Give all but one of `n`, `delta`, `sd`, `sig.level` and `power`, and R solves for the missing one. `n` is the number per group.

```r
# How many per group to detect a 3 mmHg difference, SD 12, with 80% power?
power.t.test(delta = 3, sd = 12, sig.level = 0.05, power = 0.80)
# What power do 100 per group give?
power.t.test(n = 100, delta = 3, sd = 12, sig.level = 0.05)
```

Use it before collecting data, because it tells you whether the study can find the effect you care about.

![[Power vs sample size.png|700]]
For a medium effect at α = 0.05, power climbs with n and reaches the usual 80% target at about 64 per group.

For example, the book's blood-pressure example (SD 12, difference 3) works out to about 0.42 power with 100 per group, and about 251 per group for 80% power, using the normal approximation. `power.t.test` uses the [[t-Distribution|t-distribution]], so expect slightly different numbers ([[References|Vu and Harrington 2020, Ch. 5]], pp. 259–261).

Plan the study so it can actually find what you're looking for. `n` isn't the total sample size. For two-sample designs it is the number per group.

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.4).
