(() => {
	const pre$ = window.$
	window.$ = {
		noConflict() {
			if(pre$){
				window.$ = pre$
			}
			return this
		}
	}
})()
