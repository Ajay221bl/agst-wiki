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

A one-sample t-test asks whether the average of one group differs from some fixed number, like a safety limit or a textbook value. It's the simplest complete test, and every other t-test is built from it.

Let's start with a real worry. The government says fish with more than 0.50 parts per million (ppm) of mercury are a concern. You catch 15 croaker and measure them. Their average is 0.287. That's below 0.50, so the fish are fine, right?

Well, hold on. You measured 15 fish, not every croaker in the ocean. Another 15 would give a different average. So the real question is: is the true average of *all* croaker different from 0.50, or could a sample like yours easily come from a population sitting right at 0.50? We need to know how much an average of 15 fish wobbles.

Here's how we think it through. The boring story is "the true mean is the reference value": $H_0: \mu = \mu_0$. The interesting one is that it's lower, higher, or just different: $H_A: \mu <, >$ or $\ne \mu_0$ ([[Null and Alternative Hypotheses]]). Then measure the gap between your sample mean and $\mu_0$, in units of how much a sample mean naturally wobbles, the standard error $s/\sqrt{n}$ ([[Standard Error]], [[Test Statistic]]):
$$t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}, \qquad df = n - 1$$
Read it out loud: "how many wobbles is my average away from the reference?" We lose one degree of freedom because we estimated one mean ([[Degrees of Freedom]]). If $H_0$ is true, this t follows a t-distribution, so we can find how rare our value is: the p-value ([[t-Distribution]], [[P-Value]]).

And don't stop at the p-value. Give the range of believable means too, the confidence interval (CI): $\bar{x} \pm t^*_{n-1}\,s/\sqrt{n}$ ([[Confidence Interval]]). The p-value says "different or not"; the interval says "by how much".

When can you trust it? The fish must be a random sample of independent units, otherwise the standard error formula is wrong. And the population should be roughly normal, **or** the sample large (more than about 30), so that the average behaves like a bell ([[Central Limit Theorem]], [[Test Assumptions|requirements]]). Check with a [[Histogram|histogram]], a [[Q-Q Plot|Q-Q plot]] or a Shapiro–Wilk test ([[Normality Checks]]). If they fail badly, use a rank-based test ([[Nonparametric Alternatives]]).

Here's how it played out in some examples:

| Example | Result |
|---|---|
| **Lizard tails** (n = 24, $\bar{x}$ = 8.958 cm, df 23) | 95% CI **8.29 to 9.50 cm**. R's default tests μ = 0, which comes out "significant" but is useless: no lizard has a tail of zero length |
| **Body temperature** (n = 130, $\bar{x}$ = 98.249 °F) | testing μ = 98.6: t ≈ −5.455, p tiny; CI 98.12 to 98.38. 98.6 is not supported |
| **Salmonella** (n = 9, μ₀ = 0.3, [[One-Tailed vs Two-Tailed Tests\|right-tailed]]) | t ≈ 2.2, df 8, p ≈ 0.029: reject at 0.05, [[Why we never accept the null hypothesis\|fail to reject]] at 0.01 |
| **COVID distress** (939 complete rows, df 938) | `mu = 10, alternative = "less"`: p = 0.109, fail to reject; 90% CI 9.68 to 10.05 |

![[Worked example - one-sample t-test.png|700]]
The whole 95% CI sits far below the 0.50 ppm line. The gap between x̄ and μ₀, measured in standard errors, is the t statistic.

**Worked example: mercury in white croaker** ([[References|Vu and Harrington 2020, Ch. 5]], p. 243). The US Food and Drug Administration (FDA) measured mercury in 15 Pacific white croaker fish: x̄ = 0.287 parts per million (ppm), s = 0.069 ppm, with values from 0.18 to 0.41. The Environmental Protection Agency says to act at 0.50 ppm. Is the mean mercury level different from 0.50?

1. **Pick the test.** One [[Types of Data|quantitative]] variable is compared with a fixed value, so this is a one-sample t-test ([[Test Choice Guide]]). It is t and not z because σ is unknown, so the standard error uses s ([[Why t instead of z when sigma is unknown]]).

2. **Hypotheses and α, before looking at the data.** $H_0: \mu = 0.50$, $H_A: \mu \ne 0.50$, α = 0.05. The test is two-sided because there was no earlier reason to expect the fish to be high or low. The hypotheses are about μ because the 15 fish are already known; the question is about all croaker ([[Parameter vs Statistic]]).

3. **Check the requirements.**
   - Independence: a random sample, well under 10% of all croaker. The standard error formula $s/\sqrt{n}$ assumes each fish adds new information ([[Standard Error]]).
   - Normality: n = 15 is small, so look for [[Shape of a Distribution|skew]] and [[Outliers|outliers]]. Every value lies within 2 SD of the mean (0.287 ± 0.138 covers 0.18 to 0.41), so nothing is a warning sign. This matters at n = 15 because the central limit theorem can't yet rescue a skewed sample ([[Robustness]]). With raw data, use `hist()`, a Q-Q plot and `shapiro.test()` ([[Normality Checks]]).

4. **Calculate by hand**, using $t = (\bar{x} - \mu_0)/(s/\sqrt{n})$.
   - SE = 0.069/√15 = 0.0178. Dividing by √n gives the [[Signal and Noise|noise]] in a mean of 15 fish, not in one fish.
   - t = (0.287 − 0.50)/0.0178 = **−11.96**, df = 15 − 1 = **14**
   - p: 11.96 is far beyond every column of the t-table for df 14, so p < 0.001. The further out on the null t-distribution, the smaller the [[Tails of a Distribution|tail]] area ([[Null Distribution]]).
   - 95% CI: t* = 2.145 for df 14 (not 1.96, because the t-distribution has fatter tails; see [[Critical Value]]), so 0.287 ± 2.145 × 0.0178 = **0.249 to 0.325 ppm**.

5. **Run it in R.** With only the summary numbers:
```r
xbar <- 0.287; s <- 0.069; n <- 15; mu0 <- 0.50
se <- s / sqrt(n)                               # 0.0178
t  <- (xbar - mu0) / se                         # -11.96
2 * pt(-abs(t), df = n - 1)                     # two-sided p = 9.8e-09
xbar + c(-1, 1) * qt(0.975, df = n - 1) * se    # 95% CI 0.249 to 0.325
```
   With the raw values in a column, one line does all of it: `t.test(fish$mercury, mu = 0.50)`. Always set `mu`, because the default tests μ = 0 ([[t.test()]]).

6. **Decide and report.** p < 0.05, so reject $H_0$ ([[Writing a Conclusion]]). Give the CI and d too: p only says the mean isn't 0.50, the CI says where it probably is, and d says how big the gap is ([[Why report an effect size with the p-value]]).
   > We reject $H_0$. There is sufficient evidence that the mean mercury level of Pacific white croaker differs from 0.50 ppm; it is lower, *t*(14) = −11.96, *p* < .001, 95% CI [0.249, 0.325] ppm.

   [[Effect Size|Effect size]]: d = (0.287 − 0.50)/0.069 = −3.09, far past 0.8, so large ([[Cohen's d]]).

Try it yourself. Someone runs `t.test(lizards$tail)` and proudly reports p < 0.001. What did they actually test? Whether the mean tail length is 0, because R tests μ = 0 unless you set `mu =`. No lizard has a zero-length tail, so the "significant" result is meaningless. With software, the arithmetic is free. The thinking, which value to test against and why, is the part that matters. This same test is also the engine inside the paired t-test ([[Paired t-Test]]).

See also: [[Hypothesis Testing]], [[Two-Sample Independent t-Test]], [[pnorm(), qnorm(), pt() and qt()]], [[Population and Sample|population]], [[Standard Deviation|standard deviation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.1).
