<template>
    <div>
      ShopGoods.vue
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
     mounted (){
      this.$store.dispatch('getShopGoods')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
