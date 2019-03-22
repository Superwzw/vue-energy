<template>
	<div class="homeBoard">
		<home-header></home-header>
		<home-nav></home-nav>
	</div>
</template>

<script>
	import homeHeader from '@/components/Home_components/header/header.vue'
	import homeNav from '@/components/Home_components/homeNav/homeNav.vue'

	export default {
		name: "homeBoard",
	  	components: {
    		homeHeader,
    		homeNav,
  		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.homeBoard
		overflow:hidden;
		background-color: $bgColor;	
</style>