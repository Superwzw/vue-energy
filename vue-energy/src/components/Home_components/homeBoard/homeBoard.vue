<template>
	<div class="homeBoard">
		<home-header></home-header>
		<div class="board-wraper">
			<homeSwiper></homeSwiper>
			<home-nav></home-nav>
		</div>
	</div>
</template>

<script>
	import homeHeader from '@/components/Home_components/header/header.vue'
	import homeSwiper from '@/components/Home_components/homeSwiper/homeSwiper.vue'
	import homeNav from '@/components/Home_components/homeNav/homeNav.vue'

	export default {
		name: "homeBoard",
	  	components: {
    		homeHeader,
    		homeNav,
    		homeSwiper,
  		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.homeBoard
		overflow:hidden;
		background-color: $btnColor;	
		width:100%;
		min-width:1200px;
	.board-wraper
		display:flex;
</style>