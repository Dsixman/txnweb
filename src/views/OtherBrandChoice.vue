<template>

    <div class="cm-top-description" >
      <div class="title-wrapper">
        <div class="size-title">
          宝，您经常穿什么品牌呢?
        </div>
        <div class="" style="font-size:0.7rem">
          (文胸品牌千千万,甜小内是我最爱)
        </div>
      </div>

      <div class="content-wrapper">
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">甜小内</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">Ubras</van-button>
          </van-col>
        </div>

        <div class="brand-title" >
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">曼尼芬</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">遐 HISA</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">都市丽人</van-button>
          </van-col>

        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">爱慕Aimer</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">黛安芬</van-button>
          </van-col>

        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items">
            <van-button @click="savebrand($event)">婷美</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">古今</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">奶糖派</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">优衣库</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">华歌尔</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">VICTORIA‵Ｓ SECRET</van-button>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="24" class="brand-title-items" >
            <van-button @click="savebrand($event)">其他</van-button>
          </van-col>
        </div>

      </div>


    </div>

</template>

<script>

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
created(){
  document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
},
  mounted:function(){

  },
  methods: {
   savebrand(eve){
     let txt=eve.target.innerText
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
.title-wrapper{
  width:80%;margin:0px auto 10px auto;
//
//  box-sizing: border-box;
}
.title-img{
  float:left;padding-top:20px
}
.clear{
  clear:both;
}
.brand-title{
  margin-bottom:10px;
  overflow:hidden;
  height:45px;

  .brand-title-items{
    height:40px;
    text-align: center;
  //  box-sizing: content-box;
      button{
        background:white;
        box-sizing: border-box;
        width:95%;
          height:35px;
          display:block;
          margin:0 auto;
          border: 1px solid #afafb1;
          border-radius: 2px;
          padding:0 15px;
          line-height:43px;
          color:#000;
      }
      button:focus{
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

  padding-bottom:30px;
  .size-title{
    box-sizing: border-box;
    padding-top:25px;
    font-size:1rem;
    font-weight: bold;
    width:100%;
    margin:20px auto 20px auto;
    height:50px;
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
