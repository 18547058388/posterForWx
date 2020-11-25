<template>
	<view>
		<view class="head">
			<u-tabs-swiper class="u-tabs-swiper" ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750"></u-tabs-swiper>
			 <view @click='gotosearch'>
			 <u-search  class="u-search" shape="round" :show-action="false" height="70" ></u-search>
		</view>
		</view>
		<swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y @scrolltolower="onreachBottom">
					<view class="ceshi">
						<image src="../../static/image/26.jpg" v-for="(item,index) in 20" :key='index'></image>
						
						
						
					</view>
				</scroll-view>
			</swiper-item>
			
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y  @scrolltolower="onreachBottom">
					<view class="ceshi"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '最新'
				}, {
					name: '最热'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		methods: {
			gotosearch(){
				uni.navigateTo({
					url:'../search/search'
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
				
			}
		}
	};
</script>

<style lang="scss">
	.ceshi{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		image{
			width: 325rpx;
			height: 500rpx;
			border-radius: 10px;
			margin-left: 33rpx;
			margin-top: 30rpx;
		}
	}
	.u-tabs-swiper{
		width: 200rpx;
	}
	.u-search{
		width: 500rpx;
	}
	.head{
		display: flex;
	}
.ceshi{
	width: 750rpx;
	height: 100vh;
	margin-top: 20rpx;
}
.swiper{
	width: 750rpx;
	height:100vh;
}
</style>
