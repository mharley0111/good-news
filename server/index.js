const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { searchTweets } = require("./src/controllers/tweets")

const app = express()
app.use(bodyParser.json())
app.use(cors({
	origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

app.get("/tweets", async (req, res) => {
	try {
		const response = await searchTweets(req.query.searchTerm)
		res.status(200).send(response.data)
	} catch(e) {
		res.status(500).send({ message: "Internal Server Error" })
	}
})

app.listen(4000, () => {
	console.log("Listening on 4000")
})
