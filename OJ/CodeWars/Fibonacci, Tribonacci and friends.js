function Xbonacci(signature, n, once) {
	if (n === 0) {
		return []
	}
	if (!once) {
		Xbonacci.size = signature.length
	}
	const { length } = signature
	if (n <= length) {
		return signature.take(n)
	}
	return Xbonacci([...signature, signature.takeLast(Xbonacci.size).sum()], n, true)
}

Array.prototype.take = function (n) {
	return this.filter((_, idx) => idx + 1 <= n)
}

Array.prototype.takeLast = function (n) {
	return this.filter((_, idx) => idx + n >= this.length)
}

Array.prototype.sum = function () {
	return this.reduce((acc, el) => acc + el)
}
