<template>
  <div class="">
    <div class="cm-top-title">
      测量上胸围数据
    </div>
    <div class="cm-top-description">
      <div class="content">
        测量上胸围时，将软尺轻贴着乳头,<br/>沿水平横截面环绕一圈
      </div>
    </div>
    <div class="step">
      <van-col span="10">
        <img src="@/assets/3f.png" alt="直立测量胸围" height="106">
      </van-col>
      <van-col span="14" class="step-right">
          <div class="step-title">
              直立贴肤测量
          </div>
          <div class="step-form">
            <van-col span="18">
               <van-field v-model="stand" placeholder="请输入您测量到的数据" input-align="center"/>
            </van-col>
            <van-col span="6" class="step-right-cm">
              cm
            </van-col>
          </div>
        </van-col>
      </div>
      <div class="step">
        <van-col span="10">
          <img src="@/assets/f8.png" alt="倾斜测量胸围" height="106">
        </van-col>
        <van-col span="14" class="step-right">
            <div class="step-title">
                倾斜45度角直立贴肤测量
            </div>
            <div class="step-form">
              <van-col span="18">
                 <van-field v-model="xieyao" placeholder="请输入您测量到的数据" input-align="center"/>
              </van-col>
              <van-col span="6" class="step-right-cm">
                cm
              </van-col>
            </div>
          </van-col>
        </div>
        <div class="step">
          <van-col span="10">
            <img src="@/assets/fb.png" alt="弯腰测量胸围" height="106">
          </van-col>
          <van-col span="14" class="step-right">
              <div class="step-title">
                  身体90度角弯腰测量
              </div>
              <div class="step-form">
                <van-col span="18">
                   <van-field v-model="zhijiao" placeholder="请输入您测量到的数据" input-align="center"/>
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
        next:"/chestshapes",
        fatherobj:null
      },
      stand:"",
      zhijiao:'',
      xieyao:""
    }
  },
  components:{
    Bottom
  },
  updated(){
    if(this.stand!=""&&this.zhijiao!=""&&this.xieyao!=""){
      let data={stand:this.stand,zhijiao:this.zhijiao,xieyao:this.xieyao}
      this.$store.dispatch('commitupchestmeasure',data)
      this.url.fatherobj=data
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
