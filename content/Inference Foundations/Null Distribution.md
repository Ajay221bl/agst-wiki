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

The null distribution is the distribution a test statistic would have if $H_0$ were true; the p-value is how much of it lies at least as far out as what you observed.

1. **A study gives one value of the test statistic**, say t = 1.50. Alone, that number means nothing: is 1.50 big?
2. **"Big" needs a comparison: big compared with what chance alone would produce.** Chance alone means $H_0$ is true. *Why assume $H_0$:* it is the one specific claim we can compute from; "something is going on" has no single distribution ([[Hypothesis Testing]]).
3. **Imagine the study repeated many times in a world where $H_0$ is true**, computing the [[Parameter vs Statistic|statistic]] each time. Those values form the null distribution. It is a sampling distribution, with $H_0$ built in ([[Sampling Distribution]]).
4. **You can build it by brute force.** For two groups, $H_0$ says the group label doesn't matter. So shuffle the labels, recompute t, and repeat thousands of times. Every shuffle is a world where $H_0$ is true by construction.
5. **Or use mathematics.** Under the test's [[Test Assumptions|requirements]], theory says the null distribution of t is a t-distribution with a known df, and F follows an F-distribution ([[t-Distribution]], [[F-Distribution]]). *Why the requirements matter:* the formula-based curve is only right if they hold ([[Why check assumptions before trusting a test]]).
6. **Compare.** The share of the null distribution at least as extreme as the observed value is the p-value ([[P-Value]]). A tiny share means the result would be rare if $H_0$ were true.

![[Null distribution - shuffled births.png|700]]
The grey bars are 10,000 t values from shuffled labels; the blue curve is the t-distribution R uses. They agree, and 14% of the shuffles are at least as extreme as the observed 1.50, close to R's p = 0.138.

It is the yardstick that turns "my statistic is 1.50" into "a statistic this big happens 14% of the time by chance alone". Every p-value is an area of a null distribution.

For example:

Book births data, smokers vs nonsmokers: [[Welch's t-Test|Welch]] t = 1.50, R's p = 0.138. Shuffling the smoker labels 10,000 times ([[Simulation|simulated]]) gave a share of 0.141 at least as extreme: the same answer by brute force ([[Two-Sample Independent t-Test]]).

Common mistakes:

- **"The null distribution is the distribution of the data."** It is the distribution of the *test statistic*, under $H_0$.
- **"The p-value is the chance $H_0$ is true."** It is an area of the null distribution, computed assuming $H_0$ is true ([[P-Value]]).

See also: [[Probability Distribution]], [[Null and Alternative Hypotheses]], [[Test Statistic]], [[Critical Value]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
