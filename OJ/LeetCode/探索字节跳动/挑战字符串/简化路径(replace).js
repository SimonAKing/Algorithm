const simplifyPath = path => {
	let prePath = `${path}/`

	// 提前处理掉 ... 文件夹
	path = path.replace(/\.{3}/g, '-')
	while (prePath !== path) {
		prePath = path
		path = path.replace(/\/+/g, '/')
		path = path.replace(/(\/\.\/)+/g, '/')
		path = path.replace(/\/+/g, '/')
		path = path.replace(/(\/\.?\w+\/\.{2}\/)/g, '/')
		path = path.replace(/\/+/g, '/')
		path = path.replace(/(\/\.?\w+\/\.{2})$/g, '')
		path = path.replace(/^\/\.{2}\//g, '/')
		path = path.replace(/\/+/g, '/')
		path = path.replace(/^\/\.{2}$/g, '')
		path = path.replace(/\/$/, '')
		path = path.replace(/\/\.$/, '')
	}

	const filtePath = p => {
		if (!p) { return '/' }
		if (p === '/.') { return '/' }
		return p.replace(/-/g, '...')
	}

	return filtePath(path)
}

