const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'book'
// });

// connection.connect();

// let sql = 'select * from book'

// connection.query(sql, '', function (error, result, fides) {
//   if (error) throw error;
//   console.log(result)
// })

// connection.end();

exports.base = (sql,data,callback)=>{
  let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'book'
  });

  connection.connect();

  connection.query(sql,data,(error,result,feids)=>{
    if(error) throw error;
    // let data = JSON.stringify(result)
    callback(result)
  })
  connection.end();
}
