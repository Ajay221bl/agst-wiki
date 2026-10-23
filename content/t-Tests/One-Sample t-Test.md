---
type: atomic
tags:
  - t-tests
aliases:
  - "one-sample t"
  - "t-interval"
  - "single-sample t-test"
status: seedling
---

**In one line:** a one-sample t-test checks a claim about one [[Population and Sample|population]] mean, using the sample mean, the sample [[Standard Deviation|SD]] and a t-distribution with $n - 1$ df.

> [!info] Before this, it helps to know
> [[Test Statistic]] (the template it fills in) · [[t-Distribution]] (its null distribution) · [[Hypothesis Testing]] (the procedure) · [[Confidence Interval]] (its companion)

## Start from zero
1. **Question: is a population mean different from a known value $\mu_0$?** (Is mean body temperature 98.6 °F?) Write it as hypotheses about $\mu$ ([[Null and Alternative Hypotheses]]):
   - $H_0: \mu = \mu_0$ vs $H_A: \mu <, >, \ne \mu_0$
2. **Fill in the test-statistic template** with the sample mean and its SE ([[Test Statistic]], [[Standard Error]]):
   - $t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}$, df = $n - 1$. *Why $n - 1$:* one mean was estimated ([[Degrees of Freedom]]).
3. **Under $H_0$ this follows a t-distribution,** so its p-value can be found ([[t-Distribution]], [[P-Value]]).
4. **Also give the range of plausible means:** CI $\bar{x} \pm t^*_{n-1}\,s/\sqrt{n}$ ([[Confidence Interval]]). *Why both:* the CI shows how big the difference might be, which the p-value doesn't.
5. **[[Test Assumptions|Requirements]], and why each matters:** a random sample of independent observations (so the SE formula is right), and a roughly normal population **or** large $n$ (> 30), so that $\bar{x}$ is approximately normal ([[Central Limit Theorem]]). Check with a [[Histogram|histogram]], [[Q-Q Plot|Q-Q plot]] or Shapiro–Wilk ([[Normality Checks]]); otherwise use nonparametric methods or bootstrapping ([[Nonparametric Alternatives]]).

## Why it exists
It compares one group's mean with a fixed reference value: a safety limit, a textbook value, a target. It is also the engine of the paired t-test ([[Paired t-Test]]).

## A tiny example
| Example | Result |
|---|---|
| **Lizard tails** (n = 24, $\bar{x}$ = 8.958 cm, df 23) | 95% CI **8.29 to 9.50 cm**. R's default tests μ = 0, "significant" but useless: no lizard has a zero-length tail |
| **Body temperature** (n = 130, $\bar{x}$ = 98.249 °F) | testing μ = 98.6: t ≈ −5.455, p tiny; CI 98.12 to 98.38. 98.6 is not supported |
| **Salmonella** (n = 9, μ₀ = 0.3, [[One-Tailed vs Two-Tailed Tests\|right-tailed]]) | t ≈ 2.2, df 8, p ≈ 0.029: reject at 0.05, [[Why we never accept the null hypothesis\|fail to reject]] at 0.01 |
| **COVID distress** (939 complete rows, df 938) | `mu = 10, alternative = "less"`: p = 0.109, fail to reject; 90% CI 9.68 to 10.05 |

## How to run it

![[Worked example - one-sample t-test.png|700]]
*What to look at:* the whole 95% CI sits far below the 0.50 ppm line. The gap between x̄ and μ₀, measured in standard errors, is the t statistic.

**Worked example: mercury in white croaker** ([[References|Vu and Harrington 2020, Ch. 5]], p. 243). The FDA measured 15 Pacific white croaker: x̄ = 0.287 ppm, s = 0.069 ppm, values from 0.18 to 0.41. The EPA says to act at 0.50 ppm. Is the mean mercury level different from 0.50?

1. **Pick the test.** One [[Types of Data|quantitative]] variable compared with a fixed value, so a one-sample t-test ([[Test Choice Guide]]). *Why t and not z:* σ is unknown, so the SE uses s ([[Why t instead of z when sigma is unknown]]).

2. **Hypotheses and α, before looking at the data.** $H_0: \mu = 0.50$, $H_A: \mu \ne 0.50$, α = 0.05. Two-sided, because there was no prior reason to expect the fish to be high or low. *Why the hypotheses are about μ:* the 15 fish are known; the question is about all croaker ([[Parameter vs Statistic]]).

3. **Check the requirements.**
   - Independence: a random sample, well under 10% of all croaker. *Why:* the SE formula $s/\sqrt{n}$ assumes each fish adds new information ([[Standard Error]]).
   - Normality: n = 15 is small, so look for [[Shape of a Distribution|skew]] and [[Outliers|outliers]]. Every value lies within 2 SD of the mean (0.287 ± 0.138 covers 0.18 to 0.41), so nothing is a red flag. *Why it matters at n = 15:* the CLT can't yet rescue a skewed sample ([[Robustness]]). With raw data, use `hist()`, a Q-Q plot and `shapiro.test()` ([[Normality Checks]]).

4. **Calculate by hand** (formula sheet: $t = (\bar{x} - \mu_0)/(s/\sqrt{n})$).
   - SE = 0.069/√15 = 0.0178. *Why divide by √n:* this is the [[Signal and Noise|noise]] in a mean of 15 fish, not in one fish ([[Standard Error]]).
   - t = (0.287 − 0.50)/0.0178 = **−11.96**, df = 15 − 1 = **14**
   - p: 11.96 is far beyond every column of the t-table for df 14, so p < 0.001. *Why that's the p-value:* the further out on the null t-distribution, the smaller the [[Tails of a Distribution|tail]] area ([[Null Distribution]]).
   - 95% CI: t* = 2.145 for df 14 (*why not 1.96:* the t-distribution's tails are fatter: [[Critical Value]]), so 0.287 ± 2.145 × 0.0178 = **0.249 to 0.325 ppm**.

5. **Run it in R.** With only the summary numbers:
```r
xbar <- 0.287; s <- 0.069; n <- 15; mu0 <- 0.50
se <- s / sqrt(n)                               # 0.0178
t  <- (xbar - mu0) / se                         # -11.96
2 * pt(-abs(t), df = n - 1)                     # two-sided p = 9.8e-09
xbar + c(-1, 1) * qt(0.975, df = n - 1) * se    # 95% CI 0.249 to 0.325
```
   With the raw values in a column, one line does all of it: `t.test(fish$mercury, mu = 0.50)`. Always set `mu`; the default tests μ = 0 ([[t.test()]]).

6. **Decide and report.** p < 0.05, so reject $H_0$ ([[Writing a Conclusion]]). *Why give the CI and d too:* p only says the mean isn't 0.50; the CI says where it plausibly is, and d says how big the gap is ([[Why report an effect size with the p-value]]).
   > We reject $H_0$. There is sufficient evidence that the mean mercury level of Pacific white croaker differs from 0.50 ppm; it is lower, *t*(14) = −11.96, *p* < .001, 95% CI [0.249, 0.325] ppm.

   [[Effect Size|Effect size]]: d = (0.287 − 0.50)/0.069 = −3.09, far past 0.8, so large ([[Cohen's d]]).

## Common confusions
- **"The default `t.test(x)` answers my question."** It tests μ = 0 unless you set `mu =`.

## Connections
- **Builds on:** [[t-Distribution]], [[Hypothesis Testing]], [[Confidence Interval]], [[Test Statistic]]
- **Leads to:** [[Paired t-Test]], [[Two-Sample Independent t-Test]], [[t.test()]]
- **Part of:** [[MOC - t-Tests]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (§5.1)
- **Terms used:** [[pnorm(), qnorm(), pt() and qt()]]
