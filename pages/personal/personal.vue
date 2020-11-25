<template>
	<view class="wrap">
		<u-popup v-model="show" mode="bottom" height="300rpx">
			<view class="mode-top">登录后可立即使用</view>
			<view class="mode-bottom">
				<u-button @click="getChange" :custom-style="{width:'300rpx',height:'80rpx',fontSize:'30rpx',flex:1,marginTop:'10rpx'}">手机号/邮箱登录</u-button>
				<u-button open-type="getUserInfo" type="success"
				 :custom-style="{width:'300rpx',height:'80rpx',fontSize:'30rpx',flex:1,marginTop:'10rpx'}"@click="onLogin">微信快捷登录</u-button>
			</view>
		</u-popup>
		<!-- 用户头像、姓名 -->
		<view class="personal-top" @click="show = true">
			<view class="personal-top-avatar">
				<!-- 	<image src="../../static/image/yonghu.png" class="personal-top-avatar-img"></image> -->
			</view>
			<view class="personal-top-name">
				<view class="">授权登录</view>
				<view class="prompt">登录后获取更多精美模板</view>
			</view>

		</view>
		<view class="personal-body">
			<u-cell-group>
				<u-cell-item @click="getDevise">
					<image slot="icon" src="../../static/image/sheji.png" class="cell-item-img"></image>
					<view class="title" slot="title">我的设计</view>
				</u-cell-item>
				<u-cell-item @click="getCollect">
					<image slot="icon" src="../../static/image/shoucang.png" class="cell-item-img"></image>
					<view class="title" slot="title">我的收藏</view>
				</u-cell-item>
				<!-- <u-cell-item @click="getCustomerService">
					<image slot="icon" src="../../static/image/联系客服.png" class="cell-item-img"></image>
					<view class="title" slot="title">联系客服</view>
				</u-cell-item> -->
				<u-cell-item @click="getInstall">
					<image slot="icon" src="../../static/image/shezhi.png" class="cell-item-img"></image>
					<view class="title" slot="title">设置</view>
				</u-cell-item>
			</u-cell-group>
		</view>

	</view>
</template>

<script>
	export default {
		name:'login',
		data() {
			return {
				show: false
			}
		},
		methods: {
			// #ifdef MP-WEIXIN
			onLogin: function() {
				console.log(111);
				let self = this;
				uni.login({
					provider: 'weixin',
					success: response => {
						console.log('response: ' + JSON.stringify(response));
						self.getUserInfo(response);
					}
				});
			},
			
			/**
			 * 获取微信用户信息
			 *
			 * @param {Object} loginInfo 登录信息
			 */
			getUserInfo: function(loginInfo) {
				console.log(222);
				let self = this;
				uni.getUserInfo({
					provider: 'weixin',
					withCredentials: true,
					lang: 'zh_CN',
					success: response => {
						console.log('response: ' + JSON.stringify(response));
						self.navigation.redirect({
							url: '/pages/index/bind',
							query: {
								code: loginInfo.code,
								userInfo: response.userInfo
							}
						});
					},
					fail: failResponse => {
						console.log('failResponse: ' + JSON.stringify(failResponse));
					}
				});
			},
			// #endif
			
			
			//手机号/邮箱登录
			getChange() {
				uni.navigateTo({
					url: "/pages/personal/install/change/change",
				});
			},
			//跳转我的设计页面
			getDevise(e) {
				uni.navigateTo({
					url: "/pages/personal/devise/devise",
				});
			},
			//跳转我的收藏页面
			getCollect(e) {
				uni.navigateTo({
					url: "/pages/personal/collect/collect",
				});
			},
			//跳转联系客服页面
			getCustomerService(e) {
				uni.navigateTo({
					url: "/pages/personal/customerservice/customerservice",
				});
			},
			//跳转设置页面
			getInstall(e) {
				uni.navigateTo({
					url: "/pages/personal/install/install",
				});
			}



		}
	}
</script>

<style lang="scss">
	.personal-top {
		padding: 30rpx;
		width: 750rpx;
		height: 200rpx;
		background-color: #FFFFFF;
		border-top: 1px solid #F3F3F2;
		display: flex;

	}

	.personal-top-avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin-top: 10rpx;
		border: 1px solid blue;
	}

	.personal-top-avatar-img {
		width: 120rpx;
		height: 120rpx;
	}

	.personal-top-name {
		margin-top: 20rpx;
		margin-left: 40rpx;
		font-size: 35rpx;
	}

	.prompt {
		font-size: 30rpx;
		color: #999999;
		margin-top: 10rpx;
	}

	.personal-body {
		width: 100%;
	}

	.cell-item-img {
		width: 50rpx;
		height: 50rpx
	}

	.title {
		padding-left: 20rpx;
	}

	.mode-top {
		font-size: 40rpx;
		font-weight: 800;
		margin-top: 50rpx;
		margin-left: 30rpx;
	}

	.mode-bottom {
		display: flex;
		width: 750rpx;
		margin-top: 50rpx;
		justify-content: space-around;
	}
</style>
