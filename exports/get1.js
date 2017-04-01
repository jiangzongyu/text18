/**
 * Created by ´óÓí¸ç on 2017/4/1.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var getdata = url.parse(req.url).query;
    var objdata = querystring.parse(getdata);
    console.log(objdata.id);
}).listen(3000);
console.log('server start');