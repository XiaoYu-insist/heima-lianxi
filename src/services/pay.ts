import { http } from '@/utils/http'

/**
 * 获取微信支付参数
 * @param id 订单Id
 */
// 🔔重要说明
// 1.由于微信支付的限制，仅 appid 为 wx26729f20b9efae3a 的开发者才能调用该接口。此外，开发者还需要微信授权登录。
// 2.对于其他开发者，可以使用模拟支付接口进行开发测试，调用后，订单状态将自动更新为已支付。
export const getPayWxPayMiniPayAPI = (id: string) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data: { id },
  })
}

/**
 * 模拟支付-内测版
 * @param data
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http<{ msg: string }>({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
