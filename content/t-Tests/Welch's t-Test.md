---
type: atomic
tags:
  - t-tests
aliases:
  - "Welch"
  - "Welch test"
  - "unequal variances t-test"
  - "Welch-Satterthwaite"
status: seedling
---

Welch's t-test compares the averages of two separate groups without assuming the two groups are equally spread out. It's R's default two-sample test, and for good reason.

Suppose you're comparing two groups of sheep, and one group's results are tightly bunched while the other's are all over the place. Should you pretend they have the same spread? Why would you? You can see they don't.

That's Welch's test in one sentence: don't assume what you don't know. Here's how it's built. The **signal** is the gap between the sample means, $\bar{x}_1 - \bar{x}_2$ ([[Signal and Noise]]). The **noise** is how much that gap would wobble by chance. Each mean wobbles by its own amount, its standard error $s_i/\sqrt{n_i}$. When you subtract two independently wobbling things, their wobbles pile up, and it's the *variances* that add, not the standard errors ([[Standard Error]], [[Variance]]):
$$SE = \sqrt{s_1^2/n_1 + s_2^2/n_2}, \qquad t = \frac{\bar{x}_1 - \bar{x}_2}{SE}$$
Notice that each group keeps its own spread. Nothing is pooled. If the spreads really differ, pooling them would give one group's noise the wrong weight ([[Pooled Variance]], [[Homogeneity of Variance]]).

The degrees of freedom come from a formula called Welch–Satterthwaite, which blends the two [[Sample Size|sample sizes]] and spreads. It usually gives a number with decimals, which looks odd but is perfectly fine. By hand, a safe shortcut is the smaller of $n_1 - 1$ and $n_2 - 1$. Why "safe"? Fewer degrees of freedom mean a bigger [[Critical Value|cut-off]], so if anything you'll be too cautious, never too bold ([[Degrees of Freedom]]).

![[Worked example - two-sample t-test.png|700]]
The two groups have quite different spreads ([[Standard Deviation|SD]] 2.76 and 5.17). Welch uses each one as it is.

Why is this the default? Think about the two ways you could be wrong. If the spreads really are equal, Welch's test loses almost nothing compared with the pooled test. If they're unequal, the pooled test can give wrong p-values, and Welch's test protects you. A little cost one way, a big protection the other ([[Robustness]], [[Test Assumptions|assumption]]). When one choice risks a little and the other risks a lot, pick the one that fails gracefully.

For example, for the stem-cell sheep, SE = √(5.17²/9 + 2.76²/9) = 1.95 and t = 7.83/1.95 = 4.01. R's Welch degrees of freedom are 12.2, between the hand shortcut (8) and the pooled value (16) ([[Two-Sample Independent t-Test]]).

Try it yourself. Should you only use Welch's test when Levene's test says the spreads differ? No. Use it by default, either way. It costs almost nothing when the spreads are equal.

See also: [[t.test()]], [[Standard Deviation|SD]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.3).
