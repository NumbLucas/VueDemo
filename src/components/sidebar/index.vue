<template>
  <div>
    <!-- <vertical-nav-bar></vertical-nav-bar> -->

    <!-- <el-menu :default-active="activeIndex"
        @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">el-menu-item</el-menu-item>
      <el-submenu index="2">
        <template slot="title">el-submenu title</template>
                    <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">el-menu-item</el-menu-item>
    </el-menu> -->

    <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu> -->

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeIndex" @select="menuSelect">
        <my-sidebar-item
        v-for="(route, index) in routes"
        :key="index"
        :item="route"
        :base-path="route.path"></my-sidebar-item>
        <!-- <sidebar-item v-for="(route, index) in routes" :key="index" :item="route"></sidebar-item> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import MySidebarItem from './MySidebarItem'

export default {
  data () {
    return {
      activeIndex: '0'
    }
  },
  components: {
    MySidebarItem
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    },
    menuSelect () {

    }
  }
}
</script>

<style>
.el-scrollbar {
  height: 100%
}

</style>
