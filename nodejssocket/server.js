var net = require("net");
var readline = require("readline");
var HOST = "127.0.0.1";
var POTR = 80;

net.createServer(function(sock){
    console.log("connection:" + HOST + ';' + POTR);
    console.log('客户端连接成功');
    // console.log('CONNTCTED :' + sock.remoteAddress + ';' + sock.remotePort);
    // sock.on('data',function(data){
    // 	// console.log('DATA' + sock.remoteAddress + ';' + data);
    // 	sock.setEncoding('utf8');
    // 	// sock.write('client said: ' + data + ';' );
    // });

    // sock.on('close',function(data){
    // 	console.log('CLOSED:' + sock.remoteAddress + '' + sock.remotePort);
    // });
    sock.on('data', function(data){
        console.log('got data from client - ', data);
        // console.log(data);
        sock.setEncoding('utf8');
        // sock.write(data);
    });

    var rl = readline.createInterface({
        input: process.stdin
    });

    function quitEcho(){
        rl.close();
        sock.end();
        console.log('quit echo server');
    }

    rl.on('line', function(cmd){
        if(cmd.indexOf('quit') == 0 || cmd.indexOf('exit') == 0){
            quitEcho();
        }else{
            sock.write(cmd + '\n');
        }
    });

    // rl.on('SIGINT', quitEcho);
}).listen(POTR,HOST);
console.log("server start");/**
 * Created by 大禹哥 on 2017/3/29.
 */
