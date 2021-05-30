<template >
  <div class="">
    <div class="furu-title">
      两边是否受到挤压
    </div>
    <div class="furu-content">
      <div class="furu-img">
        <img src="@/assets/fr.jpg" height="300"/>
      </div>
      <van-row type="flex" justify="space-between">
        <van-col span="10">

          <router-link :to="{ name: '', params: {} }">
            有
          </router-link>
        </van-col>
        <van-col span="10">
          <router-link :to="{ name: '', params: {} }" >
            没有
          </router-link>
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
        prev:"/cupfit",
        next:"/jixiong"
      }
    }
  },
  components:{
    Bottom,
  }
}
</script>

<style lang="scss" scoped>
a:link,a:visited {
  font-size:1rem;
    width:100%;
    height:40px;
    display:block;
    margin:0 auto;
    border: 1px solid #ebedf0;
    border-radius: 2px;
    //padding:0 15px;
    line-height:43px;
    color:#000;

}
a:hover,a:active{
  color:red;
  border:1px solid red;
}
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
