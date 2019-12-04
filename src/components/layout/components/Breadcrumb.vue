<template>
  <div>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb"> -->
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <!-- <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a> -->
        <a href="#">{{item.meta.title}}</a>
      </el-breadcrumb-item>

    </transition-group>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      levelList: null
    }
  },
  components: {

  },
  watch: {
    $route (route) {
      //  console.log('watch route');
      //  console.log(route);
      this.getBreadCrumb()
    }
  },
  methods: {
    getBreadCrumb () {
      let matched = this.$route.matched.filter(item => ((item.meta) && item.meta.title))
      this.levelList = matched
    }
  },
  created () {
    this.getBreadCrumb()
  }

}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  height: 100%;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

</style>
