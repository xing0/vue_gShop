<template>
    <div>
      ShopInfo.vue
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
    mounted (){
      this.$store.dispatch('getShopInfo')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
