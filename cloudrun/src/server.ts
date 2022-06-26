import http from "http";

const PORT = 8002;

http
  .createServer((req, res) => {
    if (req.url != null && req.url === "/") {
      res.write("<!DOCTYPE html>");
      res.write(
        "<html><head><title>HELLO</title></head><body><h1>hello</h1></body></html>"
      );
      res.end();
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(PORT);
console.log(`running at http://localhost:${PORT}`);
