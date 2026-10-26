---
type: atomic
tags:
  - inference
  - describing-data
aliases:
  - "z-scores"
  - "standardized score"
  - "standard score"
status: seedling
---

A z-score tells you how many standard deviations a value is above (+) or below (−) the average. It's a way to compare things that were measured on completely different scales.

A student gets 85 in psychology and 62 in chemistry. Which did they do better in? Obviously psychology, 85 is bigger. But wait. What if the psychology exam was easy and everyone scored near the top, while the chemistry exam was brutal? Then the 62 might be the more impressive score. Raw numbers can't tell you. You need to know where each score sits *compared to its own class*.

So let's build a fair ruler. Step one: how far is the score from its class average? That's the deviation, $x - \bar{x}$ ([[Deviations from the Mean]]). But "7 points below" means more in a class where everyone is bunched together than in one where scores are spread all over. So step two: measure that distance in units of the class's own spread, the standard deviation ([[Standard Deviation]]):
$$z = \frac{\text{observed} - \text{expected}}{\text{deviation measure}} = \frac{x - \bar{x}}{s} \;\;\text{or}\;\; \frac{x - \mu}{\sigma}$$
The units cancel. What's left is pure "how unusual is this, in its own world?", called relative standing.

![[Z-scores - exam comparison.png|700]]
Each exam score becomes a distance from its own class mean in SDs, so three different exams sit on one axis. Chemistry (z = 0) is the relatively best score; psychology (z = −2) is right at the edge of unusual.

For example:

| Exam | Score | Class mean | Standard deviation | z |
|---|---|---|---|---|
| Psychology | 85 | 92 | 3.5 | −2 |
| Economics | 67 | 79 | 8 | −1.5 |
| Chemistry | 62 | 62 | 5 | 0 |

Chemistry was right at the class average (z = 0), while psychology was 2 SDs below. So the lowest raw score is actually the best relative performance.

How to read one: the sign says above or below the mean; the size says how far. Thanks to the [[Empirical Rule|empirical rule]], if the data are roughly bell-shaped, a value is **unusual if $z < -2$ or $z > 2$**, since only about 5% of values land that far out ([[Normality Checks|normal]]).

Now here's why this little idea is so big. Look at the template again: (what you saw − what you expected) ÷ (how much it usually varies). Swap the single value for a sample mean, and the SD for the standard error, and you've built a test statistic:
$$z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$$
In a [[Hypothesis Testing|hypothesis test]], the $\mu_0$ from $H_0$ goes in place of $\mu$. The t, F and chi-square statistics are all the same idea wearing different clothes ([[Test Statistic]], [[Standard Error]]).

Try it yourself. Does turning values into z-scores make the data normal? No. It just slides and stretches them; a lopsided pile stays lopsided. And does z = −2 mean "2 points below the mean"? No, 2 *standard deviations* below.

See also: [[Ratios and Fractions|numerator]], [[Mean]], [[Outliers]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3).
