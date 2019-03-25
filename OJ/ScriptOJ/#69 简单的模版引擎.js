const render = (template, data) => {
	const spliter = /<%.*?%>/g

	const plain = template
		.split(spliter)
		.map(str => `r.push(${JSON.stringify(str)})\n`)

	const dynamic = template
		.match(spliter)
		.map(str =>
			str.startsWith('<%=') ? `r.push(${str.slice(3, -2)})` : str.slice(2, -2)
		)

	const code = `
	const r = [];
	with(data){
		${plain.map((txt, i) => txt + (dynamic[i] || '')).join('\n')}
	}
	r.join('')`

	return eval(code)
}

{
	const render = (template, data) => {
		const result = `var p=[];with(data){p.push('${template
			.replace(/[\r\n\t]/g, '')
			.replace(/<%=(.*?)%>/g, '\');p.push($1);p.push(\'')
			.replace(/<%/g, '\');')
			.replace(/%>/g, ';p.push(\'')}');} p.join('');`

		return eval(result)
	}
}
const templateStr = `
<ul class="users">
  <% users.forEach((user) => { %>
      <%= 'My name is ' + user.name %>
      <%= 'My name is ' + user.name %>
      <%= 'My name is ' + user.name %>
  <% }) %>
</ul>
`

const data = {
	users: [
		{ name: 'Jerry', age: 12 },
		{ name: 'Lucy', age: 13 },
		{ name: 'Tomy', age: 14 }
	]
}

console.log('render(templateStr, data):', render(templateStr, data))
