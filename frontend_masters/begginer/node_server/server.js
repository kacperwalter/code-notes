// all you need to do is run this with "node server.js"
const http = require("http");

// req = request, res = response
const server = http.createServer(function(req, res) {
  console.log(`user visited ${req.url}`);
  res.end("hello!");
});

console.log("listening on http://localhost:3000");
server.listen(3000);