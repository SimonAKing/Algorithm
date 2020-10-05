/**
 * Initialize your data structure here.
 */
const Twitter = function () {
	this.user = new Map()
	this.twitter = new Map()
	this.order = 0
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
	const news = this.twitter.get(userId) || []
	this.order += 1
	this.twitter.set(userId, [...news, { id: tweetId, order: this.order }])
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
	const userNews = this.twitter.get(userId) || []
	const followees = this.user.get(userId) || []
	const news = followees.reduce((n, f) => [...n, ...(this.twitter.get(f) || [])], userNews)

	news.sort((a, b) => b.order - a.order)

	return news.slice(0, 10).map(({ id }) => id)
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
	if (followerId === followeeId) { return }
	const followees = this.user.get(followerId) || []
	if (followees.includes(followeeId)) { return }
	this.user.set(followerId, [...followees, followeeId])
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
	const followees = this.user.get(followerId) || []
	const index = followees.indexOf(followeeId)
	if (index === -1) { return }
	this.user.set(followerId, [...followees.slice(0, index), ...followees.slice(index + 1)])
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// const twitter = new Twitter()

// twitter.postTweet(1, 5)
// twitter.postTweet(1, 3)

// const r = twitter.getNewsFeed(1)
// console.log(r)
