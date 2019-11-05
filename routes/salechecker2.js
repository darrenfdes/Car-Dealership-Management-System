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
  var id =req.body.id;
  console.log(id);
  con.query("select salesperson.sid,deal.count(*) from salesperson,deal where salesperson.sid=deal.sid group by sid having sid =?",[id],function(err,result,field){
      
      res.render('salecount',{result:result});  
  }); 
});



module.exports = router;
