const http = require("http");

let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Success, I am listening from port 3000\n");
});

app.listen(3000, "127.0.0.1");
// console.log('Success, I am listening from port 3000');
