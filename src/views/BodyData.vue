<template>
  <div class="per-wrap">
  <div class="" style="background:white;border-radius:10px;width:80%;margin:0px auto 0 auto;padding:20px 0px">
    <div class="body-title">
      测量结果
    </div>
    <div class="" style="width:90%;margin:0 auto">
      <van-row class="body-detials">
        <van-col span="8">上胸围</van-col>
        <van-col span="16">{{shangxiongwei}}</van-col>
      </van-row>
      <van-row class="body-detials">
        <van-col span="8">下胸围</van-col>
        <van-col span="16">{{xiaxiongwei}}</van-col>
      </van-row>
      <van-row class="body-detials">
        <van-col span="8">胸型</van-col>
        <van-col span="16">{{breastshape}}</van-col>
      </van-row>
      <van-row class="body-detials">
        <van-col span="8">适合码数</van-col>
        <van-col span="16">{{txncup}}</van-col>
      </van-row>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  created(){
  },
  computed:{
    shangxiongwei:function(){
      return this.$store.state.personaldata.user_avg_sxw
    },
    xiaxiongwei:function(){
      let xxw=(this.$store.state.personaldata.user_huxi_width+this.$store.state.personaldata.user_tuqi_width)*100/200
      return xxw

    },
    breastshape:function(){
      return this.$store.state.personaldata.user_breast_shapes
    },
    txncup:function(){
     return this.$store.state.personaldata.user_txncup

    }
  }
}
</script>

<style lang="scss" scoped>
.body-title{
  height:50px;
  font-size:1.2rem;
}
.body-detials{
  height:35px;
  border-bottom:1px solid grey;
  line-height:35px;
}
.per-wrap{
padding-top:70px;
}
</style>
