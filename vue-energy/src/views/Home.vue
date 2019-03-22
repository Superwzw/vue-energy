<template>
  <div class="home"">
    <!-- <home-header></home-header>
    <home-nav></home-nav> -->
    <home-board></home-board>
  </div>
</template>

<script>
// @ is an alias to /src
// import homeHeader from '@/components/Home_components/header/header.vue'
// import homeNav from '@/components/Home_components/homeNav/homeNav.vue'
import homeBoard from '@/components/Home_components/homeBoard/homeBoard.vue'
export default {
  name: 'home',
  components: {
    homeBoard,
  }
}
</script>

<style lang="stylus" scoped>
</style>
