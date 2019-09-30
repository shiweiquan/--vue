import VueRouter from 'vue-router';


import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/PhotoList.vue';
import PhotoInfo from './components/photos/PhotoInfo.vue';
import GoodsList from './components/goods/GoodsList.vue';
import GoodsInfo from './components/goods/GoodsInfo.vue';
import GoodsDesc from './components/goods/GoodsDesc.vue';
import GoodsComment from './components/goods/GoodsComment.vue';
import LeaveWords from './components/leavewords/LeaveWords.vue';
import LoginSuccess from './components/member/login-success.vue';
import Register from './components/member/register.vue';
import ForgetPassword from './components/member/forgetpassword.vue';
import Video from './components/videocomponent/video.vue';
import movie from './components/videocomponent/videomain/videoindex.vue';
import ActivityInfo from './components/videocomponent/subvideo/ActivityInfo.vue';
import movieinfo from './components/videocomponent/subvideo/videoinfo.vue';
import book_index from './components/douban_book/book_index.vue';
import login_douban from './components/videocomponent/subvideo/login.vue';
import douban_search from './components/videocomponent/videomain/douban_search.vue';

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path:'/home', component:HomeContainer },
    { path:'/member', component:MemberContainer },
    { path:'/shopcar', component:ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newsList', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path:'/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/getdesc/:id', component:GoodsDesc },
    { path: '/home/getcomment/:id', component: GoodsComment },
    { path: '/home/leaveword', component: LeaveWords },
    { path: '/member/login', component: LoginSuccess },
    { path: '/member/register', component: Register },
    { path: '/memver/forgetpassword', component: ForgetPassword },
    { path: '/home/video', component: Video },
    { path:'/home/video/actinfo/:id', component:ActivityInfo, name:'videoinfo' },
    { path: '/home/video/movie', component:movie },
    { path: "/home/video/movie/info/:id", component: movieinfo, name: "movieinfo" },
    { path: '/home/book', component: book_index },
    { path: '/home/video/login', component: login_douban },
    { path : '/home/video/search', component:douban_search }
  ],
  linkActiveClass: 'mui-active',
  scrollBehavior(to, from, savedPosition) {
    return { x:0, y: 0 }
  }
})

export default router;
