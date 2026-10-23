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

A design is **balanced** when every group has the same number of units; balanced designs are more powerful for a given total and make t-tests and ANOVA more robust to unequal variances.

1. **A study with groups has a size for each group**, $n_1, n_2, \dots$ ([[Sample Size]], [[Factors and Levels]]).
2. **Balanced means they are equal**: 60 plots split 20 / 20 / 20.
3. **A comparison is only as precise as its smaller group.** The SE of a difference contains $1/n_1 + 1/n_2$; for a fixed total this is smallest when the groups are equal ([[Standard Error]]). *Why:* moving units from the small group to the big one helps the big one a little and hurts the small one a lot.
4. **So balance gives the most power for the same total** ([[Statistical Power]]).
5. **Balance also protects against unequal variances.** With equal n, the [[Pooled Variance|pooled t-test]] and ANOVA keep close to their promised α even when the variances differ; with unequal n they can be badly off, which is when Welch's version matters ([[Robustness]], [[Welch's t-Test]], [[Homogeneity of Variance]]).
6. **Observational data are rarely balanced** (you don't choose how many people have each genotype), and missing values unbalance planned designs ([[Missing Data]]).

![[Balanced vs unbalanced groups.png|700]]
FAMuSS has 173, 261 and 161 people per genotype because nobody assigns genotypes; a [[Experiment|designed experiment]] can split units evenly.

It is the free improvement: the same number of units gives more power and safer tests just by dividing them evenly.

For example:

Two groups, 40 units in total, same [[Standard Deviation|SD]]: SE of the difference ∝ $\sqrt{1/20 + 1/20} = 0.316$ balanced vs $\sqrt{1/10 + 1/30} = 0.365$ for a 10 / 30 split, about 15% larger.

Common mistakes:

- **"Equal n means equal variances."** They are separate things.
- **"Balanced means the [[Nuisance Variables and Confounding|nuisance variables]] are balanced."** That is what random assignment does; a balanced *design* is about group sizes ([[Random Assignment]]).

See also: [[ANOVA Table]].
