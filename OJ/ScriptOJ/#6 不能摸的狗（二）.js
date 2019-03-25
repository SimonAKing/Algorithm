class Dog extends Component {
	constructor(props) {
		super(props)
		this.state = { isRunning: false, isBarking: false }
		this.handleClickOnDog = this.handleClickOnDog.bind(this)
	}
	bark() {
		console.log('bark')
		this.setState({
			isBarking: true
		})
		setTimeout(() => {
			this.setState({ isBarking: false })
		}, 35)
		return this
	}

	run() {
		console.log('run')
		this.setState({
			isRunning: true
		})
		setTimeout(() => {
			this.setState({ isRunning: false })
		}, 35)
		return this
	}
	handleClickOnDog(e) {
		e.preventDefault()
		this.bark().run()
	}
	render() {
		return <div onClick={this.handleClickOnDog}>DOG</div>
	}
}
