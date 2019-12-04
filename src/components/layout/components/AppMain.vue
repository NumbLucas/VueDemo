<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <!-- <a href="http://baidu.com" target="blank">baidu</a> -->
      <!-- <vertical-nav-bar></vertical-nav-bar> -->
      <keep-alive>
        <router-view class="" :key="key" />
      </keep-alive>
    <!-- </transition> -->
  </section>
</template>
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->

<script>
import axios from 'axios'
import getRequest from '@/utils/network'

export default {
  name: 'AppMain',
  props: {
  },
  data () {
    return {
      msg: ''
    }
  },
  components: {
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  methods: {
    btnClick () {
      console.log('t')

      axios.get('http://httpbin.org/ip').then((res) => {
        this.msg = res.data
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>
