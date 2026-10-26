---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "is a p-value always meaningful"
  - "limits of p-values"
status: seedling
---

Is a p-value always meaningful? Why or why not?

No. A p-value only answers "how surprising are these data if $H_0$ is true?" It can be tiny for a trivial effect in a huge sample, it is useless if $H_0$ was a silly hypothesis, and it can be wrong by chance, through a Type I or Type II error. It says nothing about how big or important an effect is.

1. **Statistical significance isn't practical significance.** Chick lifespans that differ by an hour can be significantly different without it mattering. In a COVID survey, distress scores differed by 0.21 on a 20-point scale with p ≈ 0.011 ([[Statistical vs Practical Significance]]).
2. **It depends on the question.** A meaningless hypothesis gives a meaningless p-value. Testing whether lizard tails have a mean length of 0 is "significant" but useless ([[One-Sample t-Test]]).
3. **Sample size.** Huge samples make trivial effects significant, and small ones hide big effects ([[Statistical Power]], [[Why big samples make almost everything significant]]).
4. **Possible errors.** A Type I error is possible after rejecting, and a Type II error after failing to reject ([[Type I and Type II Errors]]).
5. **[[Test Assumptions|Assumptions]].** If the test's assumptions fail, the p-value's meaning fails with them ([[Why check assumptions before trusting a test]]).
6. The American Statistical Association adds that a p-value doesn't measure the probability that the hypothesis is true, or the size of an effect, and that decisions shouldn't rest on whether it passes 0.05 ([[References|Wasserstein and Lazar 2016]]).

Otherwise research would chase small p-values: running analyses until one is significant, [[Family-Wise Type I Error|picking the best of many tests]], and reporting trivial "discoveries".

See also: [[P-Value]], [[Sample Size|sample size]], [[Why report an effect size with the p-value]], [[Why we never accept the null hypothesis]].
