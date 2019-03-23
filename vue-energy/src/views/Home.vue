<template>
  <div class="home"">
    <!-- <home-header></home-header>
    <home-nav></home-nav> -->
    <home-board></home-board>
    <!-- <home-footer></home-footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import homeHeader from '@/components/Home_components/header/header.vue'
// import homeNav from '@/components/Home_components/homeNav/homeNav.vue'
import homeBoard from '@/components/Home_components/homeBoard/homeBoard.vue'
// import homeFooter from '@/components/Home_components/homeFooter/homeFooter.vue'
export default {
  name: 'home',
  components: {
    homeBoard,
  }
}
</script>

<style lang="stylus" scoped>
	.home
		display:flex;
		flex-direction:column;
		height:100%;
		// border:1px solid red;
</style>
