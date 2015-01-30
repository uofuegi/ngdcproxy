var https = require('https'),
    http = require('http'),
    util  = require('util'),
    path  = require('path'),
    url = require('url');
    fs    = require('fs'),
    httpProxy = require('http-proxy'),
    testDir = path.join(__dirname, 'test', 'ssl');
var port = process.env.port || 1333;
httpProxy.createServer({
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
}).listen(port);