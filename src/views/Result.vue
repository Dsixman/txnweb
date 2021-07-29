<template >
  <div class="home-wrap" >
    <div class="title-wrapper">
      <div v-if="isfcup" class="result-main" >
        感谢您的支持 <br>
        目前F1以上的罩杯<br>
        甜小内正在研发中<br>
        产品出来，会第一时间通知你<br>
      </div>
      <div v-else class="result-main" >
        根据甜小内 <br>
        “半码”精细化罩杯尺码表 <br>
        您的尺码为：{{$store.state.txncup}}<br>
        forget it <br>
        无需占用您的大脑容量 <br>
        以后你的每次购买 <br>
        无需再测量 <br>
        甜小内会给您发送对应的码数 <br>
        <br>
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
    }
  },
  components:{
    Bottom,
  },
  created(){

          let time=timeFormat("yyyy-MM-dd HH:mm:ss");
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
         window.console.log(data)
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
            //alert(err)
            if (typeof(err)!="string"){
              this.$store.dispatch('commitgeterr',JSON.stringify(err))
            }
            this.$store.dispatch('commitgeterr',err)
            this.$router.push('/err')
          })

    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  mounted(){
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
.home-wrap{
  position:relative;
  height:100vh;
//  border:1px solid #ff0000;
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
  //line-height:120px;
  font-size:0.9rem;
  width:100%;
  margin:0px auto 0 auto;
  padding-top:50px;
  height:140px;
}
</style>
