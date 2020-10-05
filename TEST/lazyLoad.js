const images = Array.from(document.querySelectorAll('img[data-original]'))

const hadLoadSymbol = Array.from({ length: images.length })

function elementHasInViewport(el) {
	let rect = el.getBoundingClientRect()
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight)
	)
}
function loadImage(el, index) {
	let img = new Image()
	let src =
		el.dataset.original ||
		'https://cdn.jsdelivr.net/gh/Tomotoes/images/404.png'
	img.src = src
	img.onload = function () {
		el.src = src
		hadLoadSymbol[index] = true
	}
	img.onerror = function () {
		el.src = 'https://cdn.jsdelivr.net/gh/Tomotoes/images/404.png'
		hadLoadSymbol[index] = true
	}
}

function processImages() {
	for (let i = 0; i < images.length; ++i) {
		if (!hadLoadSymbol[i] && elementHasInViewport(images[i])) {
			loadImage(images[i], i)
		}
	}
}

const throttle = (fn, wait) => {
	let inThrottle, lastFn, lastTime
	return function () {
		const context = this
		const args = arguments
		if (!inThrottle) {
			inThrottle = true
			fn.apply(context, args)
			lastTime = Date.now()
			return
		}

		clearTimeout(lastFn)
		lastFn = setTimeout(function () {
			if (Date.now() - lastTime >= wait) {
				fn.apply(context, args)
				lastTime = Date.now()
			}
		}, Math.max(wait - (Date.now() - lastTime), 0))
	}
}

if (images && images.length) {
	processImages()
	window.addEventListener('scroll', throttle(processImages, 300), false)
}
