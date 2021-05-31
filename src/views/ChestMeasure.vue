<template>
  <div class="">
    <div class="cm-top-title">
      测量下胸围数据
    </div>
    <div class="cm-top-description">
      <div class="content">
        测量下胸围时请赤裸上身，保持直立<br/>
        用软尺贴合乳房下围，水平环绕身体一圈
      </div>
    </div>
    <div class="step">
      <van-col span="10">
        <img src="@/assets/xxw1.png" alt="测量胸围" height="156">
      </van-col>
      <van-col span="14" class="step-right">
          <div class="step-title">
              直立正常呼吸贴肤测量
          </div>
          <div class="step-form">
            <van-col span="18">
               <van-field v-model="xiqi" placeholder="请输入您测量到的数据"  input-align="center"/>
            </van-col>
            <van-col span="6" class="step-right-cm">
              cm
            </van-col>
          </div>
        </van-col>
     </div>
      <div class="step">
        <van-col span="10">
          <img src="@/assets/xxw2.png" alt="测量胸围" height="156">
        </van-col>
        <van-col span="14" class="step-right">
            <div class="step-title">
                直立吐气贴肤测量
            </div>
            <div class="step-form">
              <van-col span="18">
                 <van-field v-model="tuqi" placeholder="请输入您测量到的数据" input-align="center" />
              </van-col>
              <van-col span="6" class="step-right-cm">
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
      url:{
        prev:"/backfit",
        next:"/upchestmeasure",
        fatherobj:null
      },
      tuqi:this.$store.state.chestmeasure.tuqi,
      xiqi:this.$store.state.chestmeasure.xiqi
    }
  },
  components:{
    Bottom
  },
  methods:{
    // savechestdata(){
    //   if(this.xiqi!=""&&this.tuqi!=""){
    //     let data={xiqi:this.xiqi,tuqi:this.tuqi}
    //     this.$store.dispatch('commitchestmeasure',data)
    //     this.url.fatherobj=data
    //     console.log("chest ")
    //     console.log(this.url.fatherobj)
    //   }
    // }
  },
  mounted(){

  },
  updated(){
    if(this.xiqi!=""&&this.tuqi!=""){
      let data={xiqi:this.xiqi,tuqi:this.tuqi}
      this.$store.dispatch('commitchestmeasure',data)
      this.url.fatherobj=data
      console.log("chest ")
      console.log(this.url.fatherobj)
    }

  }
}
</script>

<style lang="scss" scoped>
.cm-top-title{
  font-size:1.2rem;
  margin:20px auto 0 auto;
  height:140px;
    line-height:120px;
  width:100%;
  text-align:center;
}
.cm-top-description{
  font-size:1rem;
  width:100%;
  text-align: center;
  margin-top:30px;
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
  font-size:0.9rem;
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
      line-height:2.6rem;
      font-size:1.3rem
    }
  }

}

.clear{
  clear:both;
}

</style>
