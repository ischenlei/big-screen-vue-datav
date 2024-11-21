import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;utf-8'
  }
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0 && res.code !== '0') {
      Message({
        message: res.msg || res.message,
        type: 'error',
        duration: 5 * 1000,
        showClose: true
      })
      return Promise.reject(res.msg || res.message || 'Error')
    } else {
      return res
    }
  },
  error => {
    if (error.response) {
      const status  = error.response.status
      switch (status) {
        case 500:
          Message.error('服务器错误')
          break;
        default:
          Message.error('系统错误')
          break;
      }
    }
    return Promise.reject(error && error.response)
  }
)

export default service