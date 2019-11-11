<template>
  <div class="top-header">
    <slot name="left">左</slot>
    <slot name="search">
      <input type="text" placeholder="search">
    </slot>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'top-header',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
