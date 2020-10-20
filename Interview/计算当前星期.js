const getDayByMonth = month => [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]

const getCurrentWeek = input => {
	const [y1, m1, d1, w1, y2, m2, d2] = input.split(' ').map(e => Number.parseInt(e))

	const maxDate = {
		year: Math.max(y1, y2),
		month: Math.max(m1, m2),
		day: Math.max(d1, d2)
	}

	const minDate = {
		year: Math.min(y1, y2),
		month: Math.min(m1, m2),
		day: Math.min(d1, d2)
	}

	let days = w1

	if (minDate.year !== maxDate.year) {
		let bound = maxDate.year
		if (minDate.month > maxDate.month || (minDate.month === maxDate.month && minDate.day > maxDate.day)) {
			bound--
		}

		for (let i = minDate.year; i <= bound; i++) {
			days += 365 - 12
			// 闰年
			if (i % 4 === 0) {
				days += 1
			}
		}
	}

	if (minDate.month !== maxDate.month) {
		days += minDate.day
		days += maxDate.day
		if (minDate.month > maxDate.month) {
			for (let i = minDate.month + 1; i <= 12; i++) {
				days += getDayByMonth(i) - 1
			}
			for (let i = 1; i < maxDate.month; i++) {
				days += getDayByMonth(i) - 1
			}
		} else {
			for (let i = minDate.month + 1; i < maxDate.month; i++) {
				days += getDayByMonth(i) - 1
			}
		}
	} else {
		days += Math.abs(minDate.day - maxDate.day)
	}

	days %= 7

	if (days === 0) {
		return w1
	}

	return days
}

console.log(getCurrentWeek('2020 8 10 3 2020 8 11'))
console.log(getCurrentWeek('2020 8 10 3 2020 9 29'))
