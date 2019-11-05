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
  var name=req.body.name;

  var address=req.body.address;

  var phone=req.body.phone;

  var password=req.body.password;

  var salary= req.body.salary;

  console.log(name);
  con.query("insert into salesperson (sname,pass,address,phone,salary) values(?,?,?,?,?)",[name,password,address,phone,salary],function(err,result,field){
    
  	res.redirect('/pager2');
  }); 

  }); 

module.exports = router;
