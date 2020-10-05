// 两条升序链表 合成一条逆序链表

// const node = {
// 	val,
// 	next
// }

// O(max{a.length - 1, b.length + 1})
const merge = (a, b) => {
	const hash = []
	let bound = Number.MIN_VALUE
	let q = a

	while (q.next) {
		hash[q.val] = hash[q.val] ? (hash[q.val] + 1) : 1
		bound = Math.max(bound, q.val)
		q = q.next
	}
	q.next = b
	while (q) {
		hash[q.val] = hash[q.val] ? (hash[q.val] + 1) : 1
		bound = Math.max(bound, q.val)
		q = q.next
	}

	q = a
	while (bound >= 0) {
		while (hash[bound] && hash[bound] > 0) {
			hash[bound]--
			q.val = bound
			q = q.next
		}
		bound--
	}

	return a
}

const b = {
	val: 2,
	next: null
}

const a = {
	val: 1,
	next: b
}

const d = {
	val: 4,
	next: null
}

const c = {
	val: 3,
	next: d
}

console.log(merge(a, c))
