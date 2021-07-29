<template>
  <div class="" style="border:1px solid grey">
    <span>时间</span>  <span>尺码</span> <span>胸型</span> <span>详细报告</span>
  </div>
  <div class="">
    <span>{{time}}</span><span>{{size}}</span><span>{{shapes}}</span><span>{{details}}</span>
  </div>
  <div class="" v-if="records">
    <ul>
      <li v-for="item in records" :key="item.time">
        <span>{{item.time}}</span>
        <span>{{item.user_txnsize}}</span>
        <span>{{item.user_shapes}}</span>
        <span><router-link :to="{ name: 'BodyData', params: {} }">details</router-link></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return{

    }
  },
  computed:{
    records:function(){
      return this.$store.state.records
    }
  },
  created(){
    Vue.axios.get("https://tianxiaonei.com",{},{
      headers:{
        'x-token':localStorage.getItem("x-token")
      }
    }).then(data=>{
      let res=data.data;
      this.$store.dispatch("commitgetrecords",res)
    }).catch(err=>{
      this.$store.dispatch("commitgeterr",err)
      this.router.push('/err')
    })
  }
}
</script>

<style lang="css" scoped>
</style>
