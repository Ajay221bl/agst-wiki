---
type: atomic
tags:
  - describing-data
aliases:
  - "variability"
  - "variation"
  - "spread"
  - "dispersion"
status: seedling
---

Variability is the fact that measurements differ from one unit to the next. Statistics exists because of it, and the range, interquartile range, variance and standard deviation are ways to measure it.

If everything were the same, you'd need one measurement and no statistics. Variability is the whole reason the subject exists. Measure the same thing on different plants of one variety and you get different heights. That is variability, also called variation, spread or dispersion. It comes from real differences between units, from [[Random Error and Precision|measurement error]], and from anything that wasn't controlled ([[Nuisance Variables and Confounding]]). A centre on its own hides it: two groups can share a mean and have very different spreads ([[Why report both center and spread]]).

So we measure it. The range and the interquartile range use positions in the sorted data ([[Range and IQR]]). The [[Variance|variance]] and the [[Standard Deviation|standard deviation]] use [[Deviations from the Mean|deviations from the mean]]. Several measures exist because they behave differently: the standard deviation uses every value but is pulled by [[Outliers|outliers]], while the interquartile range resists them ([[Robustness]]).

Variability is also the "noise" in every test. An effect only counts as big compared with how much things vary anyway ([[Signal and Noise]]). ANOVA splits variability into a between-group part and a within-group part ([[Between- and Within-Group Variability]]). And statistics themselves vary from sample to sample. That second kind of variability is described by the [[Sampling Distribution|sampling distribution]] and measured by the [[Standard Error|standard error]].

![[Same mean different spread.png|700]]
Identical centres, very different spreads. The centre alone would call them the same.

If every measurement were identical, one observation would answer every question. Variability is why we need samples, intervals and tests at all.

For example, in the FAMuSS data the three genotype means differ by about 9 [[Proportions and Percentages|percentage]] points, but values within each genotype run from 0 to over 100. That large variability within groups is why the ANOVA p-value is only 0.040 ([[One-Way ANOVA]]).

Learn to respect variation rather than fight it; statistics is the art of seeing a signal through it. Variability isn't just error: much of it is real differences between units. And the standard deviation and the standard error measure different things. The standard deviation describes how the data vary; the standard error describes how a [[Parameter vs Statistic|statistic]] varies between samples.

See also: [[Variable and Observation]], [[Mean]].
