const parseQueryString = url =>
	(
		url
			.replace(/#.*$/, '')
			.replace(/(\?|&)\w+(?=&)/g, r => `${r}=null&`)
			.match(/([^?=&]+)(=([^&]*))/g) || []
	).reduce(
		(a, v) => (
			((i = v.indexOf('=')),
			(j = v.slice(i + 1)),
			(a[v.slice(0, i)] = j === 'null' ? null : j)),
			a
		),
		{}
	)
