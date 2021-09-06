<template >
  <div class="home-wrap" >
    <div class="progress-animate-wrap" v-if="animate">
      <div class="progress-wrap">
        <div class="progress">
        </div>
        <p class="progress-title">根据所有内容，甜小内正在快马加鞭运算中。</p>
      </div>
    </div>
    <div class="title-wrapper" v-if="isShowPage">
      <div v-if="isfcup" class="result-main" >
        感谢您的支持 <br>
        目前F1以上的罩杯<br>
        甜小内正在研发中<br>
        产品出来，会第一时间通知你<br>
      </div>
      <div v-else class="result-main" >
        根据甜小内 <br>
        “半码”个性化专属尺码表 <br>
        您的尺码为：<br>
        <span style="font-size:1.8rem">{{$store.state.txncup}}</span><br>
        forget it!<br>
        无需占用您的大脑容量 <br>
        以后你的每次购买 <br>
        无需再测量 <br>
        无需再选择码数<br>
        甜小内会给您发送对应的码数 <br>
        你尽情貌美如花 <br>
        我做你私人管家
      </div>

      <div class="clear">
      </div>
    </div>
    <Bottom :url="url"></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
import Vue from 'vue'
import {timeFormat} from '@/common/utils.js'
export default {
  data(){
    return{
      url:{
        prev:"/upchestmeasure",
        next:"/share",
        nextbtn:true,
        fatherobj:null
      },
      isShowPage:false,
      animate:true,
      val:0,
    }
  },
  components:{
    Bottom,
  },
  created(){
          let time=timeFormat("yyyy-MM-dd HH:mm:ss")
          let token=localStorage.getItem("x-token")
          let arr=token.split(".")
          let payload=arr[1]
          let userid=JSON.parse(atob(payload)).data.userid
          this.$store.dispatch('commitadduserid',userid)
          //alert('userid '+this.$store.state.userid)
          let data={
           user_name:this.$store.state.username,
           user_id:this.$store.state.userid,
           user_phone:this.$store.state.phone,
           wx_user_name:this.$store.state.nickname,
           user_opid:this.$store.state.opid,
           user_breast_shapes:this.$store.state.chestshapes,
           user_had_brand:this.$store.state.brand,
           user_had_size:this.$store.state.hadcupsize,
           user_no_size:this.$store.state.nosize,
           user_had_cup:this.$store.state.hadcup,
           user_jiandai:this.$store.state.fitbar,
           user_beidai:this.$store.state.backfit,
           user_breast_wk:this.$store.state.ifwk,
           user_jixin_juli:this.$store.state.wkdistance,
           user_huxi_width:this.$store.state.huxi,
           user_tuqi_width:this.$store.state.tuqi,
           user_up_zhili:this.$store.state.standwidth,
           user_up_45:this.$store.state.xieyao,
           user_up_zhijiao:this.$store.state.zhijiao,
           user_avg_sxw:this.$store.state.avgsxw,
           user_cup_fit:this.$store.state.cupfit,//罩杯是否合适
           user_cebi:this.$store.state.furu,
           user_jixin_yapo:this.$store.state.jixiong,
           user_icon:this.$store.state.usericon,
           user_txncup:this.$store.state.txncup,
           time:time,
         }
         this.postdata=data
          Vue.axios.post("https://www.tianxiaonei.com/wx/savedata.php",data,{
            headers:{
              "x-token":token
            }
          })
          .then(data=>{
            if(data.data.status=="success"){
              this.$store.dispatch('committxncup',data.data.txncup)
            }else{
                this.$store.dispatch('commitgeterr',JSON.stringify(data.data))
                this.$router.push('/err')
            }
          }).catch(err=>{
            if (typeof(err)!="string"){
              this.$store.dispatch('commitgeterr',JSON.stringify(err))
            }
            this.$store.dispatch('commitgeterr',err)
            this.$router.push('/err')
          })

    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  mounted(){
    setTimeout(()=>{
      this.animate=false
      this.isShowPage=true
    },2000)

  },
  methods:{

  },
  updated(){

  },
  computed:{
  isfcup:function(){
    if (this.$store.state.txncup=="暂时不提供F罩杯以上的测量"){
      return true
    }else{
      return false
    }
  }
}
}
</script>

<style lang="scss" scoped>

@keyframes progress-animate{
  0%{
    width:0px;
  }
  100%{
    width: 100%;
  }
}
.progress{
  height:30px;
  background: #ff7a6d;
  //background:#abbbdd;
  animation: progress-animate 2s;
  border-radius: 5px;
}
.progress-wrap{
  background:grey;width:80%;height:30px;border-radius:5px;
  margin:0 auto;
}
.progress-animate-wrap{
  height:100vh;
  box-sizing:border-box;
  padding-top:48%;
}
.progress-title{
  font-size:1rem;
  font-weight: bold;
}
.home-wrap{
  position:relative;
  height:100vh;
  box-sizing: border-box;
}
.title-wrapper{
  width:80%;
  margin:0 auto;
  padding-top:50px;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.result-main{
  line-height: 2rem;
  float:left;
  font-size:0.9rem;
  width:100%;
  margin:0px auto 0 auto;
  padding-top:50px;
  height:140px;

}
</style>
