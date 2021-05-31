<template>
  <div class="">
    <div class="cm-top-description" >
      <div class="content">
        您既往穿过的品牌
      </div>
      <div class="content-wrapper">
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <router-link class="w90pec" to="/hadsize" @click="savebrand($event)">古今</router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/nosize"  @click="savebrand($event)">Ubras</router-link>
          </van-col>
        </div>
        <div class="brand-title" >
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/nosize"  @click="savebrand($event)">内外</router-link>
          </van-col>

        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize"  @click="savebrand($event)">蕉内
            </router-link>
          </van-col>
        </div>


        <div class="brand-title" >
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize" @click="savebrand($event)" >曼尼芬</router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize"  @click="savebrand($event)">遐 HISA
            </router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize"  @click="savebrand($event)">都市丽人</router-link>
          </van-col>

        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize"  @click="savebrand($event)">爱慕Aimer
            </router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec"  to="/hadsize"  @click="savebrand($event)">黛安芬</router-link>
          </van-col>

        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize"  @click="savebrand($event)">婷美 </router-link >
          </van-col>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
//import Bottom from '@/components/Bottom.vue'
import { Toast } from 'vant';
export default {
  data(){
    return {
      url:{
        prev:"",
        next:"",
      },
      value:'',
      value2:'',
      value3:"",
      showPicker: false,
      snsz:false,
      ysz:false,

    }
  },
  components:{
  //  Bottom
  },
  mounted:function(){

  },
  methods: {
   savebrand(eve){
     let txt=eve.target.text
        this.$store.dispatch("commitbrand",txt)
        if(txt=="内外"||txt=="Ubras"){
          this.$router.push("/nosize")
        }else{
          this.$router.push("/hadsize")
        }
    },
   onCancel() {
     Toast('取消');
   },
   onConfirm(value) {
   this.value = value;
   this.showPicker = false;
  },
  cancelsnsz() {
    Toast('取消');
  },
  clicksnsz(value) {
  this.value2 = value;
  this.snsz = false;
},
  cancelysz() {
    Toast('取消');
  },
  clickysz(value) {
  this.value3 = value;
  this.ysz = false;
  },
  changeStyle(ele){
    if (ele.target.className.indexOf("active")===-1){
      let partent=ele.target.parentNode
      console.log(partent)
      let brotherele=partent.getElementsByClassName('van-button')
      for(let i=0;i<=brotherele.length-1;i++){
        if (brotherele[i].className.indexOf(" active")>-1){
          brotherele[i].className=brotherele[i].className.replace(' active',"")
          break;
        }
      }
      ele.target.className=ele.target.className+" active";
    }
  }
 },
}
</script>

<style lang="scss" scoped>

.brand-title{
  margin-top:15px;
  overflow:hidden;
  height:45px;

  .brand-title-items{
    height:40px;
  //  border:1px solid #ff0000;
    text-align: center;
      box-sizing: content-box;
    a:link,a:visited {
      box-sizing: content-box;
        width:89%;
        height:40px;
        display:block;
        margin:0 auto;
        border: 1px solid #ebedf0;
        border-radius: 2px;
        padding:0 15px;
        line-height:43px;
        color:#000;

    }
    a:hover,a:active{
      color:red;
      border:1px solid #ff0000;
    }

  }
}


.clear{
  clear: both;
}
.w20{
  width:30%;
  float:left;
  line-height:3rem
}

.cm-top-description{
  font-size:1rem;
  width:100%;
  text-align: center;
  margin-top:30px;
  padding-bottom:30px;
  .content{
    //line-height:2rem;
    line-height:120px;
    font-size:1.2rem;
    width:80%;
    margin:20px auto 0 auto;
    height:140px;
  }
}
.content-wrapper{
  width:80%;
  margin:0 auto;
}


.brand-form{
  margin-top:20px;
  .item-select{
      width:60%;
      margin:0 auto;
      input{
        text-align:center;
      }
  }
  }
.clear{
  clear:both;
}

</style>
