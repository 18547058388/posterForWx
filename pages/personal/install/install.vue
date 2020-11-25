<template>
	<view class="wrap">
		<view class="agreement"@click="getPrivacy">
			<view class="font" >隐私协议</view>
			<view>
				<u-icon name="arrow-right" size="30"class="icon"></u-icon>
			</view>

		</view>
		<view class="cut" @click="getChange">切换账号</view>
		<view>
			<u-modal v-model="show" :content="content" show-confirm-button="true" show-cancel-button="true"></u-modal>
			<view class="quit"@click="getSecede" >退出登录</view>
		</view>
		
<view class="">
	<u-toast ref="uToast" />
</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {	
				show: false,
				content: '确定要退出吗？'
			}
		},
		methods:{
			 getSecede(){
			       this.show = true;
			      },
			//跳转隐私协议页面
			getPrivacy() {
				uni.navigateTo({
					url: "/pages/personal/install/privacy/privacy",
				});
			},
			//跳转切换账号页面
			getChange() {
				uni.navigateTo({
					url: "/pages/personal/install/change/change",
				});
			}
		}
	}
</script>

<style lang="scss">
	.wrap {
		border: 1px solid #F3F4F9;
	}
	.agreement {
		margin-top: 20rpx;
		width: 750rpx;
		height: 110rpx;
		font-size: 35rpx;
		line-height: 110rpx;
		background-color: #FFFFFF;
		padding-left: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.icon{
		padding-right: 40rpx;
	}
	.cut {
		margin-top: 20rpx;
		width: 750rpx;
		height: 110rpx;
		font-size: 35rpx;
		line-height: 110rpx;
		background-color: #FFFFFF;
		text-align: center
	}
	.quit {
		margin-top: 20rpx;
		width: 750rpx;
		height: 110rpx;
		font-size: 35rpx;
		line-height: 110rpx;
		background-color: #FFFFFF;
		text-align: center;
	}
</style>
