const baseUrl = 'http://tinyurl.com/'

const store = {}

const randomChar = () => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'[Math.floor(Math.random() * 62)]

const randomText = (len = 5) => {
	let result = ''
	for (i = 0; i < len; i++) {
		result += randomChar()
	}
	return result
}


/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
	const shortUrl = baseUrl + randomText()
	store[shortUrl] = longUrl
	return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
	return store[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
