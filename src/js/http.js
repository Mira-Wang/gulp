/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
// 环境的切换
// axios.defaults.baseURL = "http://192.168.1.169:8190"
// axios.defaults.timeout = 50000
// // post请求头
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
// // 请求拦截器

// axios.interceptors.request.use((config) => {
//   return config
// })

// function axiosGet(url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params,
//       })
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((err) => {
//         reject(err.data)
//       })
//   })
// }
// // qs.stringify(data)
// function axiosPost(url, data) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, qs.stringify(data))
//       .then((res) => {
//         resolve(res)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }

let server = axios.create({
  baseURL: "http://192.168.1.169:8190", //请求url
  timeout: 3000, //超时处理
  withCredentials: false, //是否跨域
})
server.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 0) {
      if (res.code === 100005002) {
        //   token失效
        return Promise.reject(res)
      }
      if (res.code === 10001) {
        // token为空
        return Promise.reject(res)
      }
      if (res.code === 40002) {
        // 验证码失效
        Notify(res.msg)
        return Promise.reject(res)
      }
      if (res.code === 40001) {
        // 鉴权token失效
        return Promise.reject(res)
      }
      if (res.code === 41504) {
        return Promise.reject(res)
      }
      if (res.code === 40006) {
        // 账号或密码不正确
        return Promise.reject(res)
      }
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  (error) => {
    const res = error.response && error.response.data
    return Promise.reject(res)
  }
)
