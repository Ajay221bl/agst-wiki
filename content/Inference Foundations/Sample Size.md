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

The sample size, $n$, is how many independent things you measured. It controls how much your estimates wobble, how much power your test has, and how wide your intervals are.

Ask one person whether they like a new snack, and you learn almost nothing; maybe they just had a bad day. Ask ten, better. Ask a hundred, much better. Why? Because each person's quirks partly cancel the others'. The more people, the more the quirks wash out, and the closer the average gets to what everybody thinks.

That's what $n$ buys you. A sample is the units you actually measure ([[Population and Sample]]); count them and that's $n$. With several groups, $n_i$ is the size of group $i$, and in ANOVA, $N = \sum n_i$ is the total ([[Summation Notation]]). Careful with notation: outside ANOVA, a capital $N$ often means the size of the whole population ([[Greek Letters and Symbols]]).

Here's the subtle part: count independent *units*, not measurements. Two leaves from the same plant aren't two plants. They share the same soil, the same genes, the same sunlight, so they don't give you two independent bits of information ([[Variable and Observation]], [[Why independence is judged from the design, not a test]]).

Now, how much does more data help? Not as much as you'd hope. The wobble in a mean, the [[Standard Error|standard error]], is $\sigma/\sqrt{n}$ ([[Random Error and Precision|random errors]]). It's the square root of $n$ in there, not $n$. So doubling your sample doesn't halve the wobble. To halve it you need *four times* as many units. Precision gets expensive fast.

![[Sample size - what n changes.png|700]]
The SE falls like $1/\sqrt{n}$; t* falls quickly toward 1.96; power for a medium effect (d = 0.5) reaches 0.80 at about 64 per group.

The sample size also sets the degrees of freedom ($n - 1$, $N - k$), which set the shape of the t and F curves ([[Degrees of Freedom]]). Put it together: a bigger $n$ means narrower intervals and more power ([[Statistical Power]], [[Why a bigger sample gives a narrower confidence interval]]). And it's the one thing you decide before collecting data ([[power.t.test()]], [[Descriptive vs Inferential Statistics|inference]]).

For example, R's `power.t.test` shows that a two-sample t-test for an effect size of d = 0.5 has power 0.34 with 20 per group and 0.80 with 64 per group.

But $n$ can't fix everything, and this is where people go wrong. A huge biased sample is still biased ([[Sampling Bias|bias]], [[Why a bigger sample can't fix a biased one]]). And with a huge $n$, even trivial effects come out "significant" ([[Why big samples make almost everything significant]]). Often a cleverer design that cuts the noise beats brute force.

Try it yourself. Your survey file has a row for everyone you contacted, but some people skipped the key question. What's your $n$ for that analysis? The number of people who actually answered it. $n$ counts usable independent units, not rows.

See also: [[Squares and Square Roots]], [[Balanced Design]].
