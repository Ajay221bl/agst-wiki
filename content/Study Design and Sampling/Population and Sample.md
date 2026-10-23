---
type: atomic
tags:
  - study-design
aliases:
  - "population"
  - "sample"
  - "census"
  - "sample vs population"
status: seedling
---

The population is the whole group I want to know about (usually impossible to measure); the sample is the part of it I actually measure.

1. **A question is usually about a whole group.** I want to know the average yield of a corn variety grown in Arkansas.
2. **That whole group is the population:** all corn plants of that variety in Arkansas. Its values are, for practical purposes, **unknown and unobservable**. *Why:* I cannot measure every plant in the state: time, money and practicality get in the way.
3. **So I measure part of it: the sample.** 200 plants, each one an observation ([[Variable and Observation]]). Everything about it is **known and observable**; I can calculate its mean.
4. **The gap between the two is what statistics is about.** Describing the 200 is easy; saying something about all plants needs inference ([[Descriptive vs Inferential Statistics]]). *Why it can work at all:* if the sample is chosen at random, it tends to resemble the population ([[Random Sampling]]).
5. **Notation:** lowercase $n$ = [[Sample Size|sample size]], capital $N$ = population size (fields differ). Numbers describing each side get different names and symbols ([[Parameter vs Statistic]]).

Statistics is one pipeline: take what you can see (the sample), use statistical theory, and say something about what you can't see (the population). Every [[Confidence Interval|confidence interval]] and every [[Hypothesis Testing|hypothesis test]] is about the population ([[Parameter vs Statistic]]).

For example:

A Gallup poll of **1,013 US adults** found 66% worried about identity theft. The 1,013 people are the sample; the more than 336 million US residents are the population.

Common mistakes:

- **"I'll test whether my sample mean equals 10."** You already know it. Tests are about population values ([[Null and Alternative Hypotheses]]).
- **"A large sample is automatically a good sample."** Representativeness matters more than size.

See also: [[Sampling Methods]], [[Sampling Distribution]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.3, p. 18).
