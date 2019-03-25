const rob = (nums) => {
	/**
	 * ? 如果只有一家 , 那么只能是第一家的钱
	 * ? 如果有两家 , 则是两家中最大的钱数
	 * ? 如果有三家 , 则是 第二家的钱数 和 第一家加第三家的钱数 的最大值
	 *
	 * * 如果有四家, 则是 前三家的最大钱数 和 前二家的最大钱数 加 第四家的钱数的最大值
	 * ! 如果有 i 家 , 而是 前 i - 1 家的最大钱数 和 前 i - 2 家的最大钱数 加i家的钱数 的最大值
	 */
	const money = [nums[0], Math.max(nums[0], nums[1])]
	for (let i = 2; i < nums.length; i++) {
		money[i] = Math.max(money[i - 2] + nums[i], money[i - 1])
	}
	return money[nums.length - 1] || 0
}
