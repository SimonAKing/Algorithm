class House extends Component {
	render(){
		return (
			<div className="house">
				<Room></Room>
				<Bathroom></Bathroom>
			</div>
		)
	}
}

class Room extends Component {
	render() {
		return (
			<div className="room">
				<Man></Man>
				<Dog></Dog>
				<Dog></Dog>
			</div>
		)
	}
}

class Bathroom extends Component {
	render() {
		return (
			<div className="bathroom">

			</div>
		)
	}
}

class Man extends Component {
	render() {
		return (
			<div className="man">

			</div>
		)
	}
}

class Dog extends Component {
	render() {
		return (
			<div className="dog">

			</div>
		)
	}
}
