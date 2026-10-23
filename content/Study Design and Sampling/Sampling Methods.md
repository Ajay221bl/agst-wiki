---
type: atomic
tags:
  - study-design
aliases:
  - "stratified sampling"
  - "cluster sampling"
  - "systematic sampling"
  - "convenience sample"
  - "snowball sampling"
  - "voluntary response"
  - "multistage sampling"
  - "multistage"
status: seedling
---

The ways of choosing a sample range from simple random sampling (the ideal) through stratified, cluster and systematic designs to convenience, snowball and voluntary-response samples (prone to bias).

1. **The ideal is a simple random sample,** but it needs a full list of the population and can be expensive ([[Random Sampling]]).
2. **Each other method trades some of that ideal for practicality or [[Random Error and Precision|precision]].** Ask of each: who could be chosen, and who chooses?

| Method | How | Why use it / its cost |
|---|---|---|
| **Simple random sample** | every group of $n$ units equally likely (names from a hat) | the ideal |
| **Random sample** (not simple) | each unit has a chance, but not every group is possible | once you stratify (5 male and 5 female chickens), an all-female sample is impossible, so it is no longer *simple* |
| **Systematic** | every $k$-th unit | easy in a production line; common in industry: every 10th vehicle's tires, every 50th chicken wing's cook temperature |
| **Stratified** | split into **strata**, sample within *each* | guarantees every stratum is represented when strata can be pre-specified (10 students from each college) |
| **Cluster** | split into **clusters**, sample *whole* clusters | convenience and cost (everyone in two counties); multistage = random clusters, then random units within them |
| **Convenience** | whoever is easy to reach (friends, your uncle's chicken houses) | cheap, but lower internal and external validity |
| **Snowball** | participants recruit more participants | reaches hidden groups; "a pyramid scheme for convenience samples" |
| **Voluntary response** | respondents pick themselves | **prone to extremes**: 1-star and 5-star online reviews |

3. **When the people doing the choosing are not chance, expect bias** ([[Sampling Bias]]).

![[Sampling methods.png|700]]
Four ways chance can pick a sample from the same population of 80 units (gray). Red dots are the units that end up in the sample.

A random sample is enough for almost all the procedures, but real studies often need structure (strata) or convenience (clusters). Knowing the method tells you how far you can generalize and what biases to report ([[Sampling Bias]]).

For example:

**Stratified vs cluster:** stratified samples *within every* group, for representation; cluster samples *whole* groups, for convenience. Strata are internally similar to each other; clusters ideally each look like a mini-population.

Common mistakes:

- **"Stratified and cluster are the same."** Opposite logic: sample from every stratum vs sample entire clusters.
- **"A big voluntary sample is fine."** Self-selection biases it no matter the size.

See also: [[Population and Sample]], [[External Validity]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (pp. 19–25).
