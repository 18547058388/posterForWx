<template>
	<view >
<scroll-view scroll-y class="scroll-y">
	<image src="../../static/image/1.jpg" v-for="(item,index) in 30" :key='index' ></image>
</scroll-view>		
		<view class="tubiao">
			<view class="left">
			<u-icon name="home-fill" color="#ffffff" size="30"></u-icon>首页
			</view>
			
			<view class="right">
				<u-icon name="share-fill" color="#ffffff" size="30"></u-icon>分享
			</view>
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

<style lang="scss" scoped>
	.scroll-y{
		height: 100vh;
		width: 750rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		image{
			margin-left: 30rpx;
			margin-top: 30rpx;
			width: 330rpx;
			height: 500rpx;
			border-radius: 10px;
		}
	}
	.tubiao{
		
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			position: fixed;
			bottom: 30rpx;
	
	}
.left{
	width: 270rpx;
	height: 80rpx;
	border-radius: 40rpx;
	background-color: #595959;
	color: #fff;
	text-align: center;
	line-height: 80rpx;
	margin-left: 90rpx;
}
.right{
	width: 270rpx;
	height: 80rpx;
	border-radius: 40rpx;
	background-color: #0055ff;
	color: #fff;
	text-align: center;
	line-height: 80rpx;
	margin-left: 30rpx;
}
</style>
