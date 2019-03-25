class Computer extends Component {
	constructor(props) {
		super(props)
		this.state = { status: 'off', content: '显示器关了' }
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(event) {
		event.preventDefault()
		this.setState(({ status, content }) => ({
			status: status === 'off' ? 'on' : 'off',
			content: content === '显示器关了' ? '显示器亮了' : '显示器关了'
		}))
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>开关</button>
				<Screen showContent={this.state.content} />
			</div>
		)
	}
}

class Screen extends Component {
	render() {
		return <div className="screen">{this.props.showContent}</div>
	}
}
Screen.defaultProps = {
	showContent: '无内容'
}
