<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="header">
        <span>About Me</span>
      </div>
      <div class="item user-profile">
        <div class="avatar-container">
          <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
            <div>Hello</div>
            {{ user.role }}
          </pan-thumb>
        </div>
        <div class="user-name">{{user.name}}</div>
      </div>
      <div class="item usr-education">
        <div class="item-header">
          <svg-icon></svg-icon>
          <span>Education</span>
        </div>
        <div class="item-body">
          <p>UESTC Master</p>
        </div>
      </div>
      <div class="item usr-skills">
        <div class="item-header">
          <svg-icon></svg-icon>
          <span>Skills</span>
        </div>
        <div class="item-body">
          <span>C++</span>
          <el-progress :percentage="70" :format="format"></el-progress>
          <span>Java</span>
          <el-progress :percentage="90" :format="format"></el-progress>
          <span>Python</span>
          <el-progress :percentage="80" :format="format"></el-progress>
          <span>JavaScript</span>
          <el-progress :percentage="100" :format="format"></el-progress>
        </div>
      </div>

      <!-- <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div> -->
    </el-card>
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb/index.vue'

export default {
  props: {
    user: {
      type: Object,
      default () {
        return {
          role: 'user',
          name: 'numbguy',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
        }
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    PanThumb
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .item-header {
    color: rgb(151, 143, 143);
    border-bottom: 2px solid #ccc;
  }
  .item-body {
    /* color: rgb(151, 143, 143);
    border-bottom: 2px solid #ccc; */
    font-size: 14px
  }
  .header {
    padding: 20px 0px;
    border-bottom: 2px solid #ccc;
  }

</style>
