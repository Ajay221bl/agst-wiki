---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "point vs interval estimate"
  - "why not 100% confidence"
status: seedling
---

what is the benefit of a confidence interval over a point estimate, and why is there no 100% confidence interval?

A single best guess (a point estimate) is almost certainly not exactly right, and it says nothing about how far off it might be. An interval adds wiggle room and a stated confidence. Wider means more confident but less informative: a 100% interval would have to include every possible value and would tell you nothing.

![[Point estimate vs confidence interval.png|700]]
The dot is one guess; the bar shows how far the truth might plausibly be from it.

1. A point estimate such as x̄ is our best single guess at μ ([[Point Estimate]]).
2. On a [[Types of Data|continuous]] scale the guess is either exactly right or wrong, and almost always wrong by some amount. Alone, it hides how big that amount might be.
3. An interval, estimate ± margin of error, gives a range of plausible values and states the confidence that the method captures μ ([[Confidence Interval]]).
4. Higher confidence needs a larger critical value, so a wider interval ([[Critical Value]]). [[Random Error and Precision|Precision]] and confidence trade off.
5. To be 100% sure the interval would have to stretch over every possible value: an age guess of "0 to 200". Certain, and useless. So we settle for 90, 95 or 99%.

Reporting only a point estimate hides the uncertainty, so a lucky or unlucky sample looks as solid as a precise one.

See also: [[Standard Error]], [[Why 95% confidence is not a 95% probability]], [[Why go with the confidence interval when the hypothesis is weak]], [[Why a bigger sample gives a narrower confidence interval]].
