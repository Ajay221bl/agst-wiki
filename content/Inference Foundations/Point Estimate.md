---
type: atomic
tags:
  - inference
aliases:
  - "point estimates"
  - "interval estimate"
  - "best guess"
  - "estimate"
status: seedling
---

A point estimate is a single number used as the best guess for an unknown parameter, such as the sample mean $\bar{x}$ as a guess for the population mean $\mu$.

We want a parameter, like $\mu$, but can only calculate statistics from a sample ([[Parameter vs Statistic]]). The natural guess is the matching sample statistic: $\bar{x}$ estimates $\mu$, $\hat{p}$ estimates $p$, and $s^2$ estimates $\sigma^2$. These are used because they are unbiased: on average they hit the target ([[Unbiased Estimator]]).

A single number is almost certainly a little wrong. Think of guessing someone's age. A single number is either exactly right or wrong, and it is most likely wrong. Given a range instead, such as "20 to 50", you can be much more confident. That range is an **interval estimate**: point estimate ± margin of error ([[Confidence Interval]]). The margin can be worked out because the [[Standard Error|standard error]] says how far point estimates typically miss.

A point estimate is the centre of every interval and the [[Ratios and Fractions|numerator]] of every test statistic. On its own it hides how uncertain it is, which is why intervals are preferred for reporting ([[Why go with the confidence interval when the hypothesis is weak]]).

For example, for lizard tail lengths the point estimate is $\bar{x} = 8.958$ cm and the 95% interval estimate is 8.29 to 9.50 cm. The point estimate sits in the middle of the interval.

A point estimate isn't the parameter itself; it is a guess at it.

See also: [[Test Statistic]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.1).
