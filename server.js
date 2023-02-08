//Dependencies
const express = require("express")
const app = express()

//Configuration
require("dotenv").config()
const PORT = process.env.PORT

//home- index
app.get("/", (req, res) => {
    res.send("HELLO WORLD!")
})

app.listen(PORT, () => {
    console.log("I AM AWAKE")
})

module.exports = app;