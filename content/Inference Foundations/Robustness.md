---
type: atomic
tags:
  - inference
aliases:
  - "robust"
  - "robust method"
status: seedling
---

A method is robust when it still gives nearly the right answer even though one of its assumptions is somewhat violated.

1. **Every test promises something**: "if $H_0$ is true, I'll wrongly reject only α of the time" ([[Significance Level]]).
2. **That promise is calculated from a model** with assumptions, like normal data ([[Why check assumptions before trusting a test]]).
3. **Real data never meet assumptions exactly.** So the useful question is not "is it normal?" but "is it close enough that the promise still roughly holds?"
4. **Robustness is the answer to that question.** A robust method's real error rate stays near α under moderate violations. *Why t-tests are fairly robust to non-normality:* they work with means, and the CLT makes means close to normal once n is moderate ([[Central Limit Theorem]]).
5. **Robustness has limits.** Small samples from strongly skewed populations, or very unequal variances with [[Balanced Design|unequal group sizes]], can break the promise. That's when to switch methods (Welch, rank-based tests) or report with caution ([[Welch's t-Test]], [[Nonparametric Alternatives]]).
6. **"Robust" also describes statistics.** The median and [[Range and IQR|IQR]] are robust to [[Outliers|outliers]] because they depend on order, not distance ([[Median]], [[Ranks]]).

![[Robustness - t-test with skewed data.png|700]]
With normal data the t-test rejects a true $H_0$ 5% of the time, as promised. With strongly skewed data it rejects about 12% at n = 5, but the rate falls towards 5% as n grows: that's the CLT rescuing it.

It replaces an impossible standard (perfect assumptions) with a workable one (close enough), and tells you when "close enough" stops being true.

For example:

[[Simulation|Simulated]], 20,000 samples per n: a two-sided 5% [[One-Sample t-Test|one-sample t-test]] on a strongly right-skewed (exponential) population wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30 and 5.8% at n = 100.

Common mistakes:

- **"Robust means assumptions don't matter."** It means small violations don't matter much; big ones still do.
- **"A large n fixes everything."** It helps with normality, not with dependence between observations or a biased sample ([[Sampling Bias]]).

See also: [[Null Distribution]], [[Type I and Type II Errors]], [[ANOVA Assumptions]], [[Normality Checks]].
