class Lesson extends Component {
	render() {
		return (
			<div
				onClick={() =>
					console.log(`${this.props.index} - ${this.props.lesson.title}`)
				}
			>
				<h1>{this.props.lesson.title}</h1>
				<p>{this.props.lesson.description}</p>
			</div>
		)
	}
}

class LessonsList extends Component {
	render() {
		return (
			<div>
				{this.props.lessons.map((lesson, i) => (
					<Lesson key={i} index={i} lesson={lesson} />
				))}
			</div>
		)
	}
}
