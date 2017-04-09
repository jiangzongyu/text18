/**
 * Created by ����� on 2017/4/9.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'boke'
});
// module.exports=connection;

exports.query = function(sql,param,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,param,function(err,rows){
            if(err){
                throw err;
            }
            callback&&callback(rows);
            connection.release();
        });
    });
};