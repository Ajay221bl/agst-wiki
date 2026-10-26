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

The null distribution is the pile of results you'd get if you ran your study over and over in a world where nothing is going on. You compare your one real result against that pile to see whether it looks like chance.

Here's the problem it solves. Your study spits out one number, say t = 1.50. Is that big? You can't tell by staring at it. "Big" only means something next to "what's normal". So what's normal? Well, normal is what you'd get if nothing were happening, just luck. We pick the "nothing is happening" world because it's the only one specific enough to calculate. "Something is happening" could mean a hundred different things ([[Hypothesis Testing]]).

So imagine that world. The treatment truly does nothing. Run the study, write down the number. Run it again with fresh subjects, write it down. Do that thousands of times. The numbers won't all be zero, because luck jiggles them, but they'll pile up in a shape. That pile is the null distribution. It's just a sampling distribution in a world where $H_0$ is true ([[Sampling Distribution]], [[Parameter vs Statistic|statistic]]).

How do you actually get the pile? Two ways:
- **Do it by brute force.** Say you're comparing two groups. If the treatment does nothing, then the group labels are meaningless; anyone could have been in either group. So shuffle the labels at random, recalculate t, and do it again thousands of times. Every shuffle is a little world where $H_0$ is true by construction ([[Simulation]]).
- **Let mathematics do it.** If the test's [[Test Assumptions|requirements]] hold, theory tells you the shape of the pile in advance: a t-distribution for t, an F-distribution for F ([[t-Distribution]], [[F-Distribution]]). That's a wonderful shortcut, but it's only right when the requirements hold ([[Why check assumptions before trusting a test]]).

Then put your real result on the pile and ask what fraction of the pile is at least as far out. That fraction is the [[P-Value|p-value]].

![[Null distribution - shuffled births.png|700]]
The grey bars are 10,000 t values from shuffled labels; the blue curve is the t-distribution R uses. They agree, and 14% of the shuffles are at least as extreme as the observed 1.50, close to R's p = 0.138.

Look at that picture. The grey bars came from actually shuffling, and the blue curve came from a formula, and they agree. That's the nice thing: the formula is just a fast way of doing the shuffling in your head.

For example, in the book's births data comparing smokers and nonsmokers, [[Welch's t-Test|Welch's]] t = 1.50 and R's p = 0.138. Shuffling the smoker labels 10,000 times gave a share of 0.141 at least as extreme. Same answer, two completely different routes ([[Two-Sample Independent t-Test]]). So "t = 1.50" really means "chance alone does this about 14% of the time", which isn't surprising.

Two things people mix up. The null distribution isn't the spread of your data; it's the spread of the *test statistic*, in the imaginary no-effect world. And the p-value isn't the chance that nothing is going on; it's an area of this pile, worked out by *assuming* nothing is going on.

Try it yourself. If your result landed right in the middle of the null distribution, what would the p-value be close to? Big, near 1, because almost all of the pile is at least that far out. Nothing surprising happened.

See also: [[Probability Distribution]], [[Null and Alternative Hypotheses]], [[Test Statistic]], [[Critical Value]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
