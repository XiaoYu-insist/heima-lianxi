<template name="skeleton">
  <scroll-view :scroll-y="true" class="viewport viewport" id="scroller" :enable-back-to-top="true">
    <view class="overview sk-image" style="padding-top: 67px">
      <view
        class="status icon-clock sk-transparent sk-text-0-0000-193 sk-text sk-pseudo sk-pseudo-circle"
        >等待付款</view
      >
      <view class="tips tips">
        <text class="money sk-transparent sk-text-0-0000-977 sk-text">应付金额: ¥ 99.00</text>
        <text class="time sk-transparent sk-text-0-0000-859 sk-text">支付剩余</text>
        <view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
          <view
            class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a"
          >
            <text
              class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-586 sk-text"
              style="
                color: rgb(255, 255, 255);
                font-size: 14px;
                width: 22px;
                line-height: 20px;
                border-radius: 3px;
                background-position-x: 50%;
              "
              >00</text
            >
            <text
              class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
              style="color: #fff; font-size: 12px; margin:"
              >时</text
            >
            <text
              class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-866 sk-text"
              style="
                color: rgb(255, 255, 255);
                font-size: 14px;
                width: 22px;
                line-height: 20px;
                border-radius: 3px;
                background-position-x: 50%;
              "
              >26</text
            >
            <text
              class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
              style="color: #fff; font-size: 12px; margin:"
              >分</text
            >
            <text
              class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-356 sk-text"
              style="
                color: rgb(255, 255, 255);
                font-size: 14px;
                width: 22px;
                line-height: 20px;
                border-radius: 3px;
                background-position-x: 50%;
              "
              >34</text
            >
            <text
              class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
              style="color: #fff; font-size: 12px; margin:"
              >秒</text
            >
          </view>
        </view>
      </view>
      <view
        class="button sk-transparent sk-text-28-7879-47 sk-text"
        style="background-position-x: 50%"
        >去支付</view
      >
    </view>
    <view class="shipment shipment">
      <view class="item sk-image">
        <view class="message sk-transparent sk-text-14-2857-209 sk-text">
          您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
        </view>
        <view class="date sk-transparent sk-text-14-2857-302 sk-text"> 2023-04-14 13:14:20 </view>
      </view>
      <view class="locate sk-image">
        <view class="user sk-transparent sk-text-14-2857-891 sk-text"> 张三 13333333333 </view>
        <view class="address sk-transparent sk-text-14-2857-329 sk-text">
          广东省 广州市 天河区 黑马程序员
        </view>
      </view>
    </view>
    <view class="goods goods">
      <view class="item item">
        <navigator class="navigator navigator" hover-class="none">
          <image class="cover sk-image"></image>
          <view class="meta meta">
            <view class="name ellipsis sk-transparent sk-text-14-2857-916 sk-text"
              >ins风小碎花泡泡袖衬110-160cm</view
            >
            <view class="type sk-transparent sk-text-22-2222-248 sk-text">藏青小花， 130</view>
            <view class="price price">
              <view class="actual actual">
                <text class="symbol sk-transparent sk-opacity">¥</text>
                <text class="sk-transparent sk-text-14-2857-848 sk-text">99.00</text>
              </view>
            </view>
            <view class="quantity sk-transparent sk-opacity">x1</view>
          </view>
        </navigator>
        <navigator class="navigator navigator" hover-class="none">
          <image class="cover sk-image"></image>
          <view class="meta meta">
            <view class="name ellipsis sk-transparent sk-text-14-2857-942 sk-text"
              >ins风小碎花泡泡袖衬110-160cm</view
            >
            <view class="type sk-transparent sk-text-22-2222-385 sk-text">藏青小花， 130</view>
            <view class="price price">
              <view class="actual actual">
                <text class="symbol sk-transparent sk-opacity">¥</text>
                <text class="sk-transparent sk-text-14-2857-210 sk-text">99.00</text>
              </view>
            </view>
            <view class="quantity sk-transparent sk-opacity">x1</view>
          </view>
        </navigator>
        <view class="action action">
          <view
            class="button primary sk-transparent sk-text-29-0323-410 sk-text"
            style="background-position-x: 50%"
            >申请售后</view
          >
          <navigator
            class="button sk-transparent sk-text-29-0323-47 sk-text"
            style="background-position-x: 50%"
          >
            去评价
          </navigator>
        </view>
      </view>
      <view class="total total">
        <view class="row row">
          <view class="text sk-transparent sk-text-0-0000-597 sk-text">商品总价: </view>
          <view class="symbol sk-transparent sk-text-0-0000-5 sk-text sk-pseudo sk-pseudo-circle"
            >99.00</view
          >
        </view>
        <view class="row row">
          <view class="text sk-transparent sk-text-0-0000-925 sk-text">运费: </view>
          <view class="symbol sk-transparent sk-text-0-0000-941 sk-text sk-pseudo sk-pseudo-circle"
            >10.00</view
          >
        </view>
        <view class="row row">
          <view class="text sk-transparent sk-text-0-0000-471 sk-text">应付金额: </view>
          <view
            class="symbol primary sk-transparent sk-text-0-0000-74 sk-text sk-pseudo sk-pseudo-circle"
            >109.00</view
          >
        </view>
      </view>
    </view>
    <view class="detail detail">
      <view class="title sk-transparent sk-text-0-0000-943 sk-text">订单信息</view>
      <view class="row row">
        <view class="item sk-transparent">
          订单编号: 1893902429519351809
          <text class="copy sk-transparent sk-text-0-0000-571 sk-text">复制</text>
        </view>
        <view class="item sk-transparent sk-text-0-0000-113 sk-text"
          >下单时间: 2023-04-14 13:14:20</view
        >
      </view>
    </view>
    <view is="components/XtxGuess" class="r r">
      <view class="caption XtxGuess--caption"></view>
    </view>
    <view class="toolbar toolbar" style="padding-bottom: 34px">
      <view class="button primary sk-transparent sk-text-14-2857-735 sk-text"> 去支付 </view>
      <view class="button sk-transparent sk-text-14-2857-164 sk-text"> 取消订单 </view>
    </view>
  </scroll-view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-199 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-193 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-977 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-0-0000-859 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-15-0000-586 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-15-0000-866 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-text-15-0000-356 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-text-28-7879-47 {
  background-image: linear-gradient(
    transparent 28.7879%,
    #eeeeee 0%,
    #eeeeee 71.2121%,
    transparent 0%
  ) !important;
  background-size: 100% 63.4615rpx;
  position: relative !important;
}
.sk-text-14-2857-209 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-302 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-891 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-916 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-248 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-848 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-942 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-385 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-210 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-29-0323-410 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #eeeeee 0%,
    #eeeeee 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-29-0323-47 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #eeeeee 0%,
    #eeeeee 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-597 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-5 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-925 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-941 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-471 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-74 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-943 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-0-0000-571 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 19.2308rpx;
  position: relative !important;
}
.sk-text-0-0000-113 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-14-2857-735 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-164 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
