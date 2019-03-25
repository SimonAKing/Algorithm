function initCheckBox(
	all = document.getElementById('check-all'),
	options = [...document.querySelectorAll('.check-item')]
) {
	all.addEventListener('change', () =>
		options.forEach(o => (o.checked = all.checked))
	)
	options.forEach(o =>
		o.addEventListener(
			'change',
			() => (all.checked = options.every(o => o.checked))
		)
	)
}
