---
type: moc
tags:
  - moc
  - molecular
status: growing
---

> [!tip] New to this?
> Each note here answers one "why" question by bringing several of the idea notes together.

The "why" notes, in the order the ideas build on each other.

## 1. Foundations
- [[Why probability comes before statistics]]: a p-value is a conditional probability, so probability has to come first
- [[Why a positive test can still mean you are probably healthy]]: when a condition is rare, false alarms can outnumber true positives

## 2. Describing data
- [[Why report both center and spread]]: two groups can share a mean and still be completely different
- [[Why the median beats the mean for skewed data]]: long tails drag the mean but barely move the median
- [[Why we divide by n minus 1]]: distances from the sample mean $\bar{x}$ come out a little too small
- [[Why visualize data before testing]]: plots show what summary numbers hide
- [[Why variance squares the deviations]]: plain distances from the mean cancel out, but squared ones add up

## 3. Design
- [[Why random assignment and random sampling protect different things]]: one protects cause and effect, the other protects generalizing
- [[Why RCTs trade external validity for internal validity]]: tight control makes a study less like real life
- [[Why a bigger sample can't fix a biased one]]: more data makes a wrong answer more precise, not right
- [[Why pairing, blocking and good measurement raise power]]: each one shrinks the noise
- [[Why blinding is still needed after random assignment]]: knowing who got what can change the outcomes

## 4. Inference
- [[Why the sampling distribution makes inference possible]]: knowing how samples vary is what lets one sample speak for the population
- [[Why hypotheses are about parameters, and the null holds the equals sign]]: you test claims about the population values you can't see
- [[Why an interval beats a single number, and why no interval is 100%]]: a range shows the uncertainty, and an interval that is certain would have to include every value
- [[Why 95% confidence is not a 95% probability]]: the confidence describes the method, not one particular interval
- [[Why every test statistic is signal over noise]]: z, t and F all share one shape, signal divided by noise
- [[Why a bigger sample gives a narrower confidence interval]]: the standard error shrinks with $\sqrt{n}$
- [[Why we never accept the null hypothesis]]: "not guilty" is not the same as "innocent"
- [[Why a p-value is not the probability the null is true]]: the conditional probability only runs one way
- [[Why a 95% CI and a two-sided 0.05 test always agree]]: the same cut-off, seen two ways
- [[Why choose alpha and tails before seeing the data]]: no moving the goalposts after seeing the results
- [[Why a p-value is not always meaningful]]: a silly hypothesis or a huge sample can make a p-value useless
- [[Why go with the confidence interval when the hypothesis is weak]]: an interval needs no null value to test against
- [[Why report an effect size with the p-value]]: a p-value says whether an effect is real, not how big it is
- [[Why big samples make almost everything significant]]: the standard error shrinks, so even tiny effects pass

## 5. Tests
- [[Why t instead of z when sigma is unknown]]: an estimated standard deviation adds uncertainty, so the curve has fatter tails
- [[Why use a paired test for paired data]]: subtracting within each pair removes the differences between units
- [[Why R uses Welch's t-test by default]]: little to lose and much to gain
- [[Why rank tests trade power for robustness, and why run both]]: a backup test that outliers can't pull around
- [[Why a two-group ANOVA gives F equal to t squared]]: the t-test is an ANOVA with two groups
- [[Why ANOVA instead of many t-tests]]: false positives pile up with every extra test
- [[Why analysis of variance can compare means]]: it compares the spread between groups with the spread within them
- [[Why post hoc tests only after a significant ANOVA]]: the overall test acts as a gatekeeper
- [[Why a significant ANOVA can have no significant post hocs]]: the overall test has more power, and the real difference may involve several groups at once
- [[Why check assumptions before trusting a test]]: the p-value comes from a model that has conditions
- [[Why normality is checked on residuals or differences]]: check the part the model treats as chance
- [[Why we hope for a large p-value on assumption checks]]: in an assumption check, the null hypothesis $H_0$ is the assumption itself
- [[Why independence is judged from the design, not a test]]: no output can show it
- [[Why use degrees of freedom as a sanity check]]: you can predict the degrees of freedom in advance, so they catch mistakes

## 6. Working with real data
- [[Why R must be told what kind of variable it has]]: check `str()`, use factors, and put the data in long format
- [[Why you can't just delete an outlier]]: you need a rule, a reason and a discussion
- [[Why you must say how missing values were handled]]: `na.omit()` drops whole rows

## Other maps
[[MOC - Inference Foundations]] · [[MOC - ANOVA]] · [[index|Home]]
