export function isValidWalk(walk: string[]) {
	if (walk.length !== 10) { return false }

	// north south west east
	let distance = walk.join('')

	const ReDistance = /((ns)|(we)|(sn)|(ew)|(enws)|(eswn)|(wnes)|(wsen)|(nwse)|(nesw)|(swne)|(senw)))/gi

	while (ReDistance.test(distance)) {
		distance = distance.replace(ReDistance, '')
	}

	console.log(walk, distance)
	return distance === ''
}

const assert = {
	equal(i, r) {
		console.log(i, r)
	}
}

assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
assert.equal(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), false);
assert.equal(isValidWalk(['w']), false);
assert.equal(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), false);
