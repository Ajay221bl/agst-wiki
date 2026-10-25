---
title: Experimental Statistics Wiki
type: home
aliases:
  - "Home"
  - "Start Here"
---

Most of statistics comes down to one problem. The world is noisy, and we're very good at seeing patterns in noise. We see a difference between two groups and want to believe it. Statistics is the discipline of asking, before you believe it, whether chance alone could have produced it.

Once you see it that way, the subject stops being a pile of formulas. Every method is an answer to some version of that question. This wiki builds those answers from the ground up, from probability to one-way ANOVA. Each note holds one idea and builds it from simpler ones, so nothing has to be memorized. If you understand why something is true, you can rebuild it whenever you need it.

## Right now: the oral exam
The wiki is set up for an oral exam. Oral questions test understanding, not recall: explain an idea, compare two, say why a method is used. Formulas and R code aren't asked, so they're here as background.

- **[[Oral Exam Practice]]**: exam-style questions, each answered by reasoning out loud from first principles. Try each one yourself before you read the answer.
- **[[MOC - Why We Do It This Way]]**: the "why" notes. Most oral questions are "why" questions, and these notes go deeper than the practice answers.

## How to spend the last few days
Go one section of the practice questions at a time. Read the linked "why" notes first, then the idea notes beneath them. Depth beats coverage: one idea you can rebuild from scratch is worth more than five you can recite.
1. **Describing data and study design**: questions 1 to 6, with [[MOC - Describing Data]] and [[MOC - Study Design and Sampling]].
2. **Probability and inference**: questions 7 to 16, with [[MOC - Probability]] and [[MOC - Inference Foundations]]. This is the biggest section, and everything after it stands on it.
3. **t-tests**: questions 17 to 20, with [[MOC - t-Tests]].
4. **One-way ANOVA**: questions 21 to 29, with [[MOC - ANOVA]]. It ties everything together, so leave time for it.
5. **Last pass**: pick questions at random and answer without looking. Wherever you stall, go back to the notes.

## The few ideas underneath everything
If you only had time to really understand five things, these would carry you furthest.
- **Every test statistic is signal divided by noise.** A difference only means something compared to how much things vary anyway. See [[Why every test statistic is signal over noise]].
- **One sample is a guess, and the sampling distribution tells you how good a guess.** That is what makes inference possible at all. See [[Why the sampling distribution makes inference possible]].
- **Random assignment and random sampling do different jobs.** One earns "it caused it". The other earns "it holds out there". See [[Why random assignment and random sampling protect different things]].
- **"Is it real?" and "does it matter?" are different questions.** The p-value answers the first, the effect size the second. See [[Why report an effect size with the p-value]].
- **More data makes you more precise, not more right.** A big biased sample is just confidently wrong. See [[Why a bigger sample can't fix a biased one]].

## Also here
- **New to the maths symbols?** [[MOC - Basics from Zero]] explains them from scratch.
- **Want every topic in order?** Use the [[Learning Path]].
- **Background, not asked in the oral exam:** the [[Formula Sheet]], the [[Test Choice Guide]] and [[MOC - R for Statistics]]. The R notes still help with reading output, such as checking the degrees of freedom.
- **Browse everything:** [[All Notes]] and the [[References]].

> [!note] Sources
> The notes are checked against the textbook, and the worked examples are checked in R. The practice questions are written for this wiki. Book citations give the chapter and page, and the full references are in [[References]].
