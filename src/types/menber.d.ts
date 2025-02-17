/** 小程序登录 登录用户信息 */
export type LoginResult = {
  // 用户id
  id: string
  // 用户手机
  mobile: string
  // 用于后续接口调用的token，有效期三天
  token: string
  // 用户昵称
  nickname: string | null
  // 用户头像
  avatar: string
  // 用户名
  account: string
}
