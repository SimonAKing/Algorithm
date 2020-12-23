const cartesianProductOf = data =>
	data.length <= 1
		? Array.from(data[0])
		: data.reduce(
			(r, a) =>
				(k => (r.forEach(x => a.forEach(b => k.push([...x, b]))), k))([]),
			[[]]
		)
const handleGroup = (index, groupFn, data, fn = groupFn[index]) =>
	fn
		? data
			.reduce(
				(r, v) =>
					((k, y = r.find(([f]) => f === k)) => (
						y ? y[1].push(v) : r.push([k, [v]]), r
					))(fn(v)),
				[]
			)
			.map(v => ((v[1] = handleGroup(index + 1, groupFn, v[1])), v))
		: data

const query = () => {
	const LINQ = {
		from(...data) {
			this.data = cartesianProductOf(data)
			return this
		},
		where(...fns) {
			this.whereFn ? this.whereFn.push(fns) : (this.whereFn = [fns])
			return this
		},
		groupBy(...fns) {
			this.groupFn = fns
			return this
		},
		having(...fns) {
			this.havingFn ? this.havingFn.push(fns) : (this.havingFn = [fns])
			return this
		},
		select(selectFn = _ => _) {
			this.selectFn = selectFn
			return this
		},
		orderBy(fn) {
			this.orderFn = fn
			return this
		},
		execute() {
			if (!this.data) {
				this.data = []
			}
			if (this.whereFn) {
				this.whereFn.forEach(fns => {
					this.data = this.data.filter(data => fns.some(fn => fn(data)))
				})
			}
			if (this.groupFn) {
				this.data = handleGroup(0, this.groupFn, this.data)
			}
			if (this.havingFn) {
				this.havingFn.forEach(fns => {
					this.data = this.data.filter(data => fns.some(fn => fn(data)))
				})
			}
			if (this.orderFn) {
				this.data = this.data.sort(this.orderFn)
			}
			if (this.selectFn) {
				this.data = this.data.map(this.selectFn)
			}

			return this.data
		}
	}

	const cantDuplicateProps = ['FROM', 'GROUPBY', 'SELECT', 'ORDERBY']
	return new Proxy(LINQ, {
		get(target, key) {
			if (cantDuplicateProps.includes(key.toUpperCase())) {
				if (target[key].haveBeenCalled) {
					throw new Error(`Duplicate ${key.toUpperCase()}`)
				}
				target[key].haveBeenCalled = true
			}
			return Reflect.get(target, key)
		}
	})
}

module.exports = query
