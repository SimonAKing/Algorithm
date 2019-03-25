class VNode {
	constructor(tagName, props, children) {
		this.tagName = tagName
		this.props = props
		this.children = children
	}
	render() {
		const element = Object.entries(this.props).reduce((el, [key, value]) => {
			el.setAttribute(key, value)
			return el
		}, document.createElement(this.tagName))

		if (this.children) {
			this.children.forEach(child => {
				if (child instanceof VNode) {
					element.append(child.render())
				} else {
					element.append(document.createTextNode(child))
				}
			})
		}
		return element
	}
}

const h = (tagName, props, children) => new VNode(tagName, props, children)

