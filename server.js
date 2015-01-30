var http = require('http'),
    httpProxy = require('http-proxy');
var port = process.env.port || 1337;
//http.createServer(function(req, res) {
//  res.writeHead(200, { 'Content-Type': 'text/plain' });
//  res.end('Hello World\n');
//}).listen(port);
httpProxy.createServer({
    target: 'https://google.com',
    headers: {
        host: 'google.com'
    }
}).listen(port);
