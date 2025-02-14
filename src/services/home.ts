import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
import { http } from '@/utils/http'
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-分类按钮
 *  接口地址：/home/category/mutli

    请求方式：GET

    请求参数：无
 */

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 *
 * @returns 该业务功能对于前端来说比较简单，只需调用后端提供的接口将获得的数据展现。

    接口地址：/home/hot/mutli

    请求方式：GET

    请求参数：
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
    header: 'source-client',
  })
}

/**
 *
 * @returns 猜你喜欢
 */

export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem[]>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
