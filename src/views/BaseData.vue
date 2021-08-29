<template>
  <div class="per-wrap">
    <div class="" style="margin:0px auto 0 auto;background:white;border-radius:10px;width:80%;padding:10px 0" >
      <van-row class="data-list">
        <van-col span="8">昵称</van-col>
        <van-col span="16">{{username}}</van-col>
      </van-row>
      <van-row class="data-list">
        <van-col span="8">手机</van-col>
        <van-col span="16">{{phone}}</van-col>
      </van-row>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return {}
  },
  computed:{
    username:function(){
      let username=this.$store.state.personaldata.wx_user_name||this.$store.state.personaldata.user_name
      return username
    },
    phone:function(){
      return this.$store.state.personaldata.user_phone
    }
  }
}
</script>

<style lang="scss" scoped>
.per-wrap{
padding-top:70px;
margin:0px auto 0 auto;
}
.data-list{
  width:90%;
  border-bottom:1px solid grey;
  height:35px;
  line-height:35px;
  margin:0 auto;
}

</style>
