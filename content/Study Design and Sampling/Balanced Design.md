---
type: atomic
tags:
  - study-design
aliases:
  - "balanced design"
  - "balanced designs"
  - "balanced"
  - "unbalanced"
  - "unbalanced design"
  - "equal sample sizes"
status: seedling
---

A design is **balanced** when every group has the same number of units. For the same total, balanced designs give more power, and they make t-tests and ANOVA less sensitive to unequal variances.

A study with groups has a size for each group, $n_1, n_2, \dots$ ([[Sample Size]], [[Factors and Levels]]). Balanced means these are equal, for example 60 plots split 20 / 20 / 20.

A comparison between two groups is only as precise as its smaller group. The [[Standard Error|standard error]] of a difference contains $1/n_1 + 1/n_2$, and for a fixed total this is smallest when the groups are equal. Moving units from a small group to a big one helps the big group a little and hurts the small group a lot. So balance gives the most [[Statistical Power|power]] for the same number of units.

Balance also protects against unequal variances. With equal group sizes, the [[Pooled Variance|pooled t-test]] and ANOVA stay close to their stated error rate even when the groups' variances differ. With unequal sizes they can be badly off, which is when [[Welch's t-Test|Welch's test]] matters ([[Robustness]], [[Homogeneity of Variance]]).

Observational data are rarely balanced, since you can't choose how many people have each genotype, and missing values can unbalance a planned design ([[Missing Data]]).

![[Balanced vs unbalanced groups.png|700]]
FAMuSS has 173, 261 and 161 people per genotype because nobody assigns genotypes; a [[Experiment|designed experiment]] can split units evenly.

Balance is a free improvement: the same number of units gives more power and safer tests just by dividing them evenly.

For example, take two groups with 40 units in total and the same [[Standard Deviation|standard deviation]]. The standard error of the difference is proportional to $\sqrt{1/20 + 1/20} = 0.316$ when balanced, against $\sqrt{1/10 + 1/30} = 0.365$ for a 10 / 30 split, which is about 15% larger.

Equal group sizes don't mean equal variances; they are separate things. And a balanced design is about group sizes. Balancing the [[Nuisance Variables and Confounding|nuisance variables]] across groups is a different job, done by [[Random Assignment|random assignment]].

See also: [[ANOVA Table]].
