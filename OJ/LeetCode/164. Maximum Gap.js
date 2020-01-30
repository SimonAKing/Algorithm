const maximumGap = nums => {
	if(nums.length < 2){
		return 0
	}
	nums = nums.sort((a,b)=>a-b)
	let result = Number.MIN_VALUE
	for(let i=1;i<nums.length;++i){
		result = Math.max(result,nums[i]-nums[i-1])
	}
	return result
};

