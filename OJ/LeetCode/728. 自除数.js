const selfDividingNumbers = (left, right) => {
	const isSelfDivideNum = n => {
		const nums = [...`${n}`].map(e => Number.parseInt(e))
		return nums.filter(e => n % e === 0).length === nums.length
	}
	return Array.from({ length: right - left + 1 }, (_, i) => left + i).filter(isSelfDivideNum)
}
