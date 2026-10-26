---
type: atomic
tags:
  - inference
aliases:
  - "random error"
  - "precision"
  - "precise"
  - "systematic error"
  - "accuracy"
  - "bias vs random error"
  - "measurement error"
status: seedling
---

Random error is the chance scatter of your estimate around the truth, and precision is how small that scatter is. Bias is something else entirely: a mistake that pushes every estimate the same wrong way.

Picture an archer shooting at a target. There are two completely different ways to do badly. The arrows might be scattered all over, sometimes left, sometimes right, sometimes high, but centred on the bullseye on average. Or the arrows might land in a tight little cluster, nicely grouped, but all of them off to the left. The first archer has a shaky hand. The second has a crooked sight.

![[Sampling bias - bullseye.png|700]]
Left, tight but off-centre (precise, biased); right, scattered but centred (imprecise, unbiased).

Estimates work the same way ([[Point Estimate]]). Part of the miss is random: a different sample would miss by a different amount, sometimes high, sometimes low ([[Sampling Distribution]]). That's random error, and precision is how small it is. Part of the miss can be systematic, the same direction every time. That's bias ([[Sampling Bias]], [[Unbiased Estimator]]). You want both small; that's what being accurate means.

Why bother keeping them apart? Because they have completely different cures, and that's the expensive part. Random error shrinks when you take more data: the [[Standard Error|standard error]], $s/\sqrt{n}$, which measures precision, gets smaller as $n$ grows, and the [[Confidence Interval|confidence interval]] gets narrower. But bias doesn't care how much data you take. If your sight is crooked, more arrows just make a bigger cluster in the wrong spot. Bias is only cured by better design ([[Random Sampling]], [[Random Assignment]], [[Why a bigger sample can't fix a biased one]]).

For example, in the book's swim data, the mean gain from wearing a wetsuit is 0.0775 m/s with a standard error of 0.0063, so the 95% confidence interval is narrow: 0.064 to 0.091 m/s. That's precise. Whether it's also *accurate* depends on whether the 12 swimmers represent the swimmers you care about ([[External Validity]]).

The trap: precise doesn't mean correct. A precise estimate can be precisely wrong, and the tight cluster makes it look *more* trustworthy, not less. And random error isn't a blunder; it's the unavoidable scatter you get from sampling.

Try it yourself. A survey only reaches people with landlines, and you double its size. Which problem did you fix? Only random error. If landline owners differ from everyone else, you now have a more precise estimate of the wrong thing.
