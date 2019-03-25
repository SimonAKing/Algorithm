const users = [
	{ name: 'Adam', age: 30, sex: 'male' },
	{ name: 'Helen', age: 27, sex: 'female' },
	{ name: 'Amy', age: 25, sex: 'female' },
	{ name: 'Anthony', age: 23, sex: 'male' }
]

const partition = (arr, isVaild) =>
	arr.reduce(
		([pass, fail], curr) =>
			isVaild(curr) ? [[...pass, curr], fail] : [pass, [...fail, curr]],
		[[], []]
	)

const isMale = person => person.sex === 'male'

const [maleUser, femaleUser] = partition(users, isMale)

console.log(maleUser, femaleUser)
