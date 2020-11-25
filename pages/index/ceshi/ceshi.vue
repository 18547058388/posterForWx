<template>
	<view>
		<u-input v-model="wenzi" :type="type" :border="border" :height="height" :auto-height="autoHeight" />
	{{wenzi}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wenzi:"我们",
				type: 'textarea',
				border: true,
				height: 100,
				autoHeight: true,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
