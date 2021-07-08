<template>
	<div class="my-menu" :class="{'multiline' : multiline}">
		<div class="menu-item" :style="{width: (multiline ? `calc(100% / ${number})` : 'unset')}"
			v-for="(item, index) in list" :key="index"
			@click="jump(item.url)"
		>
			<img :style="{width: `${width}rpx`, height: `${width}rpx`}" :src="item.img" />
			<span>{{ item.text }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			// 是否开启多行
			multiline: {
				type: Boolean,
				default: false
			},
			// 开启多行的前提下： 默认一行几个
			number: {
				type: Number,
				default: 4
			},
			// 
			width: {
				type: [String, Number],
				default: 86
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			jump(val) {
				
			
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
	.multiline {
		justify-content: flex-start !important;
		flex-wrap: wrap;
		.menu-item {
			padding: 26rpx 0;
		}
	}

	.my-menu {
		display: flex;
		justify-content: space-around;

		.menu-item {
			text-align: center;

			img {
				width: 86rpx;
				height: 86rpx;
			}

			span {
				display: block;
			}
		}
	}
</style>
