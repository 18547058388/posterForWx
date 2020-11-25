<template>
	<view class="content">
		<view class="username">
			<u-input v-model="username" :type="text" placeholder="请输入手机号/邮箱" />
		</view>
		<view class="password">
			<u-input v-model="password" :type="text" placeholder="请输入密码" />
		</view>
		<view class="button">
			<u-button type="primary" shape="circle" :disabled="btnDisabled" @click="getButton" :custom-style="{width:'650rpx',height:'80rpx',fontSize:'30rpx',flex:1}">登录</u-button>
		</view>
		<view class="bottom">
			<view class="icon">
				<image src="../../../../static/image/weixin.png" class="img" @click="getLogin"></image>
			</view>
			<view class="font">微信登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// btnDisabled: true,
				username: '',
				password: '',

			}
		},
		methods: {
			getButton() {
				if (this.username.length == 0) {
					this.alert.showMessage("请输入手机号/邮箱");
					return;
				}
				if (this.password.length == 0) {
					this.alert.showMessage("请输入密码");
					return;
				}
				this.btnDisabled = false;
			},
			//点击微信跳转登录页面
			getLogin() {
				uni.navigateTo({
					url: "/pages/personal/install/change/login/login",
				});
			},
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 30rpx;
	}

	.username {
		height: 100rpx;
		border-bottom: 1px solid #F7F9FB;
	}

	.password {
		height: 100rpx;
		margin-top: 30rpx;
		border-bottom: 1px solid #F7F9FB;
		border-radius: 20rpx;
		width: 500rpx;
	}

	.button {
		margin-top: 50rpx;
	}

	.img {
		width: 100rpx;
		height: 100rpx;
		margin-top: 800rpx;
		margin-left: 290rpx;
	}

	.font {
		width: 750rpx;
		text-align: center;
		margin-left: -30rpx;
		margin-top: 10rpx;
	}
</style>
