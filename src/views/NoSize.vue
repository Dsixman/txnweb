<template>
  <div class="wrapper" style="border:1px solid #ff0000">
    <div class="size-content">
      <div class="size-title">
        内衣尺码
      </div>
      <van-row class="mt20">
        <van-col class="size-items" span="24">
            <van-button  @click="getprev($event)" value="均码">均码</van-button>
        </van-col>
        <van-col class="size-items" span="24"  >
          <van-button  @click="getprev($event)"  value="S">  S</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button @click="getprev($event)"  value="M">  M</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button  @click="getprev($event)"  value="L">  L</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button @click="getprev($event)"  value="XL">  XL</van-button>
        </van-col>
      </van-row>
    </div>
    <HadSizeBottom :url="url"></HadSizeBottom>
  </div>
</template>

<script>
import HadSizeBottom from '@/components/HadSizeBottom.vue'
export default {

  data(){
    return {
      url:{
        prev:"/brandchoice",
        next:""
      }
    }
  },
  components:{
    HadSizeBottom
  },
  computed:{

  },
  methods: {
    getprev(event){
    //  this.$store.dispatch('commitprevurl',event.)
      this.$store.dispatch('commitnosize',event.target.value)
      this.$router.push('/fitbar')

    }
  }
}
</script>

<style lang="scss" scoped>
.mt20{
  margin-top:20px;
}
.wrapper{
  .size-content{
    width:80%;
    margin:30px auto 0 auto;
    box-sizing:content-box;
    .size-title{
      line-height:120px;
      font-size:1.2rem;
      width:80%;
      margin:20px auto 0 auto;
      height:140px;
      //border:1px solid #ff0000;
    }
    .size-items{
      font-size:1 rem;
      height:45px;
      margin-top:15px;
      button{
        width:100%;

      }
      button:hover{
        border:1px solid #ff0000;
      }
      // a:link,a:visited {
      //   font-size:1rem;
      //     width:100%;
      //     height:40px;
      //     display:block;
      //     margin:0 auto;
      //     border: 1px solid #ebedf0;
      //     border-radius: 2px;
      //     //padding:0 15px;
      //     line-height:39px;
      //     color:#000;
      //
      // }
      // a:hover,a:active{
      //   color:red;
      //   border:1px solid red;
      // }

    }

  }
}


</style>
