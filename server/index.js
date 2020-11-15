const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { searchTweets } = require("./src/controllers/tweets")

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/tweets", async (req, res) => {
	try {
		const tweets = await searchTweets(req.query.searchTerm)
		res.status(200).send({ data: tweets })
	} catch(e) {
		res.status(500).send({ message: "Internal Server Error" })
	}
})

app.listen(4000, () => {
	console.log("Listening on 4000")
})
