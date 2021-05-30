<template >
  <div class="">
    <div class="title">
      恭喜您完成测量<br/>
      根据测量，适合你的尺码应该是
    </div>
    <div class="">
      content
    </div>
    <div class="">
      关注公众号，点亮甜小内的诞生<br/>
      你是第800个为天校内点亮的人
    </div>

      <Bottom2 :url="url"></Bottom2>

  </div>
</template>

<script>
import Bottom2 from '@/components/Bottom2.vue'
export default {
  data(){
    return{
      url:{
        next:"/brandchoice"
      }
    }
  },
  components:{
    Bottom2,
  }
}
</script>

<style lang="scss" scoped>
</style>
