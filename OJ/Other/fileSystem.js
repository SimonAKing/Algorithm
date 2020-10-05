const readline = () => { }

let groupCount = Number.parseInt(readline())

while (groupCount) {
	let callCount = Number.parseInt(readline())
	const commands = []
	while (callCount) {
		commands.push(readline())
		callCount--
	}
	groupCount--

	const fdMap = []
	const getFd = () => {
		for (let i = 0; i < fdMap.length; i++) {
			if (!fdMap[i]) {
				fdMap[i] = true
				return i
			}
		}
		fdMap[fdMap.length] = true
		return fdMap.length
	}
	const removeFd = index => { fdMap[index] = undefined }

	const S = {}
	commands.forEach(cmd => {
		if (cmd.startsWith('open')) {
			const file = cmd.split(' ').pop()
			const fd = getFd()
			S[file] = S[file] ? [...S[file], fd] : [fd]
			print(fd)
		} else if (cmd.startsWith('dup2')) {
			const [fd, newFd] = cmd.split(' ').slice(1).map(f => Number.parseInt(f))
			for (const [key, value] of S) {
				let index = value.indexOf(newFd)
				if (index !== -1) {
					S[key] = [...S[key].slice(0, index), ...S[key].slice(index + 1)]
				}
				if (value.incudes(fd)) {
					S[key].push(newFd)
				}
			}
		} else if (cmd.startsWith('dup')) {
			const fd = Number.parseInt(cmd.split(' ').pop())
			const newFd = getFd()
			for (const [key, value] of S) {
				if (value.incudes(fd)) {
					S[key].push(newFd)
					print(newFd)
					break
				}
			}
		} else if (cmd.startsWith('close')) {
			const fd = Number.parseInt(cmd.split(' ').pop())
			removeFd(fd)
			for (const [key, value] of S) {
				let index = value.indexOf(fd)
				if (index !== -1) {
					S[key] = [...S[key].slice(0, index), ...S[key].slice(index + 1)]
					break
				}
			}
		} else if (cmd.startsWith('query')) {
			const fd = Number.parseInt(cmd.split(' ').pop())
			for (const [key, value] of S) {
				if (value.incudes(fd)) {
					print(key)
					break
				}
			}
		}
	})
}
