function renderFatCats(cats) {
	cats.sort((a, b) => a.weight < b.weight ? 1 : -1)

	const CAT = props => <div className="cat">
		<span className="cat-name">{props.cat.name}</span>
		<span className="cat-weight">{props.cat.weight}</span>
	</div>

	const CATLIST = props => <div id="cats-list">{props.cats.map(item => <CAT cat={item} />)}</div>

	ReactDOM.render(<CATLIST cats={cats} />, document.getElementById('app'))
}
