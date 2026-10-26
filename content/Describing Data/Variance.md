---
type: atomic
tags:
  - describing-data
aliases:
  - "sample variance"
  - "s squared"
  - "s^2"
status: seedling
---

The variance is the average squared distance of the data from their mean. For a sample, you divide by $n - 1$ rather than $n$.

You want to average the distances from the mean, but the obvious way gives you zero every time. The fix is the whole idea of variance. Spread means how far values sit from the centre. For each value, that is its deviation from the mean, $x_i - \bar{x}$ ([[Deviations from the Mean]]). You can't just average the deviations, because they always add up to zero: the mean is the balance point. So square them first. Squaring removes the signs and gives big distances more weight ([[Squares and Square Roots]]). Squares are used rather than [[Absolute Value|absolute values]] because the variances of independent quantities add up, which is what makes standard errors possible ([[Standard Error]]).

Adding the squared deviations gives the [[Sums of Squares and Mean Squares|sum of squares]], $\sum (x_i - \bar{x})^2$ ([[Summation Notation]]). Dividing by $n - 1$ gives an average squared distance:
$$s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$$
Why $n - 1$ and not $n$? The deviations are measured from $\bar{x}$, which was worked out from these same data, so they come out a little too small. Dividing by $n - 1$ corrects for that on average, which makes $s^2$ an unbiased estimate of the population variance $\sigma^2$ ([[Why we divide by n minus 1]], [[Degrees of Freedom]], [[Unbiased Estimator]]).

The variance is in squared units, such as "worms²". Its square root brings the units back: that is the [[Standard Deviation|standard deviation]].

![[Deviations from the mean.png|700]]
Each line is one value's distance from the mean. Square them, add them (32), divide by n − 1 (7) and you have the variance; the square root gives the standard deviation back in the original units.

The variance does the heavy lifting behind measures of spread. Because variances of independent quantities add, it is how standard errors for differences are built. And ANOVA literally analyses it, splitting the total variance into a between-group part and a within-group part ([[Between- and Within-Group Variability]]).

For example, take the data 1, 2, 3, 6, 3, with mean 3. The deviations are −2, −1, 0, 3 and 0 (sum 0). Squared, they are 4, 1, 0, 9 and 0 (sum 14). So $s^2 = 14/4 = 3.5$.

The variance is the working tool; the standard deviation is the version you can picture. The variance and the standard deviation aren't two different measures of two different things: the standard deviation is just the square root of the variance. And dividing by $n$ is the formula for a whole population; for a sample, divide by $n - 1$.

Try it yourself. The data 1, 2, 3, 6 and 3 have mean 3 and variance 3.5. If you doubled every value, what would happen to the variance? It would go up four times, because each deviation doubles and then gets squared. The standard deviation would only double.

See also: [[Mean]], [[Pooled Variance]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
