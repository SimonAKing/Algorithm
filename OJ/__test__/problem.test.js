const problem = '#58 SQL in JS（LINQ版本）'
const query = require(`../ScriptOJ/${problem}`)

describe(problem, () => {
	const somenumbers = [1, 2, 3]
	let persons = [
		{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' },
		{ name: '迈克尔', profession: '教师', age: 50, maritalStatus: '未婚' },
		{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' },
		{ name: '安娜', profession: '科学家', age: 20, maritalStatus: '已婚' },
		{ name: '露丝', profession: '科学家', age: 50, maritalStatus: '已婚' },
		{ name: '安娜', profession: '科学家', age: 20, maritalStatus: '未婚' },
		{ name: '安娜', profession: '政治家', age: 50, maritalStatus: '已婚' }
	]
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	function profession(person) {
		return person.profession
	}
	function name(person) {
		return person.name
	}
	function age(person) {
		return person.age
	}
	function maritalStatus(person) {
		return person.maritalStatus
	}
	function isTeacher(person) {
		return person.profession === '教师'
	}
	function isEven(number) {
		return number % 2 === 0
	}

	function parity(number) {
		return isEven(number) ? '偶数' : '奇数'
	}
	function isPrime(number) {
		if (number < 2) {
			return false
		}
		let divisor = 2
		for (; number % divisor !== 0; divisor++){}
		return divisor === number
	}

	function prime(number) {
		return isPrime(number) ? '素数' : '合数'
	}
	function odd(group) {
		return group[0] === '奇数'
	}
	function descendentCompare(number1, number2) {
		return number2 - number1
	}
	let teachers = [ { teacherId: '1', teacherName: '彼得' }, { teacherId: '2', teacherName: '安娜' } ]
	let students = [ { studentName: '迈克尔', tutor: '1' }, { studentName: '露丝', tutor: '2' } ]
	function teacherJoin(join) {
		return join[0].teacherId === join[1].tutor
	}

	function student(join) {
		return { studentName: join[1].studentName, teacherName: join[0].teacherName }
	}
	function tutor1(join) {
		return join[1].tutor === '1'
	}
	function lessThan3(number) {
		return number < 3
	}

	function greaterThan4(number) {
		return number > 4
	}
	function greatThan1(group) {
		return group[1].length > 1
	}

	function isPair(group) {
		return group[0] % 2 === 0
	}

	function id(value) {
		return value
	}

	function frequency(group) {
		return { value: group[0], frequency: group[1].length }
	}
	test('base-test',()=>{
		expect(query().select().from(somenumbers).execute()).toEqual(somenumbers)
		expect(query().from(somenumbers).select().execute()).toEqual(somenumbers)
		expect(query().select().from(persons).execute()).toEqual(persons)
		expect(query().select().from(numbers).execute()).toEqual(numbers)
	})
	test('select-test',()=>{
		expect(query().select(profession).from(persons).execute()).toEqual(['教师', '教师', '教师', '科学家', '科学家', '科学家', '政治家'])
	})
	test('duplicate-test',()=>{
		expect(() => query().select().select().execute()).toThrow(new Error('Duplicate SELECT'))
		expect(() => query().select().from([]).from([]).execute()).toThrow(new Error('Duplicate FROM'))
		expect(query().select().from([]).where([]).where([])).toHaveProperty('execute')
	})
	test('omit-test',()=>{
		expect(query().select().execute()).toEqual([])
		expect(query().from(somenumbers).execute()).toEqual(somenumbers)
		expect(query().execute()).toEqual([])
	})
	test('where-test',()=>{
		expect(query().select(profession).from(persons).where(isTeacher).execute()).toEqual(['教师', '教师', '教师'])
		expect(query().select().from(persons).where(isTeacher).execute()).toEqual([
			{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' },
			{ name: '迈克尔', profession: '教师', age: 50, maritalStatus: '未婚' },
			{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' }])
		expect(query().select(name).from(persons).where(isTeacher).execute()).toEqual(['彼得', '迈克尔', '彼得'])
		expect(query().select().from(numbers).where(lessThan3, greaterThan4).execute()).toEqual([1, 2, 5,6,7,8,9])
	})
	test('group-test',()=>{
		expect(query().select().from(persons).groupBy(profession).execute()).toEqual(
			[
				['教师',
					[
						{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' },
						{ name: '迈克尔', profession: '教师', age: 50, maritalStatus: '未婚' },
						{ name: '彼得', profession: '教师', age: 20, maritalStatus: '已婚' }
					]
				],
				['科学家',
					[{ name: '安娜', profession: '科学家', age: 20, maritalStatus: '已婚' },
					{ name: '露丝', profession: '科学家', age: 50, maritalStatus: '已婚' },
					{ name: '安娜', profession: '科学家', age: 20, maritalStatus: '未婚' }]
				],
				['政治家',[ { name: '安娜', profession: '政治家', age: 50, maritalStatus: '已婚' } ]]
			]
		)
		expect(query().select().from(numbers).groupBy(parity).execute()).toEqual([['奇数', [1, 3, 5, 7, 9]], ['偶数', [2, 4, 6, 8]]])
		expect(query().select().from(numbers).groupBy(parity, prime).execute()).toEqual([['奇数', [['合数', [1, 9]], ['素数', [3, 5, 7]]]], ['偶数', [['素数', [2]], ['合数', [4, 6, 8]]]]])
		expect(query().select().from(persons).groupBy(profession,name,age,maritalStatus).execute()).toEqual([['教师',[['彼得',[[20,[['已婚',[{'name':'彼得','profession':'教师','age':20,'maritalStatus':'已婚'},{'name':'彼得','profession':'教师','age':20,'maritalStatus':'已婚'}]]]]]],['迈克尔',[[50,[['未婚',[{'name':'迈克尔','profession':'教师','age':50,'maritalStatus':'未婚'}]]]]]]]],['科学家',[['安娜',[[20,[['已婚',[{'name':'安娜','profession':'科学家','age':20,'maritalStatus':'已婚'}]],['未婚',[{'name':'安娜','profession':'科学家','age':20,'maritalStatus':'未婚'}]]]]]],['露丝',[[50,[['已婚',[{'name':'露丝','profession':'科学家','age':50,'maritalStatus':'已婚'}]]]]]]]],['政治家',[['安娜',[[50,[['已婚',[{'name':'安娜','profession':'政治家','age':50,'maritalStatus':'已婚'}]]]]]]]]])
	})
	test('having-test',()=>{
		expect(query().select().from(numbers).groupBy(parity).having(odd).execute()).toEqual([['奇数', [1, 3, 5, 7, 9]]])
		expect(query().select(frequency).from(numbers).groupBy(id).having(greatThan1).having(isPair).execute()).toEqual([])
	})
	test('order-test',()=>{
		expect(query().select().from(numbers).orderBy(descendentCompare).execute()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
	})
	test('multiTables -test',()=>{
		expect(query().select(student).from(teachers, students).where(teacherJoin).execute() ).toEqual([{ 'studentName': '迈克尔', 'teacherName': '彼得' }, { 'studentName': '露丝', 'teacherName': '安娜' }])
		expect(query().select(student).from(teachers, students).where(teacherJoin).where(tutor1).execute()).toEqual([{ 'studentName': '迈克尔', 'teacherName': '彼得' }])
	})
})
