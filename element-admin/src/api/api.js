import axios from 'axios';
import qs from 'qs';


if (process.env.NODE_ENV === "development") {
    //开发环境
    var base = 'http://www.baidu.com';
  }else {
    //生产环境
    var base = '//' + document.domain;
  }

let baseUrl = base + '/api';
axios.defaults.timeout = 6000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
axios.defaults.withCredentials = true; //用axios发送post请求自动set cookie


export default {
    login: params => {
      return axios.post('/login', qs.stringify(params)).then(rs => rs.data).catch(err => err);
    },
}