<template >
  <div class="">
    <div class="furu-title">
      胸部中间是否有受到挤压
    </div>
    <div class="furu-content">
      <div class="furu-img">
        <img src="@/assets/fr.jpg" height="300"/>
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
        next:"/backfit",
        fatherobj:null
      },
    }
  },
  methods:{
    savejixiong(eve){
      this.url.fatherobj=eve.target.innerText
      this.$store.dispatch("commitjixiong",this.url.fatherobj)
    }

  },
  components:{
    Bottom,
  }
}
</script>

<style lang="scss" scoped>
.van-col button{
  font-size:1rem;
    width:100%;
    height:40px;
    display:block;
    margin:0 auto;
    //padding:0 15px;
    line-height:43px;
    color:#000;
}
.van-col button:hover,.vancol button:focus{
  color:red;
  border:1px solid red;
}
.furu-title{
  //margin-top:30px;
  margin:20px auto 0 auto;
  height:140px;
    line-height:120px;
}
.furu-img{
  margin-bottom:20px;
}
.furu-content{
  width: 80%;
  margin:20px auto 0 auto;
  button{
    width: 100%
  }

}
</style>
