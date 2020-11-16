import "./TweetCard.css"
import React from "react"

const TweetCard = ({ tweet }) => {
	return (
		<div className="tweet-card item">
			<div className="content">
				<div className="header">
					{tweet.text}
				</div>
			</div>
		</div>
	)
}

export default TweetCard