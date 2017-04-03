var express = require('express');
var router = express.Router();
var cuser = require('../controllers/cuser.js');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req,res,netx){
	res.render('login');
});

router.post('/login',function(req,res,next){
	var name = req.body.username;
	var pass = req.body.password;

	console.log(name + " | " + pass);
})
*/

router.get('/login',cuser.login);

router.post('/login',cuser.dologin)

router.post('/xxlogin',cuser.xxlogin);

router.get('/index',cuser.index);

module.exports = router;
