const express = require('express');
const app = express();
const router = require('./router.js');
// 中间件,获取post请求体参数
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');

let data = '';
let sql = 'select * from book';



// app.use('/', (req, res) => {
//   res.send('HelloWorld!');
// })

// 启动静态服务
app.use(express.static(path.join(__dirname,'public')));

// 设置模板引擎
app.set('view engine','art');

// 设置模板路径
app.set('views',path.join(__dirname,'views'));

// 使express 兼容art-template模板引擎
app.engine('art',require('express-art-template'));

// 挂载参数处理中间件
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);

// 监听端口
app.listen(3001, () => {
  console.log('Server is running...')
})
