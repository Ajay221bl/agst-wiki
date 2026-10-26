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

What is the benefit of a confidence interval over a single best guess, and why is there no 100% confidence interval?

A single best guess, called a point estimate, is almost certainly not exactly right, and it says nothing about how far off it might be. An interval adds a margin and a stated confidence. Wider means more confident but less informative: a 100% interval would have to include every possible value and would tell you nothing.

![[Point estimate vs confidence interval.png|700]]
The dot is one guess; the bar shows how far the truth might plausibly be from it.

1. A point estimate such as x̄ is our best single guess at μ ([[Point Estimate]]).
2. On a [[Types of Data|continuous]] scale, the guess is either exactly right or wrong, and it is almost always wrong by some amount. On its own, it hides how big that amount might be.
3. An interval, estimate ± margin of error, gives a range of believable values and states how confident we are that the method captures μ ([[Confidence Interval]]).
4. Higher confidence needs a larger critical value, so a wider interval ([[Critical Value]]). [[Random Error and Precision|Precision]] and confidence trade off.
5. To be 100% sure, the interval would have to stretch over every possible value, like guessing someone's age as "0 to 200". That is certain, and useless. So we settle for 90, 95 or 99%.

Reporting only a point estimate hides the uncertainty, so a lucky or unlucky sample looks as solid as a precise one.

See also: [[Standard Error]], [[Why 95% confidence is not a 95% probability]], [[Why go with the confidence interval when the hypothesis is weak]], [[Why a bigger sample gives a narrower confidence interval]].
