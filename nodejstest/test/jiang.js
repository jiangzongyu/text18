var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
	var requrl=url.parse(req.url).pathname;
	// console.log(requrl);
	// console.log(url.parse(req.url));
	// console.log(res.method);
	//console.log(requrl);
	switch(requrl){
		case '/':
			resIndex(res);
			// console.log(resIndex(res)):
			break;
		default:
			resError(res);
			// console.log(resError(res));
			break;

	}
}).listen(3000);
console.log('server start');
function resError(res){
	res.writeHead(404,{'Content-type':'text/plain'});
	res.end('page missing');
} 
function resIndex(res){
	res.writeHead(200,{'Content-type':'text/html'});
	var realPath=__dirname+"/"+url.parse("jiang1.html").pathname;
	// console.log(realPath);
	var indexPage=fs.readFileSync(realPath,'utf-8');
	// console.log(indexPage);
	res.end(indexPage);
}