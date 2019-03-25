function execute(str, object) {
	with(object){
		return eval(str)
	}
}
