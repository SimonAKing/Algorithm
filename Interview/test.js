const axios = require('axios')

function getQL() {
	const ql = `
	query getRepoInfo($owner: String = "Tomotoes", $weibo: String = "weibo", $gallery: String = "gallery") {
		repository(owner: $owner, name: $weibo) {
			issues(filterBy: {createdBy: $owner, states: OPEN}) {
				totalCount
			}
		}
		repositoryOwner(login: $owner) {
			repository(name: $gallery) {
				description
			}
		}
	}
	`
	return {
		operationName: 'getRepoInfo',
		query: ql
	}
}

const token = ["9c48ed2297d7d9bf9447", "6de723dbf1a6e4adeacd"]
axios({
	url: 'https://api.github.com/graphql',
	method: 'post',
	headers: {
		'Accept': 'application/json',
		Authorization: `bearer ${token.join('')}`
	},
	data: JSON.stringify(getQL()),
}).then(response => {
	console.log(response.data.data.repositoryOwner.repository.description.match(/\d+/)[0])
})
