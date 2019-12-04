<template>
  <div>
    <play-list-profile :playListInfo="allData.listInfo"></play-list-profile>
    <song-table :tableData="SongListData()" @playSong="play"></song-table>
  </div>
</template>

<script>
import { getRequest } from '@/utils/network.js'

import SongTable from '../components/SongTable'
import PlayListProfile from '../components/PlayListProfile'

import store from '@/store/index.ts'

export default {
  props: {
    songsIds: {
      type: Array,
      default () {
        return []
      }
    },
    aplayer: {
      type: Object,
      default () { return null }
    }
  },
  data () {
    return {
      tableData () {
        return null
      },
      allData: {
        'listInfo': null,
        'songsInfo': null,
        'songsUrl': null
      }
    }
  },
  computed: {
    songShow () {
      var tmp = this.SongListData()
      console.log('songShow', tmp)
      return tmp
    }
  },
  components: {
    SongTable,
    PlayListProfile
  },
  methods: {
    setData (data) {
      this.allData = data
      // console.log('setdata ', this.allData);
    },
    SongListData () {
      // console.log('getSongListData',this.allData.songsInfo);
      var data = []
      let index = 0
      var allData = this.allData
      for (let song of this.allData.songsInfo.songs) {
        // console.log('SongListData alldata:', allData);

        data.push({
          'songName': song.name,
          'songId': song.id,
          'albumName': song.al.name,
          'albumId': song.al.id,
          'singerName': song.ar[0].name,
          'singerId': song.ar[0].id,
          'songUrl': allData.songsUrl.data[index].url,
          'songPicUrl': song.al.picUrl
        })
        index++
      }
      console.log('getSongListData', data)

      return data
    },
    play (song) {
      var songUrl = ''
      var lrc = ''
      // getRequest('/musicApi/song/url', {id: song.songId})
      // .then( res => {
      //   songUrl = res.data.url
      // }).catch(err => {

      // })
      getRequest('/musicApi/lyric', { id: song.songId })
        .then(res => {
          lrc = res.data
          console.log('ap: ', this.aplayer)

          this.aplayer.addList({
            name: song.songName,
            artist: song.singerName,
            url: song.songUrl,
            cover: song.songPicUrl,
            lrc: lrc.lrc.lyric,
            theme: '#ebd0c2'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    console.log('mounted', this.$route.params.id)
  },
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter store', vm);
    store.commit('loading')
    var data = {
      'listInfo': {},
      'songsInfo': [],
      'songsUrl': []
    }
    getRequest('/musicApi/playlist/detail', { id: to.params.id })
      .then(res => {
        let ids = []
        data.listInfo = res.data
        for (let track of res.data.playlist.trackIds) { ids.push(track.id) }

        getRequest('/musicApi/song/detail', { ids: ids.join(',') })
          .then(res => {
            data.songsInfo = res.data
            console.log(res.data)// 歌曲数据
            console.log('/musicApi/song/detail ids', ids)

            getRequest('/musicApi/song/url', { id: ids.join(',') })
              .then(res => {
                data.songsUrl = res.data
                console.log('alldata: ', data)
                store.commit('loaded')
                next(vm => vm.setData(data))
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
    // next(vm => {
    //   vm.setData()
    // })
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate id: ', this.$route.params)
    next()
  }
  // watch: {
  //   songsIds(val) {
  //     console.log('songsId: ', val.join(','));
  //     // var ids = val.join(',')
  //   }
  // }
}
</script>

<style>

</style>
