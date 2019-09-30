// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 引入 babel-polyfill 来处理 对IE浏览器的兼容问题
import 'babel-polyfill';

// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;



import './asset/css/index.css'

import Vuex from 'vuex';
Vue.use(Vuex);
const car = JSON.parse(localStorage.getItem('car') || '[]');
const store = new Vuex.Store({
  state: {
    // 购物车数据
    flag:true,
    car: car,
    videodetailinfos: [],
    jsonpNmae: {
      start: 0,
      count: 5
    },

  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false;
      state.car.some(item => {
        if (parseInt(item.id) ===parseInt(goodsinfo.id)) {
          item.count +=parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      })

      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updataGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (parseInt(item.id) === parseInt(goodsinfo.id)) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    removeById(state, id) {
      state.car.some((item,index) => {
        if (parseInt(item.id) === id) {
          state.car.splice(index, 1);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    // 点击switch 按钮 改变状态
    changeStatus(state, id) {
      state.car.some(item => {
        if (item.id === id) {
          item.selected = !item.selected;
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    setVideodetailinfos(state) {
      state.videodetailinfos = JSON.parse(sessionStorage.getItem('videodetailinfos') || '[]')
    },

  },
  getters: {
    getAllCount(state) {
      var count = 0;
      state.car.forEach(item => {
        count += item.count;
      })
      return count;
    },
    getselectcount(state) {
      var count = 0;
      state.car.forEach(item => {
        if (item.selected) {
          count +=parseInt(item.count);
        }
      })
      return count;
    },
    getGoodsCount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o;
    },
    getGoodsStatus(state) {
      var obj = {};
      state.car.forEach(item => {
        obj[item.id] = item.selected
      })
      return obj;
    },
    getTotalPrice(state) {
      var total = 0;
      state.car.forEach(item => {
        if (item.selected) {
          total += parseInt(item.price * item.count);
        }
      })
      return total;
    }
  }
});

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root = 'http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true;
// 引入时间插件
import moment from 'moment';

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('getImages',function(_url){
  if(_url !== undefined){
    let _u = _url.substring( 7 );
    return 'https://images.weserv.nl/?url=' + _u;
  }
})

import app from './App.vue';


// 导入评论组件
import comment from './components/subcomponent/comment.vue'
// 创建一个全局组件
Vue.component('cmt', comment);

import swiper from './components/subcomponent/swiper.vue';
Vue.component('swiper', swiper);

// import { Header,Swipe, SwipeItem, Button ,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui';
Vue.use(MintUI);

// 导入缩略图插件
import VuePreview from 'vue-preview';
// // 安装到Vue上
// Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
// 导入路由组件
import router from './router.js'


// 导入NProgress插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done();
})



import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el: "#app",
  data: {},
  methods: {

  },
  render: h => h(app),
  router,
  store
})

