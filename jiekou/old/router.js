// 路由模块
const express = require('express');
const service = require('./service.js')
const router = express.Router();
// console.log(router)

router.all('*',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();

})



router.get('/in_theaters', service.get_movie_data);
router.get('/top250', service.get_movie_data);
router.get('/coming_soon', service.get_movie_data);
router.get('/subject/:id', service.get_movie_data);
// router.get('/subject/', service.get_movie_data);



module.exports = router;
