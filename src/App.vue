<template>
  <div>
    <!--<Header/>-->
    <router-view/>
    <Foot v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import Foot from './components/footerGuide/footerGuide.vue'
  import Header from './components/Header/Header.vue'
export default {
    mounted (){
        this.$store.dispatch('autoLogin')
    },
  components: {
    Foot,
    Header
  },
}
</script>
<style>

</style>
