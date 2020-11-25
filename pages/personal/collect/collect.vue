<template>
	<view class="content">
		<view class="mycollect">
			<image src="../../../static/image/28.jpg" class="img"></image>
		</view>
		<view class="mycollect">
			<image src="../../../static/image/23.jpg" class="img"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data (){
			return 
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 20rpx;
		padding-right: 0;
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
	}
	.mycollect{
		margin-right: 20rpx;
		margin-top: 20rpx;
	}
	.img{
		width: 345rpx;
		height: 500rpx;
	}
</style>
