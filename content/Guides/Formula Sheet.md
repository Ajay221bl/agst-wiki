---
type: project
tags:
  - reference
aliases:
  - "Formulas"
status: growing
---

Every formula through one-way ANOVA in one place. Each row links to the note that explains where it comes from.

## Probability
| Rule | Formula |
|---|---|
| Complement | $P(A^c) = 1 - P(A)$ → [[Complementary Events]] |
| Addition | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ → [[Addition Rule]] |
| Multiplication | $P(A \cap B) = P(A)P(B \mid A)$ → [[Multiplication Rule]] |
| Conditional | $P(A \mid B) = P(A \cap B)/P(B)$ → [[Conditional Probability]] |
| Bayes | $P(A \mid B) = \dfrac{P(B \mid A)P(A)}{P(B \mid A)P(A) + P(B \mid A^c)P(A^c)}$ → [[Bayes' Theorem]] |
| At least one [[Type I and Type II Errors\|Type I error]] in $c$ tests | $1 - (1 - \alpha)^c$ → [[Family-Wise Type I Error]] |

## Describing data
| | |
|---|---|
| Mean | $\bar{x} = \sum x_i / n$ → [[Mean]] |
| Variance, [[Standard Deviation\|SD]] | $s^2 = \sum (x_i - \bar{x})^2/(n - 1)$, $s = \sqrt{s^2}$ → [[Variance]], [[Why we divide by n minus 1]] |
| CV | $s/\bar{x}$ → [[Coefficient of Variation]] |
| [[Range and IQR\|IQR]] fences | $Q_1 - 1.5\,IQR$, $Q_3 + 1.5\,IQR$ → [[Outliers]] |
| z-score | $z = (x - \bar{x})/s$ → [[Z-Score]] |
| Empirical rule | 68 / 95 / 99.7% within 1 / 2 / 3 SD → [[Empirical Rule]] |

## Inference
| | |
|---|---|
| SE of the mean | $\sigma/\sqrt{n}$ or $s/\sqrt{n}$ → [[Standard Error]] |
| z-interval | $\bar{x} \pm z_{\alpha/2}\,\sigma/\sqrt{n}$; $z^*$ = 1.645 / 1.96 / 2.58 → [[Confidence Interval]] |
| z-test | $z = (\bar{x} - \mu_0)/(\sigma/\sqrt{n})$ → [[Test Statistic]] |

## t-procedures
| Test | [[Parameter vs Statistic\|Statistic]] | df |
|---|---|---|
| One-sample | $t = (\bar{x} - \mu_0)/(s/\sqrt{n})$ | $n - 1$ → [[One-Sample t-Test]] |
| Paired ($d$ = post − pre) | $t = \bar{d}/(s_d/\sqrt{n})$ | pairs − 1 → [[Paired t-Test]] |
| [[Welch's t-Test\|Welch]] | $t = (\bar{x}_1 - \bar{x}_2)/\sqrt{s_1^2/n_1 + s_2^2/n_2}$ | Welch formula → [[Two-Sample Independent t-Test]] |
| Pooled | $s_p^2 = \dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$ | $n_1 + n_2 - 2$ → [[Pooled Variance]] |
| Cohen's d | $(\bar{x}_1 - \bar{x}_2)/s_p$; 0.2 / 0.5 / 0.8 | → [[Cohen's d]] |

## One-way ANOVA
| | |
|---|---|
| SSG, MSG | $\sum n_i(\bar{x}_i - \bar{x})^2$, df $k - 1$ → [[Between- and Within-Group Variability]] |
| SSE, MSE | $\sum\sum (x_{ij} - \bar{x}_i)^2$, df $N - k$ → [[ANOVA Table]] |
| F | MSG / MSE, upper tail → [[F-Distribution]] |
| Pairs | $k(k-1)/2$; Bonferroni $\alpha^* = \alpha/[k(k-1)/2]$ → [[Bonferroni Correction]] |
| η² | SSG / [[Sums of Squares and Mean Squares\|SST]] → [[Effect Size]] |

## Connections
- **Part of:** [[index|Home]]
- **Related:** [[Test Choice Guide]]
- **Terms used:** [[Tails of a Distribution]]
