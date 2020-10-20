const reverseList = head => {
	let a = head
	let b = null
	let c = null

	while (a) {
		b = a.next
		a.next = c
		c = a
		a = b
	}

	return c
}
[Scrcpy](https://github.com/Genymobile/scrcpy) 是一款近两年非常知名的Android控制软件，用户可以通过`USB`/`TCP`来控制`Android`设备，不需任何权限，适用于全平台。但官方只提供了通过命令来启动程序，这在普通用户的使用中会十分麻烦。于是我根据这一痛点，打磨了一款`Scrcpy-Gui` 软件。
