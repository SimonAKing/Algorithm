const cookieJar = {
	set(name, value, days) {
		document.cookie = `${name}=${value};expires=${new Date(
			Date.now() + 86400000 * days
		)}`
	},
	get(name) {
		return document.cookie
			.split(/\s*;\s*/)
			.map(v => v.split(/\s*=\s*/).map(decodeURIComponent))
			.find(([key]) => key === name)[1]
	},
	remove(name) {
		document.cookie = `${name}=outdate;expires=Thu, 01-Jan-1970 00:00:01 GMT`
	}
}
