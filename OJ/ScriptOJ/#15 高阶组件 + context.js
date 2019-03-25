const makeProvider = data => WrapComponent =>
	class extends Component {
		static childContextTypes = {
			data: PropTypes.any
		}

		getChildContext() {
			return { data: data }
		}

		render() {
			return <WrapComponent />
		}
	}
