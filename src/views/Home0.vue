<template>

<div class="home-wrap">
    <div id="home-animate" class="home-animate" v-if="isAnimationStart" @click="animationEnd">
      <div id="tickcount">{{tick}}S</div>

          <div class="first-animate" v-if="tick>3">
            <div class="">
              <span>嘿，{{lishiname}}</span><br>
              <span >终于等到你</span><br >
            </div>
            <div  style="margin-top:20px;">
              现在<br >
              请花1分钟的时间<br >
              11道简单选择题 <br>
              从身体最柔软的部位出发<br >
              发现自己<br >
              找到刚好合适的尺码<br >
              <span>不止舒适  更有型</span>
            </div>
          </div>



          <div class="first-animate" v-if="tick<=3" >
            <div >
              <span>小胸好看不空杯</span><br >
              <span>大胸承托不压胸</span><br >
            </div>
            <div style="margin-top:20px;">
              <span >不敷衍的你</span><br />
              从此刻开始<br>
              享受甜小内带给你的美好<br />
            </div>
            <div style="margin-top:20px;">
              <img src="@/assets/sylogo.png" width="200"/>
            </div>

          </div>


    </div>
    <div class="home-main">
      <van-row class="home" type="flex" justify="space-between" v-if="isShowPage">
        <van-col span="24" class="app-test-img" >
          <img src="@/assets/jz.png" alt="" >
        </van-col>
        <van-col  span="12" offset="6">
          <button type="button" name="button3" @click="filter" class="app-test-home-a">立即测量</button>
        </van-col>

        <p class="tips"><span >Tips:</span>请提前准备一根软尺和一面镜子哦</p>

      </van-row>
    </div>
    <HomeBottom></HomeBottom>
</div>

</template>

<script>
// @ is an alias to /src


import HomeBottom from '@/components/HomeBottom.vue'
import Vue from 'vue'
//import bubbly from '@/common/bubbly'
export default {
  name: 'Home',
  data(){
    return {
      err:null,
      user:null,
      url:null,
      tick:8,
      isAnimationStart:true,
      isShowPage:false,

    }
  },
  components: {
    HomeBottom
  },
  computed:{
    lishiname:function(){
      if(this.$store.state.nickname){
        return this.$store.state.nickname
      }else{
        return "朋友"
      }
    },
    isnew:function(){
      if( this.$store.state.wxhaschect ){
        return "yes"
      }else{
        return "no"
      }
    },
  },
  created(){

  },
  mounted(){
    //  bubbly({
    //   colorStart:"#fff0f0",
    //   colorStop: "#ffe9e4",
    // });
    let query=this.$route.query
    let client=this.$store.state.client
    let code=""
    let wxhaschect=this.$store.state.wxhaschect
    if (Object.getOwnPropertyNames(query)){
      if (query.state){
        client=query.state
      this.$store.dispatch('commitclient',client)
      }
      if (query.code){
        code=query.code
      }
    }
    if(code||this.$store.state.client=="wxgzh"){
      if(wxhaschect==false){
        Vue.axios.post("https://www.tianxiaonei.com/wx/getuser/index.php",{code:code,wxhaschect:wxhaschect,client:"wxgzh"}).then(data=>{
          let res=null
          if(typeof(data.data)=="string"){
            res=JSON.parse(data.data)
          }else{
            res=data.data
          }
          this.$store.dispatch("commitnickname",res.nickname)
          this.$store.dispatch("commitusericon",res.headimgurl)
          this.$store.dispatch("commitopid",res.openid)
          this.$store.dispatch("commitaddwxhaschect",true)
        }).catch(err=>{
          this.$store.dispatch("commitgeterr",err)
          this.$router.push('/err')
        })
      }
    }
    this.countdown()
  },
  methods:{
     countdown(){
      let timer=null
      timer = setInterval(()=>{
        if(this.isAnimationStart==true){
          if(this.tick == 1){
            clearInterval(timer);
            this.isAnimationStart=false
            this.isShowPage=true

          }else{
            this.tick=this.tick-1;
          }
        }else{
          clearInterval(timer)
          this.isAnimationStart=false
          this.isShowPage=true
        }
      },1000)
    },
    animationEnd:function(){
      this.isAnimationStart=false
      this.isShowPage=true
     },

filter(){
  //this.too="立即跳转"
    this.$store.dispatch("commitaddloginprevurl","BrandChoice")

    this.$router.push('/brandchoice')
  },

  }
}
</script>
<style lang="scss">
.first-animate{
  position:relative;
//  top:-50px;
  width: 100%;
  top:120px;
//  animation:myfirst 1s;
    text-align: center;
    //margin-top:70px;
    font-size:1.2rem;
    font-weight: bold;
    line-height: 2rem;
    color:white;
}
// @keyframes myfirst
// {
//   0%{top:-50px;}
//   100%{
//     top:60px;
//   }
// }


.home-main{
  position:absolute;
  top:0px;
}
#tickcount{
  text-align:right;
  padding:0px;
  margin-top:10px;
  color:white;
  //border:1px solid #ff0000
}

.tips{
  font-size: 1rem;
  color:grey;
  text-align: center;
  width:100%;
  font-weight: bold;
}
.home-animate{
  padding:0px;
  width:100%;height:100vh;
  position:absolute;
  top:0px;
  background:#ea042a;
}
.home-wrap{
  position:relative;
  height:100vh;
  overflow: auto;
  //border:1px solid #ff0000;
  box-sizing:border-box;
}
.clear{clear:both}
.home{
  margin-top:80px;
  .app-test-home-a{
    color:white;
    font-size: 0.9rem;
    background:#dd9f9f;
    display: block;
    width:100%;
    line-height: 2.3rem;
    border:none;
    border-radius:3px;
  }
  .app-test-img{
    margin-top:20px;margin-bottom:30px
  }
}
</style>
