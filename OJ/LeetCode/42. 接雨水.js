/**
 * @param {number[]} height
 * @return {number}
 */

// NOTE: Timeout
// const trap = function (height) {
// 	let result = 0
// 	for (let i = 1; i < height.length - 1; i++) {
// 		const leftHeight = Math.max(...height.slice(0, i + 1))
// 		const rightHeight = Math.max(...height.slice(i))

// 		result += Math.min(leftHeight, rightHeight) - height[i]
// 	}

// 	return result
// }

const trap = function (height) {
	let result = 0
	const leftMaxHeight = [height[0]]
	const rightMaxHeight = []
	rightMaxHeight[height.length - 1] = height[height.length - 1]

	for (let i = 1; i < height.length; i++) {
		leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i])
	}

	for (let i = height.length - 2; i >= 0; i--) {
		rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i])
	}

	for (let i = 1; i < height.length - 1; i++) {
		result += Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i]
	}

	return result
}
