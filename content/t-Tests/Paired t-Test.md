---
type: atomic
tags:
  - t-tests
aliases:
  - "paired t"
  - "dependent t-test"
  - "pre-post test"
status: seedling
---

A paired t-test is a one-sample t-test on the differences within each pair.

Paired data come in linked pairs, such as the same swimmer with and without a wetsuit ([[Independent vs Paired Samples]]). Within a pair almost everything is shared, such as the swimmer's fitness and technique. So the difference within each pair is free of that shared [[Variability|variation]].

So work out the difference $d_i$ for every pair; the two original columns are no longer needed. Use **after − before**, so that **positive means an increase** and **negative means a decrease**. Before − after also works, but every sign flips, which is confusing.

Now there is one sample of differences, so run a one-sample t-test on it against 0 ([[One-Sample t-Test]]):
- $H_0: \mu_d = 0$, against $H_A: \mu_d <, >$ or $\ne 0$. **State the order of subtraction**, for example "d = April − March", because the sign of every result depends on it.
- $t = \dfrac{\bar{d} - 0}{s_d/\sqrt{n}}$, with $n_{pairs} - 1$ degrees of freedom; the [[Confidence Interval|confidence interval]] (CI) is $\bar{d} \pm t^*\,s_d/\sqrt{n}$.

The [[Test Assumptions|requirements]] are that the pairs are a random sample and independent of each other, and that **the differences** are roughly normal (or there are many pairs). **Test the normality of the differences, not each column** ([[Normality Checks]]), because the differences are the only data the test uses.

The payoff is that $s_d$ is usually far smaller than either column's [[Standard Deviation|standard deviation]], so the same effect gives a much larger t. In the swim data, the paired t is 12.3, against 1.37 unpaired. Each unit acts as its own control, removing unit-to-unit variability from the comparison ([[Why use a paired test for paired data]]).

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that variation, and every unit clearly went up.

For example, four chickens weighed before and after a diet have differences of +2.5, +4, +2 and +0.5. The mean difference is 2.25, and the test asks whether that mean is far enough from 0, given how much the differences vary.

![[Worked example - paired t-test.png|700]]
Left, the swimmers differ a lot from each other, but every line rises. Right, the 12 differences sit well away from 0, and so does their CI.

**Worked example: wetsuits and swim speed** ([[References|Vu and Harrington 2020, Ch. 5]], pp. 244–246). Twelve competitive swimmers each swam 1500 m twice, once in a wetsuit and once in a swimsuit, in random order. The data are in `Data/swim.csv` (the book's `swim` data).

| swimmer | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| wetsuit (m/s) | 1.57 | 1.47 | 1.42 | 1.35 | 1.22 | 1.75 | 1.64 | 1.57 | 1.56 | 1.53 | 1.49 | 1.51 |
| swimsuit (m/s) | 1.49 | 1.37 | 1.35 | 1.27 | 1.12 | 1.64 | 1.59 | 1.52 | 1.50 | 1.45 | 1.44 | 1.41 |
| d = wet − swim | 0.08 | 0.10 | 0.07 | 0.08 | 0.10 | 0.11 | 0.05 | 0.05 | 0.06 | 0.08 | 0.05 | 0.10 |

1. **Pick the test.** The same swimmer is measured twice, so the data are paired ([[Independent vs Paired Samples]]). Subtracting within each swimmer removes the big differences between swimmers.

2. **[[Null and Alternative Hypotheses|Hypotheses]] and α.** d = wetsuit − swimsuit. $H_0: \mu_d = 0$, $H_A: \mu_d \ne 0$, α = 0.05. State the order because every sign in the output depends on it. The test is two-sided because the question was whether wetsuits change speed, in either direction.

3. **Check the requirements.**
   - The swimmers are independent of each other. Whether 12 swimmers represent all competitive swimmers is the weak point, as the book says.
   - **The differences** are roughly normal: Shapiro–Wilk on d gives W = 0.898, p = 0.147, so there is no evidence against normality, and the dot plot is roughly [[Shape of a Distribution|symmetric]]. Test the differences, not each column, because the test only ever uses the 12 differences.

4. **Calculate by hand**, using $t = \bar{d}/(s_d/\sqrt{n})$.
   - $\bar{d}$ = 0.93/12 = **0.0775**, $s_d$ = 0.0218
   - SE = 0.0218/√12 = 0.0063. It uses $s_d$ because the [[Signal and Noise|noise]] is how much the wetsuit effect varies between swimmers, not how much the swimmers themselves vary ([[Standard Error]]).
   - t = 0.0775/0.0063 = **12.32**, df = 12 − 1 = **11**, p < 0.001. There are 11 degrees of freedom because there are 12 differences and one mean was estimated ([[Degrees of Freedom]]).
   - 95% CI: t* = 2.201 for df 11, so 0.0775 ± 2.201 × 0.0063 = **0.064 to 0.091 m/s**

5. **Run it in R.**
```r
swim <- read.csv(file.choose())               # Data/swim.csv
d <- swim$wetsuit - swim$swimsuit             # order: wetsuit - swimsuit
shapiro.test(d)                               # W = 0.89753, p-value = 0.1474
t.test(swim$wetsuit, swim$swimsuit, paired = TRUE)
# t = 12.318, df = 11, p-value = 8.885e-08
# 95 percent confidence interval: 0.06365244 0.09134756
# mean difference 0.0775
library(lsr)
cohensD(swim$wetsuit, swim$swimsuit, method = "paired")   # 3.56
```
   `t.test(x, y, paired = TRUE)` subtracts in the order you type: x − y. Check the df: 11 = 12 pairs − 1. A df of 22 would mean R ran an [[Two-Sample Independent t-Test|unpaired test]] ([[Why use degrees of freedom as a sanity check]]).

6. **Decide and report.**
   > We reject $H_0$. There is sufficient evidence that wetsuits change 1500 m swim velocity: on average swimmers were 0.078 m/s faster in a wetsuit, *t*(11) = 12.32, *p* < .001, 95% CI [0.064, 0.091] m/s, Cohen's *d* = 3.56 (large).

**What goes wrong if you ignore the pairing:** `t.test(swim$wetsuit, swim$swimsuit)` treats the data as 24 different swimmers and gives t = 1.37, df 22.0, p = 0.185, with a CI from −0.040 to 0.195 that includes 0. The mean difference is the same, but the spread between swimmers swamps it: the standard error is about ten times larger.

Don't check the normality of each column; check the differences. And a two-tailed paired test can still say which is bigger: the decision is two-sided, but the sign of the CI shows the direction.

See also: [[Deviations from the Mean]], [[Cohen's d]], [[t.test()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.2).
