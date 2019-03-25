const wrapAsync = generatorFn => (...args) =>
	new Promise(res => {
		res(Promise.all([...generatorFn(...args)]))
	})