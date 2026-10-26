---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "CI and hypothesis test agree"
  - "confidence interval as a test"
status: seedling
---

Why can a confidence interval be used to test a claim, and when does that fail?

Because they're the same calculation seen from two sides. A 95% confidence interval (CI) is exactly the set of [[Null and Alternative Hypotheses|null values]] that a two-sided test at α = 0.05 would not reject. If μ₀ is inside the interval, p > 0.05. If it's outside, p < 0.05. It only breaks when the two use different cut-offs, as when a one-sided test is compared with a two-sided interval.

![[CI and test agree - wetsuit.png|700]]
Four null values tested against the same 12 swimmers. The one inside the 95% CI is the only one not rejected. Book swim data, verified in R.

Look at how each one is built, and the agreement stops being a coincidence.

The interval takes your [[Point Estimate|estimate]] and reaches out a fixed distance on each side: a critical value times the [[Standard Error|standard error]] (SE), with 2.5% cut from each [[Tails of a Distribution|tail]] ([[Confidence Interval]], [[Critical Value]]).

The two-sided test at α = 0.05 asks whether the estimate is more than that same distance from μ₀. If it is, you reject.

Now notice something simple. "The estimate is within that distance of μ₀" and "μ₀ is within that distance of the estimate" are the same sentence. Distance doesn't care which way you measure it. So the interval and the test can never disagree. They're one fact, phrased twice.

The same logic ties the two ways of running a test. The critical-value method asks whether the [[Parameter vs Statistic|statistic]] lands in the rejection region. The p-value method asks whether p < α. Both are the same comparison, read from different ends.

The link breaks only when the cut-offs differ. A one-tailed test puts all of α in one tail, so its cut-off isn't the two-sided interval's. R then reports a one-sided interval running to infinity ([[One-Tailed vs Two-Tailed Tests]]).

For a difference between two means, the null value is 0. An interval entirely above or below 0 means a significant difference, and its sign tells you the direction.

The practical lesson: once you see that these are one idea, your write-ups can't contradict themselves. And the interval tells you more, because it shows every value the data would reject at once, not just the one you happened to test.

Try it yourself. A 95% interval for a mean difference runs from a small negative number to a positive one. Without computing anything, what does a two-sided test of "difference = 0" at 5% say? It fails to reject, because 0 is inside the interval, so 0 is a believable value. And if the interval sat entirely above 0? Then the test would reject.

See also: [[Significance Level]], [[Hypothesis Testing]], [[Why go with the confidence interval when the hypothesis is weak]], [[Why choose alpha and tails before seeing the data]], [[Why an interval beats a single number, and why no interval is 100%]].
