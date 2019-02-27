import Msite from  '../pages/Msite/Msite.vue'
import Order from  '../pages/Order/Order.vue'
import Profile from  '../pages/Profile/Profile.vue'
import Search from  '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

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
    }
    ,{
      path:'/',
      redirect:'maite'
    }
  ]
