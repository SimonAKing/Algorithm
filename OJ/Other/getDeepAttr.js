const deepAttr = { a: { b: { c: 15 } } }
const pluckDeep = path => obj =>
	path.split('.').reduce((val, attr) => val[attr], obj)

console.log(pluckDeep('a.b.c')(deepAttr))
