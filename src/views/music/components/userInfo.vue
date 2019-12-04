<template>
 <div>
   <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="userIcon" class="user-avatar">

          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
 </div>
</template>

<script>
export default {
  props: {
    userIcon: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>

</style>
