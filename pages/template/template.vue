<template>
	
<view>
	<view class="top">
			<u-tabs  :list="list" 
			:is-scroll="true" 
			:current="current" @change="change" bar-width="90" activeColor=" #1296db" bold bg-color="#Fff" style="width: 70%;">
			</u-tabs>
			<view class="search">
				
				<u-search  placeholder="搜索" bg-color="#f8f8f8" :show-action="false" ></u-search>
			</view>
	</view>
<view class="content">
            <view v-if="current === 0">
                <current1></current1>
            </view>
            <view v-if="current === 1">
               <current2></current2>
            </view>
            <view v-if="current === 2">
               <current3></current3>
            </view>
			
		
        </view>
</view>

</template>

<script>
	
	import current1 from '../../components/current1.vue'
	import current2 from '../../components/current2.vue'
	import current3 from '../../components/current3.vue'
	export default {
		components:{
			current1,
			current2,
			current3
		},
		data() {
			return {
				list: [{
					name: '每日问候'
				}, {
					name: '推广宣传'
				}, {
					name: '行业精选',
					
				},
				],
				current: 0,
				
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>


<style lang="scss">
	u-tabs{
		width: 100vw;
		height: 50rpx;
		position:absolute;
		
	}
	.top{
		border: 2rpx solid #FFFFFF;
		height: 80rpx;
		background: #FFFFFF;
		
	}
 .search{
	margin-top: 10rpx;
	 margin-left:530rpx;
	 width: 28%;
	 /*#ifdef H5*/
	 margin-top: -75rpx;
	    margin-left:530rpx;
	    width: 28%;
	 /*#endif   */
 }
</style>