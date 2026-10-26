---
type: home
tags:
  - index
  - start-here
status: seedling
---

Every note in this wiki, grouped by folder. New to all this? Start with [[index|Home]] and [[MOC - Basics from Zero]], then follow the [[Learning Path]].
*223 notes in total, including this one.*

## 00 Start Here (5)
- [[Oral Exam Practice]]: These are practice questions for an oral exam on experimental statistics, up to one-way ANOVA
- [[All Notes]]: Every note in one list, grouped by folder
- [[index|Home]]: The home page: what these notes are and where to start
- [[Learning Path]]: A suggested order for reading the notes
- [[References]]: The books and papers the notes cite

## 01 Maps of Content (9)
- [[MOC - ANOVA]]: One-way analysis of variance (ANOVA) compares the means of three or more groups with a single test
- [[MOC - Basics from Zero]]: The small pieces of maths and data vocabulary that statistics uses without stopping to explain them
- [[MOC - Describing Data]]: Before any test, you need to know what kind of data you have, where the values sit, how spread out they are and what shape they take
- [[MOC - Inference Foundations]]: How one sample can tell you something about a whole population, and how sure you can be
- [[MOC - Probability]]: Probability is the language a p-value is written in
- [[MOC - R for Statistics]]: How to work in R, from opening RStudio to the letters that show which groups differ
- [[MOC - Study Design and Sampling]]: What a study can conclude is decided before any data exist
- [[MOC - t-Tests]]: Tests for one mean or two means, when the population standard deviation σ has to be estimated from the data
- [[MOC - Why We Do It This Way]]: The "why" notes, in the order the ideas build on each other

## 02 Molecular Notes (43)
- [[Why 95% confidence is not a 95% probability]]: Because the 95% belongs to the method, not to any one interval
- [[Why a 95% CI and a two-sided 0.05 test always agree]]: Because they're the same calculation seen from two sides
- [[Why a bigger sample can't fix a biased one]]: Because more data makes you more precise, not more right
- [[Why a bigger sample gives a narrower confidence interval]]: Because the width is just a measure of how much you don't know, and each of these changes that
- [[Why a p-value is not always meaningful]]: No. A p-value answers one narrow question: "how surprising are these data if $H_0$ is true?"
- [[Why a p-value is not the probability the null is true]]: A p-value is worked out by assuming H₀ is true
- [[Why a positive test can still mean you are probably healthy]]: Because when a condition is rare, false alarms can outnumber true hits
- [[Why a significant ANOVA can have no significant post hocs]]: Yes, and it isn't a contradiction. The overall test looks at the whole picture at once, while each post hoc test looks at one pair, with less data and a stricter bar
- [[Why a two-group ANOVA gives F equal to t squared]]: They're the same test. With only two groups, a one-way ANOVA and the pooled (equal-variance) two-sample t-test give exactly the same answer: F is t², the p-values are identical, and no post hoc test is needed because there's only one pair to compare
- [[Why an interval beats a single number, and why no interval is 100%]]: A single best guess, called a point estimate, is almost certainly not exactly right, and on its own it says nothing about how far off it might be
- [[Why analysis of variance can compare means]]: Because you can't tell whether means really differ without knowing how much the values scatter
- [[Why ANOVA instead of many t-tests]]: Because every test is a small bet that chance won't fool you, and bets add up
- [[Why big samples make almost everything significant]]: Because the standard error shrinks with the square root of n
- [[Why blinding is still needed after random assignment]]: Because random assignment protects the start of the study, not the middle
- [[Why check assumptions before trusting a test]]: Because a p-value is a calculation inside a model, and the model makes promises on your behalf
- [[Why choose alpha and tails before seeing the data]]: Because they're the rules of the game, and you can't set the rules after you've seen the score. α and the direction of the test define what counts as "surprising"
- [[Why every test statistic is signal over noise]]: Because they're all answering the same question: is what I saw bigger than what chance would give me anyway?
- [[Why go with the confidence interval when the hypothesis is weak]]: A test is only as good as the question you put to it
- [[Why hypotheses are about parameters, and the null holds the equals sign]]: We only test what we can't see
- [[Why independence is judged from the design, not a test]]: Because independence isn't in the numbers. It's in the story of how the numbers were collected
- [[Why normality is checked on residuals or differences]]: Because a test only assumes normality for the part it treats as chance
- [[Why pairing, blocking and good measurement raise power]]: Because power comes from a large ratio of signal to noise, and these three all attack the noise
- [[Why post hoc tests only after a significant ANOVA]]: Only after a significant overall ANOVA. The overall test is the gatekeeper
- [[Why probability comes before statistics]]: Because every hypothesis test is a probability question in disguise
- [[Why R must be told what kind of variable it has]]: Because R knows what a column looks like, not what it means
- [[Why R uses Welch's t-test by default]]: Because it's the better bet. The pooled two-sample t-test assumes both populations have the same variance
- [[Why random assignment and random sampling protect different things]]: Random assignment decides which treatment each unit gets
- [[Why rank tests trade power for robustness, and why run both]]: Rank tests replace each value with its place in the order, so an outlier or a long tail can pull no harder than one step in the ranking
- [[Why RCTs trade external validity for internal validity]]: Because control and realism pull in opposite directions
- [[Why report an effect size with the p-value]]: They answer two different questions. The p-value says whether an effect is likely real
- [[Why report both center and spread]]: Because a centre tells you where the data sit, and nothing about how much to trust that location
- [[Why t instead of z when sigma is unknown]]: Because an estimate carries its own uncertainty, and an honest method has to pay for it
- [[Why the median beats the mean for skewed data]]: The one the data can't fool. The mean uses the size of every value, so a long tail of big values drags it towards the tail and away from the typical case
- [[Why the sampling distribution makes inference possible]]: You only ever see one sample. But theory, through the central limit theorem (CLT), tells you how all possible sample means would be spread: roughly normal, centred on the true mean, with spread $\sigma/\sqrt{n}$
- [[Why use a paired test for paired data]]: Use the paired test when each measurement has a natural partner
- [[Why use degrees of freedom as a sanity check]]: Because the degrees of freedom (df) are one of the few numbers in the output you can predict before you run anything, and anything you can predict, you can check
- [[Why variance squares the deviations]]: Because the obvious approach gives zero every time
- [[Why visualize data before testing]]: Plots show you what summary numbers throw away: shape, outliers, gaps, unequal spreads and data errors
- [[Why we divide by n minus 1]]: The sample variance measures distances from the sample mean, and the sample mean is always the point that makes those distances as small as possible
- [[Why we hope for a large p-value on assumption checks]]: Because in these tests, H₀ is the thing you want to keep
- [[Why we never accept the null hypothesis]]: Because a test can only look for evidence against the null, never for it
- [[Why you can't just delete an outlier]]: Because "outlier" isn't a fact about a value
- [[Why you must say how missing values were handled]]: Because missing values change an analysis without warning. na.omit() drops a whole row if any column is blank, so the sample shrinks and the degrees of freedom change

## Basics from Zero (10)
- [[Absolute Value]]: The absolute value of a number is its distance from 0
- [[Data Table Rows and Columns]]: In a data table, each row is one observation and each column is one variable
- [[Greek Letters and Symbols]]: Greek letters usually stand for values of the whole population, which we don't know
- [[Inequality Signs]]: The signs $<$, $\le$, $>$, $\ge$ and $\ne$ say which side of a boundary a value is on, and whether the boundary itself counts
- [[Proportions and Percentages]]: A proportion is a part divided by the whole, so it is a number from 0 to 1
- [[Ratios and Fractions]]: A ratio compares two amounts by dividing one by the other
- [[Scientific Notation]]: R writes very small or very large numbers in a short form: `2.2e-16` means $2.2 \times 10^{-16}$, which is 0.00000000000000022
- [[Squares and Square Roots]]: Squaring a number multiplies it by itself, so $3^2 = 9$, and the answer is never negative
- [[Summation Notation]]: The symbol $\sum$ (a capital Greek sigma) means "add up"
- [[Variable and Observation]]: A variable is a characteristic that changes from one thing to the next, such as height, diet or region

## Probability (20)
- [[Addition Rule]]: The chance that $A$ or $B$ happens is the chance of $A$, plus the chance of $B$, minus the chance of both
- [[Bayes' Theorem]]: Bayes' theorem turns a conditional probability around
- [[Classical vs Relative Frequency Probability]]: Classical probability counts equally likely outcomes on paper
- [[Complementary Events]]: The complement of an event $A$ is "everything except $A$"
- [[Conditional Probability]]: $P(A \mid B)$, read "the probability of A given B", is the chance of $A$ when you already know $B$ happened
- [[Contingency Table]]: A contingency table counts how many observations fall into each combination of two categorical variables, with row and column totals around the edge
- [[Disjoint Events]]: Two events are disjoint, or mutually exclusive, when they can't happen at the same time
- [[Expected Value]]: The expected value $E(X)$ of a random variable is its long-run average: each possible value multiplied by its probability, then added up
- [[Independent Events]]: Two events are independent when knowing that one happened doesn't change the probability of the other: $P(A \mid B) = P(A)$
- [[Law of Large Numbers]]: The more times you repeat a chance process, or the bigger your sample, the closer the observed proportion or average gets to the true probability or mean
- [[Multiplication Rule]]: The chance that $A$ and $B$ both happen is the chance of $A$, times the chance of $B$ given that $A$ already happened
- [[Odds and Odds Ratio]]: The odds of an event are the chance it happens divided by the chance it doesn't: $p / (1 - p)$
- [[Predictive Values and Prevalence]]: The positive predictive value (PPV) is the chance you really have a condition after a positive test
- [[Probability Distribution]]: A probability distribution lists every possible value of a random variable with its probability
- [[Random Variable]]: A random variable is a number whose value is decided by chance
- [[Rare Event Rule]]: If something you observed would be extremely unlikely under some assumption, you conclude that the assumption is probably wrong
- [[Sample Space and Events]]: The sample space is the list of every basic outcome a chance process can produce
- [[Sampling With and Without Replacement]]: Drawing with replacement puts each item back before the next draw, so the draws are independent
- [[Sensitivity and Specificity]]: Sensitivity is how often a test is positive in people who have the condition
- [[Venn Diagram]]: A Venn diagram draws all possible outcomes as a box and each event as a circle, so that "or", "and", "not" and overlaps can be seen as areas

## Describing Data (24)
- [[Box Plot and Five-Number Summary]]: The five-number summary is the minimum, the first quartile ($Q_1$), the median, the third quartile ($Q_3$) and the maximum
- [[Coefficient of Variation]]: The coefficient of variation (CV) is the standard deviation divided by the mean
- [[Correlation]]: The correlation coefficient $r$ measures how closely two quantitative variables follow a straight line
- [[Descriptive vs Inferential Statistics]]: Descriptive statistics summarize the sample you have
- [[Deviations from the Mean]]: A deviation is how far one value sits from the mean: $x_i - \bar{x}$
- [[Effect of Shifting Data]]: Adding the same amount to every value moves the mean and the median by that amount, but leaves the standard deviation, the variance, the range and the interquartile range unchanged
- [[Exploratory Data Analysis]]: Exploratory data analysis (EDA) means looking at your data before testing anything
- [[Histogram]]: A histogram sorts the values of a quantitative variable into ranges called bins, and draws a bar for each bin
- [[Likert Scale]]: A Likert item asks people to rate how much they agree with a statement on ordered categories, from strongly disagree to strongly agree, often coded 1 to 5
- [[Mean]]: The mean is the ordinary average: add up all the values and divide by how many there are
- [[Median]]: The median is the middle value once the data are put in order
- [[Missing Data]]: Missing data are blank or unusable values, shown as `NA` in R
- [[Mode]]: The mode is the most common value or category
- [[Outliers]]: An outlier is a value unusually far from the rest of the data
- [[Percentiles and Quantiles]]: The p-th percentile is the value with p% of the data below it
- [[Plots for Categorical Data]]: Categorical variables are best shown with bar graphs, side by side when there are two variables, or with mosaic plots
- [[Plots for Two Variables]]: The right plot for two variables depends on their types
- [[Range and IQR]]: The range is the biggest value minus the smallest
- [[Shape of a Distribution]]: The shape of a distribution is how its values pile up: how many peaks it has, whether it is symmetric or has a long tail on one side (skew), and how peaked or flat it is
- [[Standard Deviation]]: The standard deviation (SD) is roughly the typical distance of a value from the mean, in the data's own units
- [[Tails of a Distribution]]: The tails are the far ends of a distribution, where values are rare
- [[Types of Data]]: Every variable is either categorical (labels) or quantitative (numbers you can do arithmetic with), and its type decides which summaries, plots and tests make sense
- [[Variability]]: Variability is the fact that measurements differ from one unit to the next
- [[Variance]]: The variance is the average squared distance of the data from their mean

## Study Design and Sampling (22)
- [[Association vs Causation]]: Two variables are associated when they tend to change together
- [[Balanced Design]]: A design is balanced when every group has the same number of units
- [[Blinding and Placebo]]: A placebo is a fake treatment. It separates the real effect of a treatment from the effect of believing you are being treated
- [[Construct Validity]]: Construct validity asks whether your measurements actually capture the idea you care about
- [[Experiment]]: In an experiment, the researcher sets the independent variable and randomly assigns units to treatments
- [[External Validity]]: External validity is how far a study's findings can be applied beyond the units actually studied
- [[Independent and Dependent Variables]]: The independent variable (IV) is the one you think drives the outcome, and often the one you control
- [[Internal Validity]]: Internal validity is how confidently you can say that the treatment, and not something else, caused the change in the outcome
- [[Nuisance Variables and Confounding]]: A nuisance variable is anything other than the treatment that affects the outcome
- [[Observational Study Designs]]: In an observational study the researcher watches rather than assigns
- [[Parameter vs Statistic]]: A statistic describes a sample and can be calculated
- [[PICO Question]]: PICO stands for Patient (or Problem), Intervention, Comparison and Outcome
- [[Population and Sample]]: The population is the whole group you want to know about, which is usually impossible to measure in full
- [[Quasi-Experiment]]: A quasi-experiment compares groups like an experiment does, but the researcher can't set the independent variable (IV) or can't randomly assign units to groups, usually for practical or ethical reasons
- [[Random Assignment]]: Random assignment uses chance to decide which treatment group each unit goes into
- [[Random Sampling]]: Random sampling uses chance to decide which members of a population get into a study
- [[Randomized Controlled Trial]]: A randomized controlled trial (RCT) randomly assigns units to a treatment or a control group, ideally with nobody knowing who is in which
- [[Sampling Bias]]: Sampling bias is a systematic tilt in who ends up in a sample, or in what they report
- [[Sampling Methods]]: There are many ways to choose a sample
- [[Statistical Conclusion Validity]]: Statistical conclusion validity asks whether the statistical methods, and the conclusions drawn from them, are sound
- [[Treatment and Control Groups]]: In an experiment, the treatment group gets the thing being tested
- [[Validity]]: Validity is how far a study's conclusion can be trusted

## Inference Foundations (29)
- [[Central Limit Theorem]]: The central limit theorem (CLT) says something almost magical: if you take big enough samples, the averages of those samples pile up in a bell shape around the true mean, even when the individual values are lopsided or weird
- [[Confidence Interval]]: A confidence interval (CI) is a range of believable values for something you can't measure directly, like a population average
- [[Conservative Tests]]: A conservative test raises false alarms *less* often than its stated α promises, which sounds safe but means it misses more real effects
- [[Critical Value]]: A critical value is the line you draw in advance on the "nothing is going on" curve: if your test statistic lands beyond it, you reject
- [[Degrees of Freedom]]: Degrees of freedom (df) count how many of your numbers are still free to wander once you've used the data to pin some things down
- [[Empirical Rule]]: For data shaped like a bell, about 68% of values sit within 1 standard deviation (SD) of the mean, about 95% within 2, and about 99.7% within 3
- [[Hypothesis Testing]]: A hypothesis test is a careful way of asking "could this just be chance?"
- [[Normal Distribution]]: The normal distribution is the famous bell curve: symmetric, one hump in the middle, thinning out evenly on both sides
- [[Null and Alternative Hypotheses]]: The null hypothesis ($H_0$) is the boring story: no effect, no difference, nothing has changed
- [[Null Distribution]]: The null distribution is the pile of results you'd get if you ran your study over and over in a world where nothing is going on
- [[One-Tailed vs Two-Tailed Tests]]: A one-tailed test only looks for a difference in one direction you named in advance
- [[P-Value]]: The p-value answers one question: if nothing were really going on, how often would chance alone give a result at least as extreme as yours?
- [[Point Estimate]]: A point estimate is a single best guess for something you can't measure directly, like using your sample's average as your guess for the whole population's average
- [[Random Error and Precision]]: Random error is the chance scatter of your estimate around the truth, and precision is how small that scatter is
- [[Robustness]]: A method is robust if it still gives nearly the right answer when its assumptions are a bit off
- [[Sample Size]]: The sample size, $n$, is how many independent things you measured
- [[Sampling Distribution]]: A sampling distribution shows how a statistic, like the sample mean, would come out if you could take every possible sample of the same size and calculate it each time
- [[Signal and Noise]]: Every test asks the same thing: is the signal louder than the noise?
- [[Significance Level]]: The significance level, α, is how surprised you agree to be before you'll reject the boring story
- [[Simulation]]: A simulation is a pretend world on a computer: you make up data, many times over, from a population where *you* set the truth, and watch how a statistic or a test behaves
- [[Standard Error]]: The standard error (SE) tells you how much an estimate, like a sample mean, would bounce around if you repeated the study with new samples
- [[Statistical Power]]: Power is the chance that your study will catch an effect that really exists
- [[Statistical vs Practical Significance]]: Statistically significant means "probably not just chance"
- [[Test Assumptions]]: A test's assumptions are the conditions under which its p-value can be trusted
- [[Test Statistic]]: A test statistic measures how far your result is from what the boring story predicts, counted in units of "how much this would wobble by chance anyway"
- [[Type I and Type II Errors]]: A Type I error is a false alarm: you conclude there's an effect when there really isn't
- [[Unbiased Estimator]]: An estimator is unbiased if, averaged over every sample you could have drawn, it lands exactly on the true value
- [[Writing a Conclusion]]: A conclusion says what you decided (reject or fail to reject the null hypothesis), what that means in plain words about the real thing you studied, and the numbers that back it up
- [[Z-Score]]: A z-score tells you how many standard deviations a value is above (+) or below (−) the average

## t-Tests (13)
- [[Cohen's d]]: Cohen's d measures how far apart two group averages are, in units of standard deviations
- [[Effect Size]]: An effect size tells you how big an effect is, in a way that doesn't depend on how much data you collected
- [[Independent vs Paired Samples]]: Two samples are independent when they come from separate groups with no link between them
- [[Nonparametric Alternatives]]: Nonparametric tests are back-up versions of the t-tests and ANOVA that work on ranks instead of raw values, so they don't need the data to be normal
- [[Normality Checks]]: To check whether data are roughly normal, look at them two ways: a picture (a histogram and a normal Q-Q plot) and a formal test (Shapiro–Wilk, where you *want* a large p-value)
- [[One-Sample t-Test]]: A one-sample t-test asks whether the average of one group differs from some fixed number, like a safety limit or a textbook value
- [[Paired t-Test]]: A paired t-test is for data that come in natural pairs, like the same swimmer with and without a wetsuit
- [[Pooled Variance]]: Pooled variance combines two groups' spreads into one, weighting the bigger group more
- [[Q-Q Plot]]: A normal Q-Q plot lines up each of your sorted values against where it "should" be if the data were perfectly normal
- [[Ranks]]: To rank data, sort it and replace each value with its position: 1 for the smallest, 2 for the next, and so on
- [[t-Distribution]]: The t-distribution is a bell curve like the normal, but with fatter tails
- [[Two-Sample Independent t-Test]]: The two-sample independent t-test asks whether two separate groups have different averages, like sheep given stem cells versus sheep given a dummy treatment
- [[Welch's t-Test]]: Welch's t-test compares the averages of two separate groups without assuming the two groups are equally spread out

## ANOVA (16)
- [[ANOVA Assumptions]]: One-way ANOVA assumes independent observations, roughly normal data in each group, and equal variances across the groups (called homogeneity of variance)
- [[ANOVA Table]]: The ANOVA table lists, for the factor and for the residuals, the degrees of freedom (df), sums of squares, mean squares, the F ratio and the p-value
- [[Between- and Within-Group Variability]]: Between-group variability is how far the group means sit from each other
- [[Bonferroni Correction]]: The Bonferroni correction divides α by the number of comparisons, or equivalently multiplies each p-value by it
- [[Compact Letter Display]]: A compact letter display labels each group with letters
- [[F-Distribution]]: The F-distribution is the distribution of a ratio of two variances
- [[Factors and Levels]]: A factor is a categorical grouping variable, such as the treatment or the independent variable (IV)
- [[Family-Wise Type I Error]]: When you run many tests, each at α, the chance of at least one false positive across the whole "family" of tests grows quickly
- [[Grand Mean]]: The grand mean $\bar{x}$ is the mean of all $N$ observations taken together
- [[Homogeneity of Variance]]: Homogeneity of variance (also called homoscedasticity) means every group has the same population variance
- [[One-Way ANOVA]]: One-way ANOVA tests whether the means of three or more independent groups are all equal
- [[Post Hoc Tests]]: Post hoc tests compare every pair of group means after a significant ANOVA
- [[Residuals]]: A residual is an observed value minus the model's fitted value for it
- [[Statistical Model]]: A statistical model writes each observation as a predictable part, the fitted value, plus a leftover part, the residual: data = fit + residual
- [[Sums of Squares and Mean Squares]]: A sum of squares adds up squared deviations
- [[Tukey HSD]]: Tukey's honestly significant difference (HSD) test compares every pair of group means

## R for Statistics (30)
- [[aggregate() and by()]]: `aggregate(y ~ group, data = d, FUN = mean)` works out one statistic for each group
- [[aov()]]: `aov(response ~ factor, data = d)` fits a one-way ANOVA, and `summary()` on the result prints the ANOVA table with F and p
- [[c() and Vectors]]: `c()` combines values into a vector, R's basic list of values of the same type
- [[cohensD()]]: `lsr::cohensD()` works out Cohen's d for one-sample, paired or two-sample comparisons, and reports it without a sign
- [[Data Frames]]: A data frame is R's version of a spreadsheet table, with rows as observations and columns as variables
- [[describe() and describeBy()]]: `psych::describe()` prints a fuller summary of every variable: n, mean, standard deviation (SD), median, trimmed mean, median absolute deviation (MAD), min, max, range, skew, kurtosis and standard error (SE)
- [[emmeans() and cld()]]: `emmeans()` estimates each group's mean from the model, with a confidence interval (CI)
- [[factor()]]: `factor()` tells R that a variable is categorical, with a fixed set of levels
- [[Functions and Arguments]]: A function is a named action, such as `mean()` or `t.test()`
- [[ggpubr Plots]]: The ggpubr package ("ggplot publication ready") wraps ggplot2 in simple functions for box plots, scatter plots, plots of means with standard error (SE) bars, density plots and Q-Q plots
- [[hist() and boxplot()]]: These are base R's quick plots for exploring data: `hist()` for one quantitative variable, `boxplot(y ~ group)` for comparing groups, plus `plot()`, `barplot()`, `mosaicplot()` and `qqnorm()`
- [[leveneTest()]]: `car::leveneTest(y ~ group, data = d)` tests whether the groups have equal variances
- [[mean() and sd()]]: `mean(x)`, `median(x)` and `sd(x)` work out the basic summaries
- [[na.omit() and complete.cases()]]: `na.omit(d)` drops every row that has a missing value (NA) in any column
- [[pairwise.t.test()]]: `pairwise.t.test(y, group, p.adjust.method = "bonferroni")` runs t-tests between every pair of groups and prints a table of adjusted p-values
- [[pnorm(), qnorm(), pt() and qt()]]: R's p-functions (`pnorm`, `pt`, `pf`) turn a value into the area to its left
- [[power.t.test()]]: `power.t.test()` solves for whichever one of sample size, difference, standard deviation (SD), α or power you leave out, for a t-test
- [[R Objects and Assignment]]: `name <- value` stores a value, such as a number, a data set or a test result, under a name so it can be used again later
- [[R Packages]]: A package is an add-on bundle of R functions
- [[read.csv() and file.choose()]]: `read.csv(file.choose(), header = TRUE)` opens a file browser, reads the chosen CSV (comma-separated values) file, and returns it as a data frame
- [[report()]]: The `report` package writes summaries for you
- [[RStudio and Scripts]]: RStudio is a program for running R
- [[shapiro.test()]]: `shapiro.test(x)` runs the Shapiro–Wilk test of normality
- [[stack()]]: `stack(wide)` turns a table with one column per group into long format, with a `values` column and an `ind` column naming the group
- [[str()]]: `str(d)` shows how R is storing each variable (int, num, chr or Factor), with its first few values
- [[summary()]]: `summary()` prints a quick overview. For numbers it gives the five-number summary plus the mean and the count of missing values; for factors, the count in each level; and for fitted models, their results table
- [[t.test()]]: `t.test()` runs one-sample, paired and two-sample t-tests
- [[TukeyHSD()]]: `TukeyHSD(model)` gives every pairwise difference between groups, with a 95% confidence interval (CI) and p-value adjusted for the whole family of comparisons
- [[Wide vs Long Format]]: Wide format has one column per group
- [[wilcox.test() and kruskal.test()]]: `wilcox.test()` runs the rank-based versions of the one-sample, paired and two-sample t-tests

## Guides (2)
- [[Formula Sheet]]: Every formula up to one-way ANOVA in one place
- [[Test Choice Guide]]: This guide picks the right test from two questions about your data
