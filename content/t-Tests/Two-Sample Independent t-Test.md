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

The two-sample independent t-test compares the means of two independent groups. The [[Independent and Dependent Variables|independent variable]] (IV) is categorical with 2 levels, and the dependent variable (DV) is [[Types of Data|quantitative]].

This is probably the most common question in all of experimental science: is this group different from that one? There are two separate groups and one question: do their [[Population and Sample|population]] means differ ([[Independent vs Paired Samples]])? The hypotheses are $H_0: \mu_1 - \mu_2 = 0$ against $H_A: \mu_1 - \mu_2 <, >$ or $\ne 0$. R's default is two-sided.

The observed [[Signal and Noise|signal]] is $\bar{x}_1 - \bar{x}_2$, and the test-statistic template says to divide it by its standard error (SE) ([[Test Statistic]]). The standard error of a difference between independent means comes from adding variances: $\sqrt{s_1^2/n_1 + s_2^2/n_2}$ ([[Standard Error]]). Each mean wobbles on its own, and independent wobbles add up in [[Variance|variance]]. Two uncertain things combined are more uncertain than either one, which is why the noise in a difference is bigger than the noise in each mean.

That gives the Welch test, which allows unequal variances and is R's default:
$$t = \dfrac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}}$$
Its degrees of freedom come from a complicated formula and often aren't a whole number, which is nothing to worry about ([[Welch's t-Test]]). If you can justify equal variances, you can pool them instead (`var.equal = TRUE`). This is more powerful, with $n_1 + n_2 - 2$ degrees of freedom, but equal variances is a strong assumption that needs a reason ([[Pooled Variance]]).

The [[Test Assumptions|requirements]] are two independent random samples, with **each** group roughly normal or both sample sizes large (so two Shapiro tests). Each group matters because each mean must be roughly normal for t to follow the t-distribution. For ANOVA you will check residuals instead ([[Residuals]]).

This is the basic two-group comparison, and it leads on to one-way ANOVA ([[One-Way ANOVA]]).

To read the [[Confidence Interval|confidence interval]] (CI) for $\mu_1 - \mu_2$:
- If **0 is inside**, the means could be equal, and the result isn't significant.
- If it is **entirely negative**, $\mu_1 < \mu_2$; if **entirely positive**, $\mu_1 > \mu_2$.

For example, in the mtcars data, miles per gallon (MPG) for automatic minus manual cars has a 95% CI of **−11.28 to −3.21**, entirely negative. Automatic cars average 3.21 to 11.28 MPG lower than manual ones.

![[Worked example - two-sample t-test.png|700]]
Left, almost every stem-cell sheep sits above almost every control sheep. Right, the CI for the difference stays clear of 0.

**Worked example: stem cells and sheep hearts** (Menard et al. 2005, in [[References|Vu and Harrington 2020, Ch. 5]], pp. 247–249). 18 sheep with induced heart attacks were randomly assigned to a transplant of embryonic stem cells (`esc`) or inert material (`ctrl`), 9 each. The response is the change in heart pumping capacity (after − before, in %). The data are in `Data/stem_cells.csv` (the book's `stem_cell` data).

| group | n | mean change | [[Standard Deviation\|standard deviation]] (SD) |
|---|---|---|---|
| ctrl | 9 | −4.33 | 2.76 |
| esc | 9 | 3.50 | 5.17 |

1. **Pick the test.** Two groups of different sheep and a quantitative response call for a two-sample independent t-test, Welch's version by default. Welch's test doesn't need equal variances and loses little when they are equal ([[Welch's t-Test]]).

2. **[[Null and Alternative Hypotheses|Hypotheses]] and α.** $H_0: \mu_{esc} = \mu_{ctrl}$, $H_A: \mu_{esc} \ne \mu_{ctrl}$, α = 0.05. It is two-sided because a transplant could reasonably help or harm.

3. **Check the requirements.**
   - Independence: different animals, randomly assigned. Random assignment also matters because it makes the groups comparable, so a difference can be credited to the treatment ([[Random Assignment]]).
   - Each group roughly normal: Shapiro p = 0.81 (ctrl) and 0.34 (esc). That is two tests, one per group, because each group mean has to be roughly normal, and combining the groups would mix two centres.
   - Equal variances only matter for the pooled version. The variance [[Ratios and Fractions|ratio]] is 5.17²/2.76² = 3.5, and Levene's test gives F(1, 16) = 1.01, p = 0.33. Welch's test doesn't need equal variances anyway; the check tells you whether pooling would have been allowed ([[Pooled Variance]], [[Homogeneity of Variance]]).

4. **Calculate by hand**, using Welch's formula.
   - Difference: 3.50 − (−4.33) = **7.83**
   - SE = √(5.17²/9 + 2.76²/9) = √(2.970 + 0.846) = **1.95**. The variances are added before taking the root because the two means wobble independently, and independent variances add.
   - t = 7.83/1.95 = **4.01**
   - Degrees of freedom by hand: Welch's formula is for software. A safe shortcut is the smaller of n₁ − 1 and n₂ − 1, which is 8. It is safe because fewer degrees of freedom give a larger t*, so the CI can only be too wide, never too narrow ([[Conservative Tests|conservative]]). With t* = 2.31, the CI is 7.83 ± 2.31 × 1.95 = **3.33 to 12.33**. (The book prints 3.38 to 12.38, a small arithmetic slip.) For df 8, t = 4.01 gives p < 0.01.

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
   **Why is t negative?** The formula subtracts the levels in alphabetical order, `ctrl` − `esc`. Flip every sign: esc − ctrl = 7.83, with CI 3.58 to 12.08 ([[t.test()]]). R's Welch df (12.2) is larger than the hand shortcut (8), so its CI is a little narrower.

6. **Decide and report.**
   > We reject $H_0$. There is sufficient evidence that stem-cell transplants change heart pumping capacity: sheep given stem cells improved by 7.83 [[Proportions and Percentages|percentage]] points more than controls, Welch *t*(12.2) = 4.01, *p* = .002, 95% CI [3.58, 12.08], Cohen's *d* = 1.89 (large).

Always remember what the test can and can't do: it tells you whether the gap is bigger than chance, and the interval tells you how big it might be. A negative t isn't an error. It means group 1's mean is lower, given the order of subtraction.

See also: [[t-Distribution]], [[Null Distribution|null distribution]], [[Cohen's d]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.3, p. 247).
