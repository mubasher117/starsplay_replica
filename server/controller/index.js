const fs = require('fs');
const path = require('path');
module.exports = (req, res) => {
    const pageIndex = parseInt(req.query.next)
    const pageSize = parseInt(req.query.pageSize)
    let rawData = fs.readFileSync(path.resolve(__dirname, '../data/homepage.json'));
    let data = JSON.parse(rawData)
    let response = {
        nextPage: pageIndex + 3,
        titles: []
    }
    if (pageIndex === 0){
       response.titles.push(data.titles[0])
    }
    for(let i = pageIndex + 1 ; i < pageIndex + pageSize + 1; ++i){
        if (i >= data.titles.length){
            break;
        }
        response.titles.push(data.titles[i])
    }
  res.send(JSON.stringify(response))
}