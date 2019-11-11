<template>
  <div class="new-music">
    我的
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'radio',
  data () {
    return {
    }
  },
  methods: {
    getMyInfor () {
      axios.get('http://localhost:3000/user/detail?uid=1786358465').then(res => {
        console.log(res.data)
      })
    }
  },
  created () {
    // this.getMyInfor()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
