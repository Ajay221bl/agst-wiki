---
type: atomic
tags:
  - study-design
aliases:
  - "nuisance variable"
  - "confounder"
  - "confounding"
  - "third variable"
  - "blocking"
  - "randomized block design"
status: seedling
---

A nuisance variable is anything other than the treatment that affects the outcome. When it is also tied to the treatment, it confounds the comparison: you can no longer tell which of the two caused the difference.

Imagine testing two diets on chickens, but all the diet A chickens happen to live near the warm end of the barn and the diet B chickens near the cold door. Diet A chickens gain more weight. Was it the diet, or the warmth? You can't tell, because diet and warmth always came together. Warmth here is a confounder: it's tangled up with the treatment.

The world never hands you one cause at a time. Say you want to know whether a chicken's diet, the independent variable, changes its weight, the dependent variable ([[Independent and Dependent Variables]]). Other things also change weight, such as age, sex and where the chicken lives in the barn. These are **nuisance variables**. They become a real problem when they line up with the treatment. Suppose that, without thinking, you put all the older chickens on diet A, and diet A's chickens end up heavier. Was it the diet or the age? You can't tell: age is **confounded** with diet. Age is the "third variable". Fields like biostatistics split these variables into finer types (confounders, moderators and mediators), but here they are all simply nuisance variables.

The defence is to break the link between the nuisance variable and the treatment. Random assignment spreads every nuisance variable, measured or not, evenly over the groups on average ([[Random Assignment]]). Once age is no longer tied to diet, it can't pass itself off as a diet effect. Confounding is the main threat to [[Internal Validity|internal validity]].

There are three ways to deal with a nuisance variable:
1. **Control it in advance.** [[Random Assignment|Random assignment]] spreads it evenly. **Blocking** groups units by it and then randomizes within each group; randomized block designs build on this idea.
2. **Adjust for it statistically** after the fact. Analysis of covariance (ANCOVA), for example, removes the part of the outcome's variation that a measured nuisance variable explains, then compares the groups.
3. **Report it as a limitation.** Saying plainly what happened in your study is always safe.

For example, in a case study in the book (§5.3), an apparent difference in spending between ethnic groups disappeared once people were compared **within age groups**. Age was the confounder ([[References|Vu and Harrington 2020, Ch. 5]]).

In the book's blocking example, patients are first grouped into low risk and high risk, then randomly assigned to treatments within each group ([[References|Vu and Harrington 2020, Ch. 1]], pp. 25–27).

So the honest stance is humility: you can never list every hidden cause, which is exactly why you let chance do the assigning. Randomization doesn't remove a nuisance variable; it balances it across groups on average, so it can't systematically favour one. And adjusting statistically isn't as good as randomizing, because you can only adjust for what you measured.

Try it yourself. In a study, older cows got the new feed and younger cows got the old feed, and the new-feed cows produced more milk. What's the confounder, and how would you fix the design? Age. Randomly assign cows to feeds, so old and young cows end up in both groups.

See also: [[Observational Study Designs]].

Further reading: [[References|Kirk 2013, Ch. 1]], [[References|Vu and Harrington 2020, Ch. 1]] (pp. 25–29).
