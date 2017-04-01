/**
 * Created by ¥Û”Ì∏Á on 2017/4/1.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var geturl = url.parse(req.url).pathname;
    switch(geturl){
        case '/':
            resIndex(res);
            break;
        case '/login':
            reslogin(res);
            break;
        case '/dologin':
            resdologin(req,res);
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

function reslogin(res){
    res.writeHead(200,{'Content-type':'text/html'});
    var geturldata = __dirname + '/' + url.parse('get2.html').pathname;
    var getAdress = fs.readFileSync(geturldata,'utf-8');
    res.end(getAdress);
}

function resError(res){
    res.writeHead(404,{'Content-type':'text/plain'});
    res.end('error');
}

function resdologin(req,res){
    var posteData = "";
    req.setEncoding('utf8');
    req.addListener('data',function(chunk){
        posteData+=chunk;
    });
    req.addListener('end',function(){
        console.log(posteData);
        var objdata = querystring.parse(posteData);
        console.log(objdata);
        // var name = obj.name;
        // var pass = obj.pass;
    });
}