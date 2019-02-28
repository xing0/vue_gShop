import Vue from 'vue'
import {
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS,
  RECEIVE_ADDFOODCOUNT,
  RECEIVE_SUBFOODCOUNT
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
  [RECEIVE_ADDFOODCOUNT] (state,{food}){
    if(food.count){
      food.count++
    }else {
      Vue.set(food,'count',1)
    }
  },
  [RECEIVE_SUBFOODCOUNT] (state,{food}){
    if(food.count>0){
      food.count--
    }
  }
}
const actions = {
  // 获取商户 食物 详情 评论
  async getShopGoods({commit},callback){
    const res = await reqShopGoods()
    if(res.code===0)commit(RECEIVE_SHOPGOODS,res.data)
    typeof callback === 'function' && callback()
  },
  async getShopInfo({commit}){
    const res = await reqShopInfo()
    if(res.code===0)commit(RECEIVE_SHOPINFO,res.data)
  },
  async getShopRatings({commit}){
    const res = await reqShopRatings()
    if(res.code===0)commit(RECEIVE_SHOPRATINGS,res.data)
  },
  updataFoodCount ({commit},{isAdd,food}){
    if(isAdd){
      commit(RECEIVE_ADDFOODCOUNT,{food})
    }else{
      commit(RECEIVE_SUBFOODCOUNT,{food})
    }
  }
}

const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}
