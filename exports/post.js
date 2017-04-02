/**
 * Created by ¥Û”Ì∏Á on 2017/4/2.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function(req,res){
    // console.log(req);
    var getdata = url.parse(req.url).pathname;
    // console.log(getdata);
    switch(getdata){
        case "/login":
            resIndex(res);
            break;
        case "/dologin":
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
    var realPath = __dirname + '/' + url.parse('post.html').pathname;
    // console.log(realPath);
    var geturldata = fs.readFileSync(realPath,'utf-8');
    res.end(geturldata);
}

function resdologin(req,res){
    var postData = "";
    req.setEncoding('utf8');
    req.addListener('data',function(chunk){
        postData += chunk;
    });
    req.addListener('end',function(){
        console.log(postData);
        var geturl = querystring.parse(postData);
        console.log(geturl);
        var name = geturl.username;
        var pass = geturl.password;
        if(name == 'jiang' && pass == '123') {
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end('ok');
        }else{
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end('error');
        }
    })
}
function resError(res){
    res.writeHead(404,{'Content-type':'text/plain'});
    res.end('missing page');
}