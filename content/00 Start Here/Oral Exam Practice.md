---
title: Oral Exam Practice
type: home
tags:
  - start-here
  - exam
aliases:
  - "Practice Questions"
---

These are practice questions for an oral exam on experimental statistics, up to one-way ANOVA. Each answer reasons its way to the point, the way you would out loud.

Here's the thing about an oral exam. You can't bluff it, and you don't need to memorize it. If you understand why something is true, you can rebuild the answer from scratch, even when the question comes at it from a strange angle. So don't learn these answers word for word. Learn the reasoning, then say it your own way.

How to use this page: read the question, cover the answer, and talk it through out loud. Then compare. Wherever your reasoning broke down, open the linked notes.

> [!tip] What a good spoken answer sounds like
> - Begin with what the idea is for. Every method exists to solve some problem, so name the problem.
> - Build from there, one step at a time. The examiner wants to see you think, not recite.
> - Give an example, ideally one from your own field. An example proves you can use the idea.
> - Define your words. If you say "significant", say what you mean by it.
> - If you get stuck, go back to what you know for sure and reason forward. That counts.

## Describing data

### 1. What do you gain by plotting your data before running a test?
Think about what a summary number does. A mean takes a hundred values and throws away everything except one fact about them. That's useful, but it means the mean can't tell you what it threw away: a long tail, an outlier, two separate clusters.

A plot throws nothing away. You see the shape, so you know which summary is honest and which test fits. You see whether the groups differ, and by how much, before a p-value tells you anything. And you catch mistakes, such as a typo that turned 7.2 into 72.

So the order matters. Look first, then calculate. The numbers are a compression of the data, and you should see the original before you trust the compression.

Notes: [[Why visualize data before testing]], [[Exploratory Data Analysis]], [[Outliers]]

### 2. How do you choose between the mean, the median and the mode?
Ask what "typical" means for these data, and what could fool your answer.

The mean is the balance point. It uses every value, which is its strength and its weakness. One billionaire walks into a room and the average income goes up by millions, though nobody else got richer. So for symmetric, measured data, use the mean. It's efficient and right on average. For skewed data or outliers, use the median, the middle value, which doesn't care how extreme the extremes are. For categories with no order, like eye colour, there's no middle and no average. The mode, the most common value, is all you have.

The right centre is the one the data can't trick.

Notes: [[Why the median beats the mean for skewed data]], [[Mean]], [[Median]], [[Mode]]

### 3. Which measure of spread would you report, and why report one at all?
A centre tells you where the data sit. It tells you nothing about how much to trust that location. Two classes can both average 70 on an exam. In one, everyone scored near 70. In the other, half failed and half aced it. Same centre, completely different stories.

And spread isn't just description. Every test you'll run divides by some measure of spread, because a difference only means something compared to how much things vary anyway.

With the mean, report the standard deviation. It's in the data's own units and describes a typical distance from the mean. With the median, report the interquartile range or the range, since those are built from the order of the data, just like the median is.

Notes: [[Why report both center and spread]], [[Standard Deviation]], [[Range and IQR]]

## Study design

### 4. What is the difference between internal and external validity, and what protects each one?
Every study makes two claims, and people mix them up.

The first claim is "the treatment caused this". That's internal validity. To earn it, the groups must be alike in every way except the treatment. You can't make them alike by hand, because you can't even list everything that matters. So you flip a coin. Random assignment balances everything, even the things you never thought of.

The second claim is "this holds beyond my study". That's external validity. To earn it, your sample has to look like the population you want to talk about, and random sampling is what does that.

Two different questions, two different kinds of randomness. A study can have one without the other, and you should know which one you've got.

Notes: [[Why random assignment and random sampling protect different things]], [[Internal Validity]], [[External Validity]]

### 5. How is an experiment different from a quasi-experiment?
An experiment is when you control two things: you set the treatment, and you decide at random who gets it. That second part is what lets you say "caused".

In a quasi-experiment, one of those is out of your hands, usually the random assignment. You want to compare smokers and non-smokers, but you can't assign people to smoke. People chose. And whatever made them choose, such as stress, income or friends, might be what really drives the outcome.

So a quasi-experiment can still show a difference. It just can't fully separate the treatment from everything that came with it. The question to ask of any study is simple: who decided who got what?

Notes: [[Experiment]], [[Quasi-Experiment]], [[Nuisance Variables and Confounding]]

### 6. Why is a randomized controlled trial called the gold standard, and what does it give up?
A randomized controlled trial stacks up every defence against fooling yourself. Random assignment balances the groups. A control group shows what would have happened anyway. Blinding stops beliefs from leaking into the results. What's left, when the groups differ, is the treatment.

But nothing is free. To get that control, trials pick their patients carefully, follow strict protocols and run in tidy settings. Real life isn't tidy. The patients a doctor sees on Monday may be older, sicker and less careful than anyone in the trial.

So you buy certainty about cause, and you pay in how far it carries. Internal validity up, external validity down. Knowing the trade is what lets you read a trial wisely.

Notes: [[Why RCTs trade external validity for internal validity]], [[Randomized Controlled Trial]], [[Blinding and Placebo]]

## Probability and inference

### 7. How can a positive result on a good diagnostic test still mean you are probably healthy?
Start by counting people, not percentages. Suppose a disease is rare. Out of everyone tested, the sick are a tiny group and the healthy are a huge one.

Now apply the test. It catches most of the tiny sick group: a handful of true positives. It also wrongly flags a small share of the huge healthy group. But a small share of a huge number can be bigger than most of a tiny number. So the false alarms can outnumber the real cases.

That's why a positive result means less than it feels like it does. The test's accuracy matters, but so does how common the condition was to begin with. Our intuition ignores the starting point, and that's exactly where it goes wrong.

Notes: [[Why a positive test can still mean you are probably healthy]], [[Predictive Values and Prevalence]]

### 8. What does the central limit theorem say, and why does it matter?
Here's the problem statistics has to solve. You get one sample. Its mean is a guess at the truth. How good a guess? With one sample, you can't tell by looking.

The central limit theorem answers it. Imagine taking sample after sample and working out each mean. Those means pile up in a roughly normal curve, centred on the true mean, whatever shape the population has. The spread of that curve, the standard error, shrinks as samples get bigger.

So even with one sample, you know how sample means behave in general. You know roughly how far yours is likely to be from the truth. That knowledge is what every confidence interval and every test is built on. Without it, one sample would just be one sample.

Notes: [[Why the sampling distribution makes inference possible]], [[Central Limit Theorem]], [[Standard Error]]

### 9. What does a 95% confidence interval mean?
The tempting reading is "there's a 95% chance the truth is in this interval". It isn't quite right, and the reason is worth understanding.

The true value isn't random. It's fixed, we just don't know it. What's random is the interval, because it depends on which sample you happened to get. So picture repeating the study many times and building an interval each time. About 95% of those intervals catch the truth. Some miss.

Your interval is one of them. It either caught the truth or it didn't. You can't know which. The 95% is your confidence in the method that produced it, the way you'd trust a fisherman who lands his catch 95 times out of 100, without knowing about any one cast.

Notes: [[Why 95% confidence is not a 95% probability]], [[Confidence Interval]]

### 10. What makes a confidence interval wider or narrower?
An interval is a statement of how much you don't know, so ask what adds to your ignorance or takes it away.

More data takes it away. A bigger sample shrinks the standard error, and the interval narrows. More noise adds to it. If the values themselves are all over the place, any one sample is a shakier guess, and the interval widens.

Then there's what you ask for. Demand more confidence, such as 99% instead of 95%, and the interval has to widen, because a wider net catches the truth more often. Ask for 100% and the net must cover everything, which tells you nothing.

So width is the honest price of certainty. You can lower it in only one free way: collect better, bigger data.

Notes: [[Why a bigger sample gives a narrower confidence interval]], [[Confidence Interval]]

### 11. What does a confidence interval give you that a single estimate or a hypothesis test does not?
A single best guess sounds precise, but it hides its own uncertainty. It says "the answer is 9" when the truth might be 7 or 11. An interval says that out loud.

A hypothesis test has a different weakness. It only answers the question you put to it: is the truth different from this one specific value? Pick a silly value and the answer is useless. And it answers yes or no, when what you usually want to know is how much.

An interval needs no value chosen in advance. It shows the whole range of effects the data can support, from small to large. If you know the range, you can answer the yes-or-no question yourself. The reverse isn't true.

Notes: [[Why go with the confidence interval when the hypothesis is weak]], [[Why an interval beats a single number, and why no interval is 100%]], [[Point Estimate]]

### 12. Is a p-value always meaningful?
No, and the reason is in what it actually measures. A p-value answers one narrow question: if the null hypothesis were true, how surprising would these data be? Everything else people read into it is extra.

So it fails in predictable ways. With a huge sample, even a trivial effect looks surprising, so the p-value gets tiny while the effect stays trivial. If the null hypothesis was a silly one, beating it means nothing. If the design or the data were bad, the p-value inherits the problem: garbage in, garbage out. Chance can still mislead you, through a Type I or Type II error. And it never tells you how big or important the effect is.

A p-value is a tool for one job. It's meaningful only when it's doing that job.

Notes: [[Why a p-value is not always meaningful]], [[Why a p-value is not the probability the null is true]], [[P-Value]]

### 13. How would you explain statistical versus practical significance to a friend with no statistics background?
I'd say there are two questions you can ask about any result, and they're different.

The first is "is it real?" That's statistical significance. It means the difference is probably not just luck.

The second is "does it matter?" That's practical significance. It means the difference is big enough to change what anyone would do.

You can have the first without the second. Measure a million people and you can prove that a pill lowers blood pressure by a tiny amount. Real? Yes. Worth taking a pill every day for? Probably not. The bigger the study, the easier it is to prove that small things are real. So you always ask both questions, and the second one usually needs someone who knows the field.

Notes: [[Statistical vs Practical Significance]], [[Why big samples make almost everything significant]]

### 14. Why report an effect size alongside the p-value?
Because they answer different questions, and the reader needs both.

The p-value tells you whether there's evidence of an effect. But it depends heavily on the sample size. Collect more data and it shrinks, even if the effect itself stays exactly the same. So it can't tell you how big the effect is.

The effect size does that, and it doesn't care how many people you measured. Cohen's d gives the difference between means in standard deviations, so you can compare it across studies. Eta squared gives the share of the variation the groups explain.

Report only a p-value and you've told the reader something is there, but not whether it's worth caring about. That's half an answer.

Notes: [[Why report an effect size with the p-value]], [[Effect Size]], [[Cohen's d]]

### 15. What are Type I and Type II errors, and which one is worse?
Any decision under uncertainty can go wrong in two directions. You can see something that isn't there, or miss something that is.

Seeing what isn't there is a Type I error, a false positive. You control its chance directly with the significance level α. Missing what is there is a Type II error, a false negative. You lower it with more power, usually through more data or less noise.

Which is worse? It depends entirely on the cost. Approve a drug that doesn't work and patients pay for nothing. Miss a drug that works and patients go without it. Neither error is worse in general, only worse for a given decision. That's why you choose α before you look at the data, based on which mistake you can least afford.

Notes: [[Type I and Type II Errors]], [[Statistical Power]], [[Why choose alpha and tails before seeing the data]]

### 16. Why do we say "fail to reject" instead of "accept" the null hypothesis?
Think about what a test can actually do. It looks for evidence against the null hypothesis. If it finds strong evidence, you reject the null. If it doesn't, all you know is that you didn't find any.

Not finding something isn't the same as showing it isn't there. Maybe there's no effect. Or maybe the effect is real and your study was too small to see it. The test can't tell those apart.

A courtroom works the same way. The verdict is "not guilty", never "innocent". It means the case wasn't proven, not that the person didn't do it. "Fail to reject" is just statistics being honest about the limits of its evidence.

Notes: [[Why we never accept the null hypothesis]], [[Hypothesis Testing]]

## t-tests

### 17. When do you use a paired t-test instead of an independent two-sample t-test?
Ask where the noise comes from. People differ from each other enormously. If you compare one group to another, all those differences between people are mixed into your comparison as noise.

Now suppose every person is measured twice, once under each condition. For example, each swimmer swims once in a wetsuit and once in a swimsuit. A fast swimmer is fast both times. If you subtract within each swimmer, the "who is fast" part cancels out, and what's left is the effect of the wetsuit.

That's the paired test: work on the differences within each pair. When data come naturally in pairs, such as before and after, or matched units, it removes a huge source of noise, and the effect stands out. When the groups are unrelated, there's nothing to pair, so you use the independent test.

Notes: [[Why use a paired test for paired data]], [[Independent vs Paired Samples]], [[Paired t-Test]]

### 18. Why use the t-distribution instead of the normal curve when the population standard deviation is unknown?
To judge how surprising a sample mean is, you divide by the standard error, which needs the population standard deviation. You almost never know it. So you estimate it from the sample.

But an estimate can be off, especially from a small sample. Sometimes it comes out too small, and then the test statistic looks bigger than it should. If you pretended the estimate was exact, you'd be surprised too often.

The t-distribution is the correction. It has fatter tails, which builds the extra doubt into the cut-offs. As the sample grows, the estimate gets better, the doubt shrinks, and the t-distribution turns into the normal curve. It's the normal curve, made honest about what you don't know.

Notes: [[Why t instead of z when sigma is unknown]], [[t-Distribution]]

### 19. A confidence interval for the difference between two means includes zero. What does that tell you?
The interval is the range of differences the data can support. If zero is inside it, then "no difference at all" is one of the believable answers.

That's exactly what a two-sided test at the matching level asks, so the two always agree: the test would not reject the null hypothesis of equal means.

But be careful with the next step. "Zero is believable" is not "zero is true". The interval also contains differences on both sides of zero, some of which might matter. You haven't shown the groups are the same. You've only shown the data can't rule it out.

Notes: [[Why a 95% CI and a two-sided 0.05 test always agree]], [[Two-Sample Independent t-Test]]

### 20. What can you do if the normality assumption looks badly broken?
First, don't panic, and look. Plot the data and see how broken it really is. t-tests and ANOVA are forgiving of mild problems, especially when samples are large and the groups are the same size.

If it's badly broken, bring a second opinion. Rank-based tests, such as the Wilcoxon test or the Kruskal-Wallis test, replace each value with its place in the order. An extreme value can then pull no harder than one step in the ranking, so these tests don't need normality. The price is a little power when the data are actually fine.

Then run both and compare. If they agree, the conclusion doesn't depend on the assumption, and you can trust it more. If they disagree, that's important information too.

Notes: [[Nonparametric Alternatives]], [[Why rank tests trade power for robustness, and why run both]], [[Robustness]]

## One-way ANOVA

### 21. Why run one ANOVA instead of t-tests on every pair of groups?
Every test you run is a small bet that you won't be fooled by chance. At the usual level, each one has a 5% chance of a false alarm. Run one test and that's fine.

But with many groups, there are many pairs, and the bets add up. 15 tests give more than a 50% chance that at least one of them lights up by pure luck. You'd almost certainly "find" something, and it might be nothing.

ANOVA asks the overall question once: is there any difference among these groups at all? One test, one 5% risk. Only if the answer is yes do you go looking for where. It's the difference between asking one good question and asking many sloppy ones.

Notes: [[Why ANOVA instead of many t-tests]], [[Family-Wise Type I Error]]

### 22. What are the hypotheses of a one-way ANOVA?
The null hypothesis is the boring world: every group has the same mean, so the factor does nothing.

The alternative is simply "not the boring world": at least one group mean is different. Notice what it doesn't say. It doesn't say all the groups differ. It doesn't say which one. One odd group out of five is enough to make it true.

That's why a significant ANOVA is the start of the story, not the end. It tells you something is going on. Finding out what takes a second step, the post hoc tests.

Notes: [[One-Way ANOVA]], [[Null and Alternative Hypotheses]]

### 23. How can comparing variances tell you anything about means?
It sounds backwards, so go to the root. What would it look like if the groups really had different means?

The group means would sit far apart, much further than random wobble alone would push them. So you need two numbers. One is how spread out the group means are, the variability between groups: that's the signal. The other is how much values vary inside each group, the variability within groups: that's the noise, the wobble you'd see anyway.

If the true means are equal, both numbers measure the same noise, and their ratio, F, comes out near 1. If the means differ, the between-group number grows and F gets large. So ANOVA compares means by asking whether the groups spread apart more than noise can explain.

Notes: [[Why analysis of variance can compare means]], [[Between- and Within-Group Variability]], [[F-Distribution]]

### 24. What are the assumptions of a one-way ANOVA, and how do you check them?
A p-value is a calculation inside a model of how the data came about. If the model is wrong, the calculation can be wrong. So the assumptions aren't red tape. They're the conditions under which the p-value means what it says.

Three matter. First, independence: one observation tells you nothing about another. No test can detect a violation, so you judge it from how the study was designed. Second, the residuals in each group are roughly normal. You check with a Q-Q plot or the Shapiro-Wilk test. Third, the groups have similar variances. You check with Levene's test or by comparing the standard deviations.

ANOVA is forgiving of mild problems, especially with equal group sizes. Independence is the one it can't forgive.

Notes: [[ANOVA Assumptions]], [[Why check assumptions before trusting a test]], [[Why independence is judged from the design, not a test]]

### 25. On the Shapiro-Wilk or Levene's test, why are you hoping for a large p-value?
Usually you hope for a small p-value, so this feels upside down. The trick is to ask what the null hypothesis is here.

For these checks, the null hypothesis is the assumption itself: the data are normal, or the variances are equal. A small p-value is evidence against it, meaning the assumption looks broken. A large p-value means there's no evidence against it, which is what you were hoping for.

But remember what "no evidence against" means. A small sample can miss a real problem, and a huge sample can flag a harmless wobble. So don't let the p-value decide alone. Look at the plots, and judge whether the departure is big enough to matter.

Notes: [[Why we hope for a large p-value on assumption checks]], [[Normality Checks]], [[Homogeneity of Variance]]

### 26. When should you run post hoc tests?
Only after the ANOVA is significant. Here's why the order matters.

The whole reason for ANOVA was to avoid running a pile of pairwise tests and getting fooled by chance. The ANOVA asks first, once, whether there's any difference at all. It's a gatekeeper.

If the gate stays shut, there's no evidence of any difference, so there's nothing to locate. If you went ahead with the pairwise tests anyway, you'd be right back in the situation ANOVA was meant to prevent: many bets, and a good chance of a false alarm. Post hoc tests are for finding where the difference is, once you have reason to believe there is one.

Notes: [[Why post hoc tests only after a significant ANOVA]], [[Post Hoc Tests]], [[Tukey HSD]]

### 27. What does a Bonferroni correction do?
It's the simplest answer to the many-bets problem. If you run several tests, you split your allowance for false alarms among them.

You divide the significance level by the number of comparisons. Count the comparisons, not the groups: four groups make six pairs, so each pair is tested against a sixth of the usual level. That keeps the overall chance of any false alarm near what you chose.

The cost is caution. Each test now needs much stronger evidence, so real differences are harder to detect. Bonferroni is safe and easy to explain, and that safety is paid for in power.

Notes: [[Bonferroni Correction]], [[Conservative Tests]]

### 28. Can an ANOVA be significant while none of the post hoc comparisons are?
Yes, and it isn't a contradiction once you see what each one is looking at.

The ANOVA uses all the groups at once, so it has the most power. Each post hoc test uses only two groups and is adjusted to be cautious, so it has less. A pattern that's clear in the whole picture can be too faint in any single pair.

And the real difference may not be between two groups at all. It might be one group against the average of all the others, which no single pair captures. Broken assumptions can also make the post hoc tests behave strangely.

So the forest can be clearly there even when no single tree stands out.

Notes: [[Why a significant ANOVA can have no significant post hocs]], [[Post Hoc Tests]]

### 29. Why look at the degrees of freedom in the output?
Because they're one of the few numbers in the output you can predict before you run anything, and anything you can predict, you can check.

The design tells you what they should be. For a one-way ANOVA, it's the number of groups minus one, and the total number of observations minus the number of groups. If R reports something else, it analysed different data from what you think. Maybe rows with missing values were quietly dropped. Maybe the group column was read as a number instead of a set of groups.

It takes five seconds, and it catches mistakes that would otherwise flow silently into your conclusions.

Notes: [[Why use degrees of freedom as a sanity check]], [[Degrees of Freedom]], [[ANOVA Table]]

See also: [[MOC - Why We Do It This Way]], [[Learning Path]], [[index|Home]].
