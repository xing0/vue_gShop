
/*actions*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,
  RECEIVE_LOGINOUT,
  RECEIVE_SHOPRATINGS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPGOODS
} from './mutation-types'
import {reqAddress,reqCategorys,reqShops,reqLoginOut,reqAutoLogin,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
}  from '../api'
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
  // 获取商户 食物 详情 评论
    async getShopGoods({commit}){
      const res = await reqShopGoods()
      if(res.code===0)commit(RECEIVE_SHOPGOODS,res.data)
    },
  async getShopInfo({commit}){
    const res = await reqShopInfo()
    if(res.code===0)commit(RECEIVE_SHOPINFO,res.data)
  },
  async getShopRatings({commit}){
    const res = await reqShopRatings()
    if(res.code===0)commit(RECEIVE_SHOPRATINGS,res.data)
  },
}
