/*
能发送ajax请求的函数模块
函数的返回值为promise对象
1. 异步得到的不再是reponse, data数据(result)
2. 对请求错误进行了统一的处理, 外面使用时不用再处理错误
 */

import axios from 'axios'

export default function (url,data={},method="GET") {
  return new Promise((resolve,reject)=>{
      let promise
    if(method==='GET'){
      promise = axios.get(url,{params:data})
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(err=>{
      alert(`请求失败了:${err.msg}`)
    })
  })
}
