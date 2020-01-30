/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	x = x.toString(2)
	y = y.toString(2)
	const maxLength = Math.max(x.length,y.length)
	x = x.padStart(maxLength,'0')
	y = y.padStart(maxLength,'0')

	let res = 0
	for(let i=0; i<maxLength ;++i){
		res += x[i] !== y[i]
	}
	return res
};
