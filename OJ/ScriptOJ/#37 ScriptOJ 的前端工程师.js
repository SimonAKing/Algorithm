/* socket 对象已经可以直接使用 */

function initNotification() {
	socket.on(
		'new notification',
		n => (document.title = `（${n} 条消息）ScriptOJ`)
	)
	document.getElementById('mark-read').addEventListener('click', () => {
		socket.emit('mark all read')
		document.title = 'ScriptOJ'
	})
}
