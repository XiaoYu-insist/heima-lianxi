//
// POST
//

import type { AddressItem, AddressParams } from "@/types/address"
import { http } from "@/utils/http"
/**
 * 添加收货地址
 * @param data 请求参数
 */
export const posMemberAddressAPI =(data:AddressParams)=>{
  return http({
    method:'POST',
    url:'/member/address',
    data
  })
}


/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = ()=>{
  return http<AddressItem[]>({
    method:"GET",
    url:'/member/address'
  })
}

/**
 * 获取收货地址详细
 * @param id 地址id
 */
export const getMemberAddressByIdAPI = (id:string)=>{
  return http<AddressItem>({
    method:'GET',
    url:`/member/address/${id}`,
  })
}


/**
 * 修改收货地址
 * @param id 地址id
 * @param data 地址信息
 */
export const putMemberAddressByIdAPI = (id:string,data:AddressParams)=>{
  return http({
    method:'PUT',
    url:`/member/address/${id}`,
    data
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
