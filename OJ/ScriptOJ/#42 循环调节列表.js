const initAdjustableList = (
	ul = document.getElementById('adjustable-list'),
	lis = ul.getElementsByTagName('li'),
	btns = ul.getElementsByTagName('button')
) => {
	[...btns].forEach(btn => {
		btn.onclick = ({ target: { innerText, parentNode } }) => {
			[...lis].forEach((li, i) => {
				if (li.isEqualNode(parentNode)) {
					const newPosition =
						innerText == 'UP' ? i - 1 : i + 2 > lis.length ? 0 : i + 2
					ul.insertBefore(li, lis[newPosition])
				}
			})
		}
	})
}
