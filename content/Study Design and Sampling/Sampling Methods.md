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

There are many ways to choose a sample. They range from simple random sampling, the ideal, through stratified, cluster and systematic sampling, to convenience, snowball and voluntary-response samples, which are prone to bias.

The ideal is a simple random sample, but it needs a full list of the population and can be expensive ([[Random Sampling]]). Every other method gives up some of that ideal for practicality or [[Random Error and Precision|precision]]. For each one, ask: who could be chosen, and who does the choosing?

| Method | How it works | Why use it, and its cost |
|---|---|---|
| **Simple random sample** | every possible group of $n$ units is equally likely (names from a hat) | the ideal |
| **Random sample** (not simple) | each unit has a chance, but not every group is possible | once you take, say, 5 male and 5 female chickens, an all-female sample is impossible, so it is no longer *simple* |
| **Systematic** | every $k$-th unit | easy on a production line: checking every 10th vehicle's tires, or the cooking temperature of every 50th chicken wing |
| **Stratified** | split the population into groups called **strata**, then sample within *each* | makes sure every group is represented (10 students from each college) |
| **Cluster** | split into groups called **clusters**, then sample *whole* clusters | cheaper and easier (everyone in two counties); a multistage sample picks random clusters, then random units within them |
| **Convenience** | whoever is easy to reach (friends, a relative's farm) | cheap, but weaker internal and external validity |
| **Snowball** | participants recruit more participants | reaches hidden groups, but who gets in depends on who knows whom |
| **Voluntary response** | people choose to take part | **prone to extremes**, like the 1-star and 5-star online reviews |

Whenever someone other than chance does the choosing, expect bias ([[Sampling Bias]]).

![[Sampling methods.png|700]]
Four ways chance can pick a sample from the same population of 80 units (gray). Red dots are the units that end up in the sample.

A random sample is enough for almost all the methods in these notes, but real studies often need structure (strata) or convenience (clusters). Knowing the method tells you how far you can generalize and what biases to report ([[External Validity]]).

For example, stratified and cluster sampling follow opposite logic. Stratified sampling takes some units from every group, so all groups are represented. Cluster sampling takes whole groups, for convenience. Strata are groups whose members are alike; each cluster should ideally look like a small copy of the population.

A big voluntary sample isn't fine just because it is big: people choosing themselves biases it at any size.

See also: [[Population and Sample]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (pp. 19–25).
