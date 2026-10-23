---
type: atomic
tags:
  - study-design
aliases:
  - "bias"
  - "non-response bias"
  - "voluntary response bias"
  - "double-barreled question"
  - "anecdotal evidence"
status: seedling
---

**In one line:** sampling bias is a systematic tilt in who ends up in the sample or what they report, so the sample misrepresents the population no matter how large it is.

> [!info] Before this, it helps to know
> [[Sampling Methods]] (where bias gets in) · [[Population and Sample]] (what the sample should resemble) · [[Law of Large Numbers]] (why more data doesn't fix it)

## Start from zero
1. **A sample can miss the population in two ways:** by chance ([[Random Error and Precision|random error]]) or by a consistent tilt (bias).
2. **Random error averages out with more data; bias does not.** *Why:* the law of large numbers pulls the sample towards whatever the sampling method actually reaches. If my survey reaches mostly people with strong opinions, adding more of them just makes my wrong answer more precise ([[Law of Large Numbers]]).
3. **So bias must be prevented by the design,** not fixed by [[Sample Size|sample size]] ([[Sampling Methods]]).
4. **Common sources:**
   - **Poorly worded questions.** A **double-barreled** question asks two things at once ("Do you like animals or do you go to the movies? Yes/No").
   - **Self-deception.** If a survey doesn't feel anonymous, answers drift toward what sounds good (everyone "believes in universalism" but is fine with the Porsche in the driveway).
   - **Non-response.** People who skip a question ("PNTA", prefer not to answer) may differ systematically ([[Missing Data]]).
   - **Voluntary response.** Only people with strong feelings respond.
   - **Convenience sampling.** The sample is whoever was easy to reach.

## Why it exists
Biased samples damage **external validity**, and no statistical technique can fully fix a bad sample ([[External Validity]]). "Garbage in, garbage out."

## A tiny example
From the book: a **non-response rate** above about 15–30% can make a sample unrepresentative. **Anecdotal evidence** (a few memorable cases) is not a substitute for a well-collected sample ([[References|Vu and Harrington 2020, Ch. 1]], pp. 19–21).

## Common confusions
- **"A bigger sample fixes bias."** Bigger biased samples are still biased.
- **"Bias means the researcher is dishonest."** It is about the process, usually unintended.

## Connections
- **Builds on:** [[Sampling Methods]], [[Population and Sample]], [[Law of Large Numbers]]
- **Leads to:** [[External Validity]], [[Missing Data]], [[Construct Validity]]
- **Part of:** [[MOC - Study Design and Sampling]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (pp. 19–21)
