export function solution(nums: number[]): number[] {
	nums.sort((a, b) => a - b)
	return nums
}
