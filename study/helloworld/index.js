const http = require('http');
const hello = require('./libs/helloworld');
const port = 8080;

const server = http.createServer((req, res) => {
    res.end(hello.sayHello("chandler"));
});

server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port);
});
