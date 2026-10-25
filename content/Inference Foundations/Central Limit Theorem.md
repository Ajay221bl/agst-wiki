---
type: atomic
tags:
  - inference
aliases:
  - "CLT"
status: seedling
---

The central limit theorem (CLT) says that for large enough samples, sample means are approximately normally distributed. They're centred at the population mean, with spread $\sigma/\sqrt{n}$, whatever the shape of the population.

Here's the problem it solves. To test or estimate anything, we need to know how sample means would vary from sample to sample: the sampling distribution of $\bar{x}$. But we only ever have one sample ([[Sampling Distribution]]). It looks impossible. How can you know the spread of something you've seen once?

The central limit theorem says you can know it anyway. For a random sample with a reasonably large $n$, the distribution of $\bar{x}$ has three properties:
1. **Shape:** approximately [[Normal Distribution|normal]], whatever the shape of the population. A mean adds up many independent pieces, and sums of many small independent pieces tend towards a bell shape. The highs and lows cancel each other out, and what's left piles up in the middle.
2. **Centre:** $\mu_{\bar{x}} = \mu$, because $\bar{x}$ is unbiased ([[Unbiased Estimator]]).
3. **Spread:** $\sigma_{\bar{x}} = \sigma/\sqrt{n}$, called the **standard error of the mean** ([[Standard Error]]).

How large is "reasonably large"? It depends on the population. If it's already close to normal, a small $n$ is fine. If it's strongly skewed, you need more, and the usual rule of thumb is about 30. And because $\sqrt{n}$ is in the [[Ratios and Fractions|denominator]], the sample means squeeze in towards $\mu$ as $n$ grows, which is the [[Law of Large Numbers|law of large numbers]] again.

![[Central limit theorem.png|700]]
The population, on the left, is strongly skewed. Yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

This is the fact that makes tests and confidence intervals possible. Knowing the shape, centre and spread, we can say how rare an observed $\bar{x}$ would be if $\mu$ had some value ([[Why the sampling distribution makes inference possible]]). And it explains something that would otherwise be a mystery. Most real data are not normal, yet t-tests and confidence intervals work. That's because they rely on the *means* being normal, and means become normal quickly. It's why t-tests hold up with non-normal data when samples are large ([[Robustness]]), and why you can still run a t-test when a Shapiro–Wilk test rejects normality but $n$ is large ([[Normality Checks]]).

You can use it when:
- the population is normal (any $n$), **or**
- $n$ is large: traditionally more than 30 (some texts say 35). The book asks for at least 30 independent observations and data that are not strongly skewed. With extreme [[Outliers|outliers]] or strong [[Shape of a Distribution|skew]], you need more ([[References|Vu and Harrington 2020, Ch. 4]], p. 202).

For example, a classic demonstration took populations that were normal, flat (uniform), skewed, or with two uneven peaks. All of them gave approximately normal sampling distributions of $\bar{x}$ by $n = 30$. And with $\sigma = 20$, the standard error is 10 for $n = 4$, 5 for $n = 16$, and 2 for $n = 100$.

The one thing to get straight: the central limit theorem doesn't make your data normal. It makes the distribution of *sample means* normal, and the data keep their shape. And more than 30 isn't always enough, because strong skew or outliers need more. Individual values can be as wild as they like. Averages are tame. That's the whole trick.

See also: [[Confidence Interval]], [[One-Sample t-Test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 201–203).
