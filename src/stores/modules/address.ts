import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 选中收货地址存放
 */
export const useAddressStores = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const setSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }
  return {
    selectedAddress,
    setSelectedAddress,
  }
})
