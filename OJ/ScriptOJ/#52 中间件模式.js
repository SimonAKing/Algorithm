const app = {
	fns: [],
	callback(ctx) {
		console.log(ctx)
	},

	use(fn) {
		this.fns.push(fn)
	},

	go(ctx) {
		for (let fn of this.fns) {
			let isContinue = false
			fn(ctx, () => {
				isContinue = true
			})
			if (!isContinue) {
				return
			}
		}
		this.callback(ctx)
	}
}
