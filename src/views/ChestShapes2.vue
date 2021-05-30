<template>
<div class="">
  <div class="">

  </div>
  <Bottom url="url"></Bottom>
</div>
</template>

<script>
import Bottom from '@/components/Bottom.vue'
export default {
  data(){
    return{
      url:{
        prev:"/sidetmeasure",
        next:"/chestshapes"
      }
    }
  },
  components:{
    Bottom
  }
}
</script>

<style lang="scss" scoped>
</style>
