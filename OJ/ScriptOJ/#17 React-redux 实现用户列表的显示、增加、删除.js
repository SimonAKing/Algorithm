const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'
const UPDATE_USER = 'UPDATE_USER'

const usersReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.user]
		case DELETE_USER:
			return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
		case UPDATE_USER:
			return [
				...state.map((user, index) => {
					if (index === action.index) {
						return { ...user, ...action.user }
					}
					return user
				})
			]
		default:
			return state
	}
}

class User extends Component {
	render() {
		const { user } = this.props
		return (
			<div>
				<div>Name: {user.username}</div>
				<div>Age: {user.age}</div>
				<div>Gender: {user.gender}</div>
				<button onClick={() => this.props.onDeleteUser(this.props.index)}>
					删除
				</button>
			</div>
		)
	}
}

class UsersList extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			age: 0,
			gender: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e) {
		switch (e.target.type) {
			case 'text':
				this.setState({ username: e.target.value })
				break
			case 'number':
				this.setState({ age: Number(e.target.value) })
				break
			case 'radio':
				this.setState({ gender: e.target.value })
				break
			default:
				throw new Error('Input Type Error!')
		}
	}

	render() {
		const { users } = this.props
		return (
			<div>
				<div className="add-user">
					<div>
						Username:{' '}
						<input
							type="text"
							onChange={this.handleInputChange}
							value={this.state.username}
						/>
					</div>
					<div>
						Age:{' '}
						<input
							type="number"
							onChange={this.handleInputChange}
							value={this.state.age}
						/>
					</div>
					<div>
						Gender:
						<label>
							Male:{' '}
							<input
								type="radio"
								name="gender"
								value="male"
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							Female:{' '}
							<input
								type="radio"
								name="gender"
								value="female"
								onChange={this.handleInputChange}
							/>
						</label>
					</div>
					<button onClick={() => this.props.onAddUser(this.state)}>增加</button>
				</div>
				<div className="users-list">
					{users.map((user, index) => (
						<User
							user={user}
							key={index}
							index={index}
							onDeleteUser={this.props.onDeleteUser}
						/>
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({ users: state })

const mapDispatchToProps = dispatch => ({
	onAddUser: user => {
		dispatch({ type: 'ADD_USER', user })
	},
	onDeleteUser: index => {
		dispatch({ type: 'DELETE_USER', index: index })
	}
})
UsersList = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersList)
