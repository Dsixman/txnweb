<template>
<div class="home-wrap">
    <div id="home-animate" class="home-animate" v-if="isShow" @click="toNext(1)" @touchend="toNext(1)">
          <div class="first-animate" v-if="firstShow">
            <div class="">
              <span>嘿，{{lishiname}}</span><br>
            </div>
            <div style="margin-top:20px;">
              现在<br >
              请花1分钟的时间<br >
              11道简单题目 <br>
              从身体最柔软的部位出发<br >
              发现自己刚好合适的<br >
              细分 “半码” 文胸码数<br >
              <span>不止舒适 而且...</span>
            </div>
          </div>
          <div class="first-animate" v-if="secondShow">
            <div >
              <span>小胸好看有型</span><br >
              <span>大胸承托显小</span><br >
              <span>不空杯不压胸</span><br >
            </div>
            <div style="margin-top:20px;">
              <span >不敷衍的你</span><br />
              从此时此刻<br>
              享受甜小内带给你的美好<br />
            </div>
            <div style="margin-top:20px;">
              <img src="@/assets/sylogo.png" width="200"/>
            </div>
          </div>
          <div class="next-btn">

          </div>
          <div class="beian">
            <p style="padding:0px;margin:0px;padding-top:10px;"><a href="https://www.tianxiaonei.com" style="color:#939393;font-weight: normal;font-size:1rem;">东莞市莞欣服装有限公司</a></p>
            <div class="" style="box-size:border-box;text-decoration:none;">
              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002005613" style="display:inline-block;text-decoration:none;background:white;width:300px;font-size:1rem;margin:0 auto;text-align:center;color:#939393;">粤公网安备 44190002005613号</a>
            </div>
          </div>
    </div>

    <div class="home-main" v-if="isShowPage">
      <van-row class="home" type="flex" justify="space-between" >
          <p class="tips"><span >Tips:</span>请提前准备一根软尺和一面镜子哦</p>
          <van-col span="24" class="app-test-img" >
            <img src="@/assets/jz.png" alt="" >
          </van-col>
            <van-col  span="14" offset="5">
              <div class="ljwrap">
                <van-button @click="filter" class="app-test-home-a">立即测量</van-button>
              </div>
            </van-col>
        </van-row>
        <HomeBottom></HomeBottom>
    </div>

</div>

</template>

<script>
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
      count:1,
      isShowPage:false,
      isShow:true,
      firstShow:true,
      secondShow:false,


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
    // this.countdown()
  },
  methods:{
    toNext(page){
      if(page===this.count){
        this.firstShow=false;
        this.secondShow=true;
        this.count=this.count+1
      }else{
        this.secondShow=false;
        this.isShow=false;
        this.isShowPage=true;
      }
    },
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

//  top:-50px;
  width: 100%;
padding-top:120px;
//  animation:myfirst 1s;
    text-align: center;
    //margin-top:70px;
    font-size:1.2rem;
    font-weight: bold;
    line-height: 2rem;
    color:white;
    box-sizing: border-box;

}
.beian{
  position: absolute;
  bottom:0px;
  width:100%;
  box-sizing: border-box;
  font-weight: normal;
  background:white;
}


.next-btn{
  //position:relative;
  position:absolute;
  bottom:75px;
  left:47%;
  margin:0 auto;
  width:45px;
  height:45px;
  background:url('../assets/upbtn.png') no-repeat center center;
  background-size:80%;
  animation:myfirst 2s infinite;

}

@keyframes myfirst{
  0% {
    opacity:0.25;bottom:75px;
  }
  100%{
    opacity:1;bottom:120px;
  }
}

.home-main{
  padding-top:95px;
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
  margin:5px;
}
.home-animate{
  padding:0px;
  width:100%;
  height:100vh;
  background:#ea042a;
  box-sizing: border-box;
}
.home-wrap{
  position:relative;
  height:100vh;
  overflow: auto;
  box-sizing:border-box;
}
.clear{clear:both}
.home{
  .app-test-home-a{
    color:white;
    font-size: 0.9rem;
    background:#dd9f9f;
    display: block;
    width:95%;
    line-height: 2.3rem;
    border:none;
    border-radius:3px;
  }
  .app-test-img{
    margin-top:20px;margin-bottom:20px
  }
}
.ljwrap{
  width:100%;height:3rem;padding-top:10px;width:100%
}
</style>
