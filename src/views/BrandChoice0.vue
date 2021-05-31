<template>
  <van-row class="bottom">
    <van-col class="prev-page" v-if="this.url.prev">
      <router-link :to="this.url.prev" >
        <div class="prev-page-font-icon"><van-icon name="down" color="black" class="rtleft" size="1.8rem"></van-icon></div>
        <div class="prev-page-word">上一页</div>
      </router-link>
    </van-col>
    <van-col class="next-page" v-if="this.url.next">
      <router-link :to="this.url.next">
        <span><van-icon name="arrow-down" color="white"></van-icon></span>
        <span>下一页</span>
      </router-link>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name:"bottom",
  data(){
    return{

    }
  },
  props:["url"],
  computed:{

  },
  mounted(){
    console.log(this.url)
    //console.log(this.url)
  }

}
</script>

<style lang="scss" scoped>
.bottom{
  position:absolute;
  left:0;
  right:0;
  bottom: 15px;
  margin: auto;
  height:60px;
  //margin-top:20px;
//  overflow:hidden;
  width:80%;
  ///margin: 90% auto 0 auto;
  //border:1px solid #ff0000;

}
.rtleft{
  transform:rotate(90deg);
  //padding-top:15px;
  //line-height:90px;
}
.prev-page{

  width:45%;
  border: 1px solid #ebedf0;
  border-radius:2px ;
  float:left;

  height:40px;
  div{
    float:left
  }
  .prev-page-font-icon{
    width:39%;
    padding-top:5px;
  }
  .prev-page-word{
    width:39%;

  }
}
a:link,a:visited {
  box-sizing: content-box;
    width:90%;
    height:40px;
    display:block;
    margin:0 auto;
    //border: 1px solid #ebedf0;
    border-radius: 2px;
    padding:0 15px;
    line-height:43px;
    color:#000;

}
a:hover,a:active{
  color:red;
  border:1px solid #ff0000;
}
.next-page{

  width:45%;
  border:1px solid #FFF;
  border-radius:2px ;
  float:left;
  height:40px;
}


</style>
