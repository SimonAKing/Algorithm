const getType = value => {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/*
enum Type {
	object,
	null,
	undefined,
	string,
	boolean,
	number
	...
}
*/

const Type = {
	Null: 'null',
	String: 'string',
	Array: 'array',
	Object: 'object',
	// other types...
}
const isComplexType = type => type === Type.Array || type === Type.Object

const isEmpty = value => {
	const type = getType(value)
	// null
	if (type === Type.Null) { return true }
	// '', ' '
	if (type === Type.String && !value.trim().length) { return true }
	// []
	if (type === Type.Array && !value.length) { return true }
	// {}
	if (type === Type.Object && !Object.keys(value).length) { return true }
	return false
}

const safeParseJSON = json => {
	try {
		const object = JSON.parse(json)
		return object
	} catch (error) {
		return new Error(error)
	}
}

const filterObject = (object, result = {}) => {
	for (const [key, value] of Object.entries(object)) {
		if (isEmpty(value)) { continue }
		const type = getType(value)
		if (!isComplexType(type)) {
			result[key] = value
			continue
		}

		const isArray = type === Type.Array

		let filterValue = filterObject(value, isArray ? [] : {})
		if (isArray && !filterValue.length) { continue }
		if (!isArray && !Object.keys(filterValue).length) { continue }

		result[key] = filterValue
	}

	return result
}

function RemoveEmptyFields(json) {
	const object = safeParseJSON(json)
	if (object instanceof Error) {
		console.error('parse json occur error!')
		console.error(object.message)
		return
	}

	const filteredJSON = filterObject(object)
	return filteredJSON
}

const testCase = {
	firstName: 'Simon',
	company: {
		name: '',
		industries: [],
		members: [1],
		s: ['', ['  '], { name: '' }],
	},
	array: [],
	o: [1]
}

const result = RemoveEmptyFields(JSON.stringify(testCase))

console.log(result)
