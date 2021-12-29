const express = require('express')
var cors = require('cors');
var getData = require('./controller/index')
const app = express()
const port = 5000
app.use(cors())

app.get('/api/v1/get_data', getData)
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})