function throttle(fn, wait) {
	let inThrottle, lastTime, lastFn

	return function () {
		const context = this
		const args = arguments

		if (!inThrottle) {
			inThrottle = true
			lastTime = Date.now()
			fn.apply(context, args)
			return
		}

		clearTimeout(lastFn)

		lastFn = setTimeout(function () {
			if (Date.now() - lastTime >= wait) {
				lastTime = Date.now()
				fn.apply(context, args)
			}
		}, Math.max(0, wait - (Date.now() - lastTime)))
	}
}

function throttle (func, wait) {
  var ctx, args, rtn, timeoutID; // caching
  var last = 0;

  return function throttled () {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID)
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };

  function call () {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }
}
