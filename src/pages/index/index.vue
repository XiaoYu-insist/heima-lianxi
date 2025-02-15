<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

//首页轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 首页分类按钮
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//热门推荐
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

//猜你喜欢
const getGuess = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  getGuess.value?.getMore()
}
//下拉刷新触发
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  //开启加载
  isTriggered.value = true
  //加载数据
  getGuess.value?.resetData
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  //关闭加载
  isTriggered.value = false
}

//骨架加载
const Skeleton = ref(false)
// 加载渲染
onLoad(async () => {
  Skeleton.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  Skeleton.value = false
})
</script>

<template>
  <CustomNavbar />
  <template>
    <PageSkeleton v-if="Skeleton" />
    <scroll-view
      v-else
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower"
      :refresher-triggered="isTriggered"
      class="scroll"
      scroll-y
    >
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="getGuess" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll {
  flex: 1;
}
</style>
