const trap = height => {
	let result = 0
	let leftMax = 0
	let rightMax = Math.max(...height.slice(1))
	for (let i = 1; i < height.length - 1; i++) {
		const left = i - 1
		const right = i + 1
		leftMax = Math.max(leftMax, height[left])
		if (rightMax === height[i]) {
			rightMax = Math.max(...height.slice(right))
		}

		result += Math.max(Math.min(leftMax, rightMax) - height[i], 0)
	}

	return result
}


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
