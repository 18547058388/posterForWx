<template>
	<view>
		<view class="search">
	 <u-search  class="u-search" shape="round" :show-action="false" height="70"
	  placeholder="3000+免费模板任你搜索" 
	  ></u-search>
	  </view>
	  <text class="wenzi">热门搜索</text>
	  <view class="huise">
	  <view class="beijing">
		  感
	  </view>
	  <view class="beijing">
	  		  感恩
	  </view>
	  <view class="beijing">
	  		  感恩节
	  </view>
	  <view class="beijing">
	  		  感恩节暗示法发顺丰
	  </view>
	  <view class="beijing">
	  	感恩节
	  </view>
	  <view class="beijing">
	  		  感恩节
	  </view>
	  </view>
	  <text class="wenzi2">历史搜索</text>
	  <view class="beijing2">
	  		  感恩节
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.huise{
		margin-bottom: 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
.beijing{
	margin-top: 30rpx;
	margin-right: 30rpx;
	border-radius: 30rpx;
	height: 40rpx;
	width:fit-content;
	text-align: center;
	line-height: 40rpx;
	padding: 0 20rpx;
	background-color: #c6bdae;
}
.wenzi{
	font-size: 35rpx;
	margin-top:50rpx;
	font-weight: 600;
}
.wenzi2{
	font-size: 35rpx;
	margin-top:50rpx;
	font-weight: 600;
}
.beijing2{
	margin-top: 30rpx;
	margin-right: 30rpx;
	border-radius: 30rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	width:fit-content;
	padding: 0 20rpx;
	background-color: #c6bdae;
}
.search{
	width: 720rpx;
	margin: 20rpx auto;
	}

</style>
