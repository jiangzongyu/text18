/**
 * Created by ´óÓí¸ç on 2017/3/29.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function(req,res){
    var geturldata = url.parse(req.url).query;
    var objdata = querystring.parse(geturldata);
    console.log(objdata.id);
    console.log(objdata.name);

}).listen(3000);

console.log("server start");







