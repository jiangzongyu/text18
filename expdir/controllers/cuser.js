var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'boke'
});
// module.exports=connection;
connection.connect();

exports.index = function(req,res,next){
	console.log(req.session.loginuser);
}

exports.login = function(req,res,next){
	res.render('login');
}

exports.dologin = function(req,res,next){
	var name = req.body.username;
	var pass = req.body.password;

	// res.send(name + ' | ' + pass);
	// var sql = "select * from t_users where ACCOUNT ='"+name+"' and PASSWORD ='"+pass+"'";
	// var sql = "select * from t_users";
	var sql = "select * from t_users where ACCOUNT =? and PASSWORD =?";
	connection.query(sql,[name,pass],function(error,results,fileds){
		if(error){
			throw error;
		}else{
			// console.log(results);
			// res.render('index',{'data':results[0]});
			// res.render('index',{'data':results});
			if(results.length>0){
				req.session.loginuser = results[0];
				res.redirect('/index');
			}
		}
		connection.end();
	});
}

exports.xxlogin = function(req,res,next){
	var name = req.body.name;
		console.log(name);

	if(name == "jiang"){
		res.send('success');
		// console.log('111111');
	}
}