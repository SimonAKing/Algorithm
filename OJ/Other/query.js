const query = (() => {
	const m = {
		from: {
			once: true,
			index: 0,
			mapReduce: (data) =>
				[].concat(
					data.length < 2
						? data[0]
						: data.reduce(
								(d, r) =>
									[].concat(...d.map(v => r.map(a => [...v,a]))),
								[[]]
						  )
				)
		},
		where: {
			once: false,
			index: 1,
			mapReduce: (fArr, arr) => arr.filter(v => fArr.some(f => f(v)))
		},
		groupBy: {
			once: true,
			index: 2,
			mapReduce: (fArr, arr) =>
				arr.reduce(
					(a, v) => (
						fArr
							.reduce(
								(items, f) =>
									(items.find(item => item[0] === f(v)) ||
										(items[items.length] = [f(v), []]))[1],
								a
							)
							.push(v),
						a
					),
					[]
				)
		},
		having: {
			once: false,
			index: 3,
			mapReduce: (fArr, arr) => arr.filter(v => fArr.some(f => f(v)))
		},
		orderBy: {
			once: true,
			index: 4,
			mapReduce: (fArr, arr) => fArr.reduceRight((a, f) => a.sort(f), arr)
		},
		select: {
			once: true,
			index: 5,
			mapReduce: (fArr, arr) => fArr.reduce((a, f) => a.map(f), arr)
		}
	}
	return () =>
		new function() {
			let R = []
			for (let method in m) {
				this[method] = (...args) => {
					if (m[method].once && R.some(x => x[0] == method)) {
						throw new Error(`Duplicate ${method.toUpperCase()}`)
					}
					R.push([method, args])
					return this
				}
			}
			this.execute = () =>
				R.sort((a, b) => m[a[0]].index - m[b[0]].index).reduce(
					(data, [prop, args]) =>
						args.length ? m[prop].mapReduce(args, data) : data,
					[]
				)
		}()
})()
