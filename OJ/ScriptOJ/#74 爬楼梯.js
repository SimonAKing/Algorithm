const climbStairs = n => {
	if(!n){
		return 0
	}
	const op = [1, 2]
	for (let i = 2; i < n; ++i) {
		op[i] = op[i - 1] + op[i - 2]
	}
	return op[n - 1]
}
