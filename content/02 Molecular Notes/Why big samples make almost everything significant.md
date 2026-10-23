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

Why does a very large sample make tiny effects and tiny departures from normality statistically significant?

The standard error shrinks with the [[Squares and Square Roots|square root]] of n, so with enough data any non-zero difference, however trivial, becomes many standard errors away from zero. The same happens to normality tests, which flag any small wobble. With large samples, a small p-value says the effect is probably not exactly zero, not that it matters; the effect size and a look at the data decide that.

![[Tiny effect becomes significant with n.png|700]]
A difference of 0.05 [[Standard Deviation|SD]] never changes; only n does. p falls from 0.8 at 50 per group to below 0.0000006 at 20,000 per group. Exact t calculation.

1. The [[Test Statistic|test statistic]] is the difference divided by its standard error, and the SE falls like $1/\sqrt{n}$ ([[Standard Error]], [[Signal and Noise]]).
2. Hold the difference fixed and raise n: the [[Parameter vs Statistic|statistic]] grows like $\sqrt{n}$, so p heads towards 0. With d = 0.05: p = 0.26 at 1,000 per group, 0.012 at 5,000.
3. Real effects are rarely exactly zero, so with enough data almost every comparison "works" ([[Statistical vs Practical Significance]]).
4. Normality tests are [[Hypothesis Testing|hypothesis tests]] too: with thousands of values they reject for departures far too small to affect a t-test or ANOVA ([[Normality Checks]]).
5. So with large n, report the effect size and interval and look at the plots; they say whether the difference or departure matters ([[Effect Size]]).

Big-data studies would report trivial effects as discoveries and throw out sound analyses because a normality test said no.

See also: [[Why report an effect size with the p-value]], [[Why a p-value is not always meaningful]], [[Why a bigger sample can't fix a biased one]].
