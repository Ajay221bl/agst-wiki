---
title: Oral Exam Practice
type: home
tags:
  - start-here
  - exam
aliases:
  - "Practice Questions"
---

Practice questions for an oral exam on experimental statistics, up to and including one-way ANOVA. Each one has a short answer of the kind you could say out loud in a minute or two, and links to the notes that explain it fully.

How to use this page: read the question, cover the answer, and say your answer out loud. Then compare, and open the linked notes for anything you missed. The questions are about ideas, so no formulas or calculations are needed.

> [!tip] What makes a strong spoken answer
> - Lead with one clear main point, then add a second point or a reason.
> - Give a concrete example, ideally from your own field of study.
> - Define the words you use. If you say "significant", be ready to say what you mean by it.
> - If you are unsure, say what you do know and reason from there.

## Describing data

### 1. What do you gain by plotting your data before running a test?
A plot shows the shape of the data, such as whether it is roughly normal or skewed, and it shows outliers that summary numbers hide. That helps you choose the right summary and the right test. It also shows whether the groups look different, and by how much, before any p-value. And a plot is the clearest way to show your results to someone else.

Notes: [[Why visualize data before testing]], [[Exploratory Data Analysis]], [[Outliers]]

### 2. How do you choose between the mean, the median and the mode?
Use the mean for measured data that are roughly symmetric. It uses every value and is right on average. Use the median when the data are skewed or have outliers, because extreme values barely move it. Use the mode for categories with no natural order, where it is the only option.

Notes: [[Why the median beats the mean for skewed data]], [[Mean]], [[Median]], [[Mode]]

### 3. Which measure of spread would you report, and why report one at all?
The standard deviation is the usual choice with the mean. It is in the same units as the data and describes a typical distance from the mean. With the median, report the interquartile range or the range instead, because they are also based on putting the data in order. Always report a spread with a centre: two groups can share a mean and still look completely different.

Notes: [[Why report both center and spread]], [[Standard Deviation]], [[Range and IQR]]

## Study design

### 4. What is the difference between internal and external validity, and what protects each one?
Internal validity asks whether you can say the independent variable caused the change in the outcome. Random assignment protects it, because it balances everything else between the groups. External validity asks how far the results carry over to other people, places and conditions. Random sampling from the population you care about protects it.

Notes: [[Why random assignment and random sampling protect different things]], [[Internal Validity]], [[External Validity]]

### 5. How is an experiment different from a quasi-experiment?
In an experiment, the researcher sets the independent variable and assigns units to groups at random. In a quasi-experiment one of those is missing, usually random assignment, for example because you can't assign someone's age. The groups may then differ in other ways, so claims about cause and effect are weaker.

Notes: [[Experiment]], [[Quasi-Experiment]], [[Nuisance Variables and Confounding]]

### 6. Why is a randomized controlled trial called the gold standard, and what does it give up?
Random assignment, a control group and often blinding give the strongest evidence for cause and effect. The price is realism. Strict entry rules and tightly controlled conditions mean the people and setting may not look like real life, so the results may not generalize well.

Notes: [[Why RCTs trade external validity for internal validity]], [[Randomized Controlled Trial]], [[Blinding and Placebo]]

## Probability and inference

### 7. How can a positive result on a good diagnostic test still mean you are probably healthy?
When a condition is rare, healthy people far outnumber sick ones. Even a small false-positive rate, applied to that large healthy group, can produce more false alarms than true positives. So what a positive result means depends on how common the condition is, not only on how good the test is.

Notes: [[Why a positive test can still mean you are probably healthy]], [[Predictive Values and Prevalence]]

### 8. What does the central limit theorem say, and why does it matter?
If you took many large samples and worked out each one's mean, those means would follow a roughly normal curve centred on the true mean, whatever the shape of the population. Their spread, the standard error, shrinks as the samples get bigger. This is what tells us how far one sample's mean is likely to be from the truth, and every confidence interval and test is built on it.

Notes: [[Why the sampling distribution makes inference possible]], [[Central Limit Theorem]], [[Standard Error]]

### 9. What does a 95% confidence interval mean?
If you repeated the study many times and built an interval each time, about 95% of those intervals would contain the true value. The 95% describes the method, not one particular interval. Any single interval either contains the true value or it doesn't.

Notes: [[Why 95% confidence is not a 95% probability]], [[Confidence Interval]]

### 10. What makes a confidence interval wider or narrower?
A bigger sample makes it narrower, because the standard error shrinks. More spread in the data makes it wider. A higher confidence level, such as 99% instead of 95%, also makes it wider, because you need a bigger margin to be more sure.

Notes: [[Why a bigger sample gives a narrower confidence interval]], [[Confidence Interval]]

### 11. What does a confidence interval give you that a single estimate or a hypothesis test does not?
Compared with a single best guess, it shows the uncertainty: a range of believable values at a stated confidence. Compared with a test, it doesn't need a null value chosen in advance, and it shows how big the effect might be, not just whether there is one.

Notes: [[Why go with the confidence interval when the hypothesis is weak]], [[Why an interval beats a single number, and why no interval is 100%]], [[Point Estimate]]

### 12. Is a p-value always meaningful?
No. A p-value only says how surprising the data would be if the null hypothesis were true. A huge sample can make a tiny, unimportant effect significant. A silly null hypothesis gives a meaningless p-value. A bad design or bad data gives a bad p-value. A result can also be wrong by chance, through a Type I or Type II error. And a p-value says nothing about how big or important an effect is.

Notes: [[Why a p-value is not always meaningful]], [[Why a p-value is not the probability the null is true]], [[P-Value]]

### 13. How would you explain statistical versus practical significance to a friend with no statistics background?
Statistically significant means the difference is probably not just chance. Practically significant means the difference is big enough to matter in real life. With a big enough sample, a difference too small to care about can still be statistically significant, so you need both.

Notes: [[Statistical vs Practical Significance]], [[Why big samples make almost everything significant]]

### 14. Why report an effect size alongside the p-value?
The p-value says whether there is evidence of an effect. The effect size says how big the effect is. The p-value depends heavily on the sample size, and the effect size doesn't. Common examples are Cohen's d, the difference in means measured in standard deviations, and eta squared, the share of the variation explained by the groups.

Notes: [[Why report an effect size with the p-value]], [[Effect Size]], [[Cohen's d]]

### 15. What are Type I and Type II errors, and which one is worse?
A Type I error is a false positive: rejecting a null hypothesis that is true. The significance level α sets its chance. A Type II error is a false negative: missing an effect that is really there. More power makes it less likely. Which is worse depends on the consequences. For example, approving a drug that doesn't work is a Type I error, and missing one that does work is a Type II error. That is why α is chosen before seeing the data.

Notes: [[Type I and Type II Errors]], [[Statistical Power]], [[Why choose alpha and tails before seeing the data]]

### 16. Why do we say "fail to reject" instead of "accept" the null hypothesis?
Not finding evidence of an effect is not proof that there is no effect. The study may simply have been too small to see it. It is like a court verdict: "not guilty" does not mean "innocent".

Notes: [[Why we never accept the null hypothesis]], [[Hypothesis Testing]]

## t-tests

### 17. When do you use a paired t-test instead of an independent two-sample t-test?
Use a paired test when each value in one group is naturally linked to one value in the other: the same unit measured twice, such as before and after, or matched pairs. For example, each swimmer swam once in a wetsuit and once in a swimsuit. The test works on the difference within each pair, which removes the differences between units and gives more power. Use the independent test when the units in the two groups are unrelated.

Notes: [[Why use a paired test for paired data]], [[Independent vs Paired Samples]], [[Paired t-Test]]

### 18. Why use the t-distribution instead of the normal curve when the population standard deviation is unknown?
Estimating the standard deviation from the sample adds extra uncertainty, especially in small samples. The t-distribution has fatter tails to allow for that. As the sample grows, it gets closer and closer to the normal curve.

Notes: [[Why t instead of z when sigma is unknown]], [[t-Distribution]]

### 19. A confidence interval for the difference between two means includes zero. What does that tell you?
Zero, meaning no difference, is one of the believable values. So the matching two-sided test would not reject the null hypothesis of equal means. It does not prove that the means are equal.

Notes: [[Why a 95% CI and a two-sided 0.05 test always agree]], [[Two-Sample Independent t-Test]]

### 20. What can you do if the normality assumption looks badly broken?
First look at plots to see how bad it is. t-tests and ANOVA cope with mild problems, especially with large samples of equal size. If it is badly broken, use a test based on ranks, such as the Wilcoxon test or the Kruskal-Wallis test, and report both. If both agree, the result is stronger.

Notes: [[Nonparametric Alternatives]], [[Why rank tests trade power for robustness, and why run both]], [[Robustness]]

## One-way ANOVA

### 21. Why run one ANOVA instead of t-tests on every pair of groups?
Each test carries its own chance of a false positive, usually 5%. With many groups there are many pairs, and those chances pile up: 15 tests give more than a 50% chance of at least one false positive. An ANOVA asks the overall question in one test and keeps the risk at 5%.

Notes: [[Why ANOVA instead of many t-tests]], [[Family-Wise Type I Error]]

### 22. What are the hypotheses of a one-way ANOVA?
The null hypothesis is that all the group means are equal, meaning the factor has no effect. The alternative is that at least one group mean is different. It does not say that all of them differ, or which one.

Notes: [[One-Way ANOVA]], [[Null and Alternative Hypotheses]]

### 23. How can comparing variances tell you anything about means?
ANOVA compares how far apart the group means are (the variability between groups) with how much the values vary inside each group. If the means are really equal, both measure the same random noise, and their ratio F is close to 1. If the means differ, the between-group part is bigger and F is large.

Notes: [[Why analysis of variance can compare means]], [[Between- and Within-Group Variability]], [[F-Distribution]]

### 24. What are the assumptions of a one-way ANOVA, and how do you check them?
The observations are independent, which you judge from how the study was designed. The residuals are roughly normal in each group, which you check with a Q-Q plot or the Shapiro-Wilk test. The groups have similar variances, which you check with Levene's test or by comparing standard deviations. ANOVA is fairly robust to mild problems, especially when the groups are the same size.

Notes: [[ANOVA Assumptions]], [[Why check assumptions before trusting a test]], [[Why independence is judged from the design, not a test]]

### 25. On the Shapiro-Wilk or Levene's test, why are you hoping for a large p-value?
For these checks, the null hypothesis is that the assumption holds. A large p-value means there is no evidence against it. A small one means the assumption looks broken. Large samples can flag tiny, harmless departures, and small samples can miss big ones, so look at the plots as well.

Notes: [[Why we hope for a large p-value on assumption checks]], [[Normality Checks]], [[Homogeneity of Variance]]

### 26. When should you run post hoc tests?
Only after the ANOVA is significant. The ANOVA acts as a gatekeeper. Running pairwise tests without it brings back the problem of false positives piling up.

Notes: [[Why post hoc tests only after a significant ANOVA]], [[Post Hoc Tests]], [[Tukey HSD]]

### 27. What does a Bonferroni correction do?
It divides the significance level by the number of comparisons. That is the number of pairs, not the number of groups: four groups give six pairs. This keeps the overall chance of a false positive at about the chosen level. The cost is that it is cautious, so real differences are harder to detect.

Notes: [[Bonferroni Correction]], [[Conservative Tests]]

### 28. Can an ANOVA be significant while none of the post hoc comparisons are?
Yes. Post hoc tests are adjusted to be cautious. Each one uses only two groups, so it has less power than the overall test. The real difference may involve several groups at once, such as one group against the average of the others, which no single pair captures. And broken assumptions can make post hoc tests behave unpredictably.

Notes: [[Why a significant ANOVA can have no significant post hocs]], [[Post Hoc Tests]]

### 29. Why look at the degrees of freedom in the output?
You can predict them from the design: the number of groups minus one, and the total number of observations minus the number of groups. If the output doesn't match, something went wrong, for example rows with missing values were dropped, or the group column was read as a number.

Notes: [[Why use degrees of freedom as a sanity check]], [[Degrees of Freedom]], [[ANOVA Table]]

See also: [[MOC - Why We Do It This Way]], [[Learning Path]], [[index|Home]].
