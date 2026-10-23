---
type: home
tags:
  - index
  - start-here
status: seedling
---

Every note in this wiki, grouped by folder. New to all this? Start with [[index|Home]] and [[MOC - Basics from Zero]], then follow the [[Learning Path]].
*225 notes in total, including this one.*

## 00 Start Here (4)
- [[All Notes]]: Every note in one list, grouped by folder
- [[index|Home]]: The home page: what these notes are and where to start
- [[Learning Path]]: A suggested order for working through the vault
- [[References]]: The books and papers the notes cite

## 01 Maps of Content (9)
- [[MOC - ANOVA]]: Comparing three or more group means with one test, then post hocs
- [[MOC - Basics from Zero]]: The small pieces of maths and data vocabulary that statistics uses without stopping to explain
- [[MOC - Describing Data]]: Data types, centre, spread, shape and plots
- [[MOC - Inference Foundations]]: How one sample can say something about a population, and how sure I can be
- [[MOC - Probability]]: Events, the probability rules, conditioning and diagnostic tests
- [[MOC - R for Statistics]]: A complete R workflow, from opening RStudio to post hoc letters
- [[MOC - Study Design and Sampling]]: What a study can conclude, decided before the data exist
- [[MOC - t-Tests]]: Tests for one or two means when σ is estimated, and effect sizes
- [[MOC - Why We Do It This Way]]: The molecular notes, in the order the ideas build on each other

## 02 Molecular Notes (43)
- [[Why 95% confidence is not a 95% probability]]: The 95% describes the method: if we repeated the sampling many times, 95% of the intervals built this way would contain μ
- [[Why a 95% CI and a two-sided 0.05 test always agree]]: A 95% confidence interval is the set of null values a two-sided test at α = 0.05 would not reject
- [[Why a bigger sample can't fix a biased one]]: A larger sample shrinks random error: sample means cluster ever more tightly
- [[Why a bigger sample gives a narrower confidence interval]]: A CI's half-width is a critical value times the standard error, $s/\sqrt{n}$
- [[Why a p-value is not always meaningful]]: A p-value only answers "how surprising are these data if $H_0$ is true?" It can be tiny for a trivial effect in a huge sample, it is useless if $H_0$ was a silly hypot...
- [[Why a p-value is not the probability the null is true]]: A p-value is computed assuming H₀ is true: it is the probability of data at least this extreme given H₀
- [[Why a positive test can still mean you are probably healthy]]: When a condition is rare, healthy people vastly outnumber sick ones
- [[Why a significant ANOVA can have no significant post hocs]]: Yes, it can happen
- [[Why a two-group ANOVA gives F equal to t squared]]: With only two groups, a one-way ANOVA and the pooled (equal-variance) two-sample t-test are the same test
- [[Why an interval beats a single number, and why no interval is 100%]]: A single best guess (a point estimate) is almost certainly not exactly right, and it says nothing about how far off it might be
- [[Why analysis of variance can compare means]]: Whether group means "really" differ depends on how much the values inside each group scatter
- [[Why ANOVA instead of many t-tests]]: With three or more groups, testing every pair means many tests, and each one carries its own 5% false-positive risk
- [[Why big samples make almost everything significant]]: The standard error shrinks with the square root of n, so with enough data any non-zero difference, however trivial, becomes many standard errors away from zero
- [[Why blinding is still needed after random assignment]]: Random assignment makes the groups alike at the start
- [[Why check assumptions before trusting a test]]: A p-value is calculated from a probability model, and that model assumes things: independent observations, roughly normal data or means, equal spreads for pooled tests
- [[Why choose alpha and tails before seeing the data]]: α and the direction of the test define what counts as "surprising"
- [[Why every test statistic is signal over noise]]: Every test statistic has the same shape: how far what I saw is from what H₀ expects, divided by how much that distance would vary by chance
- [[Why go with the confidence interval when the hypothesis is weak]]: A hypothesis test is only as good as the null value you test against; pick a silly one and the result is meaningless
- [[Why hypotheses are about parameters, and the null holds the equals sign]]: We only test what we can't see
- [[Why independence is judged from the design, not a test]]: Every test assumes the observations are independent, but no output can confirm it
- [[Why normality is checked on residuals or differences]]: A test assumes normality only for the part it treats as chance
- [[Why pairing, blocking and good measurement raise power]]: Power comes from a large signal-to-noise ratio
- [[Why post hoc tests only after a significant ANOVA]]: The omnibus ANOVA is the gatekeeper: it asks, at one controlled error rate, whether any difference exists
- [[Why probability comes before statistics]]: Every hypothesis test asks "how likely is what I saw, if nothing is going on?", and that is a probability question
- [[Why R must be told what kind of variable it has]]: R only knows what a column looks like, not what it means
- [[Why R uses Welch's t-test by default]]: The pooled two-sample t-test assumes both populations have the same variance
- [[Why random assignment and random sampling protect different things]]: Random assignment decides which treatment each unit gets, which balances hidden differences between groups, so a difference in outcomes can be blamed on the treatment...
- [[Why rank tests trade power for robustness, and why run both]]: Rank tests replace each value by its rank, so an outlier or a long tail can pull no harder than one place in the order
- [[Why RCTs trade external validity for internal validity]]: The more tightly a study controls who gets what and under which conditions, the more confidently it can claim causation, but the less its setting looks like real life
- [[Why report an effect size with the p-value]]: The p-value says whether an effect is likely real; the effect size says how big it is
- [[Why report both center and spread]]: A center says where the data sit; it says nothing about how scattered they are
- [[Why t instead of z when sigma is unknown]]: The z formula needs the population SD σ, which we almost never know
- [[Why the median beats the mean for skewed data]]: The mean uses the size of every value, so a long tail of big values drags it toward the tail and away from the typical case
- [[Why the sampling distribution makes inference possible]]: I only ever see one sample, but theory (the CLT) tells me how all possible sample means would be spread: roughly normal, centered on the true mean, with spread $\sigma...
- [[Why use a paired test for paired data]]: When the same unit is measured twice, most of the variation between units (big animals vs small, healthy people vs sick) affects both measurements equally
- [[Why use degrees of freedom as a sanity check]]: The degrees of freedom in R's output are fixed by your sample size and number of groups, which you already know
- [[Why variance squares the deviations]]: Deviations from the mean always add to zero, because the mean is the balance point
- [[Why visualize data before testing]]: Plots show what summary numbers hide: shape, outliers, gaps, unequal spreads and data errors
- [[Why we divide by n minus 1]]: The sample variance measures distances from the sample mean, and the sample mean is always the point that makes those distances as small as possible
- [[Why we hope for a large p-value on assumption checks]]: In a normality or equal-variance test, H₀ is that the assumption holds
- [[Why we never accept the null hypothesis]]: A test starts by assuming the null is true and only asks whether the data contradict it
- [[Why you can't just delete an outlier]]: "Outlier" depends on the rule you use: the 1.5 × IQR fences, ±2 SD (which assumes normality) or ±3 SD for extremes
- [[Why you must say how missing values were handled]]: Missing values silently change an analysis: na.omit() drops a whole row if any column is blank, so the sample shrinks, the degrees of freedom change, and if the missin...

## Basics from Zero (10)
- [[Absolute Value]]: The absolute value of a number, written $|x|$, is its distance from 0, so it is never negative: $|-3| = |3| = 3$
- [[Data Table Rows and Columns]]: In a data table, each row is one observation and each column is one variable, which is the layout R expects
- [[Greek Letters and Symbols]]: Greek letters usually stand for unknown population values (parameters) and Roman letters for values calculated from a sample (statistics)
- [[Inequality Signs]]: $<$, $\le$, $>$, $\ge$ and $\ne$ say which side of a boundary a value is on, and whether the boundary itself counts
- [[Proportions and Percentages]]: A proportion is a part divided by the whole (a number from 0 to 1); a percentage is the same number times 100
- [[Ratios and Fractions]]: A ratio compares two amounts by dividing one by the other; the top number is the **numerator**, the bottom the **denominator**, and the answer says how many "bottoms" fit into the "top"
- [[Scientific Notation]]: R writes very small or very large numbers as "number e power", so `2.2e-16` means $2.2 \times 10^{-16}$ = 0.00000000000000022
- [[Squares and Square Roots]]: Squaring a number multiplies it by itself ($3^2 = 9$) and always gives a non-negative answer; the square root undoes it ($\sqrt{9} = 3$)
- [[Summation Notation]]: The symbol $\sum$ (capital Greek sigma) means "add up", so $\sum x_i$ is shorthand for $x_1 + x_2 + \dots + x_n$
- [[Variable and Observation]]: A variable is a characteristic that changes from one thing to the next (height, diet, region); an observation is one thing you measured, with its value for each variable

## Probability (20)
- [[Addition Rule]]: The chance that $A$ or $B$ happens is the chance of $A$ plus the chance of $B$, minus the chance of both (so the overlap is not counted twice)
- [[Bayes' Theorem]]: Bayes' theorem flips a conditional probability around: from "how likely is a positive test if you have the disease" to "how likely is the disease if you test positive"
- [[Classical vs Relative Frequency Probability]]: Classical probability counts equally likely outcomes on paper; relative frequency probability counts how often something actually happened in many tries
- [[Complementary Events]]: The complement of event $A$ is "everything except $A$", so $P(\text{not } A) = 1 - P(A)$
- [[Conditional Probability]]: $P(A \mid B)$ is the chance of $A$ when you already know $B$ happened, found by shrinking the sample space down to $B$
- [[Contingency Table]]: A contingency table counts how many observations fall into each combination of two categorical variables, with row and column totals around the edge
- [[Disjoint Events]]: Two events are disjoint (mutually exclusive) when they cannot happen at the same time, so $P(A \text{ and } B) = 0$
- [[Expected Value]]: The expected value $E(X)$ of a random variable is its long-run average: each possible value weighted by its probability, $E(X) = \sum x_i P(X = x_i)$
- [[Independent Events]]: Two events are independent when knowing that one happened does not change the probability of the other: $P(A \mid B) = P(A)$
- [[Law of Large Numbers]]: The more times you repeat a chance process (or the bigger your sample), the closer the observed proportion or average gets to the true probability or mean
- [[Multiplication Rule]]: The chance that $A$ and $B$ both happen is the chance of $A$ times the chance of $B$ given that $A$ already happened
- [[Odds and Odds Ratio]]: The odds of an event are $p / (1 - p)$, the chance it happens over the chance it doesn't; an **odds ratio** divides the odds in one group by the odds in another, and OR = 1 means no association
- [[Predictive Values and Prevalence]]: The positive predictive value (PPV) is the chance you really have the condition after a positive test; the negative predictive value (NPV) is the chance you are...
- [[Probability Distribution]]: A probability distribution lists every possible outcome of a random variable with its probability; for a continuous variable it is a curve, and the probability of a...
- [[Random Variable]]: A random variable is a number whose value is decided by chance, and its probability distribution says how likely each value (or range of values) is
- [[Rare Event Rule]]: If something we observed would be extremely unlikely under an assumption, we conclude the assumption is probably wrong
- [[Sample Space and Events]]: The sample space is the list of every basic outcome a chance process can produce, and an event is any outcome or group of outcomes you care about
- [[Sampling With and Without Replacement]]: Drawing **with replacement** puts each item back before the next draw, so the draws are independent; **without replacement** keeps it out, so later probabilities change
- [[Sensitivity and Specificity]]: Sensitivity is how often a test is positive in people who have the condition; specificity is how often it is negative in people who don't
- [[Venn Diagram]]: A Venn diagram draws the sample space as a box and each event as a circle, so "or", "and", "not" and overlaps can be seen as areas

## Describing Data (24)
- [[Box Plot and Five-Number Summary]]: The five-number summary is min, $Q_1$, median, $Q_3$, max, and a box plot draws it as a box (the middle half of the data) with whiskers and flagged outliers
- [[Coefficient of Variation]]: The coefficient of variation (CV) is the SD divided by the mean, a unitless measure of spread that lets you compare variability across very different scales
- [[Correlation]]: The correlation coefficient $r$ measures how closely two quantitative variables follow a straight line, from −1 (perfect downhill) through 0 (no straight-line pattern) to +1 (perfect uphill)
- [[Descriptive vs Inferential Statistics]]: Descriptive statistics summarize the sample you have; inferential statistics use that sample to say something about the larger population
- [[Deviations from the Mean]]: A deviation is how far one value sits from the mean, $x_i - \bar{x}$; deviations are the raw material for variance, SD, z-scores, sums of squares and residuals
- [[Effect of Shifting Data]]: Adding the same constant to every value moves the mean (and median) by that constant but leaves the SD, variance, range and IQR unchanged
- [[Exploratory Data Analysis]]: Exploratory data analysis (EDA) is looking at the data before testing anything: checking how R read it, summarizing it overall and by group, and plotting it, to find errors, shape and patterns
- [[Histogram]]: A histogram groups a quantitative variable into bins and draws a bar for each bin whose height is the number (or share) of observations in it
- [[Likert Scale]]: A Likert item asks people to rate agreement on ordered categories (strongly disagree to strongly agree, often coded 1 to 5); the answers are ordinal, so they are usually not normal and rank-based m...
- [[Mean]]: The mean is the ordinary average: add up all the values and divide by how many there are
- [[Median]]: The median is the middle value once the data are put in order; half the values are below it and half above
- [[Missing Data]]: Missing data are blank or unusable values (NA in R); you must decide, document and report how they were handled, because dropping them changes your sample
- [[Mode]]: The mode is the most common value or category; a dataset can have one mode, two (bimodal) or several
- [[Outliers]]: An outlier is a value unusually far from the rest of the data, flagged either by the box-plot fences (IQR rule) or by a z-score beyond ±2
- [[Percentiles and Quantiles]]: The p-th percentile is the value with p% of the data below it; quantile is the same idea written as a proportion (the 0.25 quantile = the 25th percentile)
- [[Plots for Categorical Data]]: Categorical variables are best shown with bar graphs (side by side for two variables) or mosaic plots, not pie charts or infographics
- [[Plots for Two Variables]]: The plot for a relationship depends on the two variable types: scatter plots for two quantitative variables, side-by-side box plots for a quantitative response across...
- [[Range and IQR]]: The range is the biggest value minus the smallest; the interquartile range (IQR) is the spread of the middle half of the data, $Q_3 - Q_1$
- [[Shape of a Distribution]]: The shape of a distribution is how the values pile up: how many peaks (modality), whether it is symmetric or has a long tail on one side (skew), and how peaked or...
- [[Standard Deviation]]: The standard deviation (SD) is roughly the typical distance of a value from the mean, in the data's own units
- [[Tails of a Distribution]]: The tails are the far ends of a distribution, where values are rare; a long tail on one side means skew, and areas in the tails are where p-values and α live
- [[Types of Data]]: A variable is either categorical (labels: nominal, ordinal or binary) or quantitative (numbers you can do arithmetic with: discrete or continuous), and that type...
- [[Variability]]: Variability is the fact that measurements differ from one unit to the next; statistics exists because of it, and range, IQR, variance and SD are ways to measure it
- [[Variance]]: The variance is the average squared distance of the data from their mean (dividing by $n - 1$ for a sample)

## Study Design and Sampling (22)
- [[Association vs Causation]]: Two variables are **associated** when they tend to change together; **causation** means changing one would change the other, and only a randomized experiment can show it cleanly
- [[Balanced Design]]: A design is **balanced** when every group has the same number of units; balanced designs are more powerful for a given total and make t-tests and ANOVA more robust to unequal variances
- [[Blinding and Placebo]]: A placebo is a fake treatment that separates the real effect from the effect of believing you are treated; blinding keeps subjects (single-blind) or subjects and...
- [[Construct Validity]]: Construct validity asks whether your measurements actually capture the idea (the construct) you care about
- [[Experiment]]: In an experiment the researcher manipulates the independent variable and randomly assigns units to treatments, which is what allows a causal conclusion
- [[External Validity]]: External validity is how far a study's findings can be generalized beyond the units actually studied, and it depends on random sampling from the population of interest
- [[Independent and Dependent Variables]]: The independent variable (IV) is the one you think drives the outcome, often the one you manipulate; the dependent variable (DV) is the outcome you measure
- [[Internal Validity]]: Internal validity is how confidently you can say that the independent variable, and not something else, caused the change in the dependent variable
- [[Nuisance Variables and Confounding]]: A nuisance variable is anything other than the IV that affects the outcome; when it is also tied to the IV, it confounds the comparison, making it impossible to tell...
- [[Observational Study Designs]]: In an observational study the researcher watches rather than assigns; the three main designs are cohort (follow forward), case-control (look backward from an outcome)...
- [[Parameter vs Statistic]]: A statistic describes a sample and can be calculated; a parameter describes a population and is unknown
- [[PICO Question]]: PICO (Patient or Problem, Intervention, Comparison, Outcome) is a framework for turning a vague scientific question into a statistical one with a specific, measurable...
- [[Population and Sample]]: The population is the whole group I want to know about (usually impossible to measure); the sample is the part of it I actually measure
- [[Quasi-Experiment]]: A quasi-experiment compares groups like an experiment, but the researcher cannot manipulate the IV or cannot randomly assign units, usually for practical or ethical...
- [[Random Assignment]]: Random assignment uses chance to decide which treatment group each experimental unit goes to, so that nuisance variables are balanced across groups and the treatment...
- [[Random Sampling]]: Random sampling uses chance to decide which members of the population get into the study, so the sample is representative and results can be generalized
- [[Randomized Controlled Trial]]: An RCT randomly assigns units to treatment or control, ideally double-blind, and is the gold standard for showing that a treatment causes an effect
- [[Sampling Bias]]: Sampling bias is a systematic tilt in who ends up in the sample or what they report, so the sample misrepresents the population no matter how large it is
- [[Sampling Methods]]: The ways of choosing a sample range from simple random sampling (the ideal) through stratified, cluster and systematic designs to convenience, snowball and...
- [[Statistical Conclusion Validity]]: Statistical conclusion validity asks whether the statistical methods and the conclusions drawn from them are sound
- [[Treatment and Control Groups]]: In an experiment the **treatment group** gets the thing being tested and the **control group** gets nothing, a placebo or the current standard, so the difference between them shows the treatment's...
- [[Validity]]: Validity is how far a study's conclusion can be trusted; it is usually split into four kinds: statistical conclusion, internal, construct and external validity

## Inference Foundations (31)
- [[Central Limit Theorem]]: For large enough samples, sample means are approximately normally distributed, centered at the population mean, with spread $\sigma/\sqrt{n}$, whatever the shape of...
- [[Chi-Square Test]]: A chi-square ($\chi^2$) test compares the counts you observed in categories with the counts you would expect if $H_0$ were true; it is the test for two categorical variables, and comes later in the...
- [[Confidence Interval]]: A confidence interval is a range of plausible values for an unknown population parameter, built as point estimate ± margin of error at a chosen confidence level
- [[Conservative Tests]]: A **conservative** test or adjustment rejects $H_0$ less often than its stated α allows (fewer false positives, less power); a **liberal** one rejects more often
- [[Critical Value]]: A critical value is the cut-off on a null distribution that leaves exactly α (or α/2 per tail) beyond it; it sets both the reject line of a test and the width of a...
- [[Degrees of Freedom]]: Degrees of freedom (df) count how many values are free to vary once the quantities you estimated are fixed; in practice they track the sample size minus the number of...
- [[Empirical Rule]]: For roughly normal data, about 68% of values fall within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD
- [[Hypothesis Testing]]: A hypothesis test assumes the null hypothesis is true, asks how surprising the data would be under that assumption, and rejects the null if the data would be very...
- [[Normal Distribution]]: The normal distribution is the symmetric, bell-shaped curve, written $N(\mu, \sigma)$, centered at its mean with spread set by its SD
- [[Null and Alternative Hypotheses]]: The null hypothesis ($H_0$) is the "no effect / status quo" claim containing an equality; the alternative ($H_A$) is a strict inequality about the same parameter,...
- [[Null Distribution]]: The null distribution is the distribution a test statistic would have if $H_0$ were true; the p-value is how much of it lies at least as far out as what you observed
- [[One-Tailed vs Two-Tailed Tests]]: A one-tailed test looks for a difference in one stated direction; a two-tailed test looks for a difference in either direction and is the safe default
- [[P-Value]]: The p-value is the probability of getting a test statistic as extreme as, or more extreme than, the one observed, **assuming the null hypothesis is true**
- [[Point Estimate]]: A point estimate is a single number used as the best guess for an unknown parameter, like $\bar{x}$ for $\mu$
- [[Random Error and Precision]]: Random error is the chance scatter of an estimate around its target, and **precision** is how small that scatter is; it is different from bias (systematic error), which shifts the target itself
- [[Regression]]: Regression fits a line (or surface) that predicts a response from one or more predictors; simple linear regression fits $\hat{y} = b_0 + b_1 x$ by making the squared residuals as small as possible
- [[Robustness]]: A method is robust when it still gives nearly the right answer even though one of its assumptions is somewhat violated
- [[Sample Size]]: The sample size $n$ is the number of independent units measured ($N$ for the total across groups, $n_i$ for group $i$); it sets the standard error, the degrees of freedom and the power
- [[Sampling Distribution]]: A sampling distribution is the distribution of a statistic (like $\bar{x}$) over all possible samples of the same size from the same population
- [[Signal and Noise]]: Every test statistic is a ratio of signal (the effect you see) to noise (how much that effect would wobble by chance); a big ratio means the signal stands...
- [[Significance Level]]: The significance level α is the cutoff for "unusual" chosen before the study, and it equals the probability of a Type I error you are willing to accept
- [[Simulation]]: A simulation makes up data on a computer from a model whose truth you choose, many times over, to see how a statistic or a method behaves
- [[Standard Error]]: The standard error (SE) is the standard deviation of a sampling distribution: how much a statistic would bounce around from sample to sample
- [[Statistical Power]]: Power is the probability that a test detects an effect that really exists: $1 - \beta$
- [[Statistical vs Practical Significance]]: Statistical significance says a result is probably not just chance; practical (clinical, scientific) significance says it is big enough to matter, and the two can...
- [[Test Assumptions]]: A test's assumptions are the conditions under which its null distribution, and so its p-value, are correct; for the common tests they are independence, normality (of means, [[Residuals|residuals]...
- [[Test Statistic]]: A test statistic turns the gap between what you observed and what $H_0$ predicts into a unitless number, scaled by how much that gap would vary by chance
- [[Type I and Type II Errors]]: A Type I error is rejecting a null hypothesis that is actually true (a false positive); a Type II error is failing to reject a null that is actually false (a false...
- [[Unbiased Estimator]]: An estimator is unbiased if, averaged over all possible samples, it hits the population value exactly: its sampling distribution is centered on the parameter
- [[Writing a Conclusion]]: A test's conclusion states the decision (reject or fail to reject $H_0$), what that means for the claim in plain words and in context, and the numbers behind it
- [[Z-Score]]: A z-score says how many standard deviations a value sits above (+) or below (−) the mean

## t-Tests (13)
- [[Cohen's d]]: Cohen's d is the difference between two means divided by a standard deviation, so the effect is expressed in SD units; about 0.2 is small, 0.5 medium and 0.8 large
- [[Effect Size]]: An effect size measures how big an effect is (its magnitude or strength), independent of sample size, so it complements the p-value
- [[Independent vs Paired Samples]]: Independent samples come from two separate sampling processes with no natural link; paired (dependent) samples come in natural pairs, such as the same unit measured...
- [[Nonparametric Alternatives]]: Nonparametric tests are rank-based versions of the t-tests and ANOVA that do not assume normality, used to confirm results when the normality assumption is doubtful
- [[Normality Checks]]: To check whether data are roughly normal, use both a formal test (Shapiro–Wilk, where you want a large p-value) and pictures (a histogram and a normal Q-Q plot)
- [[One-Sample t-Test]]: A one-sample t-test checks a claim about one population mean, using the sample mean, the sample SD and a t-distribution with $n - 1$ df
- [[Paired t-Test]]: A paired t-test is a one-sample t-test on the differences within each pair
- [[Pooled Variance]]: Pooled variance combines two groups' variances into one weighted estimate, used when the groups can be assumed to share the same population variance
- [[Q-Q Plot]]: A normal Q-Q plot puts each sorted data value against where that value "should" be if the data were normal; points on a straight line mean the shape is close to normal
- [[Ranks]]: To rank data, sort it and replace each value by its position (1 for the smallest); ties share the average of the positions they occupy
- [[t-Distribution]]: The t-distribution is a bell curve like the standard normal but with fatter tails, used when the SD in the standard error has to be estimated from the sample; its...
- [[Two-Sample Independent t-Test]]: The two-sample independent t-test compares the means of two independent groups: a categorical IV with 2 levels and a quantitative DV
- [[Welch's t-Test]]: Welch's t-test compares two independent means without assuming the groups have equal variances; it is R's default two-sample test

## ANOVA (17)
- [[ANOVA Assumptions]]: One-way ANOVA assumes independent observations, roughly normal data in each group, and equal variances across groups (homogeneity of variance), with the data...
- [[ANOVA Table]]: The ANOVA table lists, for the factor and for the residuals, the degrees of freedom, sums of squares, mean squares, the F ratio and the p-value, and the numbers fit...
- [[Between- and Within-Group Variability]]: Between-group variability is how far the group means sit from each other; within-group variability is how spread out the values are inside each group; ANOVA compares...
- [[Bonferroni Correction]]: The Bonferroni correction divides α by the number of comparisons (equivalently, multiplies each p-value by it), the simplest and most conservative way to control the...
- [[Compact Letter Display]]: A compact letter display labels each group with letters so that groups sharing a letter are not significantly different and groups with no letter in common are
- [[F-Distribution]]: The F-distribution is the right-skewed, never-negative distribution of a ratio of two variances, with two degrees of freedom; ANOVA's p-value is the area in its upper...
- [[Factors and Levels]]: A factor is a categorical grouping variable (the treatment or IV), and its levels are the groups it creates; "one-way" ANOVA means one factor with any number of levels
- [[Family-Wise Type I Error]]: When you run many tests, each at α, the chance of at least one false positive across the whole "family" of tests grows quickly: $1 - (1 - \alpha)^c$
- [[Grand Mean]]: The grand mean $\bar{x}$ is the mean of all $N$ observations pooled together; ANOVA measures how far each group mean sits from it
- [[Homogeneity of Variance]]: Homogeneity of variance (HOV, later "homoscedasticity") means every group has the same population variance; Levene's test checks it, and you want it not to reject
- [[One-Way ANOVA]]: One-way ANOVA tests whether the means of three or more independent groups are all equal, in a single omnibus test that compares variability between groups with...
- [[Post Hoc Tests]]: Post hoc tests compare every pair of group means after a significant ANOVA, with p-values adjusted so the overall Type I error rate stays controlled
- [[Residuals]]: A residual is an observed value minus the model's fitted value for it; in one-way ANOVA, a value minus its own group mean
- [[Statistical Model]]: A statistical model writes each observation as a predictable part (the fit) plus a leftover part (the residual): data = fit + residual
- [[Sums of Squares and Mean Squares]]: A sum of squares adds up squared deviations; ANOVA splits the total sum of squares into a between-group part and a within-group part, and dividing each by its df gives a...
- [[Tukey HSD]]: Tukey's honestly significant difference (HSD) test compares every pair of group means with confidence intervals and p-values adjusted for all the comparisons at once;...
- [[Two-Way ANOVA and Interaction]]: A two-way ANOVA tests two factors at once: a **main effect** for each, plus an **interaction**, which asks whether one factor's effect depends on the level of the other

## R for Statistics (30)
- [[aggregate() and by()]]: `aggregate(y ~ group, data = d, FUN = mean)` computes one statistic per group; `by(d$y, d$group, f)` runs any function (summary, shapiro.test) separately for each group
- [[aov()]]: `aov(response ~ factor, data = d)` fits a one-way ANOVA, and `summary()` on the result prints the ANOVA table with F and p
- [[c() and Vectors]]: `c()` combines values into a vector, R's basic list of same-type values; every column of a data frame is a vector
- [[cohensD()]]: `lsr::cohensD()` computes Cohen's d for one-sample, paired or two-sample comparisons, reported as an absolute value
- [[Data Frames]]: A data frame is R's version of a spreadsheet table, rows as observations and columns as variables; `d$name` picks a column and `d[rows, columns]` picks parts
- [[describe() and describeBy()]]: `psych::describe()` prints n, mean, SD, median, trimmed mean, MAD, min, max, range, skew, kurtosis and SE for every variable; `describeBy()` does it per group
- [[emmeans() and cld()]]: `emmeans()` estimates each group's mean from the model with a CI, and `multcomp::cld()` assigns SAS-style letters so groups sharing a letter are not significantly...
- [[factor()]]: `factor()` tells R a variable is categorical, with a fixed set of levels; ANOVA, grouped summaries and bar charts all need it
- [[Functions and Arguments]]: A function is a named action like `mean()` or `t.test()`; the arguments inside the parentheses tell it what to act on and how, and any argument left out takes its default
- [[ggpubr Plots]]: Ggpubr ("ggplot publication ready") wraps ggplot2 in simple functions for box plots, scatter plots, mean ± SE plots, density plots and Q-Q plots, and can print a...
- [[hist() and boxplot()]]: Base R's quick exploratory plots: `hist()` for one quantitative variable, `boxplot(y ~ group)` for comparing groups, plus `plot()`, `barplot()`, `mosaicplot()` and...
- [[leveneTest()]]: `car::leveneTest(y ~ group, data = d)` tests whether the groups have equal variances; a large p-value means homogeneity of variance looks fine
- [[mean() and sd()]]: `mean(x)`, `median(x)` and `sd(x)` compute the basic summaries, and all return NA if any value is missing unless you add `na.rm = TRUE`
- [[na.omit() and complete.cases()]]: `na.omit(d)` drops every row that has a missing value in any column; `d[complete.cases(d), ]` does the same, and is easy to aim at only the columns you need
- [[pairwise.t.test()]]: `pairwise.t.test(y, group, p.adjust.method = "bonferroni")` runs t-tests between every pair of groups and prints a matrix of adjusted p-values
- [[pnorm(), qnorm(), pt() and qt()]]: R's p-functions (`pnorm`, `pt`, `pf`) turn a value into the area to its left; the q-functions (`qnorm`, `qt`, `qf`) turn an area into the value with that much area below it
- [[power.t.test()]]: `power.t.test()` solves for whichever one of sample size, difference, SD, α or power you leave out, for a t-test
- [[R Objects and Assignment]]: `name <- value` stores a value (a number, a data set, a test result) under a name so it can be used again later
- [[R Packages]]: A package is an add-on bundle of R functions; install it once per computer with `install.packages()`, then load it every session with `library()` or `require()`
- [[read.csv() and file.choose()]]: `read.csv(file.choose(), header = TRUE)` opens a file browser, reads the chosen CSV file and returns it as a data frame
- [[report()]]: The `report` package writes summaries for you: `report_sample()` makes a "Table 1" of the sample, and `report()` turns a test result into a paragraph of text with the...
- [[RStudio and Scripts]]: RStudio is the program I use to run R; I write code in a saved script (an `.R` file) rather than the console so the analysis can be rerun, shared and reused
- [[shapiro.test()]]: `shapiro.test(x)` runs the Shapiro–Wilk normality test; a large p-value means no evidence against normality
- [[stack()]]: `stack(wide)` turns a table with one column per group into long format, with a `values` column and an `ind` column naming the group
- [[str()]]: `str(d)` shows how R is storing each variable (int, num, chr, Factor) with its first few values; it is the first thing to check when something goes wrong
- [[summary()]]: `summary()` prints a quick overview: for numbers the five-number summary plus the mean and NA count, for factors the count per level, and for fitted models their...
- [[t.test()]]: `t.test()` runs one-sample, paired and two-sample t-tests; its defaults are two-sided, `mu = 0`, 95% confidence and Welch (unequal variances)
- [[TukeyHSD()]]: `TukeyHSD(model)` gives every pairwise difference with a family-adjusted 95% CI and p-value, and `plot()` on it draws those CIs against a dashed line at 0
- [[Wide vs Long Format]]: Wide format has one column per group; long format has one column of responses and one column saying which group each belongs to, which is what `aov()` and...
- [[wilcox.test() and kruskal.test()]]: `wilcox.test()` runs the rank-based versions of the one-sample, paired and two-sample t-tests, and `kruskal.test()` the rank-based version of one-way ANOVA

## Guides (2)
- [[Formula Sheet]]: Every formula through one-way ANOVA in one place
- [[Test Choice Guide]]: Which test to use from the types of the IV and DV, plus the workflow around any test
