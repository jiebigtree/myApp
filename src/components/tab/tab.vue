<template>
  <div class="tab">
    <div class="tab-container">
      <router-link tag="div" v-for="(one,index) in tabButtons" :key="index" class="tab-item" :to="one.to">
        <img :src="one.icon" alt="" width="30px">
        <span class="tab-span">{{one.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      tabButtons: [
        {icon: require('common/images/icons/netMusic.png'), name: '发现', to: '/finding'},
        {icon: require('common/images/icons/netMusic.png'), name: '视频', to: '/radio'},
        {icon: require('common/images/icons/netMusic.png'), name: '我的', to: '/mine'},
        {icon: require('common/images/icons/netMusic.png'), name: '云村', to: '/cloud'},
        {icon: require('common/images/icons/netMusic.png'), name: '账号', to: '/account'}
      ]
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
@import "~common/stylus/common"
.tab
  position fixed
  bottom 0
  left 0
  right 0
  // height 50px
  background-color black
  color white
  .tab-container
    display flex
    flex-direction row
    justify-content space-around
    .tab-item
      text-align center
      margin 4px 0
      .tab-span
        display block
        font-size 12px
        margin-top 3px
  .router-link-active
    color red
    img
      background-color red
      border-radius 50%
</style>
