class Post extends Component {
	handleClick(event) {
		event.preventDefault()
		const { height } = window.getComputedStyle(event.target)
		console.log(Number.parseInt(height))
	}
	render() {
		return <p onClick={this.handleClick.bind(this)}>{this.props.content}</p>
	}
}
