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
          <van-button  type="default" class="w100" >
            有
          </van-button>
        </van-col>
        <van-col span="10">
        <van-button  type="default">
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
        next:"/backfit"
      },
    }
  },

  components:{
    Bottom,
  }
}
</script>

<style lang="scss" scoped>
.furu-title{
  margin-top:30px;
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
