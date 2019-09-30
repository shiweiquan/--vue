// 业务逻辑处理

const db = require('./db.js');
const fs = require('fs');
const path = require('path');




function getData (req,res){
  let sql = 'select * from book';
  db.base(sql,'',function(data){
  res.json(data);
  })
 }

exports.getData = getData


