/* 自己写的... */
{
	const isUSDFormat = str => {
		if (!/^\$/.test(str)) {
			return false
		}
		if (!/^[^\.]*$|^[^\.]*\.\d{2}$/.test(str)) {
			return false
		}
		str = str.replace(/^\$|\.\d{2}$/g, '')
		const arr = str.split(',')
		if (
			arr.length &&
			arr.some(({ length }, index) => (index === 0 ? length > 3 : length !== 3))
		) {
			return false
		}
		if (!arr.length && str.length > 3) {
			return false
		}
		str = str.replace(/\,/g, '')
		if (!/^\d+$/.test(str)) {
			return false
		}
		if (/^0/.test(str) && str.length > 1) {
			return false
		}
		return true
	}
}

/* ! 大家写的 */
const isUSDFormat = str => /^\$([1-9]\d{0,2}(,\d{3})*|0)(\.\d{2})?$/.test(str)
