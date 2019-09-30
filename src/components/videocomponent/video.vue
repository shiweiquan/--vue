<template>
  <div class="video">
    <videoheader />
    <!-- <videobanner />
    <videoindex /> -->
    <moviehome/>
  </div>
</template>
<script>
import videoheader from './subvideo/videoheader.vue'
// import videobanner from './videomain/videobanner.vue';
// import videoindex from './videomain/videoindex.vue';
import moviehome from './videomain/movie-home/movie-home.vue';
export default {
  data(){
    return {}
  },
  methods:{},
  components:{
    videoheader,
    // videobanner,
   // videoindex,
   moviehome
  }
}
</script>
<style lang="less" scoped>
.video {
  background: #fff;
  max-width: 600px;
  margin:0 auto;
  /*box-shadow: 0 0 5px rgba(0,0,0,.2);*/
  // border: 2px solid rgba(233,233,233,1);
}
</style>
