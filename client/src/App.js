import React from "react"
import SearchBar from "./components/SearchBar"
import TweetList from "./components/TweetList"
import useTweets from "./hooks/useTweets"

const App = () => {
	const [tweets, search] = useTweets("react")

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eight wide column">
						<TweetList 
							tweets={tweets}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App