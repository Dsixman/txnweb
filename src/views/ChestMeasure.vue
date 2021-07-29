<template>
  <div class="">
    <div class="title-wrapper" >
      <!-- <div class="title-img">
        <img src="@/assets/m1.png"  width="90">
      </div> -->
      <div class="size-title">
        请先测量您下胸围的数据
      </div>
      <div class="clear">
      </div>
    </div>
    <div class="cm-top-description">
      <div class="content">
        测量下胸围时请赤裸上身，保持直立<br/>
        用软尺贴合乳房下围，水平环绕身体一圈
      </div>
    </div>
    <div class="step">
      <van-col span="10">
        <img src="@/assets/hx-1.png" alt="测量胸围" height="156">
      </van-col>
      <van-col span="14" class="step-right">
          <div class="step-title">
              直立正常呼吸贴肤测量
          </div>
          <div class="step-form">
            <van-col span="17" offset="1">
               <van-field type="number" v-model="huxi" placeholder="请输入测量值"  input-align="center" id="huxi" /><span v-if="huxiformat" style="color:red">请输入正确的测量值</span>
            </van-col>
            <van-col span="3" class="step-right-cm" offset="1">
              cm
            </van-col>
          </div>
        </van-col>
     </div>
      <div class="step">
        <van-col span="10">
          <img src="@/assets/hx-2.png" alt="测量胸围" height="156">
        </van-col>
        <van-col span="14" class="step-right">
            <div class="step-title">
                直立吐气贴肤测量
            </div>
            <div class="step-form">
              <van-col span="17" offset="1">
                 <van-field v-model="tuqi" placeholder="请输入测量值" input-align="center" type="number" id="tuqi" /><span v-if="tuqiformat" style="color:red">呼吸和吐气填写的测量值有误</span>
              </van-col>
              <van-col span="3" offset="1" class="step-right-cm">
                cm
              </van-col>
            </div>
          </van-col>
      </div>
      <Bottom :url="url"></Bottom>

  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
export default {
  data(){
    return {
      tuqi:this.$store.state.tuqi,
      huxi:this.$store.state.huxi,
      //tuqiformat:false,
      //huxiformat:false,
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  components:{
    Bottom
  },
  computed:{
    url(){
      if(this.huxi&&this.tuqi){
        let data={huxi:this.huxi,tuqi:this.tuqi}
        this.$store.dispatch('commitchestmeasure',data)
        return {
          prev:"/wk",
          next:"/upchestmeasure",
          nextbtn:true,
          fatherobj:data,
        }
      }else{
        //alert(this.url)
        return {
          prev:"/wk",
          next:"/upchestmeasure",
          nextbtn:true,
          fatherobj:null,
        }
        //this.url.fatherobj=null;
      }

    },
    huxiformat(){
      let value=this.huxi
      if (value){
        if (value>150||value<10){
          return true;
        }else{
          return false
        }
      }else{
        return false
      }
    },
    tuqiformat(){
      let value=this.tuqi
      //alert("tuqi"+value)
      if(value){
      //  alert(value)
        if (value>150||value<10){
          return true
        }else{
          return false
        }
      }else{
        return false
      }
    },

  },
  methods:{
    // chectTuQi(e){
    //   let value=e.target.value
    //   if (value>150||value<10){
    //     this.tuqiformat=true;
    //   }
    // },
    // chectHuXi(e){
    //   let value=e.target.value
    //   if (value>150||value<10||value-this.tuqi>-2){
    //     this.huxiformat=true;
    //   }
    // },
  },
  mounted(){

  },
  updated(){
    //if()

    this.$store.dispatch('commithuxi',this.huxi)
    this.$store.dispatch('committuqi',this.tuqi)
    //alert(this.url.fatherobj)

    // if(this.huxi&&this.tuqi){
    //   //alert(this.huxi)
    //   //alert(this.tuqi)
    //   let data={huxi:this.huxi,tuqi:this.tuqi}
    //   this.$store.dispatch('commitchestmeasure',data)
    //   this.$store.dispatch('commithuxi',this.huxi)
    //   this.$store.dispatch('committuqi',this.tuqi)
    //   this.url.fatherobj=data
    // }else{
    //   alert(this.url)
    //   this.url.fatherobj=null;
    // }

  }
}
</script>

<style lang="scss" scoped>
.title-wrapper{
  width:80%;margin:0px auto 0 auto;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.size-title{
  //line-height:140px;
  box-sizing: border-box;
  padding-top:60px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:0px auto 0px auto;
  height:140px;
}
.cm-top-description{
  font-size:0.8rem;
  width:100%;
  text-align: center;
//  margin-top:30px;
  .content{
    line-height:2rem;
    width:80%;
    margin:0 auto;
  }
}
.van-field__control{
  text-align:center;
}
.step{
  width:80%;
  font-size:0.8rem;
  margin:20px auto 0 auto;
  overflow: hidden;
  .show-img{
    width:40%;float:left;
  }
  .step-right{
    .step-title{
      margin-top:30px;
      margin-bottom: 30px
    }
    .step-right-cm{
      line-height:2rem;
      font-size:1rem
    }
  }

}

.clear{
  clear:both;
}

</style>
