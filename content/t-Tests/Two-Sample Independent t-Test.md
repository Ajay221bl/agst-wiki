---
type: atomic
tags:
  - t-tests
aliases:
  - "two-sample t"
  - "independent t-test"
  - "Welch t-test"
  - "difference of means"
  - "unpaired test"
status: seedling
---

The two-sample independent t-test compares the means of two independent groups: a categorical [[Independent and Dependent Variables|IV]] with 2 levels and a [[Types of Data|quantitative]] DV.

1. **Two separate groups, one question: do their [[Population and Sample|population]] means differ?** ([[Independent vs Paired Samples]])
   - $H_0: \mu_1 - \mu_2 = 0$ vs $H_A: \mu_1 - \mu_2 <, >, \ne 0$ (R default two-sided).
2. **The observed [[Signal and Noise|signal]] is $\bar{x}_1 - \bar{x}_2$.** The template says divide by its SE ([[Test Statistic]]).
3. **The SE of a difference of independent means comes from adding variances:** $\sqrt{s_1^2/n_1 + s_2^2/n_2}$ ([[Standard Error]]). *Why add:* each mean wobbles on its own, and independent wobbles add up in [[Variance|variance]].
4. **That gives the Welch test** (unequal variances, R default): $t = \dfrac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}}$. Its df "gets a little crazy" and often isn't whole. "Don't worry about that." ([[Welch's t-Test]])
5. **If you can justify equal variances, pool them** (`var.equal = TRUE`): more powerful, df = $n_1 + n_2 - 2$, but equal variances is a strong assumption that needs a rationale ([[Pooled Variance]]).
6. **[[Test Assumptions|Requirements]]:** two independent random samples; **each** group roughly normal or both $n$'s large (two Shapiro tests). *Why each group:* each mean must be roughly normal for t to follow the t-distribution. Later you'll check residuals instead ([[Residuals]]).

It is the basic two-group comparison and the **precursor to one-way ANOVA** ([[One-Way ANOVA]]).

For example:

**Reading the [[Confidence Interval|CI]] for $\mu_1 - \mu_2$:**
- **0 inside** → the means could be equal; not significant.
- **Entirely negative** → $\mu_1 < \mu_2$; **entirely positive** → $\mu_1 > \mu_2$.

mtcars MPG, automatic − manual: 95% CI **−11.28 to −3.21**, entirely negative. Automatics average 3.21 to 11.28 MPG lower than manuals.

![[Worked example - two-sample t-test.png|700]]
Left, almost every stem-cell sheep sits above almost every control sheep. Right, the CI for the difference stays clear of 0.

**Worked example: stem cells and sheep hearts** (Menard et al. 2005, in [[References|Vu and Harrington 2020, Ch. 5]], pp. 247–249). 18 sheep with induced heart attacks were randomly assigned to a transplant of embryonic stem cells (`esc`) or inert material (`ctrl`), 9 each. The response is the change in heart pumping capacity (after − before, in %). The data are in `Data/stem_cells.csv` (the book's `stem_cell` data).

| group | n | mean change | [[Standard Deviation\|SD]] |
|---|---|---|---|
| ctrl | 9 | −4.33 | 2.76 |
| esc | 9 | 3.50 | 5.17 |

1. **Pick the test.** Two groups of different sheep, a quantitative response: a two-sample independent t-test, Welch by default. *Why Welch:* it doesn't need equal variances and loses little when they are equal ([[Welch's t-Test]]).

2. **[[Null and Alternative Hypotheses|Hypotheses]] and α.** $H_0: \mu_{esc} = \mu_{ctrl}$, $H_A: \mu_{esc} \ne \mu_{ctrl}$, α = 0.05. *Why two-sided:* a transplant could plausibly help or harm.

3. **Check the requirements.**
   - Independence: different animals, randomly assigned. *Why random assignment matters too:* it makes the groups comparable, so a difference can be blamed on the treatment ([[Random Assignment]]).
   - Each group roughly normal: Shapiro p = 0.81 (ctrl) and 0.34 (esc). Two tests, one per group. *Why each group:* each group mean has to be roughly normal, and pooling the groups would mix two centres.
   - Equal variances only matter for the pooled version. The variance [[Ratios and Fractions|ratio]] is 5.17²/2.76² = 3.5, and Levene's test gives F(1, 16) = 1.01, p = 0.33. Welch doesn't need equal variances anyway. *Why check at all:* it decides whether pooling would have been allowed ([[Pooled Variance]], [[Homogeneity of Variance]]).

4. **Calculate by hand** (formula sheet, Welch).
   - Difference: 3.50 − (−4.33) = **7.83**
   - SE = √(5.17²/9 + 2.76²/9) = √(2.970 + 0.846) = **1.95**. *Why add before the root:* the two means wobble independently, and independent variances add ([[Standard Error]]).
   - t = 7.83/1.95 = **4.01**
   - df by hand: the Welch df formula is for software. *Why a shortcut is safe:* using fewer df gives a larger t*, so the CI can only be too wide, never too narrow. The [[Conservative Tests|conservative]] shortcut is the smaller of n₁ − 1 and n₂ − 1 = 8, so t* = 2.31, and the CI is 7.83 ± 2.31 × 1.95 = **3.33 to 12.33**. (The book prints 3.38 to 12.38, a small arithmetic slip.) For df 8, t = 4.01 gives p < 0.01.

5. **Run it in R.**
```r
sheep <- read.csv(file.choose())                       # Data/stem_cells.csv
sheep$change <- sheep$after - sheep$before
aggregate(change ~ trmt, data = sheep, FUN = sd)       # 2.76 (ctrl), 5.17 (esc)
by(sheep$change, sheep$trmt, shapiro.test)             # p = 0.81, 0.34
car::leveneTest(change ~ factor(trmt), data = sheep)   # F = 1.01, p = 0.33
t.test(change ~ trmt, data = sheep)
# t = -4.0073, df = 12.225, p-value = 0.001678
# 95 percent confidence interval: -12.083750 -3.582916
# mean in group ctrl -4.333333   mean in group esc 3.500000
library(lsr)
cohensD(change ~ trmt, data = sheep)                   # 1.89
```
   **Why is t negative?** The formula subtracts levels alphabetically, `ctrl` − `esc`. Flip every sign: esc − ctrl = 7.83, CI 3.58 to 12.08 ([[t.test()]]). R's Welch df (12.2) is larger than the hand shortcut (8), so its CI is a little narrower.

6. **Decide and report.**
   > We reject $H_0$. There is sufficient evidence that stem-cell transplants change heart pumping capacity: sheep given stem cells improved by 7.83 [[Proportions and Percentages|percentage]] points more than controls, Welch *t*(12.2) = 4.01, *p* = .002, 95% CI [3.58, 12.08], Cohen's *d* = 1.89 (large).

Common mistakes:

- **"A negative t means an error."** It means group 1's mean is lower, given the order of subtraction.

See also: [[t-Distribution]], [[Null Distribution|null distribution]], [[Cohen's d]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.3, p. 247).
