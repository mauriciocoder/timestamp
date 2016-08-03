const express = require("express");
const service = require("./service.js");
var app = express();
app.use(express.static("public"));
app.get("/timestamp/:TIME", function(req, resp) {
  var time = req.params.TIME;
  var responseDate = service.getResponseDate(time);
  resp.json(responseDate);
});
app.listen(process.env.PORT || 8080, function () {
  console.log("Timestamp app listening on port " + process.env.PORT);
});