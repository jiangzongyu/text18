var mblog = require('../models/mblog.js');

exports.index = function(req,res,next){
    // console.log(req.session.userLogin);
    var sessionid = req.session.userLogin.USER_ID;
    mblog.getIndexdata(sessionid,function(results){
        console.log(results);

        res.render('login2',{
            'user':req.session.userLogin,
            'blog':results
        });

    });
}

exports.reg = function(req,res,next){

    res.render('reg');

}

exports.doreg = function(req,res,netx){


    var name = req.body.email;
    var pass = req.body.pwd;

    // console.log(name);
    // console.log(pass);
    mblog.getRegdata(name,pass,function(results){
        if(name.length>0){
            res.redirect('/login');

        }
    });
}

exports.login = function(req,res,next){
    res.render('/login');
}

