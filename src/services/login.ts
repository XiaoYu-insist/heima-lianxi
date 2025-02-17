import type { LoginResult } from '@/types/menber'
import { http } from '@/utils/http'

/**
 * 小程序登录需要POST的数据
 */
type LoginParams = {
  // code 通过wx.login() 获取
  code: string
  // encryptedData 通过getphonenumber事件回调中获取
  encryptedData: string
  // iv 通过getphonenumber 事件回调中获取
  iv: string
}

/**
 * 小程序 - 登录接口，（企业）
 * @param data 请求参数
 */
export const getLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/**
 * 小程序 - 登录接口 （开发）
 * @param phoneNumber 填写手机号，有正则表达式 ^1[3-9][0-9]{9}$
 */
export const getLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
