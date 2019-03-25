function cmp([a, b, c, d]) {
	const ops = ['*', '/', '+', '-']
	for (let i = 0; i < ops.length; ++i) {
		for (let j = 0; j < ops.length; ++j) {
			for (let k = 0; k < ops.length; ++k) {
				let exp = a + ops[i] + b + ops[j] + c + ops[k] + d
				if (eval(exp) === 24) {
					return exp
				}
				exp = `(${a}${ops[i]}${b})${ops[j]}${c}${ops[k]}${d}`
				if (eval(exp) === 24) {
					return exp
				}
				exp = `(${a}${ops[i]}${b}${ops[j]}${c})${ops[k]}${d}`
				if (eval(exp) === 24) {
					return exp
				}
				exp = `${a}${ops[i]}(${b}${ops[j]}${c})${ops[k]}${d}`
				if (eval(exp) === 24) {
					return exp
				}
				exp = `${a}${ops[i]}(${b}${ops[j]}${c}${ops[k]}${d})`
				if (eval(exp) === 24) {
					return exp
				}
				exp = `${a}${ops[i]}${b}${ops[j]}(${c}${ops[k]}${d})`
				if (eval(exp) === 24) {
					return exp
				}

				exp = `(${a}${ops[i]}${b})${ops[j]}(${c}${ops[k]}${d})`
				if (eval(exp) === 24) {
					return exp
				}
				exp = `${a}${ops[i]}(${b}${ops[j]}(${c}${ops[k]}${d}))`
				if (eval(exp) === 24) {
					return exp
				}
			}
		}
	}
	return false
}
function equalTo24(...nums) {
	const sequence = [[2, 3], [1, 3], [2, 1]]
	for (let i = 0; i < nums.length; ++i) {
		const arg = []
		arg[i] = nums[0]
		for (let j = 1; j <= 3; ++j) {
			if (i !== 0) {
				arg[0] = nums[j]
				if (i === 1) {
					arg[2] = nums[sequence[j - 1][0]]
					arg[3] = nums[sequence[j - 1][1]]
					let exp = cmp(arg)
					if (exp) {
						return exp
					}
					[arg[2], arg[3]] = [arg[3], arg[2]]
					exp = cmp(arg)
					if (exp) {
						return exp
					}
				} else if (i === 2) {
					arg[1] = nums[sequence[j - 1][0]]
					arg[3] = nums[sequence[j - 1][1]]
					let exp = cmp(arg)
					if (exp) {
						return exp
					}
					[arg[1], arg[3]] = [arg[3], arg[1]]
					exp = cmp(arg)
					if (exp) {
						return exp
					}
				}else{
					arg[1] = nums[sequence[j - 1][0]]
					arg[2] = nums[sequence[j - 1][1]]
					let exp = cmp(arg)
					if (exp) {
						return exp
					}
					[arg[1], arg[2]] = [arg[2], arg[1]]
					exp = cmp(arg)
					if (exp) {
						return exp
					}
				}
			} else {
				arg[1] = nums[j]
				arg[2] = nums[sequence[j - 1][0]]
				arg[3] = nums[sequence[j - 1][1]]
				let exp = cmp(arg)
				if (exp) {
					return exp
				}
				[arg[2], arg[3]] = [arg[3], arg[2]]
				exp = cmp(arg)
				if (exp) {
					return exp
				}
			}
		}
	}
	return 'It\'s not possible!'
}
