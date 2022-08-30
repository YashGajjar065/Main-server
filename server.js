const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from server");
});

const localhost = "127.0.0.1";
const port = 8000;
server.listen(port, localhost, () => {
    console.log(`Listening on port no. ${localhost}:${port}`);
});