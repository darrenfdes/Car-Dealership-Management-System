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
  var cid=req.body.cid;

  var vid=req.body.vid;

  var sid=req.body.sid;

  
  console.log(cid);
  con.query("insert into deal(cid,vid,sid) values(?,?,?)",[cid,vid,sid],function(err,result,field){
    
  }); 
  con.query("delete from vehicle where vid = ?",[vid],function(err,result,field){
     
     res.redirect('/pager2');
  }); 
  

  }); 

module.exports = router;
