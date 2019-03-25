const bindViewToData = (dom, data) => {
	const parsedRegex = /{\s*{[^}]+}\s*}/g
	const props = Object.keys(data)

	const renderDom = ({ dom, parsedContent }, data) => {
		if (!parsedRegex.test(parsedContent)) {
			return
		}

		dom.nodeValue = eval(
			`with(data){
				${`\`${parsedContent.replace(parsedRegex, str =>
					str.replace(/{\s*{/, '${').replace(/}\s*}/, '}')
				)}\``}
			}`
		)
	}

	const analyseDom = (doms, data) => {
		const regexProps = props.map(
			prop => new RegExp(`{\\s*{.*${prop}.*}\\s*}`, 'g')
		)

		const bindProps = props.reduce((r, k) => ((r[k] = []), r), {})

		doms.forEach(dom => {
			regexProps.forEach((regexProp, i) => {
				if (regexProp.test(dom.parsedContent)) {
					bindProps[props[i]].push(dom)
				}
			})
			renderDom(dom, data)
		})

		return bindProps
	}

	const getRenderedDom = (dom, doms = []) => {
		Array.from(dom.childNodes).forEach(dom => {
			dom instanceof Text
				? doms.push({ dom, parsedContent: dom.nodeValue })
				: getRenderedDom(dom, doms)
		})

		return doms
	}

	const doms = getRenderedDom(dom)
	const bindProps = analyseDom(doms, data)

	const that = {}
	props.forEach(prop => {
		that[prop] = data[prop]
		Object.defineProperty(data, prop, {
			get() {
				return that[prop]
			},
			set(value) {
				that[prop] = value
				bindProps[prop].forEach(dom => {
					renderDom(dom, that)
				})
			}
		})
	})
}
