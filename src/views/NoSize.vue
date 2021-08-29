<template>
  <div class="wrapper" >
    <div class="title-wrapper" >
      <div class="size-title">
        穿的是他们家的什么码数？
      </div>
    </div>
    <div class="size-content">

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
        <van-col class="size-items" span="24" >
          <van-button @click="getprev($event)"  value="XXL">  XXL</van-button>
        </van-col>
        <van-col class="size-items" span="24" >
          <van-button @click="getprev($event)"  value="XXXL">  XXXL</van-button>
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
      this.$store.dispatch('commitnosize',event.target.value)
      this.$router.push('/fitbar')

    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
}
</script>

<style lang="scss" scoped>

.title-wrapper{
  width:80%;margin:0px auto 0 auto;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.size-title{
  box-sizing: border-box;
  padding-top:25px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:20px auto 20px auto;
  height:50px;

}
.wrapper{
  .size-content{
    width:70%;
    margin:0px auto 0 auto;
    box-sizing:border-box;

    .size-items{
      height:40px;
      margin-bottom:10px;
      button{
        font-size:0.8rem;
        height:35px;
        width:95%;
        border: 1px solid #afafb1;
        border-radius: 2px;

      }
      button:hover{
        border:1px solid #ff0000;
      }

    }

  }
}


</style>
