<template>
	<view class="content">
		<view class="mydevise">
			<view>
				<image src="../../../static/image/1.jpg" class="img" @click="getEdit"></image>
			</view>
			<view class="status">
				<view class="time">
					2020.11.11
				</view>
				<view class="delete">
					<view class="icon">
						<image src="../../../static/image/shanchu.png" class="icon"></image>
					</view>
					<view class="font" @click="show = true">
						<u-popup v-model="show" mode="center" width="600rpx" height="300rpx" closeable="true">
							<view class="mode-top">是否确认删除？</view>
							<view class="mode-bottom">
								<u-button type="success"  :custom-style="{width:'200rpx',height:'80rpx',
								fontSize:'30rpx',flex:1,marginTop:'10rpx'}">删除</u-button>
								<u-button open-type="getUserInfo" @click="show = false"  hover-class="none" :hair-line="false"
								 :custom-style="{width:'200rpx',height:'80rpx',fontSize:'30rpx',flex:1,
								 marginTop:'10rpx',backgroundColor:'#EDEDED',border:'1px solid #EDEDED '}">取消</u-button>
							</view>
						</u-popup>
						删除
					</view>

				</view>
			</view>
		</view>
		<view class="transmit">
			<view class="transmit-left">
				<image src="../../../static/image/weixin%20(2).png" class="transmit-left-img"></image>
			</view>
			<view class="transmit-right">
				转发
			</view>

		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
          show:false
			}
		},
		methods:{
			//跳转编辑页面
			getEdit(){
					uni.navigateTo({
						url: "/pages/personal/devise/edit/edit",
					});
				},
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

	.transmit {
		width: 100rpx;
		height: 40rpx;
		background-color: #19BE6B;
		border-radius: 40rpx;
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 55rpx;
		left: 250rpx;
		opacity: 0.9;
		
	}

	.transmit-left-img {
		width: 30rpx;
		height: 30rpx;
		margin-top: 6rpx;
		margin-left: 5rpx;
	}

	.transmit-right {
		line-height: 40rpx;
		color: #FFFFFF;
		font-size: 22rpx;
		margin-right: 5rpx;
	}
	.mode-top {
		font-size: 35rpx;
		margin-top: 50rpx;
		margin-left: 30rpx;
	}
	
	.mode-bottom {
		display: flex;
		width: 600rpx;
		margin-top: 50rpx;
		justify-content: space-around;
	}
</style>
