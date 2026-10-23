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

Random error is the chance scatter of an estimate around its target, and **precision** is how small that scatter is. Both are different from bias, a systematic error that shifts the target itself.

A sample estimate misses the true value ([[Point Estimate]]). Part of the miss is random: a different sample would miss by a different amount, sometimes high and sometimes low ([[Sampling Distribution]]). Part of the miss can be systematic: the method misses in the same direction every time. That is bias ([[Sampling Bias]], [[Unbiased Estimator]]).

Precision is the size of the random part. It is measured by the [[Standard Error|standard error]], and the width of a [[Confidence Interval|confidence interval]] shows it. More data improve precision but not bias. The standard error $s/\sqrt{n}$ shrinks as n grows, but a biased method stays biased ([[Why a bigger sample can't fix a biased one]]).

Accuracy needs both: unbiased *and* precise. It helps to keep them apart because they have different cures. Random error is cured by more units and better measurement; bias only by better design ([[Random Sampling]], [[Random Assignment]]).

![[Sampling bias - bullseye.png|700]]
Left, tight but off-centre (precise, biased); right, scattered but centred (imprecise, unbiased).

"How wrong could this be?" has two answers that need different fixes. Naming them stops you from buying a bigger sample to fix a design problem.

For example, in the book's swim data, the mean gain from wearing a wetsuit is 0.0775 m/s with a standard error of 0.0063, so the 95% confidence interval is narrow: 0.064 to 0.091 m/s. That is precise. Whether it is also accurate depends on whether the 12 swimmers represent the swimmers you care about ([[External Validity]]).

Precise doesn't mean correct: a precise estimate can be precisely wrong if the method is biased. And random error isn't a mistake. It is the unavoidable scatter of sampling, not a blunder.
