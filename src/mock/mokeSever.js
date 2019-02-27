import Mock from 'mockjs'
import data from './data.json'

//提供goods接口
Mock.mock('/goods',{code:0,data:data.goods})
//提供ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//提供info的接口
Mock.mock('/info',{code:0,data:data.info})

/*在入口js main中引入此mock即可*/
