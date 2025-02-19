import type { ProfileDetail, ProfileParams } from '@/types/menber'
import { http } from '@/utils/http'

/**
 *  获取用户信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改用户信息
 * @param data 必传参数
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileParams>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
