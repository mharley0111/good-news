const axios = require("axios")

const twitterBearerToken = process.env.TWITTER_APP_BEARER_TOKEN
const recentSearchUrl = "https://api.twitter.com/2/tweets/search/recent"

const searchTweets = async (searchTerm) => {
	const res = await axios.get(recentSearchUrl, {
		params: {
			query: `${searchTerm} -is:retweet lang:en`
		},
		headers: {
			"Authorization": `Bearer ${twitterBearerToken}`
		}
	})

	if (res.status === 200) {
		return res.data
	} else {
		throw new Error("Unsuccessful request")
	}
}

module.exports = { searchTweets }