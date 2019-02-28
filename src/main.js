// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header/Header.vue'
import CartControl from './components/CartControl/CartControl.vue'


Vue.component('CartControl',CartControl)
Vue.component('Header',Header)
import './mock/mokeSever'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
