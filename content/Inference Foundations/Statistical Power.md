---
type: atomic
tags:
  - inference
aliases:
  - "power"
  - "power analysis"
  - "sample size calculation"
  - "underpowered"
status: seedling
---

Power is the chance that your study will catch an effect that really exists. A low-power study can look right at a real effect and still say "nothing here".

Picture looking for a faint star with a cheap telescope. The star is really there. But your telescope is small, the sky is a bit hazy, and the star is dim. You look and see nothing. Does that mean there's no star? Of course not. Your instrument just wasn't good enough to see it.

A study is a telescope for effects. Suppose a new feed truly makes chickens gain more weight. Will your study notice? Not necessarily. The chance that it does, that it rejects $H_0$ when $H_0$ is really false, is called power. It equals 1 − β, where β is the chance of a miss ([[Type I and Type II Errors]]).

So what makes a telescope better? A test notices an effect when the [[Test Statistic|test statistic]] is big, meaning the signal is big compared to the noise ([[Signal and Noise]]). So anything that makes the signal bigger, the noise smaller, or the bar lower will raise power. That gives four knobs:
1. **Lower the bar: raise α**, say from 0.05 to 0.10. You'll catch more, but you'll also get more false alarms, so most people won't.
2. **Get more data: increase $n$.** This shrinks the noise, because the standard error is $s/\sqrt{n}$ ([[Standard Error]]). The simplest fix, when you can afford it.
3. **Make the signal bigger: increase the effect size** ([[Effect Size]]). In a first study, compare treatments that are very different, rather than six subtle ones, and refine later.
4. **Make the noise smaller: reduce [[Variability|variability]]**, with better measurement, [[Nuisance Variables and Confounding|blocking]], or a paired design that compares each unit with itself ([[Why use a paired test for paired data]]).

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

![[Power vs sample size.png|700]]
For a medium effect at α = 0.05, power climbs with n and reaches the usual 80% target at about 64 per group.

For example, in a blood-pressure trial in the book, with a [[Standard Deviation|standard deviation]] of 12 mmHg, 100 people per group and a true difference of 3 mmHg, power is about 0.42. That's worse than a coin toss: even though the effect is real, the study would usually miss it. About 251 per group gives 80% power, and 500 per group gives about 97.7%, more than needed.

There's a formula for the [[Sample Size|sample size]] per group in a two-sample test with equal groups:
$$n \approx \frac{(z_{1-\alpha/2} + z_{1-\beta})^2(\sigma_1^2 + \sigma_2^2)}{\Delta^2}$$
You don't need to memorize it; just read it. The difference you want to detect, $\Delta$, is on the bottom and squared: halve the effect you're hunting, and you need four times the people. The noise, $\sigma$, is on top: noisier data need more people. For 80% power at α = 0.05, $(1.96 + 0.84)^2 = 7.84$. Targets are usually 80% or 90%.

So power is something you plan *before* the study, while you can still buy a better telescope. Planning avoids wasting money and animals on a study too small to find anything, and also a study so big it flags trivial differences ([[References|Vu and Harrington 2020, Ch. 5]], pp. 259–260).

Try it yourself. A study finds "no significant difference". Does that show the treatment doesn't work? Not by itself. First ask: did this study have the power to see an effect if there was one? If it was a cheap telescope, "I saw nothing" tells you very little.

See also: [[Ratios and Fractions|ratio]], [[Statistical vs Practical Significance]], [[power.t.test()]], [[Statistical Conclusion Validity]], [[Critical Value|cut-off]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.4, pp. 257–262).
