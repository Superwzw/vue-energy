<template>
	<div class="homeBoard">
		<home-header></home-header>
		<home-nav></home-nav>
		<homeSwiper></homeSwiper>	
		<!-- <home-footer></home-footer> -->
	</div>
</template>

<script>
	import homeHeader from '@/components/Home_components/header/header.vue'
	import homeSwiper from '@/components/Home_components/homeSwiper/homeSwiper.vue'
	import homeNav from '@/components/Home_components/homeNav/homeNav.vue'
	// import homeFooter from '@/components/Home_components/homeFooter/homeFooter.vue'

	export default {
		name: "homeBoard",
	  	components: {
    		homeHeader,
    		homeSwiper,
    		homeNav,
		    // homeFooter,
  		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.homeBoard
		// background-color: $bgColor;
		background: url("~@/assets/0.jpg");
		width:100%;
		height:100%;
		min-width:1200px;
		// border:5px solid red;
</style>