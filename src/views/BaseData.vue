<template>
<div class="">
  <div class="">
    {{username}}
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {}
  },
  computed:{
    username:function(){
      return this.$store.state.data.user_name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
