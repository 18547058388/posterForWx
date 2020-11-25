<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
			@import "uview-ui/index.scss";
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	/*每个页面公共css */
	.wrap{
		background-color: #F3F4F9;
		width: 100vw;
		height: 100vh;
	}

</style>