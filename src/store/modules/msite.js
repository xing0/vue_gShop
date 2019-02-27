import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,
  RECEIVE_LOGINOUT,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS
} from '../mutation-types'

const state={
  longitude:116.36867,
  latitude:40.10038,
  address:{name:'正在定位中...'},
  categorys:[],
  shops:[],
}
import {reqAddress,reqCategorys,reqShops,reqLoginOut,reqAutoLogin,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
}  from '../../api'
const mutations ={
  [RECEIVE_ADDRESS] (state,address){
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,categorys){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,shops){
    state.shops = shops
  },
}
const actions = {
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

const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}
