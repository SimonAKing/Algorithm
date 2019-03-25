const compose = (...fns) => arg => fns.reduceRight((r, f) => f(r), arg)
