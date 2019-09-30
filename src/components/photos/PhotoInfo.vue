<template>
  <div class="photoInfo-container">
    <h4 class="photoInfo-title">{{ imgInfo.title }}</h4>
    <p class="photo-subtitle">
      <span>发表时间:{{imgInfo.add_time|dateFormat}}</span>
      <span>点击: {{ imgInfo.click }}次</span>
    </p>
    <div class="thumbs">
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
      <!-- <img :src="item.src" class="preview-img" v-for="(item,index) in list" height='100' @click="$preview.open(index,list)" :key='item.src'> -->
    </div>
    <div class="photo-info" v-html="imgInfo.content"></div>
    <comt :id="id"></comt>
  </div>
</template>
<script>
import comt from "../subcomponent/comment.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      imgInfo: {},
      list: []
    };
  },
  created() {
    this.getImageInfo();
    this.getPreview();
  },
  mounted() {
    this.getImageInfo();
    this.getPreview();
  },
  methods: {
    getImageInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(function(res) {
        if (res.body.status === 0) {
          this.imgInfo = res.body.message[0];
        }
      });
    },
    getPreview: function() {
      this.$http
        .get("api/getthumimages/" + this.id)
        .then(function(res) {
          if (res.body.status === 0) {
            res.body.message.forEach(item => {
              (item.msrc = item.src), (item.h = 400), (item.w = 400);
            });
            this.list = res.body.message;
          }
        })
        .catch(error => {
          Toast({
            message: "获取缩略图图片失败..."
          });
        });
    },
    handleClose() {
      this.$route.path = this.$route.path.replace(/&\w+\W+\d+/g, "");

    },
  },
  components: {
    comt
  },
  watch: {
  }
};
</script>
<style lang="less" scoped>
.photoInfo-container {
  padding: 5px;
  .photoInfo-title {
    font-size: 16px;
    text-align: center;
    color: red;
  }
  .photo-subtitle {
    display: flex;
    justify-content: space-between;
    color: #58f;
  }
  .photo-info {
    font-size: 12px;
  }
}
.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
