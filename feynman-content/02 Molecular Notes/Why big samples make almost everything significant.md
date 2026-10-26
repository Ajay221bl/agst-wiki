---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "large n significance"
  - "statistical vs practical with big data"
status: seedling
---

Why does a very large sample make tiny effects, and tiny departures from normality, statistically significant?

Because the standard error shrinks with the [[Squares and Square Roots|square root]] of n. With enough data, any difference that isn't exactly zero, however trivial, ends up many standard errors from zero. Normality tests behave the same way and flag every small wobble. So with a large sample, a small p-value only says the effect probably isn't exactly zero. Whether it matters is a separate question, answered by the effect size and a look at the data.

![[Tiny effect becomes significant with n.png|700]]
A difference of 0.05 standard deviations (SD) never changes. Only n does. p falls from 0.8 at 50 per group to below 0.0000006 at 20,000 per group. Exact t calculation.

The [[Test Statistic|test statistic]] is a ratio: the difference you saw, divided by its standard error. And the standard error falls like $1/\sqrt{n}$ ([[Standard Error]], [[Signal and Noise]]). So the denominator keeps shrinking as you add data.

Now hold the difference fixed and keep raising n. The [[Parameter vs Statistic|statistic]] grows like $\sqrt{n}$, and p heads towards 0. With an effect size of d = 0.05, a difference almost nobody would notice, p = 0.26 at 1,000 per group and 0.012 at 5,000. The effect didn't grow. Your microscope did.

Here's what most people miss. In the real world, effects are rarely exactly zero. Two fertilizers, two teaching methods, two drugs: they almost always differ by something, however tiny. So with enough data, almost every comparison comes out significant ([[Statistical vs Practical Significance]]). The question "is there any difference at all?" stops being interesting.

Normality tests fall into the same trap, because they're [[Hypothesis Testing|hypothesis tests]] too. With thousands of values, they reject normality for departures far too small to affect a t-test or ANOVA ([[Normality Checks]]).

So with a large n, change the question you ask. Not "is it significant?" but "how big is it, and does that size matter?" Report the effect size and a confidence interval, and look at the plots ([[Effect Size]]).

Otherwise big-data studies would report trivial effects as discoveries, and throw out sound analyses because a normality test said no. A powerful enough lens finds a difference in anything. Your job is to decide which ones are worth seeing.

Try it yourself. Study 1 has 50 people per group and p = 0.8. Study 2 has 20,000 per group, the same tiny difference, and p is minuscule. Did the effect get bigger? No, it's identical. Only the standard error shrank. So with big data, always look at the size of the effect, not just the p-value.

See also: [[Why report an effect size with the p-value]], [[Why a p-value is not always meaningful]], [[Why a bigger sample can't fix a biased one]].
