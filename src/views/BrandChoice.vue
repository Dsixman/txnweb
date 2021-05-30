<template>
  <div class="">
    <div class="cm-top-description">
      <div class="content">
        您既往穿过的品牌
      </div>
      <div class="content-wrapper">
        <div class="brand-title">
          <van-col span="12" class="brand-title-items" >
            <router-link class="w90pec" to="/hadsize" >古今</router-link>
          </van-col>
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/nosize">Ubras
            </router-link>
          </van-col>
        </div>
        <div class="brand-title" >
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/nosize">内外</router-link>
          </van-col>
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize" >蕉内
            </router-link>
          </van-col>
        </div>
        <div class="brand-title" >
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize" >曼尼芬</router-link>
          </van-col>
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize" >遐 HISA
            </router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize">都市丽人</router-link>
          </van-col>
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize" >爱慕Aimer
            </router-link>
          </van-col>
        </div>
        <div class="brand-title">
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec"  to="/hadsize">黛安芬</router-link>
          </van-col>
          <van-col span="12" class="brand-title-items">
            <router-link class="w90pec" to="/hadsize">婷美
            </router-link >
          </van-col>
        </div>
      </div>
    </div>
  <Bottom :url="url"></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
import { Toast } from 'vant';
export default {
  data(){
    return {
      url:{
        prev:"/",
        next:"",
      },
      value:'',
      value2:'',
      value3:"",
      showPicker: false,
      snsz:false,
      ysz:false,
      columns: ['Ubras', '内外', '焦内', '曼尼芬', '遐 HISA', "Victoria's Secret", '都市丽人'],
      nosizecolumns: ["均码","S","M","L","XL"],
      normalsize:['65A', '70A', '75A', '80A','85A','90A','65B', '70B', '75B', '80B','85B','90B','65C', '70C', '75C', '80C','85C','90C','65D', '70D', '75D', '80D','85D','90D','65E', '70E', '75E', '80E','85E','90E']
    }
  },
  components:{
    Bottom
  },
  mounted:function(){

  },
  methods: {
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
  margin-top:20px;
  overflow:hidden;
  height:12vh;

  .brand-title-items{
    height:40px;
  //  border:1px solid #ff0000;
    text-align: center;
    a:link,a:visited {
        width:70%;
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
  .content{
    //line-height:2rem;
    font-size:1.2rem;
    width:80%;
    margin:30px auto 0 auto;
  }
}
.content-wrapper{
  width:80%;
  margin:0 auto;
}

.size{
  overflow:hidden;
  .title{
    margin-top:25px;
  }
  .nosize{
    margin-top:20px;
    width:100%;
    .nosize-title{
      line-height:2.5rem;
      overflow:hidden;
      width:90%;
      margin:0 auto;
      cursor:pointer;
      text-align:center;
}
    .nosize-title:hover{
      color:red;
      border-bottom:1px solid #ff0000;
    }
  }
  .van-button{
    display: block;
    float:left;
    margin-left:10px
  }

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
