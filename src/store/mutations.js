
/*mutations.js*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,
  RECEIVE_LOGINOUT,
  RECEIVE_SHOPGOODS,
  RECEIVE_SHOPINFO,
  RECEIVE_SHOPRATINGS
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state,address){
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,categorys){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,shops){
    state.shops = shops
  },
  [RECEIVE_USER] (state,user){
    state.user = user
  },
  [RECEIVE_LOGINOUT] (state){
    state.user={}
  },
  // 写入商户 食物 详情 评论
  [RECEIVE_SHOPGOODS] (state,goods){
    state.shopGoods=goods
  },
  [RECEIVE_SHOPINFO] (state,info){
    state.shopInfo=info
  },
  [RECEIVE_SHOPRATINGS] (state,ratings){
    state.shopRatings=ratings
  },


}


