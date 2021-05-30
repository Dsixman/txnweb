<template>
  <div class="">
    <div class="cm-top-description">
      <div class="content">
        你既往穿过的品牌
      </div>
      <div class="content-wrapper">
        <div class="brand-form">
          <van-field class="item-select"
            readonly
            clickable
            :value="value"
            placeholder="点击这里选择品牌"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>
        <div class="size">
          <div class="title">
            您穿的尺码
          </div>
          <div class="nosize">
            <div class="nosize-title" >
              <van-col span="6">
                <span>无尺码：</span>
              </van-col>
              <van-col span="18">
                <van-field class="item-select"
                  readonly
                  clickable
                  :value="value2"
                  placeholder="点击选择无尺码的尺寸"
                  @click="snsz= true"
                />
              </van-col>
              <van-popup v-model="snsz" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="nosizecolumns"
                  @cancel="snsz = false"
                  @confirm="clicksnsz"
                />
              </van-popup>
            </div>

          </div>
          <div class="nosize">
            <div class="nosize-title">
              <van-col span="6">
                <span>有尺码：</span>
              </van-col>
              <van-col span="18">
                <van-field class="item-select"
                  readonly
                  clickable
                  :value="value3"
                  placeholder="点击选择有尺码的尺寸"
                  @click="ysz= true"
                />
              </van-col>
              <van-popup v-model="ysz" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="normalsize"
                  @cancel="ysz = false"
                  @confirm="clickysz"
                />
              </van-popup>
            </div>
          </div>
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
        next:"/chestmeasure",
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
.clear{
  clear: both;
}
.w20{
  width:30%;
  float:left;
  line-height:3rem
}
.cm-top-title{
  font-size:1.4rem;
  margin:50px auto 0 auto;
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
.content-wrapper{
  width:80%;
  margin:0 auto;
}
.active{
  border:1px solid #ff0000;
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
