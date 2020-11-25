<template>
	<view>
ss
		<view class="navbar">
			<u-navbar   height=60 back-icon-color="#000" :is-back="false" title="创意海报" :background="background"
			 title-color="#000">
				<u-back-top bottom='150' :scrollTop="scrollTop" top="150" icon='arrow-up' :mode="mode" :icon-style="iconStyle"
				 :custom-style='customstyle'></u-back-top>
				<view class="slot">
					<u-search margin-left="60rpx" class="search" input-align="center" maxlength='18' height="80" placeholder="3000+免费模版任你搜索"
					 shape="round" :show-action="false" bg-color="#F8F8FB">
					</u-search>
				</view>
			</u-navbar>
		</view>
		<view class="u-tabswiper">
			<u-tabs-swiper bold height="120" ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750" class='tabs'></u-tabs-swiper>
		</view>
		<swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view class="gundongqu" scroll-y @scrolltolower="onreachBottom" style="width: auto; height: 1200rpx;">
					<view class="img">
						<u-swiper :list="List"></u-swiper>
					</view>
					<view class="content">
						<view class="fangkuai" @click="gotozhaopin"><text class="wenzi">人才招聘</text>

							<view class="redian"><text>热点</text></view>
						</view>
						<view class="fangkuai" @click="gotopeixun"><text class="wenzi">课程培训</text>
						</view>
						<view class="fangkuai" @click="gotorenwu"><text class="wenzi">人物海报</text></view>
						<view class="fangkuai" @click="gotocuxiao"><text class="wenzi">活动促销</text></view>
						<view class="fangkuai" @click="gotojiameng"><text class="wenzi">招商加盟</text>
						</view>
						<view class="fangkuai" @click="gotoyaoqing"><text class="wenzi">会议邀请</text></view>
						<view class="fangkuai" @click="gotozhanbao"><text class="wenzi">企业战报</text></view>
						<view class="fangkuai" @click="gotohaibao"><text class="wenzi">励志海报</text></view>
					</view>
					<view class="item">

						<view class="xinxi">
							<text class="rencai">人才招聘</text>

							<text>查看更多<u-icon name="arrow-right"></u-icon></text>
						</view>

						<view class="image">
							<image @click="gotobianji" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
						</view>


						<view class="anniu">
							<view class="left">更多</view>

							<view class="right">换一批</view>
						</view>

					</view>


				</scroll-view>
			</swiper-item>


			<swiper-item class="swiper-item">
				<scroll-view class="gundongqu" scroll-y @scrolltolower="onreachBottom" style="width: auto; height: 1200rpx;">


					<view class="img">

						<u-swiper :list="List"></u-swiper>
					</view>

					<view class="content">
						<view class="fangkuai"><text class="wenzi">早安</text>

							<view class="redian"><text>热点</text></view>
						</view>
						<view class="fangkuai"><text class="wenzi">月签</text></view>
						<view class="fangkuai"><text class="wenzi">晚安</text></view>
						<view class="fangkuai"><text class="wenzi">日签</text></view>
						<view class="fangkuai"><text class="wenzi">晒图</text></view>
						<view class="fangkuai"><text class="wenzi">情感</text></view>
						<view class="fangkuai"><text class="wenzi">公益</text></view>
						<view class="fangkuai"><text class="wenzi">娱乐</text></view>
					</view>



					<view class="item">

						<view class="xinxi">
							<text class="rencai">人才招聘</text>

							<text>查看更多<u-icon name="arrow-right"></u-icon></text>
						</view>

						<view class="image">
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
						</view>


						<view class="anniu">
							<view class="left">更多</view>

							<view class="right">换一批</view>
						</view>

					</view>


				</scroll-view>
			</swiper-item>

			<swiper-item class="swiper-item">
				<scroll-view class="gundongqu" scroll-y @scrolltolower="onreachBottom" style="width: auto; height: 1200rpx;">


					<view class="img">

						<u-swiper :list="List"></u-swiper>
					</view>

					<view class="content">
						<view class="fangkuai"><text class="wenzi">教育培训</text>

							<view class="redian"><text>热点</text></view>
						</view>
						<view class="fangkuai"><text class="wenzi">运动健身</text>
						</view>
						<view class="fangkuai"><text class="wenzi">餐饮美食</text></view>
						<view class="fangkuai"><text class="wenzi">医疗健康</text></view>

						<view class="fangkuai"><text class="wenzi">金融理财</text>


						</view>
						<view class="fangkuai"><text class="wenzi">婚庆摄影</text></view>
						<view class="fangkuai"><text class="wenzi">旅游出行</text></view>
						<view class="fangkuai"><text class="wenzi">美容美妆</text></view>
					</view>



					<view class="item">

						<view class="xinxi">
							<text class="rencai">人才招聘</text>

							<text>查看更多<u-icon name="arrow-right"></u-icon></text>
						</view>

						<view class="image">
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605349696144&di=0075886f4eeb6d7e8709653b409a9682&imgtype=0&src=http%3A%2F%2Fi0.chexun.net%2Fi%2FDealersShop%2FUploads%2F2017%2F11%2Fdealer_default_27a6547023e2420ab6dcfe064f2a5a48.jpg"></image>
						</view>


						<view class="anniu">
							<view class="left">更多</view>

							<view class="right">换一批</view>
						</view>

					</view>


				</scroll-view>
			</swiper-item>


		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',

					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',

					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',

					}
				],

				scrollTop: 0,
				mode: 'circle',
				customstyle: {
					backgroundColor: '#494F5F',
				},
				iconStyle: {
					fontSize: '32rpx',
					color: '#eee',
				},
				background: {
					backgroundColor: '#fff',
				},
				list: [{
					name: '企业宣传'
				}, {
					name: '生活娱乐'
				}, {
					name: '行业海报'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		methods: {
			gotobianji(){
				
				uni.navigateTo({
					url:'../bianji/bianji'
				})
				
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			gotocuxiao() {
				uni.navigateTo({
					url: 'cuxiao/cuxiao'
				})
			},
			gotohaibao() {
				uni.navigateTo({
					url: 'haibao/haibao'
				})
			},
			gotojiameng() {
				uni.navigateTo({
					url: 'jiameng/jiameng'
				})
			},
			gotopeixun() {
				uni.navigateTo({
					url: 'peixun/peixun'
				})
			},
			gotoyaoqing() {
				uni.navigateTo({
					url: 'yaoqing/yaoqing'
				})
			},
			gotozhanbao() {
				uni.navigateTo({
					url: 'zhanbao/zhanbao'
				})

			},
			gotozhaopin() {
				uni.navigateTo({
					url: 'zhaopin/zhaopin'
				})
			},
			gotorenwu() {
				uni.navigateTo({
					url: 'renwu/renwu'
				})
			}

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>
<style lang="scss" scoped>
.navbar{
	.slot {
		width: 720rpx;
		margin-bottom: -400rpx;
		background-color: #fff;
		margin: 0 15rpx;
		position: fixed;
		top: 208rpx;
	}
}
	.redian {
		background-color: #F7534F;
		position: absolute;
		bottom: 845rpx;
		left: 130rpx;
		width: 65rpx;
		height: 40rpx;
		font-size: 25rpx;
		color: #FFF;
		text-align: center;
		line-height: 36rpx;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.anniu {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		justify-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-bottom: 10rpx;
	}

	.left {
		text-align: center;
		line-height: 60rpx;
		width: 300rpx;
		height: 60rpx;
		background-color: #eeeeee;
		border-radius: 30rpx;
	}

	.right {
		text-align: center;
		line-height: 60rpx;
		width: 300rpx;
		height: 60rpx;
		background-color: #eeeeee;
		border-radius: 30rpx;
	}

	.image {
		display: flex;
		flex-wrap: wrap;

		image {
			border-radius: 5px;
			height: 400rpx;
			width: 30%;
			margin-left: 20rpx;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
		}

	}

	.xinxi {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 30rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.swiper {
		height: 1200rpx;
		width: 750rpx;
	}

	.gundongqu {
		height: 100vh;
		width: 750rpx;

	}



	.img {
		padding: 20rpx;
		margin-top: 30rpx;
	}

	.content {

		display: flex;
		flex-wrap: wrap;

		.fangkuai {
			margin-left: 30rpx;
			margin-top: 20rpx;
			border-radius: 10px;
			width: 150rpx;
			height: 80rpx;
			background-color: #eee;
			text-align: center;
			line-height: 80rpx;
		}
	}



	.tabs {
		margin-top: 100rpx;
	}




	.u-tabswiper {
		margin-top: 100rpx;
	}
	
	
</style>
