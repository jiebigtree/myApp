<template>
  <div class="rank">
    发现
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'rank',
  data () {
    return {
    }
  },
  methods: {
    getBannerPic () {
      axios.get('http://localhost:3000/banner?type=2').then(res => {
        console.log(res.data.banners)
      })
    }
  },
  created () {
    this.getBannerPic()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
