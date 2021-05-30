<template>
  <div class="bottom">
    <div class="prev-page">
      <router-link :to="this.url.prev" span="24" >
        <van-icon name="arrow-left" color="white"></van-icon>
      </router-link>
    </div>
    <div class="next-page" v-if="this.url.next">
      <router-link :to="this.url.next" span="24" >
        <van-icon name="arrow" color="white"></van-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"bottom",
  props:["url"],
  mounted(){
    //console.log(this.url)
  }

}
</script>

<style lang="scss" scoped>
.bottom{
  margin-top:20px;
  overflow:hidden;
}
.prev-page{
//position: fixed;
position:absolute;
  left:0px;
  top:50%;
  height:60px;
  width:60px;
  border:1px solid #FFF;
  border-radius:30px ;
  background-color: #f4b3a8;
  line-height:70px;
}
.next-page{
position:absolute;
  right:0px;
  top:50%;
  height:60px;
  width:60px;
  border:1px solid #FFF;
  border-radius:30px ;
  background-color: #f4b3a8;
  line-height:70px;
}


</style>
