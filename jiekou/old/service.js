// 业务逻辑处理

const db = require('./db.js');
const fs = require('fs');
const path = require('path');
const axios = require('axios')


//正在热映
// 访问参数：
// start : 数据的开始项
// count：单页条数
// city：城市
// 例子 https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10


// 2、获取电影Top250：
// 接口：https://api.douban.com/v2/movie/top250
//     访问参数：
// start : 数据的开始项
// count：单页条数
// 如：获取电影Top250 第一页 10条数据：
// https://api.douban.com/v2/movie/top250?start=0&count=10


// 3、获取即将上映电影：
// 接口：https://api.douban.com/v2/movie/coming_soon
//     访问参数：
// start : 数据的开始项
// count：单页条数
// 如：获取即将上映电影 第一页 10条数据：
// https://api.douban.com/v2/movie/coming_soon?start=0&count=10

// 4、电影搜索
// 接口：https://api.douban.com/v2/movie/search
//     访问参数：
// start : 数据的开始项
// count：单页条数
// q：要搜索的电影关键字
// tag：要搜索的电影的标签
//
// 如：
// 搜索电影《神秘巨星》：
// https://api.douban.com/v2/movie/search?q=神秘巨星&start=0&count=10
//     搜索喜剧类型的电影：
// https://api.douban.com/v2/movie/search?tag=喜剧&start=0&count=10


// 4、电影详情
// 接口：https://api.douban.com/v2/movie/subject/:id
//     访问参数：电影id
// 如：电影《神秘巨星》的电影id为：26942674，搜索此电影的详细信息：
// https://api.douban.com/v2/movie/subject/26942674


// axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a')
//       .then(resovle=>{
//         res.json(resovle.data);
//         // console.log(res.data)
//       })
//
//       .catch(err=>{
//         console.log(err);
//       })

// {  }
//https://douban-api.uieee.com/v2/movie/in_theaters?start=1&count=1
//电影api接口
const movie_url = {
  baseUrl: "https://douban-api.uieee.com/v2/movie/",
  start: 0,
  count: 10,
  city: '北京',
  q: '',
  tag: ''
}

//图书api接口
const book_url = {
  baseUrl: 'https://douban-api.uieee.com/v2/book/'
}

// /in_theaters?start=1&count=1
//正在热映
function in_theaters(req, res) {
  let paramsStr = req.query || {};
  let str = '?';
  if(paramsStr !== {}){
    console.log(paramsStr)
    for(let key in paramsStr){
      str += key + '='+ paramsStr[key] + '&'
    }

  }
  str = str.substr(0,str.length-1);
  console.log(req.path)
  axios.get(movie_url.baseUrl + req.path.trim() + '?' + str)
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        console.log(err);
      })
}



module.exports = {
  get_movie_data:in_theaters
}


