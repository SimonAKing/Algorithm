class EventEmitter {
	constructor() {
		this.core = {}
	}
	on(event, callback) {
		this.core[event]
			? this.core[event].push(callback)
			: (this.core[event] = [callback])
	}
	off(event, callback) {
		if (this.core[event]) {
			let hadDeleted = false
			this.core[event] = this.core[event].filter(fn => {
				if (fn.name === callback.name && !hadDeleted) {
					hadDeleted = true
					return false
				}
				return true
			})
		}
	}
	emit(event, ...args) {
		if (this.core[event]) {
			this.core[event].forEach(fn => fn(...args))
		}
	}
}
const emitter = new EventEmitter()
const sayHi = name => console.log(`Hello ${name}`)
const sayHi2 = name => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
