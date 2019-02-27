import Vue from 'vue'
import Vuex from 'vuex'

import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
   msite,
   shop,
   user
 }
})
