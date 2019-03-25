const getDefaultStyledPost = defaultStyle => props => (
	<p style={Object.assign(defaultStyle, props.style)} />
)
