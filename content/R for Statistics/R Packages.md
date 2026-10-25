---
type: atomic
tags:
  - r-statistics
aliases:
  - "install.packages"
  - "library"
  - "require"
  - "packages"
status: seedling
---

A package is an add-on bundle of R functions. Install it once per computer with `install.packages()`, then load it in every session with `library()` or `require()`.

No one person writes all the tools they need. Packages are how you borrow other people's work. Base R has many functions, but not all, for example [[Homogeneity of Variance|Levene's test]], [[Cohen's d]] or nicer plots. Functions written by other people come in **packages** ([[Functions and Arguments]]). Think of a library book: you install the package once, then check it out each time you need it.
- Install **once per computer**. This downloads the package.
- Load it **in every session** with `library()`. This makes its functions available now.

```r
# install once per computer (remove the # to run)
# install.packages("ggpubr", dependencies = TRUE)
library(ggpubr)        # load every session
require(psych)         # does the same thing
psych::describe(d)     # use one function without loading the whole package
```

Leave the install line commented out, so rerunning the script doesn't download everything again. Writing `package::function` helps when two packages have functions with the same name; the prefix says which one you mean.

Base R lacks many tools used in these notes. The packages used are `psych` (describe), `report` (report, [[report()|report_sample]]), `Amelia` (missmap), `ggpubr` (plots), `lsr` (cohensD), `car` (leveneTest), `emmeans` and `multcomp` (letters), `lattice`, `gridExtra` and `vcd`.

For example, the error "could not find function cohensD" means the `lsr` package isn't loaded. Run `library(lsr)`.

Install once, load every time. You don't need to install a package every time: install once, and load it in every session.

See also: [[describe() and describeBy()]], [[ggpubr Plots]], [[leveneTest()]], [[cohensD()]].
