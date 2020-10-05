const rand10 = () => {
	let result = rand7()
	// 等概率(1,2,3,4,5)
	while (result > 5) result = rand7()
	// 等概率(1,2,3,4,5,6) , <=3的(1,2,3)占50% , >3的(4,5,6)占50%
	let temp = rand7()
	while (temp === 7) temp = rand7()
	return temp <= 3 ? result : result + 5 // 50%(1,2,3,4,5) : 50%(6,7,8,9,10)
}
