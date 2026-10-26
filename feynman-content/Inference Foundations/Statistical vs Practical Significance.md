---
type: atomic
tags:
  - inference
aliases:
  - "practical significance"
  - "clinical significance"
  - "scientific significance"
  - "statistical significance"
  - "statistically significant"
  - "practical importance"
status: seedling
---

Statistically significant means "probably not just chance". Practically significant means "big enough to matter". They're different questions, and a result can pass one and fail the other.

Imagine a giant study of a million people finds that a new diet lowers weight. The result is "highly significant", p tiny, lots of stars. Exciting! Then you look at the size: people lost, on average, the weight of a paper clip. Is that a discovery? Statistically, yes; the effect is almost certainly real. Practically, who cares?

How can that happen? Look at how a test works. The [[Test Statistic|test statistic]] is the signal divided by the noise, and the noise shrinks as the sample grows, like $1/\sqrt{n}$ ([[Signal and Noise]]). Make the sample big enough and *any* difference, however tiny, stands out from the noise. So a p-value answers "is there evidence of some effect?" ([[P-Value]]) but not "how big is it?". For that you need an effect size ([[Effect Size]]).

So the two can disagree in two directions:
1. **Significant but meaningless.** p < 0.0001 and lots of asterisks, but the pH of the animals' diet changed by 0.01 over four weeks. This usually comes from a very large $n$.
2. **Meaningful but not significant.** A big effect from a small study that didn't have the power to confirm it ([[Statistical Power]]). The effect size still hints it might matter, so it's worth following up.

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in [[Standard Deviation|SD]] units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

For example:
- In a COVID survey, a paired test of April minus March distress (n = 979) gave p ≈ 0.011. But the difference was about 0.21 points on a 20-point scale, and Cohen's d, a standard effect size, was negligible ([[Paired t-Test]]).
- In a YouGov survey (n = 2,000), a barely visible trend in a scatter plot still gave a significant [[Correlation|correlation]] ([[Plots for Two Variables]]).

So always report both: the p-value and how big the effect is ([[Why report an effect size with the p-value]], [[Why a p-value is not always meaningful]]). Statistics can tell you whether it's real. Whether it matters is a question for someone who knows the field: is 0.21 points of distress something a doctor would care about?

Here's the trap in one word: "significant". In everyday English it means important. In statistics it only means "unlikely if $H_0$ were true". Keep the two meanings apart and you'll avoid the most common misreading in all of science.

Try it yourself. A small study of 8 patients finds a big improvement, but p comes out just above the usual cutoff. Does that show the treatment doesn't work? No. It's a big effect from a tiny, underpowered study. "Not significant" here means "not enough evidence yet", so you'd want a larger study.

Further reading: [[References|Wasserstein and Lazar 2016]].
