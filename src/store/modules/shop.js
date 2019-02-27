import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,
  RECEIVE_LOGINOUT,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS
} from '../mutation-types'

const state={
  info:{},
  ratings:[],
  goods:[],
}
import {reqAddress,reqCategorys,reqShops,reqLoginOut,reqAutoLogin,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
}  from '../../api'
const mutations ={
  // 写入商户 食物 详情 评论
  [RECEIVE_SHOPGOODS] (state,goods){
    state.goods=goods
  },
  [RECEIVE_SHOPINFO] (state,info){
    state.info=info
  },
  [RECEIVE_SHOPRATINGS] (state,ratings){
    state.ratings=ratings
  },
}
const actions = {
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

const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}
