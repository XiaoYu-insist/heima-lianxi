import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 *
 * @param id 商品id
 * @returns 获取商品详细信息
 */
export const getGoodsAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
