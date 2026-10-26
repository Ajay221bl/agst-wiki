---
type: atomic
tags:
  - study-design
  - inference
aliases:
  - "statistical validity"
status: seedling
---

Statistical conclusion validity asks whether the statistical methods, and the conclusions drawn from them, are sound.

Even a good design ends with an analysis, and the analysis can go wrong ([[Hypothesis Testing]]). It can fail in two ways: finding an effect that isn't there (a Type I error) or missing one that is (a Type II error) ([[Type I and Type II Errors]]). Statistical conclusion validity is about whether the analysis really supports its conclusion. A large enough [[Population and Sample|sample]] and enough [[Statistical Power|statistical power]] help, because power lowers the chance of missing a real effect.

The main threats:
- **Broken assumptions,** such as non-normal data in a test that assumes normality. The p-value is then wrong ([[Test Assumptions]], [[ANOVA Assumptions]], [[Normality Checks]], [[Nonparametric Alternatives]]).
- **Too many tests,** which raises the overall chance of a false positive ([[Family-Wise Type I Error]]).
- **Unreliable measurements,** for example someone rating grass colour by eye, made worse if different people do the rating. The extra [[Signal and Noise|noise]] lowers power.
- **Very large data sets,** such as genomics data, which can strain traditional methods.

It is the kind of [[Validity|validity]] that statistical analysis directly protects. Checking assumptions, running an overall ANOVA before [[Post Hoc Tests|follow-up comparisons]], and planning the [[Sample Size|sample size]] are all habits that protect it ([[Why check assumptions before trusting a test]]).

For example, comparing six groups with 15 separate t-tests at α = 0.05 gives over a 50% chance of at least one false positive ([[Why ANOVA instead of many t-tests]]).

A small p-value doesn't make a conclusion valid if the assumptions were broken or many tests were run.

Further reading: [[References|Kirk 2013, Ch. 1]].
