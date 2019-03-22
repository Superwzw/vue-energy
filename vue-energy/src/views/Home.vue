<template>
  <div class="home">
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
