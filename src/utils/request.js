import axios from 'axios';
import {Message} from 'element-ui';
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// create an axios instance
// process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 3000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    console.log('config:', config.data, config.url);
    // do something before request is sent
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken();
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

service.interceptors.response.use((response) => {
  console.log('response:', response);

  // IE 8-9
  if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
    try {
      // eslint-disable-next-line no-param-reassign
      response.data = JSON.parse(response.request.responseText);
    } catch (e) {
      // ignored
    }
  }
  return response;
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then((res) => {
        const {code, msg} = res.data || {};
        if (code !== 0) {
          Message.error(msg);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export default service;