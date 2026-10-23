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

The sample space is the list of every basic outcome a chance process can produce. An event is any outcome, or group of outcomes, you care about.

Flip a fair coin twice and write down what you see. Each possible result is an **outcome**, and the complete list, {HH, HT, TH, TT}, is the **sample space**, written $S$ or $\Omega$. You need the full list first because a probability is a share of the possibilities, and you can't work out a share without knowing the whole. A **simple event** can't be broken down further, like "two tails" (TT). An **event** can be any group of outcomes: "both flips show the same face" is {HH, TT}. Most real questions, such as "at least one head", are about groups like this.

Every event gets a probability between 0 and 1: $0 \le P(A) \le 1$. An impossible event gets 0 and a certain one gets 1, because a probability is a share of the possibilities or of the long-run tries ([[Proportions and Percentages]], [[Classical vs Relative Frequency Probability]]).

The rest of probability is built on this. The complement of an event is "the rest of $S$" ([[Complementary Events]]), [[Disjoint Events|disjoint events]] share no outcomes, and a [[Random Variable|random variable]] gives each outcome a number. Many mistakes come from leaving out outcomes or misreading the wording.

For example, $P(\text{at least one head in 2 flips})$: the outcomes with a head are HH, HT and TH, so the answer is 3/4. A shortcut: "at least one" is the opposite of "none", so $1 - P(TT) = 1 - 1/4 = 3/4$.

Turning words into symbols:

| Phrase | Means |
|---|---|
| exactly 2 | $= 2$ |
| at most 2 | $\le 2$ |
| fewer than 2, less than 2 | $< 2$ |
| at least 2 | $\ge 2$ |
| more than 2 | $> 2$ |

HT and TH are two different outcomes; treating them as one makes the sample space wrong. And an event doesn't have to be a single outcome: it can be a whole group of them.

See also: [[Variable and Observation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (§2.1, p. 90).
