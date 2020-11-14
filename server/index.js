const axios = require("axios") 

const twitterBearerToken = process.env.TWITTER_APP_BEARER_TOKEN

const recentSearchUrl = "https://api.twitter.com/2/tweets/search/recent"

const queryParams = {
	query: "python -is:retweet lang:en"
}

const searchTweets = async () => {
	const res = await axios.get(recentSearchUrl, {
		params: queryParams,
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

(async () => {
	try {
		const response = await searchTweets()
		console.log(response)
	} catch(e) {
		console.log(e)
		process.exit(-1)
	}
	process.exit()
})()