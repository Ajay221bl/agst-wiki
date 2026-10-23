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

A simulation makes up data on a computer, many times over, from a model whose truth you choose. It shows how a statistic or a method behaves.

With real data we never know the truth, so we can't check whether a method got it right ([[Parameter vs Statistic]]). But a computer can draw random samples from a population we define, with a known mean, [[Standard Deviation|standard deviation]] and shape ([[Random Sampling]]).

Repeat that thousands of times and record the statistic each time. The pile of results approximates the statistic's sampling distribution ([[Sampling Distribution]]). Many repeats are needed because relative frequencies settle down as the number of repeats grows ([[Law of Large Numbers]]).

Now compare with the truth. Is the average on target, or is there [[Sampling Bias|bias]]? How spread out is it, which is the standard error? How often does a test reject a true null, which is the real α ([[Unbiased Estimator]], [[Standard Error]], [[Robustness]])? Simulations answer questions that algebra can't easily reach, such as "is the t-test still all right with this skewed population at n = 10?"

But simulated numbers are not evidence about the real world. They show how a method behaves under the model you chose. That is why figures in these notes say "simulated" when they are.

![[Central limit theorem.png|700]]
Drawing many samples from very different populations and plotting their means shows the CLT at work, something you could never see from one real sample.

Simulation turns abstract claims, such as "unbiased", "robust" or the central limit theorem, into something you can watch. It also checks methods where the theory is hard.

For example, in [[Robustness]], 20,000 simulated samples were drawn from a strongly skewed population. A 5% t-test wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30 and 5.8% at n = 100.

Simulated data aren't made-up results. They are a tool for studying methods, always labelled, and never reported as findings. And a simulation doesn't prove a method works for your data, only for data that resemble the model you simulated.

See also: [[Central Limit Theorem]], [[Null Distribution]].
