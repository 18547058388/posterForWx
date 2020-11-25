<template>
	<view class="content">
		<view class="ld">
		
			<view class="left">
		
				<view  v-for="(item,index) in kindlist":key="index" @click="setid(index)"
				:class="index===change?'active':''"
				style="font-size: ;"
				>
					<view class="lefttitle">{{item.title}}</view>
				</view>
			</view>
			 <view class="right">
				<scroll-view 
				:scroll-y="true" 
				style="white-space: wrap; height: 1200rpx;" 
				:scroll-into-view="clickId"
				:scroll-with-animation="true"
				@scroll="scroll"
				@scrolltolower="scrolltolower "
				>
					 <view v-for="(item,index) in kindlist" :key="index">
						<view class="title" ><text :id="'po'+index">{{item.title}}</text></view>
				<view class="imagelist">
					<view v-for="(item2,index2) in kindlist" :key="index2"> 
					
					<view class="text2">免费</view>
					 <image :src="item.src"></image>
					 </view> 
				</view>	
				 </view> 
				</scroll-view>
			</view> 
		</view>
	</view>
</template>

<script>


	export default {
	
		data() {
			return {
		
				kindlist: [{
						title: "人才招聘",
						src:require('../static/image/1.jpg') 
					},
					{
						title: "商务会议",
						src:require('../static/image/2.jpg')
					},
					{
						title: "美食推荐",
						src:require('../static/image/3.jpg')
					},
					{
						title: "招商加盟",
						src:require('../static/image/4.jpg')
					},
					{
						title: "会议促销",
						src:require('../static/image/5.jpg')
					},
					{
						title: "课程培训",
						src:require('../static/image/6.jpg')
					},
					{
						title: "励志海报",
						src:require('../static/image/7.jpg')
					},
					{
						title: "企业战报",
						src:require('../static/image/1.jpg')
					},
				],
				clickId: "",
				change:0,
				topList:[],
				isLeftClick:false
			}
		},
		onReady() {
			this.getNodesInfo();
		},
		methods: {
			setid(i) {
				this.clickId = "po" + i;
				this.change = i;
				this.isLeftClick=true;
			},
			scroll(e){
				if(this.isLeftClick){
					this.isLeftClick=false;
					return;
				}
				let scrollTop = e.target.scrollTop;
				// 只能变前第三个，最后一个到不了底部，只能用滚动到底部事件
				for(let i=0;i<this.topList.length;i++){
					let h1 = this.topList[i];
					let h2 = this.topList[i+1];
					if(scrollTop>h1&&scrollTop<h2){
						this.change = i;
					}
				}
			},
			// 滚动到底部
			scrolltolower(){
				setTimeout(()=>{
					this.change =20;
				},100)
			},
			getNodesInfo(){
				//小程序没有doucument和window对象(undefined)
				const query =uni.createSelectorQuery().in(this);
				query.selectAll(".title").boundingClientRect().exec(res=>{
					let nodes = res[0];
					let arr = [];
					nodes.map(item=>{
						arr.push(item.top);
					})
					this.topList = arr;
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		
		position:absolute;
		top: 80rpx;
	}
	.ld {
		margin-top: 20rpx;
		width: 100vw;
		display: flex;
		
		.left {
			background-color: #E0E0E0;
			width: 160rpx;
			font-size: 30rpx;
			text-align: center;
		}
		
		.right {
			width: 100vw;
			flex: 1;
			
		}
	}
	.title {
		border-radius: 20rpx;
		margin-left: 40rpx;
		margin-bottom: 10rpx;
		width: 30vw;
		font-size: 40rpx;
		font-weight: bold;
		background-color: pink;
		text-align: center;
	}
	.active{
		border-left: 10rpx solid #1296db;
		background-color:#fff;
		font-weight: 600;
		color: #000;
		font-size:36rpx;
	}
	
	.lefttitle{
		width:170rpx ;
		height:140rpx;
		text-align: center;
		line-height:140rpx;
	}
	.right image{
		border-radius: 20rpx;
		width: 32vw;
		height: 30vh;
		margin: 5rpx;
	}
	.imagelist{
	
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 10rpx;
	
	}
	 .text2{
		height: 30rpx;
		line-height: 30rpx;
		width: 70rpx;
		text-align: center ;
		background: #82848A;
		color: #fff;
		font-size: 18rpx;
		border-radius: 40rpx;
		position: absolute;
	margin-top: 8rpx;
	margin-left: 8rpx;
	}
</style>