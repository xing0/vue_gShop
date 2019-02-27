import Msite from  '../pages/Msite/Msite.vue'
import Order from  '../pages/Order/Order.vue'
import Profile from  '../pages/Profile/Profile.vue'
import Search from  '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import Shop from '../pages/Shop/Shop.vue'
  export default [
    {
      path:'/maite',
      component:Msite,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop',
          redirect:'/shop/goods'
        },
      ]
    }
    ,{
      path:'/',
      redirect:'maite'
    }
  ]
