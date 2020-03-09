import axios from 'axios';
import qs from 'qs';


if (process.env.NODE_ENV === "development") {
    //开发环境
    var base = 'https://apilightmv.aoscdn.com';
  }else if(process.env.NODE_ENV === "production"){
    //生产环境
    var base = '//' + document.domain;
  }

let baseUrl = base + '/api';
axios.defaults.timeout = 6000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
// axios.defaults.withCredentials = true; //用axios发送post请求自动set cookie

//加上 .then(res=>res.data)是返回接口数据，不加则返回全部response
export default function(method,url,data = null,config=null){
  method = method.toLowerCase();
  if (method == 'post') {
    return axios.post(url, qs.stringify(data),config).then(res=>res.data)
  } else if (method == 'get') {
      return axios.get(url, { params: data }).then(res=>res.data)
  } else if (method == 'delete') {
      return axios.delete(url, { params: data }).then(res=>res.data)
  }else if(method == 'put'){
      return axios.put(url,qs.stringify(data)).then(res=>res.data)
  }else{
      console.error('未知的method'+method)
      return false
  }
}

// export default function(method, url, data = null, config = null) {
//   var method = method.toLowerCase();
//   var options = {
//     get() {
//       return axios.get(url, { params: data }).then(res => res.data);
//     },
//     post() {
//       return axios.post(url, qs.stringify(data), config).then(res => res.data);
//     },
//     delete() {
//       return axios.delete(url, { params: data }).then(res=>res.data);
//     },
//     put() {
//       return axios.put(url,qs.stringify(data)).then(res=>res.data);
//     }
//   };
//    return options[method]();
// }

//如果直接输出 则按下面的方式：
// export default {
//   getSession: params => {
//     return axios.post('/sessions', qs.stringify(params)).then(rs => rs.data).catch(err => err);
//   },
//   getTags:params=>{
//     return axios.get('/theme/tags',{ 'params': params } ).then(rs => rs.data).catch(err => err);
//   }
// }
