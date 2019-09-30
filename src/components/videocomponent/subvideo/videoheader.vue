<template>
  <div class="movie-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark movie-header">
          <router-link  to="/home/video" class="logo">
            <h1 class="logo-title">豆瓣</h1>
          </router-link>
          <ul class="item-list">
              <router-link to="/home/video/movie" tag="li" class="item item-move">电影</router-link>
              <li>
                <a href='https://m.douban.com/book/' class="item item-book">图书</a>
              </li>
              <li class="item item-dj">
                <a href="https://m.douban.com/music/">音乐</a>
              </li>
              <li class="item item-team">
                <a href="https://m.douban.com/group/">小组</a>
              </li>
              <router-link  to='/home/video/search' tag='li' class="item item-search el-icon-search">
                搜索
              </router-link>
            </ul>
        </div>
      </el-col>
    </el-row>
    <!-- <div class="banner">
      <img src="../../../images/douban_banner.png" alt="">
    </div> -->



  </div>
</template>
<script>

export default {
  data(){
    return {}
  },
  methods:{},

};
</script>
<style lang="less" scoped>
@movieColor : #5A87E8;
@bookColor :#9F7864;
@djColor : #E4A813;
@teamColor:#2AB8CD;
@searchColor:#00B600;
.movie-container {
  // border: 2px solid red;
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
  .movie-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(200,200,200,1);
    .logo {
      flex: 2;
      .logo-title{
        margin:0;
        // min-width:4rem;
        margin-left: 15px;
        width:4rem;
        font-size: 4rem;
        background: url(../../../images/douban_logo.png) no-repeat;
        background-size: 100%;
        background-position: center center;
        text-indent: -9999px;
      }
    }
    .item-list {
      flex: 8;
      margin:0;
      display: flex;
      justify-content: space-around;
      li {
        list-style: none;
        // font-size: 1.5rem;
        &.item-move{
          color:@movieColor;
        }
        &.item-book{
          color:@bookColor;
        }
        &.item-dj{
          color:@teamColor;
        }
        &.item-team{
          color:@teamColor;
        }
        &.item-search{
          color:@searchColor;
        }
      }
    }
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;

}
.row-bg {
  padding: 10px 0;
  background-color: #f0f0f0;
}
.movie-header {
  
  // z-index: 10;
  width:100%;
  // top:40px;
  // left:0;
  font-size: 1.3rem;
}

}

</style>
