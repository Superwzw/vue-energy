<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/header/header.vue'
// import homeHeader from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    homeHeader
  }
}
</script>
