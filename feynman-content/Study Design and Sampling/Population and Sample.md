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

The population is the whole group you want to know about, which is usually impossible to measure in full. The sample is the part of it you actually measure.

Here's the whole reason statistics exists: you want to know about everything, and you can only look at some things. A question is usually about a whole group. Say you want the average yield of a corn variety grown in Arkansas. The population is every plant of that variety in Arkansas. You can't measure every plant in the state, because of time, money and practicality, so its true values are, for practical purposes, unknown. Instead you measure part of it, the sample: say 200 plants, each one an observation ([[Variable and Observation]]). Everything about the sample is known, and you can calculate its mean.

The gap between the two is what statistics is about. Describing the 200 plants is easy; saying something about all the plants needs inference ([[Descriptive vs Inferential Statistics]]). It can work because a randomly chosen sample tends to resemble the population ([[Random Sampling]], [[Sampling Methods]]).

Lowercase $n$ usually means the [[Sample Size|sample size]] and capital $N$ the population size, though fields differ. Numbers describing the population and the sample get different names and symbols ([[Parameter vs Statistic]]).

Statistics works as one pipeline: take what you can see (the sample), use statistical theory, and say something about what you can't see (the population). Every [[Confidence Interval|confidence interval]] and every [[Hypothesis Testing|hypothesis test]] is about the population, and the [[Sampling Distribution|sampling distribution]] links the two.

For example, a Gallup poll of **1,013 US adults** found that 66% worried about identity theft. The 1,013 people are the sample; the more than 336 million US residents are the population.

So always ask what the sample stands for, not just how big it is. There is no point testing whether your sample mean equals some number: you already know it. Tests are about population values ([[Null and Alternative Hypotheses]]). And a large sample isn't automatically a good one: being representative matters more than size.

Try it yourself. A researcher measures 200 corn plants from fields across Arkansas. What's the population and what's the sample? The population is every plant of that variety in Arkansas; the 200 are the sample. The study is only useful because it lets you say something about the plants you didn't measure.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.3, p. 18).
