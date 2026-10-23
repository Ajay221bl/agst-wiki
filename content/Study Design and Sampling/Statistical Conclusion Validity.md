---
type: atomic
tags:
  - study-design
  - inference
aliases:
  - "statistical validity"
status: seedling
---

**In one line:** statistical conclusion validity asks whether the statistical methods and the conclusions drawn from them are sound.

> [!info] Before this, it helps to know
> [[Hypothesis Testing]] (the analysis being judged) · [[Statistical Power]] (its main helper) · [[Type I and Type II Errors]] (the two ways it fails)

## Start from zero
1. **A good design still ends with an analysis,** and the analysis can go wrong ([[Hypothesis Testing]]).
2. **It fails in two ways:** a false finding (Type I) or a missed real one (Type II) ([[Type I and Type II Errors]]).
3. **Statistical conclusion validity is whether the analysis supports its conclusion.** Common causes of failure: a test whose [[Test Assumptions|assumptions]] are broken, too many tests, unreliable measurements, too little data.
4. **Helps:** a large enough [[Population and Sample|sample]] and adequate **statistical power** ([[Statistical Power]]). *Why:* power lowers the chance of a miss.
5. **Threats, and the error each causes:**
   - **Violated assumptions**, such as normality for [[Nonparametric Alternatives|parametric tests]]: the p-value is wrong ([[ANOVA Assumptions]], [[Normality Checks]])
   - **Multiple testing**, which inflates the overall Type I error rate ([[Family-Wise Type I Error]])
   - **Unreliable measures**, for example a person rating turfgrass colour by eye; changing who rates it adds unreliability. Extra [[Signal and Noise|noise]] lowers power.
   - **Massive data** (genomics, billions of points) can strain traditional methods

## Why it exists
It is the [[Validity|validity]] type that statistical analysis directly protects. Checking assumptions, running an omnibus ANOVA before [[Post Hoc Tests|post hocs]], and planning [[Sample Size|sample size]] are all statistical-conclusion-validity habits ([[Why check assumptions before trusting a test]]).

## A tiny example
Running 15 t-tests at α = 0.05 for six groups gives over a 50% chance of at least one false positive: a direct threat to statistical conclusion validity ([[Why ANOVA instead of many t-tests]]).

## Common confusions
- **"If the p-value is small, the conclusion is valid."** Not if the assumptions were broken or many tests were run.

## Connections
- **Builds on:** [[Hypothesis Testing]], [[Statistical Power]], [[Type I and Type II Errors]]
- **Leads to:** [[ANOVA Assumptions]], [[Family-Wise Type I Error]], [[Why check assumptions before trusting a test]]
- **Part of:** [[MOC - Study Design and Sampling]]
- **Go deeper:** [[References|Kirk 2013, Ch. 1]]
