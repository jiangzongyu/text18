/**
 * Created by ¥Û”Ì∏Á on 2017/4/1.
 */
var http = require('http');
var urls = ['www.baidu.com','www.qq.com','www.360.com'];

function getspeed(url){
    http.get({"host":url},function(){
        var start = new Date();
        console.log('yuming : ' + url);
        console.log('time : ' + (new Date() - start) + 'ms');
    })
}
for(var i = 0; i < urls.length; i++){
    getspeed(urls[i]);
}