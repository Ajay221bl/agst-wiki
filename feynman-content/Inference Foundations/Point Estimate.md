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

A point estimate is a single best guess for something you can't measure directly, like using your sample's average as your guess for the whole population's average.

Guess my age. Go on, one number. You'll almost surely be wrong, maybe by a little, maybe by a lot. Now guess a range instead: "between 20 and 50". You're much more likely to be right. That's the difference between a point estimate and an interval estimate, and it's the whole story of this page.

We want to know a population value, like the true mean $\mu$ of every lizard's tail, but we can only measure a sample ([[Parameter vs Statistic]]). The natural guess is the same kind of number calculated from the sample: $\bar{x}$ for $\mu$, $\hat{p}$ for $p$, $s^2$ for $\sigma^2$. Why these? Because they're unbiased: if you could repeat the sampling many times, their guesses would average out right on target ([[Unbiased Estimator]]).

But a single number has a hidden flaw. It's almost certainly a little off, and it gives you no idea by how much. It looks more certain than it is. So we add a margin around it: point estimate ± margin of error. That's an **interval estimate**, or a [[Confidence Interval|confidence interval]]. We can work out the margin because the [[Standard Error|standard error]] tells us how far point estimates typically miss.

For example, for lizard tail lengths the point estimate is $\bar{x} = 8.958$ cm and the 95% interval estimate is 8.29 to 9.50 cm. The point estimate sits in the middle of the interval.

The point estimate is the starting ingredient for everything else: the centre of every interval, and the top of every test statistic ([[Test Statistic]], [[Ratios and Fractions|numerator]]). But on its own it hides its uncertainty, so report it with an interval whenever you can ([[Why go with the confidence interval when the hypothesis is weak]]).

Try it yourself. Your lizards' tails average 8.958 cm. Is the true mean for all lizards 8.958 cm? Probably not exactly. It's your best single guess, but another sample would give a slightly different number. That's why you'd say "about 9 cm, give or take", and then work out the give-or-take.

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.1).
