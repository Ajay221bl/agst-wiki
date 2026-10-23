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

"Is a p-value always meaningful? Why or why not?"

A p-value only answers "how surprising are these data if $H_0$ is true?" It can be tiny for a trivial effect in a huge sample, it is useless if $H_0$ was a silly hypothesis, and it can be wrong by chance (a Type I or II error). It says nothing about how big or important an effect is.

1. **Statistical ≠ practical significance.** Chick lifespans differing by an hour can be significant and not matter; COVID distress differed by 0.21 on a 20-point scale with p ≈ 0.011 ([[Statistical vs Practical Significance]]).
2. **It depends on the question.** "Garbage in, garbage out": testing whether lizard tails have mean length 0 is "significant" but useless ([[One-Sample t-Test]]).
3. **Sample size.** Huge samples make trivial effects significant; small ones hide big effects ([[Statistical Power]], [[Why big samples make almost everything significant]]).
4. **Possible errors.** A Type I error is possible after rejecting, a Type II after failing to reject ([[Type I and Type II Errors]]).
5. **[[Test Assumptions|Assumptions]].** If the test's assumptions fail, the p-value's meaning fails with them ([[Why check assumptions before trusting a test]]).
6. The ASA adds: a p-value does not measure the probability the hypothesis is true, nor the size of an effect, and decisions should not rest on whether it passes 0.05 ([[References|Wasserstein and Lazar 2016]]).

Research would chase asterisks: p-hacking, [[Family-Wise Type I Error|cherry-picking]] and trivial "discoveries".

See also: [[P-Value]], [[Sample Size|sample size]], [[Why report an effect size with the p-value]], [[Why we never accept the null hypothesis]].
