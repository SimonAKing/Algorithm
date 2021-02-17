const sleepByAsync = ms => new Promise(r => { setTimeout(r, ms) })

const sleepBySync = ms => {
	const start = performance.now()
	while (performance.now() - start < ms) { }
}

const testAsync = async () => {
	console.log('start')
	await sleepByAsync(1000)
	console.log('end')
}

const testSync = () => {
	console.log('start')
	sleepBySync(2000)
	console.log('end')
}
