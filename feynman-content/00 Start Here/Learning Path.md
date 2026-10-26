---
type: home
tags:
  - start-here
  - learning-path
aliases:
  - "Reading Order"
  - "Study Path"
status: seedling
---

A suggested order for reading the notes. It runs from the basics to one-way ANOVA, and each stage builds on the one before. Tick items off as you go.

The order matters more than it looks. Statistics is a tower of ideas, and almost every confusion comes from a missing floor below. If a note stops making sense, don't push through. Go down a level, to the note it builds on, and come back. Slow and solid beats fast and shaky, because each idea you truly understand makes the next one cheaper.

## Stage 0: Basics from zero
- [ ] [[Variable and Observation]], [[Data Table Rows and Columns]]
- [ ] [[Proportions and Percentages]], [[Summation Notation]], [[Squares and Square Roots]], [[Absolute Value]], [[Ratios and Fractions]], [[Inequality Signs]]
- [ ] [[Greek Letters and Symbols]], [[Scientific Notation]]
- [ ] The map for this stage: [[MOC - Basics from Zero]]

## Stage 1: Probability
- [ ] [[Population and Sample]], [[Parameter vs Statistic]], [[Rare Event Rule]]
- [ ] [[Sample Space and Events]], [[Classical vs Relative Frequency Probability]], [[Law of Large Numbers]], [[Random Variable]], [[Probability Distribution]], [[Expected Value]]
- [ ] [[Complementary Events]], [[Disjoint Events]], [[Independent Events]], [[Addition Rule]], [[Multiplication Rule]], [[Venn Diagram]], [[Sampling With and Without Replacement]]
- [ ] [[Contingency Table]], [[Conditional Probability]], [[Bayes' Theorem]], [[Odds and Odds Ratio]]
- [ ] [[Sensitivity and Specificity]], [[Predictive Values and Prevalence]]
- [ ] Why notes: [[Why probability comes before statistics]], [[Why a positive test can still mean you are probably healthy]]

## Stage 2: Describing data
- [ ] [[Types of Data]], [[Likert Scale]], [[Descriptive vs Inferential Statistics]], [[Exploratory Data Analysis]]
- [ ] [[Mean]], [[Median]], [[Mode]]
- [ ] [[Variability]], [[Percentiles and Quantiles]], [[Range and IQR]], [[Deviations from the Mean]], [[Variance]], [[Standard Deviation]], [[Coefficient of Variation]], [[Effect of Shifting Data]]
- [ ] [[Shape of a Distribution]], [[Tails of a Distribution]], [[Outliers]], [[Missing Data]]
- [ ] [[Histogram]], [[Box Plot and Five-Number Summary]], [[Plots for Categorical Data]], [[Plots for Two Variables]], [[Correlation]]
- [ ] Why notes: [[Why report both center and spread]], [[Why the median beats the mean for skewed data]], [[Why we divide by n minus 1]], [[Why visualize data before testing]], [[Why variance squares the deviations]], [[Why you can't just delete an outlier]], [[Why you must say how missing values were handled]]

## Stage 3: R basics, alongside Stage 2
- [ ] [[RStudio and Scripts]], [[R Objects and Assignment]], [[Functions and Arguments]], [[R Packages]]
- [ ] [[c() and Vectors]], [[Data Frames]], [[factor()]]
- [ ] [[read.csv() and file.choose()]], [[str()]], [[summary()]], [[na.omit() and complete.cases()]]
- [ ] [[mean() and sd()]], [[describe() and describeBy()]], [[aggregate() and by()]], [[report()]]
- [ ] [[hist() and boxplot()]], [[ggpubr Plots]]
- [ ] Why notes: [[Why R must be told what kind of variable it has]]

## Stage 4: Study design
- [ ] [[PICO Question]], [[Independent and Dependent Variables]], [[Nuisance Variables and Confounding]], [[Association vs Causation]]
- [ ] [[Experiment]], [[Quasi-Experiment]], [[Randomized Controlled Trial]], [[Observational Study Designs]], [[Treatment and Control Groups]], [[Blinding and Placebo]], [[Balanced Design]]
- [ ] [[Random Assignment]], [[Random Sampling]], [[Sampling Methods]], [[Sampling Bias]]
- [ ] [[Validity]], [[Internal Validity]], [[External Validity]], [[Statistical Conclusion Validity]], [[Construct Validity]]
- [ ] Why notes: [[Why random assignment and random sampling protect different things]], [[Why RCTs trade external validity for internal validity]], [[Why a bigger sample can't fix a biased one]], [[Why pairing, blocking and good measurement raise power]], [[Why blinding is still needed after random assignment]]

## Stage 5: Inference, from a sample to the population
- [ ] [[Normal Distribution]], [[Empirical Rule]], [[Z-Score]]
- [ ] [[Sample Size]], [[Sampling Distribution]], [[Central Limit Theorem]], [[Standard Error]], [[Unbiased Estimator]], [[Random Error and Precision]]
- [ ] [[Point Estimate]], [[Confidence Interval]]
- [ ] [[Hypothesis Testing]], [[Null and Alternative Hypotheses]], [[Signal and Noise]], [[Test Statistic]], [[Null Distribution]], [[P-Value]], [[Significance Level]], [[Critical Value]], [[One-Tailed vs Two-Tailed Tests]]
- [ ] [[Type I and Type II Errors]], [[Statistical Power]], [[Statistical vs Practical Significance]], [[Writing a Conclusion]], [[Test Assumptions]], [[Robustness]], [[Conservative Tests]], [[Simulation]]
- [ ] Why notes: [[Why the sampling distribution makes inference possible]], [[Why a bigger sample gives a narrower confidence interval]], [[Why we never accept the null hypothesis]], [[Why choose alpha and tails before seeing the data]]
- [ ] More why notes: [[Why hypotheses are about parameters, and the null holds the equals sign]], [[Why every test statistic is signal over noise]], [[Why a p-value is not the probability the null is true]], [[Why an interval beats a single number, and why no interval is 100%]], [[Why 95% confidence is not a 95% probability]], [[Why a 95% CI and a two-sided 0.05 test always agree]], [[Why big samples make almost everything significant]]

## Stage 6: t-tests
- [ ] [[Degrees of Freedom]], [[t-Distribution]], [[One-Sample t-Test]]
- [ ] [[Independent vs Paired Samples]], [[Paired t-Test]], [[Two-Sample Independent t-Test]], [[Welch's t-Test]], [[Pooled Variance]]
- [ ] [[Normality Checks]], [[Q-Q Plot]], [[Ranks]], [[Nonparametric Alternatives]], [[Effect Size]], [[Cohen's d]]
- [ ] In R: [[t.test()]], [[shapiro.test()]], [[cohensD()]], [[power.t.test()]], [[pnorm(), qnorm(), pt() and qt()]], [[wilcox.test() and kruskal.test()]]
- [ ] Why notes: [[Why t instead of z when sigma is unknown]], [[Why use a paired test for paired data]], [[Why a p-value is not always meaningful]], [[Why report an effect size with the p-value]], [[Why go with the confidence interval when the hypothesis is weak]]
- [ ] More why notes: [[Why R uses Welch's t-test by default]], [[Why normality is checked on residuals or differences]], [[Why we hope for a large p-value on assumption checks]], [[Why independence is judged from the design, not a test]], [[Why rank tests trade power for robustness, and why run both]]

## Stage 7: One-way ANOVA
- [ ] [[Family-Wise Type I Error]], [[Factors and Levels]], [[Grand Mean]], [[Between- and Within-Group Variability]], [[F-Distribution]]
- [ ] [[Statistical Model]], [[Residuals]], [[Sums of Squares and Mean Squares]], [[One-Way ANOVA]], [[ANOVA Table]], [[ANOVA Assumptions]], [[Homogeneity of Variance]]
- [ ] [[Post Hoc Tests]], [[Tukey HSD]], [[Bonferroni Correction]], [[Compact Letter Display]]
- [ ] In R: [[Wide vs Long Format]], [[stack()]], [[leveneTest()]], [[aov()]], [[TukeyHSD()]], [[pairwise.t.test()]], [[emmeans() and cld()]]
- [ ] Why notes: [[Why ANOVA instead of many t-tests]], [[Why analysis of variance can compare means]], [[Why post hoc tests only after a significant ANOVA]], [[Why a significant ANOVA can have no significant post hocs]], [[Why check assumptions before trusting a test]], [[Why use degrees of freedom as a sanity check]], [[Why a two-group ANOVA gives F equal to t squared]]

## Stage 8: Put it together
- [ ] [[Test Choice Guide]], [[Formula Sheet]]
