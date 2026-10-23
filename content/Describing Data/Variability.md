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

Variability is the fact that measurements differ from one unit to the next; statistics exists because of it, and range, IQR, variance and SD are ways to measure it.

1. **Measure the same thing on different units and you get different numbers.** Plants of one variety grow to different heights. That is variability (also called variation, spread or dispersion).
2. **It has sources**: real differences between units, [[Random Error and Precision|measurement error]], and anything not controlled ([[Nuisance Variables and Confounding]]).
3. **A centre alone hides it.** Two groups can share a mean and have very different spreads ([[Why report both center and spread]]).
4. **So we measure it.** Range and IQR use positions ([[Range and IQR]]); variance and SD use deviations from the mean ([[Variance]], [[Standard Deviation]]). *Why several:* the SD uses every value but is pulled by [[Outliers|outliers]]; the IQR resists them ([[Robustness]]).
5. **Variability is also the noise in every test.** An effect is only "big" compared with how much things vary anyway ([[Signal and Noise]]). ANOVA splits it into between-group and within-group parts ([[Between- and Within-Group Variability]]).
6. **Statistics themselves vary from sample to sample.** That second kind of variability is the sampling distribution, measured by the standard error ([[Sampling Distribution]], [[Standard Error]]).

![[Same mean different spread.png|700]]
Identical centres, very different spreads. The centre alone would call them the same.

If every measurement were identical, one observation would answer every question. Variability is why we need samples, intervals and tests at all.

For example:

FAMuSS: the three genotype means differ by about 9 [[Proportions and Percentages|percentage]] points, but values within each genotype run from 0 to over 100. That large within-group variability is why the ANOVA p is only 0.040 ([[One-Way ANOVA]]).

Common mistakes:

- **"Variability is error."** Much of it is real differences between units.
- **"SD and SE both measure the data's variability."** The SD does; the SE measures the variability of a [[Parameter vs Statistic|statistic]] ([[Standard Error]]).

See also: [[Variable and Observation]], [[Mean]], [[Deviations from the Mean]].
