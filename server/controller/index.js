const fs = require("fs");
const path = require("path");
module.exports = (req, res) => {
  let response = {
    success: false,
  };
  // Validations
  if (!req.query.next) {
    response.errorCode = "MISSING_NEXT_PARAM";
    response.message = "next param is missing";
    res.status(500);
    res.send(response);
    return;
  }
  if (!req.query.pageSize) {
    response.errorCode = "MISSING_PAGE_SIZE_PARAM";
    response.message = "page size param is missing";
    res.status(500);
    res.send(response);
    return;
  }
  
  const pageIndex = parseInt(req.query.next);
  if (isNaN(pageIndex)) {
    response.errorCode = "INVALID_NEXT_PARAM";
    response.message = "next param is invalid";
    res.status(500);
    res.send(response);
    return;
  }

  const pageSize = parseInt(req.query.pageSize);
  if (isNaN(pageSize)) {
    response.errorCode = "INVALID_PAGE_SIZE_PARAM";
    response.message = "page size param is invalid";
    res.status(500);
    res.send(response);
    return;
  }

  let rawData = fs.readFileSync(
    path.resolve(__dirname, "../data/homepage.json")
  );
  let data = JSON.parse(rawData);

  response = {
    nextPage: pageIndex + 3,
    titles: [],
  };

  if (pageIndex === 0) {
    response.titles.push(data.titles[0]);
  }

  for (let i = pageIndex + 1; i < pageIndex + pageSize + 1; ++i) {
    if (i >= data.titles.length) {
      break;
    }

    response.titles.push(data.titles[i]);
  }

  response.success = true;

  res.send(JSON.stringify(response));
};
