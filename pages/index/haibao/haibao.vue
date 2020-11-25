<template>
	<view>
		<u-navbar class="navbar" back-text=" " height=60 back-icon-color="#000" :is-back="true" title="励志海报" :background="background"
		 title-color="#000">
			<u-back-top bottom='150' :scrollTop="scrollTop" top="150" icon='arrow-up' :mode="mode" :icon-style="iconStyle"
			 :custom-style='customstyle'></u-back-top>
			<view class="slot">
				<view class="sousuo">
					<u-search class="search" input-align="center" maxlength='18' height="80" placeholder="在当前场景下搜索" shape="round"
					 :show-action="false" bg-color="#F8F8FB">
					</u-search>
				</view>
				<scroll-view class="gundongqu" scroll-x scroll-left="1300rpx">
					<view :class="change===index?'active':''" @click="changgecss(index)" v-for="(item,index) in List" :key='index'><text
						 class="wenzi">{{item}}</text>
					</view>
					
				</scroll-view>
			</view>
		</u-navbar>

		<scroll-view scroll-y class="scrolly" show-scrollbar='false'>


			<view class="image">
				<image :src="item" v-for="(item,index) in imglist" :key='index'></image>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				List: ['人才招聘', '课程培训', '人物海报', '活动促销', '招商加盟', '会议邀请', '企业战报', '励志海报'],
				imglist: [
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg",
					"../../../static/image/1.jpg"

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
					backgroundColor: '#fff'
				},
				change: 7
			}


		},
		methods: {
			changgecss(index) {
				this.change = index;
			}
		}
	}
</script>

<style lang="scss">
	.sousuo {
		width: 720rpx;
	}

	.image {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		image {
			width: 345rpx;
			height: 470rpx;
			border-radius: 10px;
			margin-left: 20rpx;
			margin-top: 20rpx;
		}
	}

	.scrolly {
		width: 100vw;
		height: 920rpx;
		margin-top: 250rpx;
	}

	.gundongqu {
		margin-top: 30rpx;
		height: 230rpx;
		width: 100vw;
		white-space: nowrap;
		margin-left: -20rpx;

		.active {

			background-color: #E6F1FF;
			border: 1px solid #0773FC;
			color: #0773FC;
			font-weight: 700;
		}

		view {
			display: inline-block;
			width: 200rpx;
			height: 100rpx;
			background-color: #EEE;
			text-align: center;
			line-height: 100rpx;
			margin-left: 30rpx;
			border-radius: 10px;
		}
	}



	.slot {
		width: 100vw;
		height: 200rpx;
		margin-left: -70rpx;
		margin-top: 320rpx;
	}
</style>
