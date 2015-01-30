console.log('started');
var https = require('https'),
    http = require('http'),
    util  = require('util'),
    path  = require('path'),
    url = require('url');
    fs    = require('fs'),
    httpProxy = require('http-proxy'),
    log4js = require('log4js'),
    testDir = path.join(__dirname, 'test', 'ssl');
console.log("configure log4js");
var logDir = "./logs";
if (!fs.existsSync(logDir)) {
    console.log("no log folder");
    fs.mkdirSync(logDir);
}
log4js.configure({
    appenders: [
        { type: 'console' },
        {
            type: 'file',
            filename: 'logs/startup.log',
            "maxLogSize": 20480,
            "backups": 3
            //category: ['startup','console']
        }
    ],
    replaceConsole: true
});
//log4js.loadAppender('file');
var logger = log4js.getLogger('testing');
//logger.setLevel('INFO');
console.log("logger retrieved");
logger.info("requires loaded");
//log4js.shutdown(function() { process.exit(1); });
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
logger.info('listening port: '+ port);
