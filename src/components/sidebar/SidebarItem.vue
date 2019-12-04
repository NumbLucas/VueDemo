<template>
  <div>
    <!-- <el-menu-item index="1"></el-menu-item> -->
    <item :icon="item.meta.icon" :title="item.meta.title"></item>
    <!-- <h2>test</h2> -->
    <el-submenu  v-if="hasChildren(item.children, item)" :index="'1'">
      <template slot="title"></template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      />
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object
      //  required: true
    }
  },
  data () {
    return {

    }
  },
  components: {
    Item
  },
  methods: {
    hasChildren (children, parent) {
      if (children) { return true }
      return false
    }
  }
}
</script>

<style>

</style>
