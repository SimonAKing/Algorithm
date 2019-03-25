class BlackBorderContainer extends Component {
	render() {
		return (
			<div>
				{this.props.children.map((child, index) => (
					<div style={{ border: '1px solid #000000' }} key={index}>
						{child}
					</div>
				))}
			</div>
		)
	}
}
