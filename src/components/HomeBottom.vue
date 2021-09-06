<template>
  <van-row class="home-bottom">
    <van-col class="bottom-left">

        <router-link :to="{ name: 'Home', params: {} }" style="border:1px solid $ff0000">
          <div class="bottom-font-icon">
              <van-icon name="wap-home"></van-icon>
          </div>
          <div class="bottom-title">
              <span>首页</span>
          </div>

        </router-link>

    </van-col>
    <van-col class="bottom-right">
      <button type="button" name="button" @click="filter">
        <div class="bottom-font-icon">
          <van-icon name="manager"></van-icon>
        </div>
        <div class="bottom-title">
          <span>我的</span>
        </div>
      </button>
          <!-- <router-link :to="{ name: 'Personal', params: {} }">

          </router-link> -->
    </van-col>
    <div class="clear">
    </div>
  </van-row>
</template>

<script>
//import Vue from 'vue'
export default {
  data(){
    return {

    }
  },
  created(){

  },
  methods:{
    filter(){
      this.$store.dispatch("commitaddloginprevurl","Personal")
      this.$router.push('/personal')
    }
  }


}
</script>

<style lang="scss" scoped>
a:active,a:hover{
  color:r从ed;
}
a:visited,a:link{
  color:grey
}
.bottom-title{
  height:20px;
  span{
    font-size:0.8rem
  }
}
.bottom-font-icon{
  height:20px;
}
.home-bottom{
  padding:0;
  margin:0;
  width:100%;height:50px;
  position:absolute;
  bottom:0px;
  border-top:1px solid grey;
  background:white;
  padding-top:10px;
//  span {color:blue};
  a{
      box-sizing: border-box;
      height:40px;
    display:block
  };
  button{
    border:none;
    background: none;
    box-sizing: border-box;
    height:40px;
    display:block;
    width: 100%
  }
}
.clear{clear:both}
.bottom-left{
  box-sizing: border-box;
  width:50%;
  height:40px;
  float:left;
  text-align:center;

}
.bottom-right{
    width:50%;
    box-sizing: border-box;
    height:40px;
    color:grey;
    float:right;
    text-align:center;
}
</style>
