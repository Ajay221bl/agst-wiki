---
type: project
tags:
  - reference
aliases:
  - "Formulas"
status: growing
---

Every formula up to one-way ANOVA in one place. Each row links to the note that explains where the formula comes from.

Use this as a map, not as something to memorize. A formula you understand can be rebuilt in a minute. One you've memorized is gone the moment you're nervous. Almost every formula here is the same few ideas in different clothes: a difference divided by its spread, a total split into parts, or a probability rule applied twice.

## Probability
| Rule | Formula | Explained in |
|---|---|---|
| Complement | $P(A^c) = 1 - P(A)$ | [[Complementary Events]] |
| Addition ("A or B") | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | [[Addition Rule]] |
| Multiplication ("A and B") | $P(A \cap B) = P(A)P(B \mid A)$ | [[Multiplication Rule]] |
| Conditional ("A given B") | $P(A \mid B) = P(A \cap B)/P(B)$ | [[Conditional Probability]] |
| Bayes | $P(A \mid B) = \dfrac{P(B \mid A)P(A)}{P(B \mid A)P(A) + P(B \mid A^c)P(A^c)}$ | [[Bayes' Theorem]] |
| At least one false positive ([[Type I and Type II Errors\|Type I error]]) in $c$ tests | $1 - (1 - \alpha)^c$ | [[Family-Wise Type I Error]] |

## Describing data
| Quantity | Formula | Explained in |
|---|---|---|
| Mean | $\bar{x} = \sum x_i / n$ | [[Mean]] |
| Variance and [[Standard Deviation\|standard deviation]] | $s^2 = \sum (x_i - \bar{x})^2/(n - 1)$ and $s = \sqrt{s^2}$ | [[Variance]], [[Why we divide by n minus 1]] |
| Coefficient of variation | $s/\bar{x}$ | [[Coefficient of Variation]] |
| Outlier fences, built from the [[Range and IQR\|interquartile range]] | $Q_1 - 1.5\,IQR$ and $Q_3 + 1.5\,IQR$ | [[Outliers]] |
| z-score | $z = (x - \bar{x})/s$ | [[Z-Score]] |
| Empirical rule | about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean | [[Empirical Rule]] |

## Inference
| Quantity | Formula | Explained in |
|---|---|---|
| Standard error of the mean | $\sigma/\sqrt{n}$, or $s/\sqrt{n}$ when σ is unknown | [[Standard Error]] |
| Confidence interval using z | $\bar{x} \pm z_{\alpha/2}\,\sigma/\sqrt{n}$, where the multiplier $z^*$ is 1.645, 1.96 or 2.58 for the usual confidence levels | [[Confidence Interval]] |
| z-test | $z = (\bar{x} - \mu_0)/(\sigma/\sqrt{n})$ | [[Test Statistic]] |

## t-tests
| Test | [[Parameter vs Statistic\|Statistic]] | Degrees of freedom | Explained in |
|---|---|---|---|
| One-sample | $t = (\bar{x} - \mu_0)/(s/\sqrt{n})$ | $n - 1$ | [[One-Sample t-Test]] |
| Paired, where $d$ = after minus before | $t = \bar{d}/(s_d/\sqrt{n})$ | number of pairs minus 1 | [[Paired t-Test]] |
| [[Welch's t-Test\|Welch]] | $t = (\bar{x}_1 - \bar{x}_2)/\sqrt{s_1^2/n_1 + s_2^2/n_2}$ | from Welch's formula | [[Two-Sample Independent t-Test]] |
| Pooled | $s_p^2 = \dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$ | $n_1 + n_2 - 2$ | [[Pooled Variance]] |
| Cohen's d | $(\bar{x}_1 - \bar{x}_2)/s_p$, with 0.2, 0.5 and 0.8 as small, medium and large | | [[Cohen's d]] |

## One-way ANOVA
| Quantity | Formula | Explained in |
|---|---|---|
| Between-group sum of squares (SSG), and its mean square (MSG) | $\sum n_i(\bar{x}_i - \bar{x})^2$, with $k - 1$ degrees of freedom | [[Between- and Within-Group Variability]] |
| Within-group sum of squares (SSE), and its mean square (MSE) | $\sum\sum (x_{ij} - \bar{x}_i)^2$, with $N - k$ degrees of freedom | [[ANOVA Table]] |
| F | MSG divided by MSE, using the upper tail | [[F-Distribution]] |
| Number of pairs, and the Bonferroni cutoff | $k(k-1)/2$ pairs, and $\alpha^* = \alpha/[k(k-1)/2]$ | [[Bonferroni Correction]] |
| η² (eta squared) | SSG divided by the total sum of squares ([[Sums of Squares and Mean Squares\|SST]]) | [[Effect Size]] |

Each mean square is its sum of squares divided by its degrees of freedom.

See also: [[index|Home]], [[Test Choice Guide]], [[Tails of a Distribution]].
