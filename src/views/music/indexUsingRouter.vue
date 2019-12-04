<template>
  <div class="music-container">
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- <el-menu-item v-for="(item, index) in nav" :key="index"
        index="item" ></el-menu-item> -->
      <el-menu-item style="flex: 1" v-for="(item, index) in nav" :key="index" :index="item.path">{{item.name}}
      </el-menu-item>
    </el-menu>
    <div>

    </div>
    <vue-element-loading style="height: 50%; width: 100%" :active="$store.state.musicLoading" spinner="bar-fade-scale"
      color="#409EFF" />
    <transition>
      <keep-alive>
        <router-view :aplayer="$refs.ap">
        </router-view>
      </keep-alive>
    </transition>

    <music-player ref='ap' class="music-player-container"></music-player>
  </div>
</template>

<script>
import { getRequest } from '@/utils/network.js'
import MusicPlayer from './components/MusicPlayer'
import MusicHeader from './components/MusicHeader'

import musicNav from '@/router/musicIndex.ts'

import VueElementLoading from 'vue-element-loading'
export default {
  props: {
    stretch: {
      type: Boolean,
      default () { return true }
    },
    activeIndex: {
      default () { return 0 }
    },
    nav: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      msg: '',
      activeName: null,
      aplayer: this.$refs.ap
      //  isActive: {
      //    type: Boolean,
      //    default() { return this.$store.state.musicLoading }
      //  }
    }
  },
  components: {
    MusicPlayer,
    VueElementLoading
  },
  methods: {
    btnClick () {
      getRequest('/music/playlist/hot')
        .then(res => {
          this.msg = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleSelect () {
      console.log('handleSelect refs.ap', this.$refs.ap)
      console.log('handleSelect ap', this.aplayer)
    }
  },
  mounted () {
    console.log('store: ', this.$store.musicLoading)

    console.log('music.$route:', musicNav)
    var path = musicNav.children.filter(item => {
      var pattern = /^nav_/
      return pattern.exec(item.path)
    })
    var routePath = []
    for (let obj of path) {
      //  console.log(obj);

      routePath.push({
        name: obj.meta.head,
        path: '/music/' + obj.path
      })
    }
    this.nav = routePath
  },
  watch: {
    isActive (val) {
      console.log('watch loading change: ', val)
    }
  }
  //  filters: {
  //    solveRoutePath() {

  //    }
  //  }
}
</script>

<style>
/* .music-container {
  min-height: calc(100vh - 50px);
} */
/* .el-tabs-container {
  min-height: calc(100vh - 50px);
} */
.music-player-container {
  position: fixed;
  width: auto;
  left: 200px;
  bottom: 0;
  right: 0;
}
.music-header {
  width: 100%
}
</style>
