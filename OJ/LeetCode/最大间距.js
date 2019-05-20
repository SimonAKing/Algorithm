/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
	if(nums.length<2){
		return 0
	}
	nums = sort(nums)
	let result = Number.MIN_VALUE
	for(let i=1;i<nums.length;++i){
		let poor = nums[i]-nums[i-1]
		result = Math.max(result,poor)
	}
	return result
};

function sort(nums){
	return nums.sort((a,b)=>a-b)
}
