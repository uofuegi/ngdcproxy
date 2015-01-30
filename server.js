var https = require('https'),
    http = require('http'),
    util  = require('util'),
    path  = require('path'),
    url = require('url');
    fs    = require('fs'),
    httpProxy = require('http-proxy'),
    testDir = path.join(__dirname, 'test', 'ssl');
var port = process.env.port || 1333;
var options = {
    target: {
        host: 'maps.ngdc.noaa.gov',
        port: 80
    },
    headers: {
        host: 'maps.ngdc.noaa.gov'
    },
    ssl: {
        key: fs.readFileSync(path.join(testDir, 'agent2-key.pem'), 'utf8'),
        cert: fs.readFileSync(path.join(testDir, 'agent2-cert.pem'), 'utf8')
    }
};
httpProxy.createServer(options).listen(port);
//var proxy = httpProxy.createProxy()
//httpProxy.createServer(function(req, res) {
//    console.log('test console logging');
//    //proxy.web(req, res, options);
//}).listen(1334);
//console.log('test console logging');