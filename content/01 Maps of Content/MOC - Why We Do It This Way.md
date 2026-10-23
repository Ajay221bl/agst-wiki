---
type: moc
tags:
  - moc
  - molecular
status: growing
---

> [!tip] New to this?
> Each one answers a "why" question by combining several atomic notes.

The molecular notes, in the order the ideas build on each other.

## 1. Foundations
- [[Why probability comes before statistics]]: a p-value is a conditional probability
- [[Why a positive test can still mean you are probably healthy]]: prevalence drives predictive value

## 2. Describing data
- [[Why report both center and spread]]: the bank robber
- [[Why the median beats the mean for skewed data]]: tails drag the mean
- [[Why we divide by n minus 1]]: distances from $\bar{x}$ run small
- [[Why visualize data before testing]]: plots show what numbers hide
- [[Why variance squares the deviations]]: deviations cancel, squares add

## 3. Design
- [[Why random assignment and random sampling protect different things]]: causation vs generalization
- [[Why RCTs trade external validity for internal validity]]: control costs realism
- [[Why a bigger sample can't fix a biased one]]: precise, but wrong
- [[Why pairing, blocking and good measurement raise power]]: shrink the noise
- [[Why blinding is still needed after random assignment]]: knowledge leaks into outcomes

## 4. Inference
- [[Why the sampling distribution makes inference possible]]: knowing how samples vary
- [[Why hypotheses are about parameters, and the null holds the equals sign]]: test only what you can't see
- [[Why an interval beats a single number, and why no interval is 100%]]: wiggle room, not 0 to 200
- [[Why 95% confidence is not a 95% probability]]: confidence in the process
- [[Why every test statistic is signal over noise]]: one shape for z, t and F
- [[Why a bigger sample gives a narrower confidence interval]]: SE shrinks with $\sqrt{n}$
- [[Why we never accept the null hypothesis]]: not guilty is not innocent
- [[Why a p-value is not the probability the null is true]]: the conditional runs one way
- [[Why a 95% CI and a two-sided 0.05 test always agree]]: same cut-off, two views
- [[Why choose alpha and tails before seeing the data]]: no moving the goalposts
- [[Why a p-value is not always meaningful]]: garbage in, garbage out
- [[Why go with the confidence interval when the hypothesis is weak]]: lizard tails
- [[Why report an effect size with the p-value]]: real vs big
- [[Why big samples make almost everything significant]]: the SE shrinks, trivia passes

## 5. Tests
- [[Why t instead of z when sigma is unknown]]: estimated SD, fatter tails
- [[Why use a paired test for paired data]]: subtract out unit-to-unit noise
- [[Why R uses Welch's t-test by default]]: little to lose, much to gain
- [[Why rank tests trade power for robustness, and why run both]]: the backup test
- [[Why a two-group ANOVA gives F equal to t squared]]: the t-test is the two-level ANOVA
- [[Why ANOVA instead of many t-tests]]: false positives pile up
- [[Why analysis of variance can compare means]]: between vs within
- [[Why post hoc tests only after a significant ANOVA]]: the gatekeeper
- [[Why a significant ANOVA can have no significant post hocs]]: power and combinations
- [[Why check assumptions before trusting a test]]: the p-value's model has conditions
- [[Why normality is checked on residuals or differences]]: check what the model calls chance
- [[Why we hope for a large p-value on assumption checks]]: H₀ is the assumption
- [[Why independence is judged from the design, not a test]]: no output can show it
- [[Why use degrees of freedom as a sanity check]]: df you can predict

## 6. Working with real data
- [[Why R must be told what kind of variable it has]]: str(), factors, long format
- [[Why you can't just delete an outlier]]: a rule, a reason, a discussion
- [[Why you must say how missing values were handled]]: na.omit drops whole rows

## Related MOCs
[[MOC - Inference Foundations]] · [[MOC - ANOVA]] · [[index|Home]]
