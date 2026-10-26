---
type: atomic
tags:
  - r-statistics
aliases:
  - "str"
  - "structure"
  - "numeric"
  - "character"
  - "integer"
  - "data types in R"
status: seedling
---

`str(d)` shows how R is storing each variable (int, num, chr or Factor), with its first few values. It is the first thing to check when something goes wrong.

The most dangerous errors are the ones that don't produce an error message. After loading data, confirm that R understood them the way you meant. Wrong types are the most common silent error ([[Types of Data]]). `str()` shows the structure:

```r
str(frust)
# 'data.frame': 120 obs. of 2 variables:
#  $ score: num  12 15 9 ...
#  $ major: Factor w/ 4 levels "business","English",..: 1 1 1 ...
```

Read it line by line: the [[Sample Size|number of observations]] and variables, each variable's storage type, and, for factors, the number of levels ([[Data Frames]]). Check that:
- the response is `num`, or you can't average it;
- the group is a `Factor` with the expected number of levels, or `aov()` will treat it as a number, or split groups because of typing errors ([[factor()]]);
- the number of observations matches the file.

**`str()` shows what R *thinks* each variable is, not what it really is.** ID numbers come in as integers, and treatments coded 1–4 come in as numbers, so an ANOVA on them will be wrong. Wide data show several numeric columns and no group variable ([[Wide vs Long Format]]).

For example, before an ANOVA you want `num score` and `Factor major (4 levels)`. Anything else needs fixing first.

Never assume the computer understood you; check. If it prints, the types still aren't necessarily right. A factor stored as numbers prints fine and is analysed wrongly.

Try it yourself. `str(d)` shows `$ treatment: int 1 2 3 4 1 2 ...`. Is that ready for an ANOVA? No: it's stored as an integer, so `aov()` would fit a line. Convert it with `factor()` first.

See also: [[summary()]], [[aov()]].
