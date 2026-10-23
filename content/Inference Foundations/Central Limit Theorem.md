---
type: atomic
tags:
  - inference
aliases:
  - "CLT"
status: seedling
---

The central limit theorem (CLT) says that for large enough samples, sample means are approximately normally distributed. They are centred at the population mean, with spread $\sigma/\sqrt{n}$, whatever the shape of the population.

To test or estimate anything, we need the sampling distribution of $\bar{x}$: how sample means would vary from sample to sample. But we only have one sample ([[Sampling Distribution]]). The central limit theorem says we can know that distribution anyway. For a random sample with a reasonably large $n$, the distribution of $\bar{x}$ has three properties:
1. **Shape:** approximately [[Normal Distribution|normal]], whatever the shape of the population. A mean adds up many independent pieces, and sums of many small independent pieces tend towards a bell shape.
2. **Centre:** $\mu_{\bar{x}} = \mu$, because $\bar{x}$ is unbiased ([[Unbiased Estimator]]).
3. **Spread:** $\sigma_{\bar{x}} = \sigma/\sqrt{n}$, called the **standard error of the mean** ([[Standard Error]]).

How large is "reasonably large"? It depends on the population. If the population is already close to normal, a small $n$ is fine. If it is strongly skewed, you need more; the usual rule of thumb is about 30. Because $\sqrt{n}$ is in the [[Ratios and Fractions|denominator]], the distribution of sample means squeezes in towards $\mu$ as $n$ grows, which is the [[Law of Large Numbers|law of large numbers]] again.

![[Central limit theorem.png|700]]
The population (left) is strongly skewed, yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

This is what makes tests and confidence intervals possible. Knowing the shape, centre and spread means we can say how rare an observed $\bar{x}$ would be if $\mu$ had some value ([[Why the sampling distribution makes inference possible]]). Most data are not normal, yet t-tests and confidence intervals work, because they rely on the *means* being normal, and means become normal quickly. It is also why t-tests hold up with non-normal data when samples are large ([[Robustness]]), and why you can still run a t-test when a Shapiro–Wilk test rejects normality but $n$ is large ([[Normality Checks]]).

You can use it when:
- the population is normal (any $n$), **or**
- $n$ is large: traditionally more than 30 (some texts say 35). The book asks for at least 30 independent observations and data that are not strongly skewed. With extreme [[Outliers|outliers]] or strong [[Shape of a Distribution|skew]], you need more ([[References|Vu and Harrington 2020, Ch. 4]], p. 202).

For example, a classic demonstration took populations that were normal, flat (uniform), skewed, or with two uneven peaks. All of them gave approximately normal sampling distributions of $\bar{x}$ by $n = 30$. And with $\sigma = 20$, the standard error is 10 for $n = 4$, 5 for $n = 16$, and 2 for $n = 100$.

The central limit theorem doesn't make your data normal. It makes the distribution of *sample means* normal; the data keep their shape. And more than 30 isn't always enough: strong skew or outliers need more.

See also: [[Confidence Interval]], [[One-Sample t-Test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 201–203).
