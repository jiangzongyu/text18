/**
 * Created by 大禹哥 on 2017/3/29.
 */
var net = require("net");
var readline = require("readline");
var HOST = "127.0.0.1";
var POTR = 80;

console.log('type "exit" or "quit" to quit.');

var client = new net.Socket();
client.connect(POTR,HOST,function(){
    console.log('CONNTCTED TO :' + HOST + ';' + POTR);
    client.setEncoding('utf8');

    console.log("与服务端连接成功");
});

client.on('data', function(data){
    // console.log("to server :"+data);
    console.log('got data from server - ', data);
    client.setEncoding('utf8');
    // client.write(data);
    // client.destroy();
});

// client.on('close',function(){
// 	console.log('connection closed');
// })

var rl = readline.createInterface({
    input: process.stdin
});

function quitEcho(){
    rl.close();
    client.end();
    console.log('quit echo client');
}

rl.on('line', function(cmd){
    if(cmd.indexOf('quit') == 0 || cmd.indexOf('exit') == 0){
        quitEcho();
    }else{
        client.write(cmd + '\r\n');
    }
});

// rl.on('SIGINT', quitEcho);