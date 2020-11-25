<template>
	<view class="content">
		<view class="mydevise">
			<view>
				<image src="../../../static/image/1.jpg" class="img"></image>
			</view>
			<view class="status">
				<view class="time">
					2020.11.11
				</view>
				<view class="delete">
					<view class="icon">
						<image src="../../../static/image/shanchu.png" class="icon"></image>
					</view>
					<view class="font">
						删除
					</view>

				</view>
			</view>
		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
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
	.mydevise {
		width: 345rpx;
		height: 550rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.time {
		flex: 1;
	}

	.img {
		width: 345rpx;
		height: 500rpx;
	}

	.icon {
		padding-left: 38rpx;
		padding-top: 2rpx;
		width: 28rpx;
		height: 30rpx;
	}

	.font {
		font-size: 30rpx;

	}

	.status {
		display: flex;
		justify-content: space-between;
	}

	.delete {
		flex: 1;
		display: flex;
		justify-content: space-between;
	}
</style>
