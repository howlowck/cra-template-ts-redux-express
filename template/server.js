require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const port = process.env.SERVER_PORT || '3003'

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
