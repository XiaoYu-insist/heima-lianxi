import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniNamespace.RequestOptions) {
    // 非http 拼接完整地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时
    options.timeout = 10000
    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const memberstore = useMemberStore()
    const token = memberstore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
返回 Promise 对象，用于处理返回值类型
成功 resolve
提取数据
添加泛型
失败 reject
401 错误
其他错误
网络错误
 */
type Data<T> = {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniNamespace.RequestOptions) => {
  //返回 Promise 对象，用于处理返回值类型
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        //成功 resolve
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 提取数据
          // 添加泛型
          resolve(res.data as Data<T>)
        }
        // 失败 reject
        else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          const memberstore = useMemberStore()
          memberstore.clearProfile()
          uni.navigateTo({ url: 'pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络出错，请换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
