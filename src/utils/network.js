import axios from 'axios'

const service = axios.create({
  baseURL: ''
})

export const getRequest = (url, params) => {
  return service.request({
    method: 'get',
    url: url,
    params: params
  })
}
export const postRequest = (url, data) => {
  return service.request({
    method: 'post',
    url: url,
    data: data
  })
}
// export const getAllRequest = (...req) => {
//    return axios.all(req)
//   .then(axios.spread(function (acct, perms) {
//     // 两个请求现在都执行完成
//   }));
// }
