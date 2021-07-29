<template>
  <div class="personal">
    <div class="personal-top">
      <div class="personal-icon-wrap">
        <div class="personal-icon" id="user-icon">
        </div>
      </div>
      <div class="personal-base">
        <div class="personal-wx-name" >
          <span>用户名</span><br>
          <span>{{user_name}}</span>
        </div>
        <div class="personal-result" >
          <span>甜小内尺码</span><br>
          <span>{{user_txncup}}</span>
        </div>
        <div class="clear">

        </div>
      </div>
    </div>
    <div class="personal-detail">
      <div class="">
        <div class="personal-profile">
          <router-link :to="{ name: 'BaseData', params: {} }"><van-icon name="user-o" size="25px" /> <span class="van-icon">个人基础资料</span></router-link>
        </div>
        <div class="personal-profile">
          <router-link :to="{ name: 'BodyData', params: {} }"><van-icon name="records" size="25px"/> <span class="van-icon" >身体数据</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return{
    }
  },
  computed:{
    user_icon:function(){
      return this.$store.state.usericon
    },
    user_name:function(){
      return this.$store.state.nickname
    },
    user_txncup:function(){
      return this.$store.state.txncup
    },
    user_data:function(){
      return this.$store.state.personaldata
    }
  },

  created(){
    let token=localStorage.getItem("x-token")
    if (!this.$store.state.personaldata){
      Vue.axios.get("https://www.tianxiaonei.com/wx/getuserdata.php",{
         headers: {
           'x-token':token
         }}).then(data=>{
           if (data.err){
             this.$store.dispatch('commitgeterr',data.data)
             this.$router.push('/err')
           }else{
             this.$store.dispatch("commitpersonaldata",data.data[0])
             this.$store.dispatch("commitnickname",data.data[0].wx_user_name)
             this.$store.dispatch("committxncup",data.data[0].user_txncup)
             this.$store.dispatch("commitusericon",data.data[0].user_icon)
           }
      }).catch(err=>{
        this.$store.dispatch('commitgeterr',err)
        this.$router.push('/err')
      })
    }

  },
  mounted(){
    if(this.$store.state.usericon){
      document.getElementById("user-icon").style="background:url('"+this.$store.state.usericon+"') no-repeat center center;background-size:cover"
    }else{
      let img=require('@/assets/m2.png')
      document.getElementById("user-icon").style="background:url('"+img+"') no-repeat center center;background-size:cover"
    }
  },

}

</script>
<style lang="scss" scoped>
a:link,a:visited {

    color:#000;

}
a:hover,a:active{
  color:red;

}
.clear{clear:both}

.personal{
  box-sizing: border-box;
  position:relative;
  padding-top:100px;
  .personal-detail{
    height:46vh;
    padding-top:70px;
    border-radius: 40px 40px 0 0;
  background:#fff0f0;
    .personal-profile{
      width:70%;
      border-bottom:1px solid grey;
      margin:0 auto 20px auto;
      text-align: left;
      span{
        padding:0px;
        vertical-align:top;
      }
    }
  }
}

.personal-top{
overflow:hidden
}
.personal-icon-wrap{

  .personal-icon{
      height:90px;width:90px;
      border:1px solid white;
      border-radius: 50%;
      margin:0 auto;
  }
}
.personal-base{
  padding-top:30px;
  width:100%;
  overflow: hidden;
  height:80px;
}

.personal-wx-name{
  width:50%;
  float:left;
  text-align:center;
}
.personal-result{
  width:50%;
  float:left;
  text-align:center;
}
</style>
