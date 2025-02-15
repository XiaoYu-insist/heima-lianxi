import type { GoodsItem } from './global'

/**
 * 分类列表-二级分类
 */
export type CategoryChildItem = {
  // 二级分类id
  id: string
  // 二级分类名称
  name: string
  // 二级分类图片
  picture: string
  // 商品集合
  goods: GoodsItem[]
}

/**
 * 分类列表一级分类
 */
export type CategoryTopItem = {
  /** 二级分类集合[ 二级分类项 ] */
  children: CategoryChildItem[]
  /** 一级分类id */
  id: string
  /** 一级分类图片集[ 一级分类图片项 ] */
  imageBanners: string[]
  /** 一级分类名称 */
  name: string
  /** 一级分类图片 */
  picture: string
}
