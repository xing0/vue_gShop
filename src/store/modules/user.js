import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,
  RECEIVE_LOGINOUT,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS
} from '../mutation-types'
import {reqAddress,reqCategorys,reqShops,reqLoginOut,reqAutoLogin,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
}  from '../../api'
const state={
  user:{},
}
const mutations ={
  [RECEIVE_USER] (state,user){
    state.user = user
  },
  [RECEIVE_LOGINOUT] (state){
    state.user={}
  },
}
const actions = {
//储存用户信息到state
  saveUser({commit},user){
    commit(RECEIVE_USER,user)
  },
  //登出,删除用户信息
  async loginOut({commit}){
    const res = await reqLoginOut()
    if(res.code===0){
      console.log('登出成功')
      commit(RECEIVE_LOGINOUT)
    }
  },
  //自动登陆
  async autoLogin ({commit}){
    const res = await reqAutoLogin()
    if(res.code===0){
      commit(RECEIVE_USER,res.data)
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
