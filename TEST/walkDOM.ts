/* eslint-env browser */
const dfs = (root, action) => {
	action(root)
	Array.from(root?.children ?? []).forEach(element => {
		dfs(element, action)
	})
}

dfs(document.body, el => console.log(el.tagName))

const bfs = (root, action) => {
	const queue = [root]
	while (queue.length) {
		const el = queue.shift()
		action(el)
		queue.push(...Array.from(el?.children ?? []))
	}
}

bfs(document.body, el => console.log(el.tagName))
