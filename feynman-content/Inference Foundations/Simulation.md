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

A simulation is a pretend world on a computer: you make up data, many times over, from a population where *you* set the truth, and watch how a statistic or a test behaves.

Here's the frustrating thing about real data. We never know the true answer, so we can never check whether a method got it right ([[Parameter vs Statistic]]). It's like taking a test where nobody ever tells you the correct answers. How would you know if your method is any good?

So build a world where you *do* know the answers. Tell the computer: "Make a population with this mean, this [[Standard Deviation|standard deviation]], this shape." Then have it draw a random sample ([[Random Sampling]]), calculate the statistic, and write it down. Do it again. And again, thousands of times. The pile of results approximates the statistic's [[Sampling Distribution|sampling distribution]], the thing you normally can only imagine. You need lots of repeats because the pile only settles down as the repeats pile up ([[Law of Large Numbers]]).

Now you can grade the method against the truth you set. Is the average of its guesses on target, or is there [[Sampling Bias|bias]]? How spread out are its guesses, the standard error? How often does a test reject a null you *know* is true, its real α ([[Unbiased Estimator]], [[Standard Error]], [[Robustness]])? You can ask questions that would take pages of algebra, like "is the t-test still all right with this lopsided population at n = 10?"

![[Central limit theorem.png|700]]
Drawing many samples from very different populations and plotting their means shows the CLT at work, something you could never see from one real sample.

It's a flight simulator for statistics. You can crash a method a thousand times, in conditions you choose, and see exactly when it fails.

For example, in [[Robustness]], 20,000 simulated samples were drawn from a strongly skewed population. A 5% t-test wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30 and 5.8% at n = 100. You could never see that from one real dataset.

But here's the honest limit. Simulated numbers aren't evidence about the real world. They tell you how a method behaves *in the world you built*. That's why figures on this site say "simulated" when they are, and why simulated results are never reported as findings.

Try it yourself. A simulation shows a test works well for normal populations. Does that prove it works for your skewed data? No. It only tells you about data that look like what you simulated. To learn about skewed data, simulate skewed data.

See also: [[Central Limit Theorem]], [[Null Distribution]].
