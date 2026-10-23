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

Random error is the chance scatter of an estimate around its target, and **precision** is how small that scatter is; it is different from bias (systematic error), which shifts the target itself.

1. **A sample estimate misses the true value** ([[Point Estimate]]).
2. **Part of the miss is random**: a different sample would miss by a different amount, sometimes high, sometimes low ([[Sampling Distribution]]).
3. **Part of the miss can be systematic**: the method misses in the same direction every time. That is bias ([[Sampling Bias]], [[Unbiased Estimator]]).
4. **Precision is the size of the random part.** It is measured by the standard error; a CI's width shows it ([[Standard Error]], [[Confidence Interval]]).
5. **More data improves precision, not bias.** $SE = s/\sqrt{n}$ shrinks with n; a biased method stays biased ([[Why a bigger sample can't fix a biased one]]).
6. **Accuracy needs both**: unbiased *and* precise. *Why keep them apart:* they have different cures. Random error is cured by more units and better measurement; bias only by better design ([[Random Sampling]], [[Random Assignment]]).

![[Sampling bias - bullseye.png|700]]
Left, tight but off-centre (precise, biased); right, scattered but centred (imprecise, unbiased).

"How wrong could this be?" has two answers that need different fixes. Naming them stops you from buying a bigger sample to fix a design problem.

For example:

Book swim data: the mean wetsuit gain is 0.0775 m/s with SE 0.0063, so the 95% CI is narrow, 0.064 to 0.091 m/s. That is precise. Whether it is accurate also depends on whether the 12 swimmers represent the swimmers you care about ([[External Validity]]).

Common mistakes:

- **"Precise means correct."** A precise estimate can be precisely wrong if the method is biased.
- **"Random error is a mistake."** It is the unavoidable scatter of sampling, not a blunder.
