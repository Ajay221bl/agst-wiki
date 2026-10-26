---
type: atomic
tags:
  - describing-data
  - inference
aliases:
  - "descriptive statistics"
  - "inferential statistics"
  - "inference"
  - "statistical inference"
status: seedling
---

Descriptive statistics summarize the sample you have. Inferential statistics use that sample to say something about the larger population it came from.

Statistics answers two different questions, and mixing them up causes a lot of confusion: what did I see, and what can I say about what I didn't see? Say you measure 30 tomato plants. You have data about these 30 plants and a question about all plants of this variety ([[Population and Sample]]). Describing the 30 needs no guessing: "their average height is 41 cm and the [[Standard Deviation|standard deviation]] is 6 cm" is simply true of these plants. That is descriptive. Saying "the average height of all plants of this variety is probably between 39 and 43 cm" reaches beyond your 30 plants. That is inferential, and it comes with uncertainty, because a different 30 plants would have given a slightly different average ([[Sampling Distribution]]). The leap is only justified by how the sample was chosen and by probability theory, so inference needs random sampling and [[Test Assumptions|assumptions]], and description doesn't ([[Random Sampling]], [[Why probability comes before statistics]]).

| Descriptive | Inferential |
|---|---|
| mean, [[Median\|median]], standard deviation, [[Range and IQR\|interquartile range]], plots, tables | confidence intervals, p-values, hypothesis tests, Bayesian analysis |
| about **this** sample | about the **population** |
| no sampling assumptions | needs random sampling and theory |

Always describe first. Inference uses the descriptive numbers as its raw material, and a plot shows problems that a test won't ([[Why visualize data before testing]]). Mixing the two up leads to errors such as testing a hypothesis about something you already measured, or reporting a p-value when you measured the whole population.

For example, a rare berry grows in only one corner of Arkansas, and you measure every plant. That is a **census**. There is no sampling [[Variability|variability]] left to account for, so description is enough.

Describe first, infer second. Skipping the first step is how good tests give bad answers. Descriptive statistics aren't just a warm-up: they are how you check assumptions and spot problems before any test. And a [[Confidence Interval|confidence interval]] doesn't describe the sample. It is inferential, because it estimates a population value ([[Parameter vs Statistic]]).

Try it yourself. "The 30 plants we grew had an average height of so many centimetres" is descriptive or inferential? Descriptive: it's just about the plants you measured. "Plants of this variety grow to about that height on average" is inferential: it reaches beyond your 30 to plants you never saw.

See also: [[Mean]], [[Hypothesis Testing]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]].
