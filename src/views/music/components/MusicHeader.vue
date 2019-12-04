<template>
 <div class="music-header-container">
   <!-- <ul class="music-header-container">
     <li class="music-header-item" v-for="(item, index) in headerList" :key="index">
       <span>{{item.label}}</span>
     </li>
   </ul> -->
   <!-- <div class="music-header-container">
     <h2 href="#" v-for="(item, index) in headerList" :key="index">
       {{item.label}}
     </h2>
   </div> -->
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
     <el-menu-item class="el-menu-demo-item" v-for="(item, index) in headerList" :key="item" :index="index">
       <a href="#">{{item.label}}</a>
     </el-menu-item>

   </el-menu>

 </div>
</template>

<script>
export default {
  props: {
    headerList: {
      type: Array,
      default () {
        return [
          {
            label: '推荐',
            path: 'recommend'
          },
          {
            label: '排行榜',
            path: 'rank'
          },
          {
            label: '歌单',
            path: 'playlist'
          },
          {
            label: '主播电台',
            path: 'radio'
          },
          {
            label: '歌手',
            path: 'singer'
          },
          {
            label: '新碟上架',
            path: 'newDisc'
          }
        ]
      }
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    handleSelect (index, indexPath) {
      console.log('index: ' + index)
      console.log('indexPath' + indexPath)
    }
  }
}
</script>

<style>
.el-menu-demo {
  display: flex
}
.el-menu-demo-item {
  flex: 1
}

</style>
