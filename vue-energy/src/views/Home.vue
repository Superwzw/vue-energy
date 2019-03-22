<template>
  <div class="home"">
    <home-header></home-header>
    <home-nav></home-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/Home_components/header/header.vue'
import homeNav from '@/components/Home_components/homeNav/homeNav.vue'
// import homeHeader from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeNav,
  }
}
</script>

<style lang="stylus" scoped>
</style>
