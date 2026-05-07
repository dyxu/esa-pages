// index.js
var http = require("http");
var hostname = "0.0.0.0";
var port = process.env.PORT || 3e3;
var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hello, Node.js HTTP server!\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
