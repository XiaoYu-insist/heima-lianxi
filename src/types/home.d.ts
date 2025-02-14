/**
 * 首页轮播图
 */

export type BannerItem = {
  // id
  id: string
  // banner链接
  imgUrl: string
  // 跳转链接
  hrefUrl: string
  // 跳转类型
  type: number
}

/**
 * 首页分类
 */

export type CategoryItem = {
  // id
  id: string
  //分类名称
  name: string
  //icon展示图标
  icon: string
}

/**
 * 首页热门推荐
 */

export type HotItem = {
  // id
  id: string
  //推荐说明
  alt: string
  //图片集合
  pictures: string[]
  //转跳地址
  target: string
  // 推荐标题
  title: string
  // 推荐类型
  type: string
}

/**
 *  猜你喜欢-商品类型
 */

export type GuessItem = {
  //id
  id: string
  // 商品名称
  name: string
  // 商品描述
  desc: string
  // 商品价格
  price: number
  // 商品图片
  picture: string
  // 商品折扣
  discount: number
  // 商品已下单数量
  orderNum: number
}
