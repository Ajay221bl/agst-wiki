---
type: atomic
tags:
  - inference
aliases:
  - "CLT"
status: seedling
---

The central limit theorem (CLT) says something almost magical: if you take big enough samples, the averages of those samples pile up in a bell shape around the true mean, even when the individual values are lopsided or weird.

Let's play with dice. Roll one die. Every number from 1 to 6 is equally likely, so if you rolled it many times and drew a histogram, it would be flat. No bell anywhere.

Now roll two dice and take their average. Suddenly it's not flat any more. An average of 1 needs both dice to show 1, which is rare. An average right in the middle, halfway between 3 and 4, can happen lots of ways: 1 and 6, 2 and 5, 3 and 4, and so on. So the middle gets crowded and the edges get thin. Roll five dice and average them, and the pile is starting to look like a bell. Roll ten, and it's a bell.

What happened? Nobody put a bell in. It came from the averaging. To get an extreme average, *everything* has to go the same way at once, and that's rare. Highs and lows usually cancel, so most averages land near the middle. That's the central limit theorem, and it's why the bell curve shows up all over nature.

Now say it carefully. Take random samples of size $n$ from any population with mean $\mu$ and standard deviation $\sigma$. If $n$ is reasonably large, the sample means $\bar{x}$ will be:
1. **Shaped like a bell:** approximately [[Normal Distribution|normal]], whatever the population looks like.
2. **Centred on the truth:** their average is $\mu$, because $\bar{x}$ doesn't systematically miss ([[Unbiased Estimator]]).
3. **Narrower than the data:** their spread is $\sigma/\sqrt{n}$, called the **standard error of the mean** ([[Standard Error]]).

The third point says something nice: as $n$ grows, the averages squeeze in tighter around $\mu$. That's the [[Law of Large Numbers|law of large numbers]] showing up again ([[Ratios and Fractions|denominator]]).

![[Central limit theorem.png|700]]
The population, on the left, is strongly skewed. Yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

How big is "big enough"? It depends on how weird the population is. If it's already bell-shaped, any $n$ works. If it's strongly skewed, you need more; the usual rule of thumb is about 30 (some texts say 35). The book asks for at least 30 independent observations and no strong skew or extreme [[Outliers|outliers]]; with strong [[Shape of a Distribution|skew]] you need more ([[References|Vu and Harrington 2020, Ch. 4]], p. 202).

Why does this matter so much? Because it solves a problem that looks impossible. To test anything, you need to know how sample means vary from sample to sample, the [[Sampling Distribution|sampling distribution]]. But you only ever have one sample. The central limit theorem hands you the shape, centre and spread for free ([[Why the sampling distribution makes inference possible]]). It also explains a mystery: most real data aren't normal, yet t-tests work. They work because the test is about the *means*, and means become normal quickly ([[Robustness]]). That's why you can often go ahead with a t-test even when a normality test complains, if your sample is large ([[Normality Checks]]).

For example, a classic demonstration took populations that were normal, flat (uniform), skewed, or with two uneven peaks. All of them gave roughly normal sampling distributions of $\bar{x}$ by $n = 30$. And with $\sigma = 20$, the standard error is 10 for $n = 4$, 5 for $n = 16$, and 2 for $n = 100$.

Now the trap. The central limit theorem does **not** make your data normal. Your data keep whatever shape they have. It's the *averages* that become normal. And 30 isn't a magic number: wild skew or outliers need more.

Try it yourself. A population of incomes is very lopsided: most people earn a modest amount, a few earn enormous amounts. You take many samples of a few dozen people and record each sample's average. Is the pile of averages lopsided too? Much less so. With samples that size, the averages pile up in a fairly symmetric bell around the true mean, even though the incomes themselves never will.

See also: [[Confidence Interval]], [[One-Sample t-Test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 201–203).
