<template>
  <div class="">
    <div class="filter-bottom">

    </div>
    <div class="bottom" >
      <van-row type="flex" justify="center">
        <van-col class="prev-page" v-if="this.url.prev">
          <van-button @click="prevpage">
            上一页
          </van-button>
        </van-col>
        <van-col class="next-page"   v-if="this.url.nextbtn" >
          <van-button id="nextbtn" class="nextbtn" :class="{btnhover:changetype.isSelect,resultbtn:isresult}"   @click="nextpage" >
            {{changetype.word}}
          </van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name:"bottom",
  data(){
    return{

    }
  },
  props:["url"],
  computed:{
    isresult:function(){
      let bl=null
      if (this.$route.path=="/result"){
        bl= true
      }else{
        bl=false
      }
      return bl
    },
    ifsmall:function(){
      let issmall=null;
      let scrolltop=document.documentElement.scrollTop||document.body.scrollTop

      if(scrolltop===0){
        issmall=true
      }
      return issmall;
    },
    ifbig:function(){
      let isbig=null;
      let scrolltop=document.documentElement.scrollTop||document.body.scrollTop

      if(scrolltop>0){

        isbig=true
      }
      return isbig
    },
    changetype:function(){
      let change={};
        if(this.$route.path=="/fitbar"){
          if (this.$store.state.fitbar===null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/wk"){
          if (this.$store.state.wkdistance===null||this.$store.state.ifwk===null){
            change.word="请先选择"
            change.isSelect=false
          }

          if(this.$store.state.wkdistance!=null){
            change.word="下一页"
            change.isSelect=true
          }
        }
        if(this.$route.path=="/cupfit"){
          //console.log(this.$store.state.cupfit)
          if (this.$store.state.cupfit===null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true

          }
        }
        if(this.$route.path=="/furu"){
          if (this.$store.state.furu===null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/jixiong"){
          if (this.$store.state.jixiong===null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/backfit"){
          if (this.$store.state.backfit===null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/chestmeasure"){

          if (!this.$store.state.huxi||!this.$store.state.tuqi){
              change.word="请先填写数据"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/upchestmeasure"){


          if (!this.$store.state.standwidth||!this.$store.state.zhijiao||!this.$store.state.xieyao){
              change.word="请先填写数据"
              change.isSelect=false
          }else{
              change.word="获取结果"
              change.isSelect=true
          }
        }

        if(this.$route.path=="/chestshapes"){

          if (this.$store.state.chestshapes==null){
              change.word="请先选择"
              change.isSelect=false
          }else{
              change.word="下一页"
              change.isSelect=true
          }
        }
        if(this.$route.path=="/result"){
          change.word="下一页"
          //change.isSelect=true
          // if (this.$store.state.chestshapes==null){
          //     change.word="请先选择"
          //     change.isSelect=false
          // }else{
          //     change.word="下一页"
          //     change.isSelect=true
          // }
        }
        return change

    }

  },
  methods:{
    prevpage(){
      //let prevurl=this.$store.state.prevurl
      this.$router.push(this.url.prev)
    },
    nextpage(){
      //alert(this.$store.state.chestshapes)
      this.$router.push(this.url.next)

      // if(this.$route.path=="/chestmeasure"){
      //
      // }
    }
  },
  mounted(){
    if (this.$route.path=="/backfit"){
      if(this.$store.state.backfit){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }
    if (this.$route.path=="/fitbar"){

      if(this.$store.state.fitbar){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }
    if (this.$route.path=="/cupfit"){

      if(this.$store.state.cupfit){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }

    if (this.$route.path=="/wk"){

      if(this.$store.state.ifwk&&this.$store.state.wkdistance){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }

    if (this.$route.path=="/chestshapes"){
      if(this.$store.state.chestshapes){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }
    if (this.$route.path=="/chestmeasure"){
      if(this.$store.state.chestmeasure.tuqi!=""&&this.$store.state.chestmeasure.xiqi!=""){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }
    if (this.$route.path=="/upchestmeasure"){
      if(this.$store.state.upchestmeasure.stand!=""&&this.$store.state.upchestmeasure.xieyao!=""&&this.$store.state.upchestmeasure.zhijiao!=""){
        document.getElementById("nextbtn").disabled=""
      }else{
          document.getElementById("nextbtn").disabled=true
      }
    }


  },
  updated(){

    if(this.url.fatherobj){
//alert(this.url.fatherobj)
      document.getElementById("nextbtn").disabled=""
    }else{
    //  alert("this.url.fatherobj:"+this.url.fatherobj)
        document.getElementById("nextbtn").disabled=true

        // this.changetype.isSelect=false
        // this.changetype.word="请先填写数据"
        // alert(this.changetype.isSelect)
    }
  }

}
</script>

<style lang="scss" scoped>
.bottom{
  position:fixed;
  left:0;
  right:0;
  bottom: 5px;
  margin: auto;
  //height:45px;
  //width:80%;
  .van-button{
    border: 1px solid #afafb1;
    font-size:0.8rem;
    //padding:0 15px;
    height:38px;
  }
  @media only screen and (min-width:480px){
      width:480px;
  }
}


.filter-bottom{
  height:55px;
  width:100%;
}
.resultbtn{
  color:black!important
}
.btnhover{
  background:#FFB6C1;
  color:white
}
.rtleft{
  transform:rotate(90deg);
  //padding-top:15px;
  //line-height:90px;
}
.prev-page{

  width:45%;
  //border: 1px solid #ebedf0;
  //border-radius:2px ;
  float:left;
  font-size:1rem;
  height:40px;
  div{
    float:left
  }


}
a:link,a:visited {
  box-sizing: content-box;
    width:90%;
    height:40px;
    display:block;
    margin:0 auto;
  //  border: 1px solid #ebedf0;
    border: 1px solid #afafb1;.van-botton{
    color:#ebedf0;
  }
    border-radius: 2px;
    line-height:43px;
    color:#000;

}
a:hover,a:active{
  color:red;
  border:1px solid #ff0000;
}
.next-page{

  width:45%;

  float:left;
  height:40px;
  font-size:1rem;
  .van-botton{
    color:#ebedf0;
  }

}
.nextbtn{
    color:#ebedf0;
  }

</style>
