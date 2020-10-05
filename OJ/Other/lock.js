const lockTaskMap = {}

const getUUID = () => Date.now()

const lockTask = (task) => {
	const id = getUUID()
	eval(`(async () => {
		await new Promise(resolve => { lockTaskMap[${id}] = resolve })
		delete lockTaskMap[${id}]
		task()
	})()`)
	return lockTaskMap[id]
}
const task = () => { console.log('task end') }
const unLock = lockTask(task)

console.log('task start')

setTimeout(() => {
	unLock()
}, 1500)
