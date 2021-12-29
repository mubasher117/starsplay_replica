const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 5000

app.get('/get_data/:next', (req, res) => {
    const pageIndex = parseInt(req.params.next)
    let rawData = fs.readFileSync(path.resolve(__dirname, 'homepage.json'));
    let data = JSON.parse(rawData)
    let response = {
        nextPage: pageIndex + 3,
        titles: []
    }
    if (pageIndex === 0){
       response.titles.push(data.titles[0])
    }
    for(let i = pageIndex + 1 ; i < pageIndex + 3 + 1; ++i){
        if (i >= data.titles.length){
            break;
        }
        response.titles.push(data.titles[i])
    }
  res.send(JSON.stringify(response))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})