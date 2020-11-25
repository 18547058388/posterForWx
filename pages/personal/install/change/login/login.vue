<template>
	<view class="content">
		<view class="button" >
			<u-button type="success" shape="circle" :disabled="btnDisabled" @click="getButtonn" :custom-style="{width:'500rpx',height:'80rpx',fontSize:'30rpx',flex:1}">微信授权</u-button>
		</view>
		<view class="font" @click="getChange">
			账号密码登录
		</view>
		<view class="prompt">
			允许小程序获得您的微信授权，操作不会泄露您的个人隐私信息
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			//点击微信授权按钮进行授权登录
			getButtonn() {
				uni.navigateTo({
					url: "/pages/index/index",
				});
			},
			//跳转切换账号页面
			getChange() {
				uni.redirectTo({
					url: "/pages/personal/install/change/change",
				});
			}
		}
	}
</script>

<style lang="scss">
	.button {
		margin-top: 1000rpx;
	}

	.font {
		margin-top: 30rpx;
		text-align: center;
		color: #19BE6B;
		font-size: 30rpx;
	}

	.prompt {
		margin-top: 30rpx;
		text-align: center;
		font-size: 22rpx;
		color: gray;
	}
</style>
