var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var uname=req.body.username;

  var pass=req.body.password;

  console.log(uname);
  con.query("select sid,pass from salesperson where sid=? and pass=?",[uname, pass],function(err,result,field){
  
if(uname==result[0].sid && pass==result[0].pass)
{
  
  res.redirect('/pager2');
}

});
});
module.exports = router;
