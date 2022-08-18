const express = require('express')
const app = express()

//servir contenido estatico
// app.use(express.static('public'))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080)