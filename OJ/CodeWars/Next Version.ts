export function nextVersion(version: string) {
	const nums = version.split('.').map(e => Number.parseInt(e))
	let curry = 0
	for (let i = nums.length - 1; i >= 0; i--) {
		nums[i] += i === nums.length - 1 ? 1 : 0 + curry
		curry = Math.floor(nums[i] / 10)
		if (i !== 0) { nums[i] %= 10 }
	}

	return nums.join('.')
}

console.log(nextVersion("1.2.3") === "1.2.4")

console.log(nextVersion("0.9.9") === "1.0.0")

console.log(nextVersion("1") === "2")

console.log(nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9")

console.log(nextVersion("9.9") === "10.0")
