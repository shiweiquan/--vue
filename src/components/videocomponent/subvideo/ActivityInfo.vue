<template>
  <div class="videoinfo-container" ref='videoinfo_container'>
    <h3 class="title">
      {{ item.title }}
      <span class="zuobiao">{{ item.loc_name }}</span>
    </h3>
    <div class="img_large">
      <img :src="item.image" alt="">
    </div>
    <p>
      <span class="time">时间:</span>
      <span>
        {{ item.begin_time}}
        <br>
        {{ item.end_time}}
      </span>
    </p>
    <p class="address">
      地点:
      <span class="address-name">{{ item.address }}</span>
    </p>
    <p class="price">
      费用:
      <span>{{ item.fee_str }}</span>
    </p>
    <p class="type">
      类型:
      <span>{{ item.category_name }}</span>
    </p>
    <p class="starttime">
      起始时间:
      <span>{{ item.time_str }}</span>
    </p>
    <div class="tags-list">
      <span  v-if="item.tags.trim().length === 0? false: true" v-for="(tag , index) in (item.tags).trim().split(',')" :key="index">{{ tag }}</span>
    </div>
    <div class="info">
      <h4>活动详情</h4>
      <div class="content" v-html='item.content'></div>
      <p>{{ item.content }}</p>
    </div>
    <div class="download">
      <div class="top">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIyMUZGOTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIyMUZGQTYyNjQxMUU0QkFDN0JDMDA0RUFERjJGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMjIxRkY3NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyMjIxRkY4NjI2NDExRTRCQUM3QkMwMDRFQURGMkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vlyY+wAAAYBQTFRFBa8QAKoAFdkhLsg4E8YeAMYBALEAN9JBAMoJErAcB8wTBsYSg9qIB9ITB88TWthijt+TBbAQB84TAM0ABsASBsQS////BsISALsABsoTBscTBrkRBroRBbYRBr4SdNt7b+V3SuFTBbQRBbMR5frmALIJoeOl7fvuE7sdBrwSKbwzCcgWTNRUeOh/FNAf0fbUxvXJHbUnt+i6QsVKSstTk+uYoOylcN13tvK6yu/N8/z0Y9psverAo++oAKMAwuzF+v77AK8LbNVxUsdaAbcKdNN74vbjYMtnrOawxu3JvvPB2/XdGMAjVs5fCNMW2fnbac9wBboQAtEQC7MUOsJDB80WB7oTB7gT/P/8BrYSBLYRBawQB9cUB9YUB9QUB9UUBa0QBrcRQtpLBrwRB64SBbURV+JfC9gYDdYab8919/33BrYUqvGvBc4SBrMTCK8PBrsTBrQSELwbBbEQ+/77BbgRBbgSCK8T6PnqBMsOBbwQA84NC70V2PTazvDQ////esWf9QAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAEbUlEQVR42uzb/V/aRhzA8Ts0B2yM0rI6NrcpKoJYmIA4yxR8SBWcWmmpXS3Wyaabm9s6Hzasq/zrDTjygM038Y7c+Wr7+a25+H2TiIEqQY3OooeJcM3VxdzhwamRKwzq+PfhvqvqROFsFIDnss6orVyJETN4wkG2Rc++HU5UHW8/ehV+WKtyyDXdCR9WOZUwwtxcVb6E61WOrejgGk/4l6gKJ6pcq7XhiSrnsv/Drm3ePWzBWe7udrgF8z/g5iGjxrQAd3tQgfd3BORqoNyvIuCdFXQoxN0ZRIkXQqqhsBjYjdxiYBdyfYB5wclPzHvEGDA6CcDrQebW12ng8+TsClPT4SDNEful2T7GTvxBCvhRcIIV/iEJwX6TzoPTrHAuGTSbDsIrrPBvdLDEfKr7qGC/tM/qTnnOaWC/5K4x5fac+QH4jml/SIyd+01ng7CTKfBHQrrJ8JmHojNm+IlHooElzxNL+HMwz/jUNxRlx8/guZawNEh37bglscIJOvg7ZvhbQUccooVDNxbu/QJMD0eXRuByehie23sd2C2Ng4VuOQT3hOAXo5DbqSO2GBa6dy34YzAjbLGvAYb3fS/hu2BG2GJfAwzv+wF+L+DPwIywxb4GGN5XgT8FIwYY3tcIw/u+GzDRw6SLcC8mYLjHITi7MAC2UHQIvtZbH0t49Wswehieu3pz4QFRsI/yfxKWcGwMjGTo4B4Cz42ho5/AXpHJgHW+UVX83tfckCGv4LlHKPYl2FiZ2Ci/psKT+daWsTF4bswKViorvZTbhvyyfCWZvFZ/mfcfaW6xHGoHbnZ61HNZXJE7FzeJdq1ME9nWQLswVn+qRq9OLuOACi/gTbtwv53IpDq6gjc7FmUyoq7Gia15/XZhWa63Rxdx2bi2ibVHdUFk2/CprXRnc5U8NSzJOK2uDeB+e/MUeNdOT3VH5cP/6JdOSUx/3Ti1NW/XLrxLjubaw5dIxPiYFlS3LpPdLsMyntGuEfiZYaWkrpSIbB/+yl7aD5Ty9NrSL6xqZzpgWIG6BlzR5sfwM3X7Fta9flV0C5bwnr30T6FAfkvdHhmuay8QJGJz2h4ID0V0EVzQfv0TIep2HNcekC8fMQTDQyb9TozvZvO6U7qW1zZvaJsz+Y73u3t/m00H4PnHo/f1FZZ0f1AqqZtLc9rm1wX9F1yU1vAQAA+blH/A/GenvsfEbDoEB5jduRimgX3McI4OZj/iEzq4G99jAPYemzT/V2CGrfQiNht+7DWH/5zPY9aGaeDj49vzjJmPbsK3heRFKTFwCsWRkFIoIwaOow0xcAWNioGXUV0MXESNigj33xxqBETAiw3UyP38I/8Kzc/eHvB3460P/Ub5H/LM5eeri885t9z+KHuGr+s9acM5L1e4pN01UODpBvQ3aDzg52aMt6RwkxdPOm7CSXs5nmfDbUdLHJ7bqZm33mjlc9rdyJncWnZ/0Um2kgZuprs4SDl00VhOw3fxKc+yg0w8lfJ2r1S8slyMdjJvBBgAjaD61EhSiREAAAAASUVORK5CYII="
          alt=""
        >
        <div class="appword">
          <p class="douban">豆瓣</p>
          <p class="words">我们的精神角落</p>
        </div>
      </div>
      <div class="bottom">
        <a href="https://apps.apple.com/cn/app/%E8%B1%86%E7%93%A3/id907002334">去 App Store 免费下载 iOS 客户端</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infos: JSON.parse(sessionStorage.getItem("videodetailinfos") || "[]"),
      item: {},
      id: this.$route.params.id,
      mycontent:''
    };
  },
  methods: {
    getInfositem() {

      this.infos.some(item => {
        if (item.id === this.id) {
          // var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g;
          // var arr = item1.content.match(reg)
          // arr.forEach((item,i)=>{
          //   item = "https://images.weserv.nl/?url=" + item
          //   item = item.split(',')
          //   console.log(item)
          // var content = item1.content
          // content = content.replace(reg,item[0])
          // console.log(content)
          // this.mycontent = content
          // }
          this.item = item


          return true;
        }
      });
    }
  },
  created() {
    this.getInfositem();
  },
  mounted(){
  }
};
</script>

<style lang="less">
.videoinfo-container {
  background: #fff;
  padding: 10px;
  .title {
    font-size: 1.2rem;
    text-align: center;
    margin: 15px 0;
    span {
      padding: 3px;
      border-radius: 5px;
      font-size: 0.4rem;
      background-color: rgba(255, 0, 0, 0.5);
    }
  }
  .img_large {
    text-align: center;
    margin-bottom: 15px;
    img {
      width: 12rem;
    }
  }
  .tags-list {
    margin-bottom: 20px;
    span {
      padding: 7px;
      background: rgba(200, 200, 200, 0.3);
      margin: 0 0.8rem;
      font-size: 1rem;
      border-radius: 12px;
      color: #666;
    }
  }
  .info {
    /*margin-bottom: 20px;*/
    h4 {
      font-size: 1.1rem;
      margin-bottom: 15px;
      color: #06c713;
    }

    .content {
      color: #666;
      font-size: 0.8rem;
      .middle {
        img {
          width:100%;
        }
      }
    }
  }
  .download {
    text-align: center;
    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
      img {
        width: 4rem;
      }
      p {
        margin: 0;
        padding: 0;
        text-align: left;
        margin-left: 10px;
        color: #333;
        font-size: 1rem;
        &.douban {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  .bottom {
    font-size: 1rem;
  }
}
</style>
