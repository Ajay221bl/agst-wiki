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

A single best guess, called a point estimate, is almost certainly not exactly right, and on its own it says nothing about how far off it might be. An interval admits that. It adds a margin and a stated confidence. And you can't push the confidence to 100%, because the only interval that's certain to contain the truth is one that contains everything, which tells you nothing.

![[Point estimate vs confidence interval.png|700]]
The dot is one guess. The bar shows how far the truth might plausibly be from it.

Start with what a point estimate is. x̄ is our best single guess at μ ([[Point Estimate]]). Best, but still a guess.

On a [[Types of Data|continuous]] scale, a guess is either exactly right or wrong, and it's almost always wrong by some amount. That's fine. What isn't fine is hiding it. A bare number sounds equally sure whether it came from five measurements or five thousand.

An interval, estimate ± margin of error, says the honest thing. It gives a range of believable values, and states how confident we are that the method captures μ ([[Confidence Interval]]). Now the reader can tell a solid result from a shaky one.

But the margin isn't free. Demand more confidence and you need a larger critical value, so a wider interval ([[Critical Value]]). [[Random Error and Precision|Precision]] and confidence pull against each other.

Follow that to the end. To be 100% sure, the interval would have to stretch over every possible value, like guessing someone's age as "0 to 200". Certain, and useless. So we settle for 90, 95 or 99%, and accept a small chance of missing in exchange for an answer that says something.

There's a general lesson in that. Certainty and usefulness trade off. A claim that can't possibly be wrong usually isn't saying much. The goal isn't to never be wrong. It's to be clear about how wrong you might be.

Try it yourself. Someone asks for a 100% confidence interval for the average weight of adult dogs. What would it have to look like? It would have to include every weight that's even remotely possible, so it would be uselessly wide. That's why we settle for 95%: a range narrow enough to be useful, with an honest, known chance of missing.

See also: [[Standard Error]], [[Why 95% confidence is not a 95% probability]], [[Why go with the confidence interval when the hypothesis is weak]], [[Why a bigger sample gives a narrower confidence interval]].
