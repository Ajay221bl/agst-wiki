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

`power.t.test()` solves for whichever one of [[Sample Size|sample size]], difference, [[Standard Deviation|SD]], α or power you leave out, for a t-test.

1. **Power depends on five linked quantities:** sample size, effect size, SD, α and power itself ([[Statistical Power]], [[Effect Size]]).
2. **Fix any four and the fifth is determined.** *Why:* they all enter one formula, signal ÷ (noise/√n) compared with a [[Critical Value|critical value]] ([[Signal and Noise]]).
3. **`power.t.test()` solves for whichever one you leave out.** Give all but one of `n`, `delta`, `sd`, `sig.level`, `power`; R solves for the missing one. `n` is per group.

```r
# How many per group to detect a 3 mmHg difference, SD 12, with 80% power?
power.t.test(delta = 3, sd = 12, sig.level = 0.05, power = 0.80)
# What power do 100 per group give?
power.t.test(n = 100, delta = 3, sd = 12, sig.level = 0.05)
```

4. **Use it before collecting data.** *Why:* it tells you whether the study can find the effect you care about.

![[Power vs sample size.png|700]]
For a medium effect at α = 0.05, power climbs with n and reaches the usual 80% target at about 64 per group.

Plan the sample size **before** collecting data ([[Statistical Power]]).

For example:

The book's blood-pressure example (SD 12, difference 3) works out to about 0.42 power with 100 per group and about 251 per group for 80% power using the normal approximation; `power.t.test` uses the [[t-Distribution|t-distribution]], so expect slightly different numbers ([[References|Vu and Harrington 2020, Ch. 5]], pp. 259–261).

Common mistakes:

- **"n is the total sample size."** For two-sample designs it is per group.

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.4).
