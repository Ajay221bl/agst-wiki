---
type: atomic
tags:
  - probability
aliases:
  - "sample space"
  - "event"
  - "simple event"
status: seedling
---

The sample space is the list of every basic outcome a chance process can produce, and an event is any outcome or group of outcomes you care about.

1. **Start with a procedure whose result is uncertain.** Flip a fair coin twice and write down what you see. Each possible result is an **outcome**.
2. **List every basic outcome.** {HH, HT, TH, TT}. That complete list is the **sample space** ($S$ or $\Omega$). *Why list everything first:* a probability is a share of the possibilities, so you can't compute a share without knowing the whole.
3. **A simple event can't be broken down further:** "two tails" (TT).
4. **An event is any outcome or group of outcomes you care about:** "both flips show the same face" = {HH, TT}. It is not simple, because it splits into HH or TT. *Why group outcomes:* real questions ("at least one head", "same face") are about collections, not single outcomes.
5. **Give each event a probability between 0 and 1:** $0 \le P(A) \le 1$. Impossible events get 0, certain ones get 1. *Why 0 to 1:* a probability is a proportion of the possibilities or of the long-run tries ([[Proportions and Percentages]], [[Classical vs Relative Frequency Probability]]).
6. **Everything else in probability is built from this:** complements are "the rest of $S$" ([[Complementary Events]]), disjoint events share no outcomes ([[Disjoint Events]]), and a random variable assigns a number to each outcome ([[Random Variable]]).

You cannot count "how likely" without first listing "what could happen". The [[Classical vs Relative Frequency Probability|classical approach]] divides the number of ways an event can happen by the size of the sample space, so the list has to be right. Many mistakes come from forgetting outcomes (HT and TH are different) or from mistranslating the words.

For example:

$P(\text{at least one head in 2 flips})$: the outcomes with a head are HH, HT, TH, so 3/4.

Shortcut: "at least one" is the opposite of "none", so $1 - P(TT) = 1 - 1/4 = 3/4$ ([[Complementary Events]]).

Turning words into symbols:

| Phrase | Means |
|---|---|
| exactly 2 | $= 2$ |
| at most 2 | $\le 2$ |
| fewer than 2, less than 2 | $< 2$ |
| at least 2 | $\ge 2$ |
| more than 2 | $> 2$ |

Common mistakes:

- **"HT and TH are the same outcome."** They are different simple events. Treating them as one makes the sample space wrong.
- **"An event must be a single outcome."** An event can be a group of outcomes.

See also: [[Variable and Observation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (§2.1, p. 90).
