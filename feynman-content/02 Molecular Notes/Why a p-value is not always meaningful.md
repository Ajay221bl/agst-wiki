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

No. A p-value answers one narrow question: "how surprising are these data if $H_0$ is true?" Everything else people read into it is extra. It can be tiny for a trivial effect in a huge sample, it's useless if $H_0$ was a silly hypothesis, and it can be wrong by chance, through a Type I or Type II error. And it says nothing about how big or important an effect is.

Think of a p-value as a tool built for one job. It works when it's doing that job, and misleads when it's asked to do another. So here are the ways it gets misused.

**It can't tell you whether an effect matters.** Statistical significance is not practical significance. Chick lifespans that differ by an hour can be significantly different without it mattering to anyone. In a COVID survey, distress scores differed by 0.21 on a 20-point scale, with p ≈ 0.011 ([[Statistical vs Practical Significance]]). Real, and too small to care about.

**It's only as good as the question.** A meaningless hypothesis gives a meaningless p-value. Test whether lizard tails have a mean length of 0 and you'll get a "significant" result, but you've learned nothing, because nobody thought they did ([[One-Sample t-Test]]).

**It moves with sample size.** Huge samples make trivial effects significant, and small samples hide big ones ([[Statistical Power]], [[Why big samples make almost everything significant]]). So a p-value partly measures how much data you collected.

**It can simply be wrong.** After rejecting, a Type I error is possible. After failing to reject, a Type II error is possible ([[Type I and Type II Errors]]). You never find out which.

**It inherits every flaw upstream.** If the test's [[Test Assumptions|assumptions]] fail, the p-value's meaning fails with them ([[Why check assumptions before trusting a test]]). Garbage in, garbage out.

The American Statistical Association put it bluntly: a p-value doesn't measure the probability that the hypothesis is true, or the size of an effect, and decisions shouldn't rest on whether it passes 0.05 ([[References|Wasserstein and Lazar 2016]]).

Why does this matter so much? Because when a single number becomes the goal, people start gaming it. They run analyses until one comes out significant, [[Family-Wise Type I Error|pick the best of many tests]], and report trivial "discoveries". A p-value is useful evidence. It's a terrible goal.

Try it yourself. A huge study finds that people who drink one brand of water score higher on a test, with a p-value far below any usual cutoff, but the difference is a fraction of one point. Is it significant? Yes. Does it matter? Almost certainly not. A small p-value says the difference is probably real, not that it's big.

See also: [[P-Value]], [[Sample Size|sample size]], [[Why report an effect size with the p-value]], [[Why we never accept the null hypothesis]].
