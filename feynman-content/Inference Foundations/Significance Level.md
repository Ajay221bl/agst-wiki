---
type: atomic
tags:
  - inference
aliases:
  - "alpha"
  - "significance threshold"
  - "rejection region"
status: seedling
---

The significance level, α, is how surprised you agree to be before you'll reject the boring story. It's also exactly how often you'll raise a false alarm when the boring story is actually true.

Think about a smoke detector. Make it very sensitive and it catches every real fire, but it also goes off every time you make toast. Make it dull and it stops bothering you about toast, but it might sleep through a real fire. You have to set the knob somewhere. There's no setting that's perfect.

A test has the same knob. The p-value tells you how surprising the data would be if $H_0$ were true ([[P-Value]]). But at some point you have to *decide*, and a decision needs a line: "if p is below this, I stop believing $H_0$." That line is α. The usual choice is **0.05**; sometimes 0.01, sometimes 0.10.

Here's what α really is. Suppose $H_0$ is true, nothing is going on. How often will you still reject it? Exactly α of the time, because by design, results that extreme turn up α of the time just by luck. So α is your false-alarm rate, the chance of a Type I error you've agreed to live with ([[Type I and Type II Errors]]). On the picture of the null distribution, α is an area: the rejection region, the set of [[Test Statistic|test statistics]] extreme enough to reject, whose edge is the [[Critical Value|critical value]] ([[Null Distribution]]).

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each cut-off is further out (±1.96 instead of 1.645).

And you set the knob **before** you look at the data. Why? Because if you look first, you'll be tempted to pick whatever line gives the answer you'd like. That's not testing, that's decorating ([[Why choose alpha and tails before seeing the data]]).

So how do you choose? The smoke detector tells you: think about what each mistake costs (book pp. 221–222).
- If a **false alarm is the worse mistake**, use a smaller α, like 0.01. A drug regulator doesn't want to approve a drug that does nothing.
- If **missing something real is worse**, a larger α, like 0.10, may be fine.

For example, take a pacemaker battery. Claiming it lasts more than 300 days when it doesn't means patients skip check-ups they need, which could be fatal. That false alarm is the worse mistake, so use a smaller α.

But there's no free lunch. Turn the knob down and you'll miss more real effects; your test loses power ([[Statistical Power]]). Unless you collect more data, fewer false alarms always means more misses.

Try it yourself. Is α the same as the p-value? No. α is the line you drew in advance; the p-value is where the data landed. You compare the two. And α isn't "the chance I made a mistake in this study". It's how often you'd raise a false alarm *if* $H_0$ were true.

See also: [[Hypothesis Testing]], [[Bonferroni Correction]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 221–222).
