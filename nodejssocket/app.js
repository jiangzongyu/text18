/**
 * Created by ¥Û”Ì∏Á on 2017/3/29.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    var requrl = url.parse(req.url).pathname;
    // sole.log(req.method);
    // console.log(requrl);
    // console.log(pathname);
    // console.log(__dirname);
    switch (requrl) {
        case '/' :
            resIndex(res);
            break;
        default:
            resError(res);
            break;
    }
}).listen(3000);

console.log("server start");

function resError(res) {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.end('page missing');
}

function resIndex(res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    var realPath = __dirname + '/' + url.parse('index.html').pathname;//µÿ÷∑
    // console.log(realPath);
    var indexPage = fs.readFileSync(realPath, 'utf-8');
    res.end(indexPage);
}





