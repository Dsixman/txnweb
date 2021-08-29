<template>
  <div class="">
    <div class="title-wrapper" >
      <div class="size-title">
        胸部是否外扩
      </div>
      <div class="jx">
        <div class="jx-left" >
            <van-button  :class="{'active':ifwk=='是'}" @click="saveifwk($event,'是')">是</van-button>
        </div>
        <div class="jx-right">
            <van-button :class="{'active':ifwk=='否'}" @click="saveifwk($event,'否')">否</van-button>
        </div>
        <div class="clear">

        </div>
      </div>
      <div class="jx-title">
        两乳凹槽部位的宽度
      </div>
      <div class="wk-img">

      </div>
      <div class="wkimgwrap">
        <van-button @click="savewk($event,1)" :class="{active:index==1}">小于2cm</van-button>
      </div>
      <div class="wkimgwrap">
          <van-button @click="savewk($event,2)" :class="{active:index==2}">2cm-3cm</van-button>
      </div>
      <div class="wkimgwrap">
          <van-button @click="savewk($event,3)" :class="{active:index==3}">3cm-4cm</van-button>
      </div>
      <div class="wkimgwrap">
        <van-button @click="savewk($event,4)" :class="{active:index==4}" >4cm-5cm</van-button>
      </div>
      <div class="wkimgwrap">
        <van-button @click="savewk($event,5)" :class="{active:index==5}" >大于5cm</van-button>
      </div>

    </div>

    <Bottom :url="url"></Bottom>

  </div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
export default {
  name:"wk",
  data(){
    return {
      ifwk:null,
      index:null,
    }
  },
  created(){
    document.querySelector("meta[name='viewport']")["content"] = "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
  },
  computed:{
    url:function(){
      let url2={prev:"",next:"",fatherobj:null}
      url2.prev="/chestshapes"
      url2.next="/chestmeasure"
      url2.nextbtn=true
      return url2
    }
  },
  components:{
    Bottom
  },
  mounted(){

  },
  methods:{
    saveifwk(eve,value){
      this.url.fatherobj=eve.target.innerText
      this.ifwk=value
      this.$store.dispatch("commitifwk",eve.target.innerText)

    },
    savewk(eve,index){
      this.url.fatherobj=eve.target.innerText
      this.index=index
      this.$store.dispatch("commitwkdistance",eve.target.innerText)

    }
  },
}
</script>

<style lang="scss" scoped>
.van-button{
  font-size:0.8rem
}
.jx-title{
  height:50px;line-height:50px;
  margin-top:20px;
  font-weight:bold;
  font-size:1rem;
}
.jx-left{
  float:left;
  width:50%;
  button{
    width:80%
  }

}
.jx-right{
  float:right;
  width:50%;
  button{
    width:80%
  }

}
.active{
  background:#FFB6C1;
  }
.wk-img{
//  margin-top:10px;
  margin-bottom:10px;
  height:180px;
  background:url("../assets/jx.png") no-repeat top center
}
.wkimgwrap{
  width:100%;
  height:70px;

  button{
    border-radius: 5px;
    width:100%
  }
}
.title-wrapper{
  width:80%;margin:0px auto 0 auto;
}

.clear{
  clear:both;
}
.size-title{
  float:left;
  line-height:80px;
  font-size:1rem;
  font-weight: bold;
  width:100%;
  margin:0px auto 0 auto;
  height:80px;
  text-align:center;
}



</style>
