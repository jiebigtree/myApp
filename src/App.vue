<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- hello world -->
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="stylus" scoped>
</style>
