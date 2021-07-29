<template>

<div class="home-wrap">
  <!-- <canvas class="home-qipao">
  </canvas> -->
    <div id="home-animate" class="home-animate" v-if="isAnimationStart" @click="animationEnd">
      <div id="tickcount">{{tick}}S</div>

          <div class="" id="first-animate" v-if="tick>3" >
            <span>嘿，{{lishiname}}</span><br>
            <span >终于等到你</span><br >
          </div>
          <div class="" id="second-animate" v-if="tick>3" >
            <br >
            现在<br >
            请花1分钟的时间<br >
            从身体最柔软的部位出发<br >
            发现自己<br >
            找到刚好合适的尺码<br >
          </div>
          <br>
          <div class="" v-if="tick>3" style="margin-top:110px;">
            <img src="@/assets/sylogo.png" width="180"/>
          </div>
          <div id="third-animate" v-if="tick<=3" >
            <span>小胸聚拢不空杯</span><br >
              <span>大胸承托不压胸</span><br >
              <span>更加舒适有型</span><br >
          </div>
          <div class="" id="forth-animate" v-if="tick<=3">
            <span >不敷衍的你</span><br />
            从此刻开始<br>
            享受甜小内带给你的美好<br />
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

//import Vue from 'vue'
import HomeBottom from '@/components/HomeBottom.vue'
//import bubbly from '@/common/bubbly'
export default {
  name: 'Home',
  data(){
    return {
      err:null,
      user:null,
      url:null,
      //nickname:"",
      tick:5,
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
    // let query=to.query
    // let client=store.state.client
    // let code=""
    // let wxhaschect=store.state.wxhaschect
    // if (Object.getOwnPropertyNames(query)){
    //   if (query.state){
    //     client=query.state
    //     store.dispatch('commitclient',client)
    //   }
    //   if (query.code){
    //     code=query.code
    //   }
    // }
    // if(code||store.state.client=="wxgzh"){
    //   if(wxhaschect==false){
    //       store.dispatch("commitaddwxhaschect",true)
    //     Vue.axios.post("https://www.tianxiaonei.com/wx/getuser/index.php",{code:code,wxhaschect:wxhaschect,client:"wxgzh"}).then(data=>{
    //       window.console.log(data)
    //       let res=JSON.parse(data.data)
    //       window.console.log(res)
    //       window.console.log(typeof(res))
    //       store.dispatch("commitnickname",res.nickname)
    //       store.dispatch("commitusericon",res.headimgurl)
    //       store.dispatch("commitopid",res.openid)
    //       store.dispatch("commitaddwxhaschect",true)
    //       next()
    //     }).catch(err=>{
    //       if (err){
    //         next({name:'Err'})
    //       }
    //     })
    //   }
  },
  mounted(){
    //  bubbly({
    //   colorStart:"#fff0f0",
    //   colorStop: "#ffe9e4",
    // });
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
#first-animate{
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

#second-animate{
  position:relative;
  //top:-50px;
  width: 60%;
  color:white;
  text-align: center;
  //margin-top:70px;
  top:110px;
  left:20%;
  font-size:1.2rem;
  font-weight: bold;
  line-height: 2rem;
  color:white;
  //animation:mysecond 1s;
}
// @keyframes mysecond
// {
//   0%{top:50px;left:-100px;}
//   100%{top:50px;left:20%}
// }
#third-animate{
  position:relative;
//  top:-50px;
  width: 100%;
  top:120px;
  //animation:myfirst 1s;
    text-align: center;
    //margin-top:70px;
    font-size:1.2rem;
    font-weight: bold;
    line-height: 2rem;
    color:white;
}

#forth-animate{
  position:relative;
  //top:-50px;
  width: 60%;
  color:white;
  text-align: center;
  //margin-top:70px;
  top:140px;
  left:20%;
  font-size:1.2rem;
  font-weight: bold;
  line-height: 2rem;
  color:white;
  //animation:myforth 1s;
}

// @keyframes myforth
// {
//   0%{top:80px;left:-100px;}
//   100%{top:80px;left:20%}
// }

.imp{
  //color:#da0101;
  //color:#9b1a00;
  font-size:1.2rem;
  font-weight:blod;
  color:black;
  //color:#b00000;
}
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
// .wish{
//   text-align: center;
//   //margin-top:70px;
//   font-size:1.2rem;
//   font-weight: bold;
//   line-height: 2rem;
//   color:white;
//   font-family: "宋体",sans-serif,PingFang SC,"PingFang SC";
// //  letter-spacing:0.5rem;
// }
.tips{
  font-size: 0.8rem;
  color:grey;
  text-align: center;
  width:100%;
}
.home-animate{
  padding:0px;
  width:100%;height:100vh;
  position:absolute;
  top:0px;
  background:#ea042a;
  //background:url("../assets/sybg4.jpg");
  //background-size: cover;
  //border:1px solid #ff0000;
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
    //border:1px solid grey
    border:none;
    border-radius:3px;
  }
  .app-test-img{
    margin-top:20px;margin-bottom:30px
  }
}
</style>
