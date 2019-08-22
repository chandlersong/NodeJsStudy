const http = require('http');
const event = require('events');
const hello = require('./libs/helloworld');
const port = 8080;

const channel = new event.EventEmitter();
channel.on('hello', name => {
    console.log(`hello ${name}`);
});

const server = http.createServer((req, res) => {
    console.info(req.url);
    res.end(hello.sayHello("chandler"));

});
channel.emit('hello', "chandler");
server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port);
});
