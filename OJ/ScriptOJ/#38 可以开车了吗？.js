const driveCustomers = (...fns) => {
	const passengers = []

	Promise.all(
		fns.map(
			fn =>
				new Promise(res =>
					fn(name => {
						passengers.push(name), res(name)
					})
				)
		)
	).then(() => drive(passengers))
}
