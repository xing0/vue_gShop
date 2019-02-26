
/*actions*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {reqAddress,reqCategorys,reqShops}  from '../api'
export default {
  async RECEIVE_ADDRESS({commit,state}){
    const response =await reqAddress(state.latitude,state.longitude)
    if (response.code===0){
      const address = response.data
      commit(RECEIVE_ADDRESS,address)
    }else{
      alert('地址获取失败')
    }
    }
    ,
    async RECEIVE_CATEGORYS({commit}) {
      const response = await reqCategorys()
      if (response.code === 0) {
        const categorys = response.data
        commit(RECEIVE_CATEGORYS, categorys)
      } else {
        alert('食品获取失败')
      }
    },
    async getShops({commit,state}) {
      const response = await reqShops({latitude:state.latitude,longitude:state.longitude})
      if (response.code === 0) {
        const shops = response.data
        commit(RECEIVE_SHOPS, shops)
      } else {
        alert('附近商户获取失败')
      }
    },


}
