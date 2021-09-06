<template >
  <div class="">
    <div class="title-wrapper" >
      <div class="size-title">
        刚买时，胸部中间是否感到挤压？
      </div>
    </div>
    <div class="furu-content">
      <div class="furu-img">
        <img src="@/assets/53110.png" height="300"/>
      </div>
      <van-row type="flex" justify="space-between">
        <van-col span="10">
          <van-button  type="default" @click="savejixiong($event)">
            有
          </van-button>
        </van-col>
        <van-col span="10">
        <van-button  type="default" @click="savejixiong($event)">
          没有
        </van-button>
      </van-col>
      </van-row>
    </div>
    <Bottom :url="url"></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
export default {
  data(){
    return{
      url:{
        prev:"/furu",
        next:"/chestshapes",
        fatherobj:null
      },
    }
  },
  methods:{
    savejixiong(eve){
      this.url.fatherobj=eve.target.innerText
      this.$store.dispatch("commitjixiong",this.url.fatherobj)
      this.$router.push("/chestshapes")
    }

  },
  components:{
    Bottom,
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
}
</script>

<style lang="scss" scoped>
.van-col button{
  font-size:0.8rem;
    width:100%;
    height:40px;
    display:block;
    margin:0 auto;
    line-height:43px;
    color:#000;
    .van-button{
      font-size:0.8rem
    }
}
.van-col button:hover,.van-col button:focus{
  color:red;
  border:1px solid red;
}
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
  padding-top:50px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:0px auto 0px auto;
  height:120px;
}

.furu-img{
}
.furu-content{
  width: 80%;
  margin:0px auto 0 auto;
  button{
    width: 100%
  }

}
</style>
