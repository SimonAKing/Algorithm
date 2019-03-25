// 函数 getNotificationsCount 已经可以直接调用

class Notification extends Component {
	render() {
		const n = getNotificationsCount()
		return <span>{n > 0 ? `有(${n})条未读消息` : '没有未读消息'}</span>
	}
}
