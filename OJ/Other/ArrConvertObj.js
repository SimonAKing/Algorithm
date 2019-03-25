const objLikeArr = [['name', 'Jim'], ['age', 18], ['single', true]]

const fromPairs = pairs =>
	pairs.reduce((obj, pair) => (obj[pair[0]] = pair[1], obj), {})

console.log(fromPairs(objLikeArr))
