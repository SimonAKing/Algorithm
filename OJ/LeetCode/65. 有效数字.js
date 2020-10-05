/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function(s) {
	return /^((\+|-)?)((\d+)|(\d+\.\d*)|(\d*\.\d+))((e(\+|-)?\d+)?)$/.test(s.trim())
}


// var isNumber = function(s) {
// 	return s.trim() && !isNaN(s)
// };
