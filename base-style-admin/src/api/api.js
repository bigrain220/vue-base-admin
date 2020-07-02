import axios from 'axios';
import qs from 'qs';
import {getCookie} from '@/utils/utils.js'
import router from '@/router/'
import {
  MessageBox
} from 'element-ui'



axios.defaults.timeout = 6000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true; //发送请求自动set cookie || 跨域请求，允许保存cookie

//加上 .then(res=>res.data)是返回接口数据，不加则返回全部response
export default function (method, url, data = null, config = null) {
  method = method.toLowerCase();
  if (method == 'post') {
    return axios.post(url, qs.stringify(data), config).then(res => res.data)
  } else if (method == 'get') {
    return axios.get(url, {
      params: data
    }).then(res => res.data)
  } else if (method == 'delete') {
    return axios.delete(url, qs.stringify(data), config).then(res => res.data)
  } else if (method == 'put') {
    return axios.put(url, qs.stringify(data), config).then(res => res.data)
  } else {
    console.error('未知的method' + method)
    return false
  }
}



let isLogin = true; //让弹窗只弹一次；
// respone拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log(response, 'response')
    if (response.config.url ==  '/login' || response.config.url == '/logout') {
      isLogin = true;
      return response;
    } else if ((response.data != "" && response.data.msg == 'FAILED_LOGIN') || (process.env.NODE_ENV === "production" ? getCookie('ad_auth') == "" : false)) {
      if (isLogin == true) {
        isLogin = false;
        MessageBox.alert('您已下线，请重新登录', '下线提示', {
          confirmButtonText: '确定',
          callback: () => {
            router.push({
              path: '/login'
            })
          }
        });
      }
    } else {
      isLogin = true;
      return response;
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)