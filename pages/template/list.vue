<template>
	<view class="poster-list">
		<spt-native-list bottom="100px" @init="mescrollInit" @loadMore="onLoadMore">
			<view class="poster-list-container">
				<u-waterfall ref="uWaterfall" v-model="posterArray">
					<template v-slot:left="{ leftList }">
						<poster-item
							v-for="(poster, index) in leftList"
							:key="index"
							:poster="poster"
							@share="onShare"
							@refreshPosterList="onRefreshPosterList"
						/>
					</template>
					<template v-slot:right="{ rightList }">
						<poster-item
							v-for="(poster, index) in rightList"
							:key="index"
							:poster="poster"
							@share="onShare"
							@refreshPosterList="onRefreshPosterList"
						/>
					</template>
				</u-waterfall>
			</view>
		</spt-native-list>
		<u-button
			type="primary"
			shape="circle"
			:customStyle="{
				position: 'fixed',
				bottom: '34px',
				left: '120rpx',
				right: '120rpx',
				backgroundColor: vuex_color.primary,
				fontSize: '28rpx'
			}"
			@click="onClickAdd"
		>
			＋&nbsp;新增海报
		</u-button>
		<poster-share v-model="showShare" :poster="posterData"></poster-share>
	</view>
</template>

<script>
import posterItem from './components/poster-item.vue';
import posterShare from './components/poster-share.vue';
// #ifndef H5
import MescrollMixin from 'mescroll-uni/mescroll-mixins.js';
// #endif

export default {
	// #ifndef H5
	mixins: [MescrollMixin],
	// #endif

	components: {
		posterItem,
		posterShare
	},

	data() {
		return {
			// mescroll对象
			mescroll: null,
			// 商城商品数组
			posterArray: [],
			// 时间戳
			pts: '',
			showShare: false,
			posterData: null
		};
	},

	onLoad() {
		let self = this;
		uni.$on('refreshPosterList', () => {
			self.mescroll.resetUpScroll();
		});
	},

	methods: {
		/**
		 * mescroll 初始化时触发
		 *
		 * @param {Object} mescroll
		 */
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},

		/**
		 * 分页查询会员卡列表
		 *
		 * @param {Object} mescroll mescroll实例对象
		 */
		onLoadMore(mescroll) {
			// 下拉刷新
			if (mescroll.num === 1) {
				this.$refs.uWaterfall.clear();
			}
			let self = this;
			this.request.post({
				url: 'superSkl/api/market/posters/v1/list',
				params: {
					limit: mescroll.size,
					offset: mescroll.num,
					pTs: this.pts
				},
				success: response => {
					// 时间戳
					self.pts = response.rtData.pTs;
					// 拼接数据
					if (response.rtData.dts && response.rtData.dts.length > 0) {
						self.posterArray = self.posterArray.concat(response.rtData.dts);
					}

					let number = response.rtData.dts && response.rtData.dts.length > 0 ? response.rtData.dts.length : 0;

					// 判断是否加载完成
					mescroll.endSuccess(self.posterArray.length, false);
				},
				failed: response => {
					self.alert.showMessage(response.rtMsg);
					mescroll.endErr();
				}
			});
		},

		/****************************** 事件相应 ******************************/

		onClickAdd() {
			this.navigation.push({
				url: '/pages/poster/template',
				query: {
					type: 'add'
				}
			});
		},
		
		onRefreshPosterList() {
			this.mescroll.resetUpScroll();
		},
		
		onShare(poster) {
			this.posterData = poster;
			this.showShare = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.poster-list {
	width: 750rpx;
	background-color: $u-bg-color;

	&-container {
		padding: 10rpx;
	}
}
</style>
