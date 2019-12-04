<template>
 <div>
       <div class="song-list-profile"></div>
    <div class="songs-container">
      <el-table :data="showData" style="width: 100%">
        <el-table-column prop="" label="" width="100" >
          <template slot-scope="scope">
            <span style="margin-right: 20px" >{{scope.row.index + 1}}</span>
            <el-button  type="text" @click="playClick(scope.row.index)">
              <svg-icon icon-class="play" >
            </svg-icon>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="songName" label="歌曲名称">
          <template slot-scope="scope">
            <a :href="songClick(scope.row.songId)">{{scope.row.songName}}</a>
          </template>
          <!-- <button @click="songClick"></button> -->
        </el-table-column>
        <el-table-column prop="singerName" label="歌手"  >
          <template slot-scope="scope">
            <a :href="singerClick(scope.row.sigerId)">{{scope.row.singerName}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="albumName" label="专辑" >
          <template slot-scope="scope">
            <a :href="albumClick(scope.row.albumId)">{{scope.row.albumName}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间" >
        </el-table-column>
      </el-table>
    </div>
 </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return null
      }
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  computed: {
    showData () {
      var tmp = []
      var i = 0

      for (let obj of this.tableData) {
        tmp.push({
          'index': i++,
          'songName': obj.songName,
          'singerName': obj.singerName,
          'albumName': obj.albumName
        })
      }
      console.log('showData', tmp)
      return tmp
    }
  },
  methods: {
    playClick (index) {
      console.log('play')
      this.$emit('playSong', this.tableData[index])
    },
    songClick (index) { return '/music/song/' + index },
    albumClick (index) { return '/music/album/' + index },
    singerClick (index) { return '/music/singer/' + index }

  }

}
</script>

<style>

</style>
