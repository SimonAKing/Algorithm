const order = words => words.split(' ').reduce((a, w) => (a[w.replace(/\D/g, '')] = w, a)
	, []).slice(1).join(' ')
