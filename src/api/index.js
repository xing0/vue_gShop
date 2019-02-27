import ajax from './ajax'

/*配置api接口函数*/
const BASE = '/api'
//获取经纬度名字的接口
export  const reqAddress =(latitude,longitude)=> ajax(BASE+`/position/`+latitude+','+ longitude)
//食品列表
export const reqCategorys = ()=>ajax(BASE+'/index_category')
//根据经纬获取商户列表
export const reqShops = ({longitude,latitude})=>ajax(BASE+'/shops',{longitude,latitude})
//获取手机验证码
export const reqPhoneCode = ({phone})=>ajax(BASE+'/sendcode',{phone})
//手机验证码登陆
export const reqPhoneCodeLogin = ({phone,code})=>ajax(BASE+'/login_sms',{phone,code},'post')
//账号密码登陆
export const reqPwdCodeLogin = ({name,pwd,captcha})=>ajax(BASE+'/login_pwd',{name,pwd,captcha},'post')
