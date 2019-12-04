<template>
  <div>
    <profile-template :coverImgUrl="coverImgUrl">
      <div slot="head" >
        <h2 class="start">{{listName}}</h2>
      </div>
      <div slot="creatorInfo" class="content-item start" >
          <img style="width: 35px;height: 35px; margin-left: 0" class="creator-img start" :src="avatarUrl" alt="">
          <div  class="creator-name start">
            <a style="line-height: 35px">{{nickName}}</a>
            <span class="time" >   创建于{{createTime}}</span>
          </div>
      </div>
        <!-- <div slot="operation" class="content-item"></div> -->
        <div slot="profile" >
          <div class="start">
            <b >标签：</b>
            <a  class="tag" href="#" v-for="(item, index) in playListInfo.playlist.tags" :key="index">
              {{item}}
            </a>
          </div>
            <p class="start"  style="word-wrap: break-word;word-break: break-word;white-space: normal; float: left">
              介绍：{{description}}</p>
        </div>
    </profile-template>
  </div>
</template>

<script>
import ProfileTemplate from './ProfileTemplate'

export default {
  props: {
    playListInfo: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  components: {
    ProfileTemplate
  },
  computed: {
    coverImgUrl () { return this.playListInfo.playlist.coverImgUrl },
    listName () { return this.playListInfo.playlist.name },
    avatarUrl () { return this.playListInfo.playlist.creator.avatarUrl },
    nickName () { return this.playListInfo.playlist.creator.nickname },
    description () { return this.playListInfo.playlist.description },
    createTime () {
      let time = this.playListInfo.playlist.createTime
      let date = new Date(time)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
      return Y + M + D
    }

  }
}
</script>

<style>
/* .content-container {
  display: flex
} */
.start {
  float: left;
  margin-left: 10px
}
.creator-img {
  height: 100%;
  float: left;
  width: 20%;
  margin: 10px;
  padding: 0;
}
.title {
  float: left;
  margin-left: 20px
}
.content-item {
  width: 100%;
  line-height: 35px;
  float: left;
}
.creator-name  {
  line-height: 35px;
}
.creator-name a {
  padding: 0;
  margin-right: 10px;
  color:#409EFF;
  padding:0;
  margin-left:0;
  font-size: 14px
}
.creator-name .time {
  line-height: 35px;
  padding: 0;
  color:#ccc;
}
.tag:hover {
  color: #409EFF
}
</style>
