<template>
  <div class="home"">
    <!-- <home-header></home-header>
    <home-nav></home-nav> -->
    <home-board></home-board>
    <home-footer style="flex-grow: 1;"></home-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import homeHeader from '@/components/Home_components/header/header.vue'
// import homeNav from '@/components/Home_components/homeNav/homeNav.vue'
import homeBoard from '@/components/Home_components/homeBoard/homeBoard.vue'
import homeFooter from '@/components/Home_components/homeFooter/homeFooter.vue'
export default {
  name: 'home',
  components: {
    homeBoard,
    homeFooter,
  }
}
</script>

<style lang="stylus" scoped>
	.home
		hight:15000px;
		display:flex;
		flex-direction:column;
		// border:1px solid red;
</style>
