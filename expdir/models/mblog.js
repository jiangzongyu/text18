/**
 * Created by ¥Û”Ì∏Á on 2017/4/4.
 */
var db = require('./db.js');

exports.getIndexdata = function(sessionid,callback){
    // var userid = req.session.userLogin.USER_ID;
    // console.log(sessionid);
    var sql = "select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_users.USER_ID="+ sessionid +""
    // console.log(sql);
    db.query(sql,sessionid,callback);
}


exports.getRegdata = function(name,pass,callback){
    // console.log(name);
    // console.log(pass);
    var sql = "insert into t_users (ACCOUNT,PASSWORD)values(?,?)";
    db.query(sql,[name,pass],callback);
}