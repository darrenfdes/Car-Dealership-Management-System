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
  var id=req.body.id;
 
  console.log(id);
  con.query("delete from customer where cid = ?",[id],function(err,result,field){
   
  	res.redirect('/pager2');
  }); 

  }); 

module.exports = router;


