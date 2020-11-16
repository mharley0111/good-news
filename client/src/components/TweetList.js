import React from "react"
import TweetCard from "./TweetCard"

const TweetList = ({ tweets }) => {
	const renderedList = tweets.map(tweet => {
		return <TweetCard 
						 key={tweet.id}
						 tweet={tweet}
					 />
	})

	return (
		<div className="ui relaxed divided list">
			{renderedList}
		</div>
	)
}

export default TweetList