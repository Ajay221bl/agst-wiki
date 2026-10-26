---
type: molecular
tags:
  - molecular
  - study-design
aliases:
  - "bias vs random error"
  - "sample size vs representativeness"
status: seedling
---

Why doesn't collecting more data fix a sample that isn't representative?

Because more data makes you more precise, not more right. A larger sample shrinks [[Random Error and Precision|random error]], so sample means cluster ever more tightly. But they cluster around the mean of the [[Population and Sample|population]] you actually reached. If your sampling leaves people out, more data just gives you a sharper picture of the wrong group. Bias is fixed by how you sample, never by how many.

![[Bias vs random error as n grows.png|700]]
Blue, a random sample, tightens around the true 164 cm. Red, one subgroup only, tightens around 170 cm. [[Simulation|Simulated data]].

There are two different ways to be wrong, and people blur them together.

The first is scatter. Any one sample is a bit off by luck, high this time, low the next. Collect more and the luck averages out. By the [[Law of Large Numbers|law of large numbers]], the sample mean settles down as n grows, and the scatter shrinks like $1/\sqrt{n}$ ([[Standard Error]]).

But notice what it settles on: the mean of the population being sampled. That's the catch. If your method only reaches part of the population, say people who answer online polls, then that part is the population you're sampling, whatever you meant to study. And its mean can be different from the one you care about ([[Sampling Bias]]).

So as n grows, the sample mean converges, beautifully and precisely, on the wrong value. The scatter shrinks. The miss doesn't move. Think of a rifle with a bent sight: practise all you like and your shots get tighter, but they tighten around the wrong spot.

The only fix is in the design. Take a random sample of the population you actually want to talk about ([[Random Sampling]], [[External Validity]]).

This is why huge biased samples are so dangerous. Online polls and voluntary surveys can have enormous n and very narrow intervals, so they look authoritative. They're just confidently wrong. A narrow interval tells you the answer is precise. It can't tell you it's aimed at the right target.

Try it yourself. A website poll gets an enormous number of responses and a very narrow interval. A small random sample gets a wider interval and a different answer. Which do you trust about the whole population? The random one. The website's narrow interval only says it measured the website's visitors precisely.

See also: [[Why random assignment and random sampling protect different things]], [[Why a bigger sample gives a narrower confidence interval]], [[Why big samples make almost everything significant]].
