<template>
  <div class="" style="margin:0px;padding:0px;">
    <div class="bottom" >
        <div class="prev-page" v-if="this.url.prev">
          <router-link :to="this.url.prev" >
            <span>上一页</span>
          </router-link>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  name:"hadsizebottom",
  data(){
    return{

    }
  },
  props:["url"],
  computed:{
    ifsmall:function(){
      let issmall=null;

      let clientheight=document.body.clientHeight||document.documentElement.clientHeight
      //console.log("client "+clientheight +"scrollHeight "+document.body.scrollHeight)
      if(document.body.scrollHeight>= clientheight){
        //console.log("ifsmall client"+clientheight)
        //console.log("ifsmall scrolleheight"+document.body.scrollHeight)
        issmall=true
      }

      //console.log(issmall)
      return issmall;
    },
    ifbig:function(){
      let isbig=null;
      let clientheight=document.body.clientHeight||document.documentElement.clientHeight

      if(document.body.scrollHeight>clientheight){
        //console.log("ifbig client"+clientheight)
        //console.log("ifbig scrolleheight"+document.body.scrollHeight)
        isbig=true
      }
      return isbig
    }
  },
  mounted(){
  //  console.log(this.url)
    //console.log(this.url)
  }

}
</script>

<style lang="scss" scoped>
.bottom{
  position:fixed;
  left:0;
  right:0;
  bottom: 10px;
  margin: auto;
  @media only screen and (min-width:480px){
      width:480px;
  }

}
.bottom2{

  margin:20px auto 0 auto;

  width:80%;
  @media only screen and (min-width:480px){
      width:480px;
  }
}
.prev-page{

  width:45%;

  margin:0 auto;
  height:43px;
  div{
    float:left
  }
  font-size:0.8rem
}
a:link,a:visited {
  box-sizing: content-box;
  background:white;
    width:100%;
    height:40px;
    display:block;
    margin:0 auto;
border: 1px solid #afafb1;
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
  border:1px solid #FFF;
  border-radius:2px ;
  float:left;
  height:40px;
}


</style>
