<template >
  <div class="home-wrap" >
    <div class="title-wrapper">
      <div class="title-img">
        <img src="@/assets/m2.png" width="90">
      </div>
      <div class="">
      </div>
      <div v-if="isfcup" class="size-title" >
        感谢您的支持 <br>
        目前F1以上的罩杯<br>
        甜小内正在研发中<br>
        产品出来，会第一时间通知你<br>
      </div>
      <div v-else class="size-title" >
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
         //console.log(data)
        // alert(data)
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
            //alert(JSON.stringify(data.data))
            // if (data.data.err){
            //
            //   this.$store.dispatch('commitgeterr',JSON.stringify(data.data))
            //   this.$router.push('/err')
            // }else{
            //   this.$store.dispatch('committxncup',data.data)
            // }
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
  //   result:function(){
  //     let shape=this.$store.state.ChestShapes
  //
  //     let sxw=""
  //     if (this.$store.state.avgsxw==""){
  //       if (shape=="水滴型"||shape=="木瓜型"){
  //         sxw=((this.$store.state.zhijiao)*10+(this.$store.state.xieyao)*10+(this.$store.state.standwidth)*10)/30
  //         sxw=sxw.toFixed(2)
  //       }else{
  //         sxw=this.$store.state.xieyao
  //       }
  //     }else{
  //       sxw=this.$store.state.avgsxw
  //     }
  //     this.$store.dispatch("commitavgsxw",sxw)
  //
  //     let xxw=(Number(this.$store.state.huxi)+Number(this.$store.state.chestmeasure.tuqi))/2
  //     let chaer= Number(sxw)-Number(xxw)
  //     let cup=""
  //     let mashu=""
  //     //let typesize=""
  //     let testsize={hadsize:"",nosize:""}
  //
  //     //计算 cup
  //     if(chaer<=7.5){
  //       cup="AA1"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(7.5<chaer&&chaer<=8.75){
  //       cup="AA2"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(8.75<chaer&&chaer<=10){
  //           console.log("CUP A1"+chaer)
  //       cup="A1"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         console.log(xxw)
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(10<chaer&&chaer<=11.25){
  //       console.log("CUP A2"+chaer)
  //       cup="A2"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(11.25<chaer&&chaer<=12.5){
  //       console.log("CUP B1"+chaer)
  //       cup="B1"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(12.5<chaer&&chaer<=13.75){
  //               console.log("CUP B2"+chaer)
  //       cup="B2"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(13.75<chaer&&chaer<=15){
  //         console.log("CUP c1"+chaer)
  //       cup="C1"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(15<chaer&&chaer<=16.25){
  //       cup="C2"
  //       if (xxw>=63&&xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //           mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //
  //
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(16.25<chaer&&chaer<=17.5){
  //       console.log("CUP D1"+chaer)
  //       cup="D1"
  //       if (63<=xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //         mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(17.5<chaer&&chaer<=18.75){
  //         console.log("CUP D2"+chaer)
  //       cup="D2"
  //       if (63<=xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //         mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(18.75<chaer&&chaer<=20){
  //           console.log("CUP E1"+chaer)
  //       cup="E1"
  //       if (63<=xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //         mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(20<chaer&&chaer<=21.25){
  //         console.log("CUP E2"+chaer)
  //       cup="E2"
  //       if (63<=xxw<=67){
  //         mashu=65
  //         testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>67&&xxw<=72){
  //         mashu=70
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>72&&xxw<=77){
  //         mashu=75
  //           testsize.hadsize=mashu+cup
  //
  //       }
  //       if (xxw>77&&xxw<=82){
  //         mashu=80
  //           testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>82&&xxw<=88){
  //         mashu=85
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>88&&xxw<=92){
  //         mashu=90
  //         testsize.hadsize=mashu+cup
  //       }
  //       if (xxw>92){
  //         mashu=95
  //         testsize.hadsize=mashu+cup
  //       }
  //     }
  //     if(chaer>21.25){
  //   //        console.log("CUP F1"+chaer)
  //       testsize.hadsize="暂时不提供F罩杯以上的测量"
  //     }
  //
  //     this.$store.dispatch("committxncup",testsize.hadsize)
  //     return testsize
  // },
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
  padding-top:50px;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.size-title{
  line-height: 2rem;
  float:left;
  //line-height:120px;
  font-size:0.9rem;
  width:60%;
  margin:0px auto 0 auto;
  padding-top:50px;
  height:140px;
}
</style>
