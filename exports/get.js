/**
 * Created by ´óÓí¸ç on 2017/4/1.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var geturl = url.parse(req.url).pathname;
    switch(geturl){
        case '/':
            resIndex(res);
            break;
        case '/login':
            reslogin(res);
            break;
        default:
            resError(res);
            break;
    }

}).listen(3000);
console.log('server start');

function resIndex(res){
    res.writeHead(200,{'Content-type':'text/html'});
    var geturldata = __dirname + '/' + url.parse('get.html').pathname;
    var getAdress = fs.readFileSync(geturldata,'utf-8');
    res.end(getAdress);
}

function resError(res){
    res.writeHead(404,{'Content-type':'text/plain'});
    res.end('error');
}