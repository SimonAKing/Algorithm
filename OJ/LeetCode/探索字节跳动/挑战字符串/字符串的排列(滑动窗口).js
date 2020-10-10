const checkInclusion = (s1, s2) => {
	if (s1.length > s2.length) { return false }
	const s1Map = {}
	const s2Map = {}

	const isMatch = (map1, map2) => Object.keys(map1).every((key) => map1[key] === map2[key])

	for (let i = 0; i < s1.length; i++) {
		s1Map[s1[i]] = s1Map[s1[i]] ? (s1Map[s1[i]] + 1) : 1
		s2Map[s2[i]] = s2Map[s2[i]] ? (s2Map[s2[i]] + 1) : 1
	}

	for (let i = 0; i <= s2.length - s1.length; i++) {
		if (isMatch(s1Map, s2Map)) { return true }

		s2Map[s2[s1.length + i]] = s2Map[s2[s1.length + i]] ? (s2Map[s2[s1.length + i]] + 1) : 1
		s2Map[s2[i]]--
	}

	return false
}

/**
 * 将大数据 划分出一个 已小数据为尺寸的窗口
 * 比较 窗口的hash 与小数据的 hash 是否相同, 如果相同的话就说明 窗口是小数据的排列之一
 * 如果不相同, 窗口移动
 */
