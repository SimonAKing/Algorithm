class VNode {
	constructor(tagName, props, children) {
		this.tagName = tagName
		this.props = props
		this.children = children
	}
}

const h = (tagName, props, children) => new VNode(tagName, props, children)
