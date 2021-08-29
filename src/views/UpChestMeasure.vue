<template>
  <div class="upchest">
    <div class="cm-top-description">
      <div class="content">
        测量上胸围时，将软尺轻贴着乳头,<br/>沿水平横截面环绕一圈
      </div>
    </div>
    <div class="step" >
      <van-col span="10" class="step-left">
        <img src="@/assets/sxw-1.png" alt="直立测量胸围" height="120">
      </van-col>
      <van-col span="14" class="step-right">
          <div class="step-title">
              直立贴肤测量
          </div>
          <div class="step-form">
            <van-col span="18">
               <van-field type="number"  v-model="stand" id="zhili" placeholder="请输入您测量到的数据" input-align="center" /><span v-if="zhiliformat" style="color:red;font-size:0.8rem">请输入正确的测量值</span>
            </van-col>
            <van-col span="6" class="step-right-cm">
              cm
            </van-col>
          </div>
        </van-col>
      </div>
      <div class="step">
        <van-col span="10" class="step-left">
          <img src="@/assets/sxw-2.png" alt="倾斜测量胸围" height="120">
        </van-col>
        <van-col span="14" class="step-right">
            <div class="step-title">
                倾斜45度角直立贴肤测量
            </div>
            <div class="step-form">
              <van-col span="18">
                 <van-field type="number" v-model="xieyao" id="xieyao" placeholder="请输入您测量到的数据" input-align="center" /><span v-if="xieyaoformat" style="color:red;font-size:0.8rem">直立或45度弯腰的测量值有误</span>
              </van-col>
              <van-col span="6" class="step-right-cm">
                cm
              </van-col>
            </div>
          </van-col>
        </div>
        <div class="step">
          <van-col span="10" class="step-left">
            <img src="@/assets/sxw-3.png" alt="弯腰测量胸围" height="120">
          </van-col>
          <van-col span="14" class="step-right">
              <div class="step-title">
                  身体90度角弯腰测量
              </div>
              <div class="step-form">
                <van-col span="18">
                   <van-field type="number" v-model="zhijiao" id="zhijiao" placeholder="请输入您测量到的数据" input-align="center" /><span v-if="zhijiaoformat" style="color:red;font-size:0.8rem">输入的测量值有误</span>
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
        prev:"/chestmeasure",
        next:"/result",
        nextbtn:true,
        fatherobj:null

      },
      stand:this.$store.state.standwidth,
      zhijiao:this.$store.state.zhijiao,
      xieyao:this.$store.state.xieyao,
      // zhiliformat:false,
      // xieyaoformat:false,
      // zhijiaoformat:false
    }
  },
  computed:{
    zhiliformat(){
      let value=this.stand
      if (value){
        if (value>150||value<10){
          return true
        }else{
          return false
        }
      }else{
        return false
      }

    },
    xieyaoformat(){
      let value=this.xieyao
      if (value){
        if (value>150||value<10||(value-this.stand<-2)){
          return true
        }else{
          return false
        }
      }else{
        return false
      }
    },
    zhijiaoformat(){
      let value=this.zhijiao
      if (value){
        if (value>150||value<10||(value-this.xieyao<-2)){
          return true
        }else{
          return false
        }
      }else{
        return false
      }

    }
  },
  components:{
    Bottom
  },
  methods:{
  },
  created(){

    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  mounted(){

  },
  updated(){
    this.$store.dispatch('commitstandwidth',this.stand)
    this.$store.dispatch('commitzhijiao',this.zhijiao)
    this.$store.dispatch('commitxieyao',this.xieyao)
    if(this.stand!=""&&this.zhijiao!=""&&this.xieyao!=""){
      let data={stand:this.stand,zhijiao:this.zhijiao,xieyao:this.xieyao}
      this.$store.dispatch('commitupchestmeasure',data)

      this.url.fatherobj=data
    }

  }
}
</script>

<style lang="scss" scoped>
.upchest{

  position:relative;
}
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
  float:left;
  line-height:140px;
  font-size:0.9rem;
  width:60%;
  margin:0px auto 0 auto;
  height:140px;
}
.cm-top-description{
  font-size:0.9rem;
  font-weight: bold;
  width:100%;
  text-align: center;
  .content{
    font-size:1rem;
    line-height:2rem;
    width:80%;
    margin:20px auto 0 auto;
    height:70px;
  }
}

.step{
  width:80%;
  font-size:0.9rem;
  margin:0px auto 0 auto;
  overflow: hidden;

  .step-left{
    padding-top:30px
  }
  .show-img{
    width:40%;float:left;
  }
  .step-right{
    .step-title{

      margin-top:25px;
      margin-bottom: 25px
    }
    .step-right-cm{
      line-height:2.6rem;
      font-size:1rem
    }
  }

}
.prev-page{
position: fixed;
  left:0px;
  top:50%;
  height:60px;
  width:60px;
  border:1px solid #FFF;
  border-radius:30px ;
  background-color: #f4b3a8;
  line-height:70px;
}
.bottom-button{
  margin-top:30px;
  a{color:white;
    line-height: 3.5rem;
  }
  .next-page{

    background-color: #f4b3a8;
  }

}
</style>
