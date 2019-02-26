<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_title" >
        <span class="header_title_text ellipsis"></span>
      </span>

      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>

    </Header>
    <!--首页导航-->
    <nav class="msite_nav">

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(category,index) in categorysArr" :key="index" >
            <a href="javascript:"class="link_to_food"  v-for="(c,index) in category" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+c.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopsList/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import ShopsList from '../../components/ShopList/ShopList.vue'
  export default {
    data () {
      return {}
    },
    computed :{
      ...mapState(['address','categorys','shops']),
      categorysArr (){
        const {categorys} =this
        let arr =[]
        let smallArr = []
        for (let i = 0 ; i<categorys.length;i++){
          if(smallArr.length===0){
            arr.push(smallArr)
          }
          smallArr.push(categorys[i])
          smallArr.length===8? smallArr=[] :  0
        }
        return arr

      }
    },
    created (){
      this.$store.dispatch('RECEIVE_ADDRESS')
      this.$store.dispatch('RECEIVE_CATEGORYS')
      this.$store.dispatch('getShops')
    },
    watch: {
      /*更新状态数据(监视回调会立即调用), 后面会异步更新界面*/
      categorys () { // categorys状态数据更新
        /*将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新*/
        this.$nextTick(()=>{
          console.log(this.categorysArr)
          console.log(1)
          new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
            // // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
          })
        })

      }
    },
    components:{
      ShopsList
    }
  }
</script>
<style lang="stylus"  scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
