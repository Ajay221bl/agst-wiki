---
type: atomic
tags:
  - inference
aliases:
  - "distribution under H0"
  - "null model"
  - "permutation test"
  - "shuffling"
status: seedling
---

The null distribution is the distribution a test statistic would have if the null hypothesis were true. The p-value is how much of it lies at least as far out as the value you observed.

Every number needs a comparison to mean anything. A study gives one value of the test statistic, say t = 1.50. On its own, that number tells you nothing: is 1.50 big? "Big" needs a comparison, namely with what chance alone would produce. Chance alone means $H_0$ is true. We assume $H_0$ because it is the one specific claim we can calculate from; "something is going on" has no single distribution ([[Hypothesis Testing]]).

Imagine repeating the study many times in a world where $H_0$ is true, and working out the [[Parameter vs Statistic|statistic]] each time. Those values form the null distribution. It is a sampling distribution with $H_0$ built in ([[Sampling Distribution]]). There are two ways to get it:
- **By brute force.** For two groups, $H_0$ says the group label doesn't matter. So shuffle the labels, recalculate t, and repeat thousands of times. Every shuffle is a world where $H_0$ is true by construction.
- **By mathematics.** When the test's [[Test Assumptions|requirements]] hold, theory says the null distribution of t is a t-distribution with known degrees of freedom, and F follows an F-distribution ([[t-Distribution]], [[F-Distribution]]). The formula-based curve is only right if those requirements hold ([[Why check assumptions before trusting a test]]).

Then compare. The share of the null distribution at least as extreme as the observed value is the p-value ([[P-Value]]). A tiny share means the result would be rare if $H_0$ were true.

![[Null distribution - shuffled births.png|700]]
The grey bars are 10,000 t values from shuffled labels; the blue curve is the t-distribution R uses. They agree, and 14% of the shuffles are at least as extreme as the observed 1.50, close to R's p = 0.138.

So the null distribution is the yardstick. It's the world of pure chance, drawn out in full, and it turns "my statistic is 1.50" into "a statistic this big happens 14% of the time by chance alone". Every p-value is an area of a null distribution.

For example, in the book's births data comparing smokers and nonsmokers, [[Welch's t-Test|Welch's]] t = 1.50 and R's p = 0.138. Shuffling the smoker labels 10,000 times ([[Simulation|simulated]]) gave a share of 0.141 at least as extreme: the same answer by brute force ([[Two-Sample Independent t-Test]]).

Two things to keep straight. The null distribution isn't the distribution of the data. It's the distribution of the *test statistic*, assuming $H_0$. And the p-value isn't the chance that $H_0$ is true. It's an area of the null distribution, calculated assuming $H_0$ is true. You learn whether your result looks like chance by first imagining what chance would look like.

See also: [[Probability Distribution]], [[Null and Alternative Hypotheses]], [[Test Statistic]], [[Critical Value]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
