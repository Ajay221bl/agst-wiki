---
type: atomic
tags:
  - inference
aliases:
  - "conservative"
  - "conservative test"
  - "liberal"
  - "liberal test"
  - "conservative adjustment"
status: seedling
---

A conservative test raises false alarms *less* often than its stated α promises, which sounds safe but means it misses more real effects. A liberal test raises false alarms *more* often than promised.

Think about two judges. One convicts only with overwhelming evidence. She almost never jails an innocent person, but plenty of guilty people walk free. The other convicts on thin evidence. He catches nearly every guilty person, but jails some innocent ones too. Neither is "right". Each leans a different way.

Tests lean too. Every test promises: "if $H_0$ is true, I'll raise a false alarm only α of the time" ([[Significance Level]]). But assumptions, approximations and adjustments can push the real rate away from the promise ([[Test Assumptions|Assumptions]], [[Robustness]]). If the real rate is *below* α, the test is conservative, the strict judge. If it's *above* α, it's liberal, the lenient judge.

Why can't you have both, few false alarms *and* few misses? Because making it harder to reject works the same way whether $H_0$ is true or false. A stricter test turns away real effects too. So a conservative test pays in power ([[Type I and Type II Errors]], [[Statistical Power]]).

Where does this come up? Mostly when you run many tests at once. The Bonferroni correction is the strictest common choice. Tukey's method is less strict ([[Tukey HSD]]). And running many tests with no adjustment is very liberal for the family as a whole ([[Bonferroni Correction]], [[Family-Wise Type I Error]]).

![[Conservative - Bonferroni error rate.png|700]]
Exact calculation for independent tests with every null true. Without correction, the chance of a false positive climbs to 0.64 at 20 tests. Bonferroni keeps it just under 0.05.

For example, with 10 independent tests, all with true nulls and each at 0.05, the chance of at least one false positive is $1 - 0.95^{10} = 0.40$. With the Bonferroni correction, each test at 0.005, it's 0.049. The strict judge kept the promise.

Try it yourself. Is "more conservative" simply "safer"? Only against false alarms. It's *less* safe against missing a real effect. Every method leans one way; the skill is knowing which way, and choosing on purpose. And a conservative test's [[P-Value|p-values]] aren't wrong, just cautious: its real error rate is at most α.

See also: [[Post Hoc Tests]], [[Why a significant ANOVA can have no significant post hocs]], [[Grand Mean|overall]].
