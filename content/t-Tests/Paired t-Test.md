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

1. **Paired data come in linked pairs** (the same swimmer with and without a wetsuit) ([[Independent vs Paired Samples]]).
2. **Within a pair, almost everything is shared** (the swimmer's fitness, technique). *Consequence:* the difference within each pair is free of that shared [[Variability|variation]].
3. **So compute $d_i$ for every pair; the two original columns are no longer needed.**
   - Use **post − pre** (after − before), so **positive = increase** and **negative = decrease**. "Pre − post works too, but everything's trippy."
4. **Now there is one sample of differences: run a one-sample t-test on it against 0** ([[One-Sample t-Test]]).
   - $H_0: \mu_d = 0$ vs $H_A: \mu_d <, >, \ne 0$. **State the order of subtraction**, e.g. "d = April − March". *Why:* the sign of every result depends on it.
   - $t = \dfrac{\bar{d} - 0}{s_d/\sqrt{n}}$, df = $n_{pairs} - 1$; [[Confidence Interval|CI]] $\bar{d} \pm t^*\,s_d/\sqrt{n}$.
5. **[[Test Assumptions|Requirements]]:** pairs are a random sample and independent of each other; **the differences** are roughly normal (or there are many pairs). **Test normality of the differences, not each column** ([[Normality Checks]]). *Why:* the differences are the only data the test uses.
6. **Payoff:** $s_d$ is usually far smaller than either column's [[Standard Deviation|SD]], so the same effect gives a much larger t (swim: paired t = 12.3 vs unpaired 1.37) ([[Why use a paired test for paired data]]).

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that variation, and every unit clearly went up.

Each unit acts as its own control, removing unit-to-unit variability from the comparison ([[Why use a paired test for paired data]]).

For example:

Chickens before and after: differences +2.5, +4, +2, +0.5. Mean difference 2.25; the test asks whether that mean is far enough from 0 given how much the differences vary.

![[Worked example - paired t-test.png|700]]
Left, the swimmers differ a lot from each other, but every line rises. Right, the 12 differences sit well away from 0, and so does their CI.

**Worked example: wetsuits and swim speed** ([[References|Vu and Harrington 2020, Ch. 5]], pp. 244–246). Twelve competitive swimmers each swam 1500 m twice, once in a wetsuit and once in a swimsuit, in random order. The data are in `Data/swim.csv` (the book's `swim` data).

| swimmer | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| wetsuit (m/s) | 1.57 | 1.47 | 1.42 | 1.35 | 1.22 | 1.75 | 1.64 | 1.57 | 1.56 | 1.53 | 1.49 | 1.51 |
| swimsuit (m/s) | 1.49 | 1.37 | 1.35 | 1.27 | 1.12 | 1.64 | 1.59 | 1.52 | 1.50 | 1.45 | 1.44 | 1.41 |
| d = wet − swim | 0.08 | 0.10 | 0.07 | 0.08 | 0.10 | 0.11 | 0.05 | 0.05 | 0.06 | 0.08 | 0.05 | 0.10 |

1. **Pick the test.** The same swimmer is measured twice, so the data are paired ([[Independent vs Paired Samples]]). *Why it matters:* subtracting within each swimmer removes the big swimmer-to-swimmer differences ([[Why use a paired test for paired data]]).

2. **[[Null and Alternative Hypotheses|Hypotheses]] and α.** d = wetsuit − swimsuit. $H_0: \mu_d = 0$, $H_A: \mu_d \ne 0$, α = 0.05. *Why state the order:* every sign in the output depends on it. *Why two-sided:* the question was whether wetsuits change speed, in either direction.

3. **Check the requirements.**
   - The swimmers are independent of each other (whether 12 swimmers represent all competitive swimmers is the weak point, as the book says).
   - **The differences** are roughly normal: Shapiro–Wilk on d gives W = 0.898, p = 0.147, so no evidence against normality, and the dot plot is roughly [[Shape of a Distribution|symmetric]]. Test the differences, not each column ([[Normality Checks]]). *Why:* the test only ever uses the 12 differences, so they are what must be roughly normal.

4. **Calculate by hand** (formula sheet: $t = \bar{d}/(s_d/\sqrt{n})$).
   - $\bar{d}$ = 0.93/12 = **0.0775**, $s_d$ = 0.0218
   - SE = 0.0218/√12 = 0.0063. *Why $s_d$:* the [[Signal and Noise|noise]] is how much the wetsuit effect varies between swimmers, not how much the swimmers vary ([[Standard Error]]).
   - t = 0.0775/0.0063 = **12.32**, df = 12 − 1 = **11**, p < 0.001. *Why df 11:* 12 differences, one mean estimated ([[Degrees of Freedom]]).
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
   `t.test(x, y, paired = TRUE)` subtracts in the order you type: x − y. Check the df: 11 = 12 pairs − 1. *Why check:* a df of 22 would mean R ran an [[Two-Sample Independent t-Test|unpaired test]] ([[Why use degrees of freedom as a sanity check]]).

6. **Decide and report.**
   > We reject $H_0$. There is sufficient evidence that wetsuits change 1500 m swim velocity: on average swimmers were 0.078 m/s faster in a wetsuit, *t*(11) = 12.32, *p* < .001, 95% CI [0.064, 0.091] m/s, Cohen's *d* = 3.56 (large).

**What goes wrong if you ignore the pairing:** `t.test(swim$wetsuit, swim$swimsuit)` treats them as 24 different swimmers and gives t = 1.37, df 22.0, p = 0.185, with a CI from −0.040 to 0.195 that includes 0. The mean difference is the same, but the swimmer-to-swimmer spread swamps it: the SE is about ten times larger ([[Why use a paired test for paired data]]).

Common mistakes:

- **"Check normality of each column."** Check the differences.
- **"A two-tailed paired test can't say which is bigger."** The decision is two-sided, but the sign of the CI shows the direction.

See also: [[Deviations from the Mean]], [[Cohen's d]], [[t.test()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.2).
