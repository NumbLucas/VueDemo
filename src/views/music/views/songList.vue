<template>
 <div ref="selectCat" class="song-list-wrapper">
   <!-- <h2>SongList page</h2> -->
   <song-list-category @changeCat="changeCat"></song-list-category>
   <div class="song-list-container">
     <ul class="song-list-ul">
       <li class="song-list-li" v-for="(list, index) in listsData.playlists" :key="index">
         <a href="#" @click="showListInfo(list.id)">
           <img style="width: 100px;height: 100px" :src="list.coverImgUrl" alt="">
         </a>

         <div class="list-bottom"></div>
         <span style="color: #999">by </span>
         <a :href="userClick(list.creator.userId)">{{list.creator.nickname}}</a>
       </li>
     </ul>
   </div>
   <div class="page-container">
    <el-pagination @current-change="changePage"
    :page-size="page.pageSize" :pager-count="page.pageCount"
    layout="prev, pager, next" :total="page.total">
    </el-pagination>
   </div>

   <!-- <el-dialog title="歌单详情" :visible.sync="ListInfoVisible">
    <song-list-info :songsIds="songsIds" :ap="ap"></song-list-info>
  </el-dialog> -->
 </div>
</template>

<script>
import { getRequest } from '@/utils/network.js'
import SongListCategory from '../components/SongListCategory'

export default {
  props: {
    ap: {
    }
  },
  data () {
    return {
      currentCat: '', // 当前分类
      page: {// 页数相关信息
        total: 1000,
        pageSize: 10,
        pageCount: 11,
        currentPage: 1
      },
      listCount: 10, // 默认请求个数
      listsData: {},
      listDetail: {},
      ListInfoVisible: false, // 歌单信息弹出框显示与否
      songsIds: []

    }
  },
  computed: {

  },
  components: {
    SongListCategory
  },
  methods: {
    changeCat (val) {
      console.log('changeCat', 'cat,', val.cat, ' offset,', val.offset, 'limit,', val.limit)

      this.currentCat = val.cat

      let obj = this
      let url = '/musicApi/top/playlist'
      let params = {
        cat: val.cat,
        offset: val.offset,
        limit: val.limit
      }

      getRequest(url, params)
        .then(res => {
          console.log('lists data', res.data)
          this.listsData = res.data
          this.page.total = res.data.total
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePage (currentPage) {
      console.log('currentPage', currentPage)
      console.log(this.currentCat)

      this.currentPage = currentPage
      this.changeCat({ cat: this.curretnCat, offset: (currentPage - 1) * this.page.pageSize, limit: this.page.pageSize })
    },
    initData () {
      this.changeCat({ cat: '全部歌单', offset: 0, limit: 10 })
    },
    showListInfo (id) {
      // this.ListInfoVisible = true
      // getRequest('/musicApi/playlist/detail', { id })//请求歌单列表
      // .then(res => {
      //   this.listDetail = res.data
      //   let idsArray = []
      //   let songsArray = res.data.playlist.trackIds
      //   for(let i = 0; i< songsArray.length; i++) {
      //     idsArray.push(songsArray[i].id)
      //   }
      //   this.songsIds = idsArray
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      console.log('showListInfo')

      this.$router.push('/music/songListInfo/' + id)
    },
    userClick (userId) {
      return '/music/user/' + userId
    }
  },
  mounted () {
    this.initData()
  },
  watch: {
    currentCat (newVal, oldVal) {
      console.log('cat changed ', newVal)
    }
  }
}
</script>

<style scoped>
/* .song-list-wrapper {
  min-height: calc(100vh - 50px);
}
.song-list-container {
  min-height: calc(100vh - 50px);
} */
.page-container {
  position: fixed;
  right: 0px;
  left: 0px;
  bottom: 85px
}
.song-list-ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
}
.song-list-li {
  margin: 10px 60px;
  flex: 100px;
  width: 300px;
  height: 200px
}
.song-list-li a,span {
  font-size: 14px;
  color: #999;
}
.song-list-li a:hover {
  color: #409EFF;
}
</style>
