<template>
  <div class="movie-container">
    <section v-show="in_theatersList !={}" class="movie-category">
      <header class="movie-category-title">
        <div class="left">
          <span>{{ in_theatersList.title }}</span>
        </div>
        <a href="#">更多</a>
      </header>
      <div class="movie-category-main">
        <ul class="row items">
          <router-link :to="'/home/video/movie/info/'+item.id" class="item item_movie" v-for="item in in_theatersList.subjects" :key="item.id">
            <a href="javascript:;" :title="item.title">
              <img :src="item.images.small | getImages" alt="">
              <span :title="item.title">{{ item.title }}</span>
              <div class="rank">
                <span
                  class="rating-stars"
                  style="font-size:10px;background-image:url(../images/shi_star.png)"
                  v-for="star_item  in Math.round(item.rating.average/2)"
                ></span>
                <span
                  class="rating-grey"
                  style="font-size:10px; background-image:url(../images/grey_star.png)"
                  v-for="star_item  in Math.round((10-item.rating.average)/2)"
                ></span>
                <span class="sorce" style="font-size:0.72rem;">{{ item.rating.average }}</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </section>
    <section v-show="top250List != {}" class="movie-category">
      <header class="movie-category-title">
        <div class="left">
          <span>{{ coming_soonList.title }}</span>
        </div>
        <a href="#">更多</a>
      </header>
      <div class="movie-category-main">
        <ul class="row items">
          <router-link :to="'/home/video/movie/info/'+item.id" class="item item_movie" v-for="item in coming_soonList.subjects" :key="item.id">
            <a href="javascript:;" :title='item.title'>
              <img :src="item.images.small | getImages" alt="">
              <span :title="item.title">{{ item.title }}</span>
              <div class="rank">
                <span
                  class="rating-stars"
                  style="font-size:10px;background-image:url(../images/shi_star.png)"
                  v-for="star_item  in Math.round(item.rating.average/2)" 
                ></span>
                <span
                  class="rating-grey"
                  style="font-size:10px; background-image:url(../images/grey_star.png)"
                  v-for="star_item  in Math.round((10-item.rating.average)/2)" 
                ></span>
                <span class="sorce" style="font-size:0.72rem;">{{ item.rating.average }}</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </section>
    <section v-if="coming_soonList!={}" class="movie-category">
      <header class="movie-category-title">
        <div class="left">
          <span >{{ top250List.title }}</span>
        </div>
        <a href="#">更多</a>
      </header>
      <div class="movie-category-main">
        <ul class="row items">
          <router-link :to="'/home/video/movie/info/'+item.id" class="item item_movie" v-for="item in top250List.subjects" :key="item.id">
            <a href="javascript:;" :title="item.title">
              <img :src="item.images.small | getImages" alt="">
              <span :title="item.title">{{ item.title }}</span>
              <div class="rank">
                <span
                  class="rating-stars"
                  style="font-size:10px;background-image:url(../images/shi_star.png)"
                  v-for="star_item  in Math.round(item.rating.average/2)"
                ></span>
                <span
                  class="rating-grey"
                  style="font-size:10px; background-image:url(../images/grey_star.png)"
                  v-for="star_item  in Math.round((10-item.rating.average)/2)"
                ></span>
                <span class="sorce" style="font-size:0.72rem;">{{ item.rating.average }}</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </section>
    <section v-if="new_movies!={}" class="movie-category">
      <header class="movie-category-title">
        <div class="left">
          <span >{{ new_movies.title }}</span>
        </div>
        <a href="#">更多</a>
      </header>
      <div class="movie-category-main">
        <ul class="row items">
          <router-link tag='li' :to="'/home/video/movie/info/'+item.id" class="item item_movie" v-for="item in new_movies.subjects">
            <a href="javascript:;" :title="item.title">
              <img :src="item.images.small | getImages" alt="">
              <span :title="item.title">{{ item.title }}</span>
              <div class="rank">
                <span
                  class="rating-stars"
                  style="font-size:10px;background-image:url(../images/shi_star.png)"
                  v-for="star_item  in Math.round(item.rating.average/2)"
                ></span>
                <span
                  class="rating-grey"
                  style="font-size:10px; background-image:url(../images/grey_star.png)"
                  v-for="star_item  in Math.round((10-item.rating.average)/2)"
                ></span>
                <span class="sorce" style="font-size:0.72rem;">{{ item.rating.average }}</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      in_theaters: {
        start: 0,
        count: 8,
        q: "",
        tags: "喜剧"
      },
      in_theatersList: {},
      top250List: {},
      coming_soonList: {},
      new_movies:{}
    };
  },
  methods: {
    //获取正在热映
    getin_theaters() {
      this.$http
        .get(
          "http://localhost:3006/in_theaters?start=" +
            this.in_theaters.start +
            "&count=" +
            this.in_theaters.count
        )
        .then(res => {
          this.in_theatersList = res.body;
        });
    },
    // 获取电影Top250：
    gettop250() {
      this.$http
        .get(
          "http://127.0.0.1:3006/top250?start=" +
            this.in_theaters.start +
            "&count=" +
            this.in_theaters.count
        )
        // this.$http.get("http://127.0.0.1:3001/in_theaters?start=" + this.in_theaters.start + "&count=" + this.in_theaters.count)
        .then(res => {
          this.top250List = res.body;
        });
    },
    // 即将上映
    getcoming_soon() {
      this.$http
        .get(
          "http://127.0.0.1:3006/coming_soon?start=" +
            this.in_theaters.start +
            "&count=" +
            this.in_theaters.count
        )
        .then(res => {
          this.coming_soonList = res.body;
          // console.log(this.coming_soonList)
        });
    },
    // 新片榜
    getnew_movies(){
      this.$http
        .get(
          "http://127.0.0.1:3006/new_movies"
        )
        .then(res => {
          this.new_movies = res.body;
          console.log(this.new_movies)
        });
    },
    getMore() {
      // this.getin_theaters();
      console.log(1);
    },
    toInfo(id) {
      // var userId = 123
      this.$router.push({ name: "movieinfo", params: { id } });
    },
    // getsearch(){
    //   this.$http.get("http://127.0.0.1:3001/search?"+"q" + "=" + "rushhour&" +"start="+this.in_theaters.start+"&count="+this.in_theaters.count)
    //       .then(res=>{
    //         console.log(res)
    //       })
    // },
    gitmovielist() {
      this.$http
        .get("")
        .then(res => {})
        .catch(err => {});
    }
  },
  created() {
    this.getin_theaters();
    this.gettop250();
    this.getcoming_soon();
    this.getnew_movies()
  },
  mounted() {}
};
</script>



<style lang="less" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  text-align: left;
}

p {
  margin: 0;
}

section {
  overflow: hidden;
}
.movie-category-title {
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  padding: 10px;
  a {
    color: #00B51D;
    font-size: 12px;
  }
}
.movie-category-main {
  .row {
    overflow-x: auto;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    margin: 0px 8px;
    margin-bottom: -30px;
    font-size: 0;
    .item {
      display: inline-block;
      width: 100px;
      vertical-align: bottom;
      margin-right: 10px;
      padding-bottom: 30px;
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:last-child {
        margin: 0;
      }
      &.item_movie {
        a {
          > span {
            color: #000;
            font-size: 1.2rem;
          }
        }
      }
      img {
        display: block;
        width: 100%;
        min-height: 100px;
        margin-bottom: 10px;
        height: 142px;
        background-size: cover;
        background-position: center;
        border-radius: 4px;
      }
      span {
        font-size: 0.82rem;
        text-align: center;
      }
      .rank {
        margin-top: -10px;
        span {
          font-size: 0.82rem;
          margin-left: 2px;
          overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
        }
      }
      .rating-stars,
      .rating-grey {
        display: inline-block;
        background-size: 12px 12px;
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
