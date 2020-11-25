<template>
	<view class="all">
		<view class="img" >
			<image src="../../../static/image/1.jpg"></image>
		</view>
		<view class="gongneng">
			<view class="gg" @click="show1=true">
				<view class="tu">
					<image class="tu1" src="../../../static/image/wenzi.png"></image>
				</view>
				<view class="text1">改字</view>
				<u-popup mode="bottom" v-model="show1" closeable="true">
					<view class="content">
						<view class="scroll">

							<view class="scroll1" v-for="index in 9" :key="index">
								第{{index}}个text

							</view>

						</view>
						<view class="confrim-btn">
							<u-button @click="show1 = false;" type="primary" shape="circle">确定</u-button>
						</view>
					</view>
				</u-popup>
			</view>
			<view class="gg" @click="show2=true">
				<view class="tu">
					<image class="tu1" src="../../../static/image/tupian.png"></image>
				</view>
				<view class="text1">换图</view>
				<u-popup mode="bottom" v-model="show2" closeable="true">
					<view class="content">
						<view class="scroll">

							<view class="scroll1" v-for="index in 9" :key="index">
								第{{index}}个图标

							</view>

						</view>
						<view class="confrim-btn">
							<u-button @click="show2 = false;" type="primary" shape="circle">确定</u-button>
						</view>
					</view>
				</u-popup>
			</view>
			<view class="gg" @click="show3=true" >
				<view class="tu" >

					<image class="tu1" src="../../../static/image/tianjia.png"></image>
				</view>
				<view class="text1" >添加</view>
				<u-popup mode="bottom"  v-model="show3" >
					<view class="content" style="height: 50vh;">
						<view class="scroll" style="height:12vh;margin-top: 50rpx;">
							<view class="text2" @click="show4=true">
								<view class="imgs">
									<image src="../../../static/image/wenzi.png"></image>
								</view>
								<view class="text3" >加字
								<u-popup  mode="bottom" v-model="show4" >
								<jinEdit placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#" ></jinEdit> 
								</u-popup>
								</view>
							</view>
							<view class="text2">
								<view class="imgs">
									<image src="../../../static/image/tupian.png"></image>
								</view>
								<view class="text3">加图</view>
							</view>
							<view class="text2">
								<view class="imgs">
									<image src="../../../static/image/sucai.png"></image>
								</view>
								<view class="text3">素材</view>
							</view>
						</view>
						<view class="confrim-btn">
							<u-button @click="show3 = false;" :hair-line="false" :custom-style="{width:'90vw',height:'80rpx',fontSize:'30rpx',
   marginTop:'10rpx',backgroundColor:'#000',border:'2px solid #000',color:'#fff'}">取消</u-button>
						</view>
					</view>
				</u-popup>
			</view>

		</view>

		<view class="share">完做制作，保存分享</view>


	</view>
</template>

<script>
	import jinEdit from '../../../components/jin-edit/jin-edit.vue';
	export default {
	 components: {
		 jinEdit
	 }	,
	data() {
			return {
				show1: false,
				show2: false,
				show3: false,
				show4: false
			
			}

		},

	
		methods: {
             editOk(res) {
                 console.log(res);
             }
		}
	}
</script>

<style>
	.scroll {
		display: flex;
		flex-wrap: wrap;
	}

	.scroll1 {
		margin: 10rpx;
		width: 200rpx;
		height: 200rpx;
		border: 1px solid #fff;
		flex-direction: column;

	}

	.content {
		padding: 24rpx;
		background-color: #000000;
		color: #fff;

	}
	

	.all {

		width: 100vw;
		height: 100vh;
		background-color: #000000;

	}

	.img {
		padding-top: 30rpx;
		margin: auto;
		height: 60vh;
		width: 60vw;

	}

	.img image {
		height: 60vh;
		width: 60vw;
	}

	.gongneng {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		width: 100vw;
		height: 14vh;
		margin-top: 170rpx;

	}

	.share {
		width: 90vw;
		height: 6vh;
		background-color: #1296db;
		border-radius: 40rpx;
		margin: 20rpx auto;
		color: #fff;
		text-align: center;
		font-size: 36rpx;
		line-height: 6vh;
	}

	.tu {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #303133;
	}

	.tu1 {
		margin-left: 20rpx;
		margin-top: 20rpx;
		height: 60rpx;
		width: 60rpx;
		line-height: 60rpx;

	}

	.text1 {
		color: #FFFFFF;
		margin-top: 4rpx;
		margin-left: 20rpx;
	}

	.text2 {
		display: flex;
		width: 28vw;
		height: 8vh;
		color: #FFFFFF;
		margin-top: 4rpx;
		margin-left: 20rpx;
		background-color: #303133;
		border-radius: 15rpx;
		text-align: center;


	}

	.text2 image {
		width: 6vw;
		height: 5vh;
	}

	.imgs {
		margin-top: 20rpx;
		margin-left: 50rpx;
	}

	.text3 {
		font-size: 30rpx;
		height: 5vh;
		width: 8vw;
		margin-top: 30rpx;
		margin-left: 10rpx;
	}

</style>
