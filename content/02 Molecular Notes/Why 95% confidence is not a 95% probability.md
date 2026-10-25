---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "confidence vs probability"
  - "interpreting a confidence interval"
status: seedling
---

What does "95% confident" mean, and why don't we say there is a 95% probability that μ is in the interval?

Because the 95% belongs to the method, not to any one interval. Once you've calculated an interval, it either contains μ or it doesn't. Nothing is left to chance. What you can trust is the procedure: used over and over, it catches μ 95% of the time.

![[Confidence intervals - coverage.png|700]]
Many samples, many intervals. Most catch the fixed μ, a few miss, and you never know which kind yours is.

The confusion comes from forgetting what is random and what isn't, so start there.

μ, the true mean, is fixed. It's a single number out in the world. We don't know it, but it isn't moving. What moves is your sample. Draw a different sample and you get a different x̄, and so a different interval around it ([[Parameter vs Statistic]]).

Now ask how often those moving intervals land on the fixed target. We know how sample means behave: 95% of them fall within about 2 [[Standard Error|standard errors]] of μ ([[Sampling Distribution]]). Build an interval of that width on each side of x̄, and it catches μ exactly when x̄ is one of those 95%. So, in the long run, 95% of such intervals contain μ. That's a probability, but it's a probability about the method, before any data are in ([[Classical vs Relative Frequency Probability]]).

After the data are in, the chance is gone. Your particular interval either covers μ, a probability of 1, or it doesn't, a probability of 0. You just can't tell which. So we say "we are 95% confident that μ lies between a and b". It's the confidence you'd place in a skilled archer before a shot, not a claim about where this arrow landed ([[Confidence Interval]]).

This isn't hair-splitting. Putting a probability on one interval claims more than one study knows, and it quietly treats μ as if it were random. Be confident in the process, and humble about the single result.

See also: [[Why an interval beats a single number, and why no interval is 100%]], [[Why the sampling distribution makes inference possible]].
