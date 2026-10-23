---
type: atomic
tags:
  - inference
aliases:
  - "simulation"
  - "simulations"
  - "simulated"
  - "simulated data"
status: seedling
---

A simulation makes up data on a computer from a model whose truth you choose, many times over, to see how a statistic or a method behaves.

1. **With real data we never know the truth**, so we can't check whether a method got it right ([[Parameter vs Statistic]]).
2. **A computer can draw random samples from a population we define**, with a known mean, [[Standard Deviation|SD]] and shape ([[Random Sampling]]).
3. **Repeat it thousands of times** and record the statistic each time. The pile of results approximates its sampling distribution ([[Sampling Distribution]]). *Why many repeats:* relative frequencies settle down as repeats grow ([[Law of Large Numbers]]).
4. **Now compare with the truth.** Is the average on target ([[Sampling Bias|bias]])? How spread out is it (standard error)? How often does a test reject a true null (real α)? ([[Unbiased Estimator]], [[Standard Error]], [[Robustness]])
5. **Simulations answer questions algebra can't easily reach**, such as "is the t-test still OK with this skewed population at n = 10?".
6. **But simulated numbers are not evidence about the real world.** They show how a method behaves under the model you chose. That is why figures in this vault say "simulated" when they are.

![[Central limit theorem.png|700]]
Drawing many samples from very different populations and plotting their means shows the CLT at work, something you could never see from one real sample.

It turns abstract claims (unbiased, robust, CLT) into something you can watch, and checks methods where the theory is hard.

For example:

From [[Robustness]]: 20,000 simulated samples from a strongly skewed population; a 5% t-test wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30, 5.8% at n = 100.

Common mistakes:

- **"Simulated data are made-up results."** They are a tool for studying methods, and are always labelled; they are never reported as findings.
- **"A simulation proves the method works for my data."** Only if your data resemble the model you simulated.

See also: [[Central Limit Theorem]], [[Null Distribution]].
