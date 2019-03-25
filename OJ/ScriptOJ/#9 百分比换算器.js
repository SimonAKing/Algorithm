class Input extends Component {
	render() {
		return (
			<div>
				<input
					type="number"
					onChange={this.props.updateValue}
					value={this.props.value}
				/>
			</div>
		)
	}
}

class PercentageShower extends Component {
	render() {
		return <div>{this.props.result}</div>
	}
}

class PercentageApp extends Component {
	constructor(props) {
		super(props)
		this.state = { value: 0, result: '0.00%' }
		this.updateValue = this.updateValue.bind(this)
	}
	updateValue(event) {
		event.preventDefault()
		const { value } = event.target
		const result = `${(value * 100).toFixed(2)}%`
		this.setState({ value, result })
	}
	render() {
		return (
			<div>
				<Input updateValue={this.updateValue} value={this.state.value} />
				<PercentageShower result={this.state.result} />
			</div>
		)
	}
}
