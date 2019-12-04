<template>
  <div class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children, item)">
      <menu-link :to="resolvePath(item.path)">
        <el-menu-item :index="item.path">
          <item :icon="item.meta.icon" :title="item.meta.title"></item>
        </el-menu-item>
      </menu-link>
    </template>
    <!-- <template v-if="hasOneShowingChild(item.children, item)"> -->
    <!-- <item   :index="item.path" :icon="item.meta.icon" :title="item.meta.title"></item> -->
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <item :icon="item.meta.icon" :title="item.meta.title">
        </item>
      </template>
      <my-sidebar-item v-for="(child, index) in item.children" :key="index" :item="child"
        :base-path="resolvePath(item.path)">
      </my-sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'

import Item from './Item'
import MenuLink from './MenuLink'
import {
  isExternalPath
} from '@/utils/validate'

export default {
  name: 'MySidebarItem',
  props: {
    item: {
      type: Object
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: {}
    }
  },
  components: {
    Item,
    MenuLink
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(
        item => {
          if (item.hidden) {
            return false
          } else if (item.meta && item.meta.title) {
            this.onlyOneChild = item
            return true
          } else {
            return false
          }
        })

      if (showingChildren.length === 1) {
        if (showingChildren[0].path === 'index') { return true }
        return false
      }
      if (showingChildren.length === 0) {
        return true
      }
      return false
    },
    resolvePath (routePath) {
      console.log(this.basePath)
      if (isExternalPath(routePath)) {
        return routePath
      } else {
        return path.resolve(this.basePath, routePath)
      }
    }
  }
}
</script>

<style>

</style>
