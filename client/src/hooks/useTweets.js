import { useState, useEffect } from "react"
import axios from "axios"

const useTweets = (defaultSearchTerm) => {
	const [tweets, setTweets] = useState([])

	useEffect(() => {
		search(defaultSearchTerm)
	}, [defaultSearchTerm])

	const search = async (term) => {
		const res = await axios.get("http://localhost:4000/tweets", {
			params: {
				searchTerm: term
			}
		})

		setTweets(res.data)
	}

	return [tweets, search]
}

export default useTweets