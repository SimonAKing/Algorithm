// getPostData 已经可以直接使用，它会返回一个 Promise，你可以通过它获取文章的内容。
// getPostData().then((postContent) => { })

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = { content: '数据加载中...' }
		this.getPost = this.getPost.bind(this)
		this.getPost()
	}
	getPost() {
		this.setState({ content: '数据加载中...' })
		getPostData().then(postContent => {
			this.setState({ content: postContent })
		})
	}
	render() {
		return (
			<div>
				<div className="post-content">{this.state.content}</div>
				<button onClick={this.getPost}>刷新</button>
			</div>
		)
	}
}
