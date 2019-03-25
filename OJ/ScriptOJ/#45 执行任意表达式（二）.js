function execute(str, object) {
	Object.entries(object).forEach(([key,value])=>this[key] = value)
	return eval(str)
}
