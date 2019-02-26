<template>
  <div>
    <!--<Header/>-->
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
  import Foot from './components/footerGuide/footerGuide.vue'
  import Header from './components/Header/Header.vue'
export default {
  components: {
    Foot,
    Header
  },
}
</script>
<style>

</style>
