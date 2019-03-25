const proposeToMissHan = isOK =>
	new Promise((res, rej) => setTimeout(() => (isOK ? res('ok') : rej('no')), 30))
