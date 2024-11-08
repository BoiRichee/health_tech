const express = require('express')
const app = express()
const port = 3000
const Controller = require("./controllers/index");

app.get('/', Controller.getHome)
app.get('/')
app.get('/')
app.get('/')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})