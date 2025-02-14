/**
 * 通用分页结果类型
 */
export type PageResult<T> = {
  // 总条数
  counts: number
  // 每页条数
  pageSize: number
  // 总页数
  pages: number
  // 当前页数
  page: number
  //当前页数据
  items: T
}

/**
 * 通用分页参数类型
 */

export type PageParams = {
  //页码默认值1
  page?: number
  //页大小默认是10
  pageSize?: number
}
