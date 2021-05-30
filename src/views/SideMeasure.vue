<template>
  <div class="">
    <div class="cm-top-title">
      测量胸围左右两边的数据
    </div>
    <div class="cm-top-description">
      <div class="content">
        前倾45度，从乳房外侧轮廓开始测量，途径乳头<br/>
        (刚好贴合，不压乳头)，测量到内测轮廓结束(不包括胸距)
      </div>
      <div class="side-img">
        <img src="@/assets/side.png" height="150" alt="">
      </div>
    </div>
    <div class="left-side">
      <div class="left-side-title">
        左胸横围
      </div>
      <div class="left-side-img">

        <van-col span="14" offset="4">
          <van-field v-model="value" placeholder="请输入您测量到的数据" />
        </van-col>
        <van-col class="left-side-cm" span="2">
          cm
        </van-col>
      </div>
      <div class="clear">

      </div>
    </div>
    <div class="left-side">
      <div class="left-side-title">
        右胸横围
      </div>
      <div class="left-side-img">
        <van-col span="14" offset="4">
          <van-field v-model="value" placeholder="请输入您测量到的数据" />
        </van-col>
        <van-col class="left-side-cm" span="2">
          cm
        </van-col>
      </div>
      <div class="clear"></div>
    </div>
    <Bottom :url="url"></Bottom>
  </div>
</template>
<script>
import Bottom from '@/components/Bottom.vue'
export default{
  data(){
    return{
      url:{
        prev:"/upchestmeasure",
        next:"/chestshapes"
      }
    }
  },
  components:{
    Bottom
  }

}
</script>
<style lang="scss">
.cm-top-title{
  font-size:1.4rem;
  margin:50px auto 0 auto;
  width:100%;
  text-align:center;
}
.cm-top-description{
  font-size:1rem;
  width:100%;
  text-align: center;
  margin-top:30px;
  .content{
    line-height:2rem;
    width:80%;
    margin:0 auto;
  }
}
.side-img{
  margin-top:30px
}
.left-side{
  width:80%;

margin:20px auto 0 auto;

  .left-side-title{
      font-size:0.9rem;
  }
  .left-side-cm{
    line-height:2.6rem;
    font-size:1.3rem
  }
}
.clear{
  clear:both;
}
</style>
