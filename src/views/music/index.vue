<template>
 <div class="music-container">
   <!-- <el-container> -->
    <!-- <music-header class="music-header"></music-header>   -->
    <el-tabs class="el-tabs-container" v-model="activeName" type="card" :stretch="stretch" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first">
        <recommend></recommend>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="second">
        <rank></rank>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="third">
        <song-list></song-list>
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="fourth">
        <radio></radio>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="fifth">
        <singers></singers>
      </el-tab-pane>
      <el-tab-pane label="新碟上架" name="sixth">
        <new-disc></new-disc>
      </el-tab-pane>
    </el-tabs>

    <!-- <el-footer height=""> -->
    <music-player class="music-player-container"></music-player>
    <!-- </el-footer> -->

   <!-- </el-container> -->

 </div>
</template>

<script>
import { getRequest } from '@/utils/network.js'
import MusicPlayer from './components/MusicPlayer'

import Rank from './views/rank'
import Radio from './views/radio'
import Recommend from './views/recommend'
import SongList from './views/songList'
import Singers from './views/singers'
import NewDisc from './views/newDisc'

export default {
  props: {
    stretch: {
      type: Boolean,
      default () { return true }
    }
  },
  data () {
    return {
      msg: '',
      activeName: null
    }
  },
  components: {
    MusicPlayer,
    Rank,
    Radio,
    Recommend,
    SongList,
    Singers,
    NewDisc
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
    handleClick () {}

  }
}
</script>

<style>
.music-container {
  /* min-height: calc(100vh - 50px); */
}
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
