---
type: atomic
tags:
  - inference
aliases:
  - "sample size"
  - "sample sizes"
  - "n"
  - "N"
  - "n_i"
  - "number of observations"
status: seedling
---

The sample size $n$ is the number of independent units measured. $N$ is the total across groups and $n_i$ is the size of group $i$. The sample size sets the standard error, the degrees of freedom and the power.

Of all the numbers in a study, this is the one you control. A sample is the units we actually measure ([[Population and Sample]]). Count them, and that is $n$. With groups, $n_i$ is group $i$'s size and, in ANOVA, $N = \sum n_i$ is the total ([[Summation Notation]]). Watch the notation: outside ANOVA, capital $N$ often means the population size instead ([[Greek Letters and Symbols]]).

The subtle part is what counts. Count units, not measurements. Two leaves from one plant are not two independent units ([[Variable and Observation]], [[Why independence is judged from the design, not a test]]).

Means of bigger samples wobble less: the standard error is $\sigma / \sqrt{n}$ ([[Standard Error]]). It shrinks with the square root because averaging cancels [[Random Error and Precision|random errors]], but only at the rate $\sqrt{n}$, so four times the data halves the standard error. The sample size also sets the degrees of freedom ($n - 1$, $N - k$), which set the t or F curve ([[Degrees of Freedom]]). So n drives power and interval width: a bigger n gives narrower confidence intervals and more power ([[Statistical Power]], [[Why a bigger sample gives a narrower confidence interval]]).

But n can't fix everything. It doesn't remove [[Sampling Bias|bias]] ([[Why a bigger sample can't fix a biased one]]), and with a huge n even trivial effects become significant ([[Why big samples make almost everything significant]]).

![[Sample size - what n changes.png|700]]
The SE falls like $1/\sqrt{n}$; t* falls quickly toward 1.96; power for a medium effect (d = 0.5) reaches 0.80 at about 64 per group.

Every [[Descriptive vs Inferential Statistics|inference]] depends on how much information you have, and n is the count of it. It is also the one thing you choose before collecting data ([[power.t.test()]]).

For example, R's `power.t.test` shows that a two-sample t-test for an effect size of d = 0.5 has power 0.34 with 20 per group and 0.80 with 64 per group.

The square root is the sobering lesson here. Doubling n doesn't halve the standard error; it takes four times n. Precision gets expensive fast, which is why clever design, cutting the noise, often beats brute force. And n isn't the number of rows: it is the number of independent units, after missing values are dropped.

See also: [[Squares and Square Roots]], [[Balanced Design]].
