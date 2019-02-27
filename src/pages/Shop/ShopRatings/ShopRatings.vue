<template>
    <div>
      ShopRatings.vue
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
    mounted (){
      this.$store.dispatch('getShopRatings')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
