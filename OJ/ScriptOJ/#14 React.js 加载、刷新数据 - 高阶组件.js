const loadAndRefresh = url => WrapComponent =>
	class extends Component {
		constructor(props) {
			super(props)
			this.state = { content: '数据加载中...' }
			this.getContent = this.getContent.bind(this)
			this.getContent()
		}
		getContent() {
			this.setState({ content: '数据加载中...'})
			getData(url).then(content => {
				this.setState({content})
			})
		}
		render() {
			return (
				<WrapComponent
					content={this.state.content}
					refresh={this.getContent}
					{...this.props}
				/>
			)
		}
	}
