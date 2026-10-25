---
type: atomic
tags:
  - probability
aliases:
  - "classical probability"
  - "relative frequency"
  - "empirical probability"
status: seedling
---

Classical probability counts equally likely outcomes on paper. Relative frequency probability counts how often something actually happened over many tries.

There are two honest ways to put a number on chance: reason about it, or watch it happen many times. Take the question "how likely is drawing a spade?". The classical way lists every possible outcome ([[Sample Space and Events]]) and, if each is equally likely, divides:
$$P(A) = \frac{\text{number of ways } A \text{ can occur}}{\text{number of simple events in } S}$$
A deck has 52 cards and 13 are spades, so the answer is 13/52. This only works if every outcome is equally likely; a loaded die breaks it.

The relative frequency way (also called empirical or experimental) repeats or watches the process many times:
$$P(A) \approx \frac{\text{number of times } A \text{ occurred}}{\text{number of times the procedure was repeated}}$$
No list of outcomes is needed. That matters because most real questions, like "will this seed germinate?" or "will this patient respond?", have no equally likely outcomes to count. Data are the only way in. The "≈" is there because any finite number of tries only gives an estimate. With more and more tries, the relative frequency settles towards the true probability ([[Law of Large Numbers]]).

Statistics works on the relative frequency side. A sample proportion is a relative frequency used to estimate an unknown probability ([[Parameter vs Statistic]], [[Point Estimate]]). Nobody can list "all the ways a person might be a smoker", so we estimate the chance from data. That is the link to the rest of statistics: estimating unknown population values from samples ([[Population and Sample]]).

For example:

| Question | Approach | Answer |
|---|---|---|
| Odd number on a fair die | classical | 3/6 = 0.5 |
| A ten from a deck | classical | 4/52 |
| Die roll less than 5 | classical | 4/6 |
| Smoker, from a survey of 1,010 adults with 202 smokers | relative frequency | ≈ 0.20 |

Reasoning works when you know the setup; counting works when you don't. Use whichever the situation allows. Two outcomes don't mean 50/50: winning or losing the lottery is two outcomes, nowhere near equally likely. And a relative frequency is only an estimate of the true probability, a rough one when the number of tries is small.

See also: [[Proportions and Percentages]].

Further reading: [[References|Vu and Harrington 2020, Ch. 2]] (§2.1, pp. 90–93).
