<template>
  <div>
    <!-- <el-button type="primary" @click="initData">getData</el-button> -->
    <span> 分类: </span>
    <el-dropdown  trigger="click" type="primary" size="mini" >
      <span class="el-dropdown-link">
        {{currentCat}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>

      <el-dropdown-menu style=" height: auto; width:600px" slot="dropdown">
        <el-dropdown-item >
          <a  @click="handleClick(catlist.all.name)">
            {{catlist.all.name}}
          </a>
          </el-dropdown-item>
        <a  v-for="(val, key) in catlist.categories" :key="val">
          <!-- <li style="list-style: none; line-height: 36px;padding: 0 20px;margin: 0;font-size: 14px;"> -->
            <span style="color: #409EFF; line-height: 36px;padding: 0 10px;margin: 0;font-size: 14px;">{{val}}</span>
          <!-- </li> -->
          <div style="display: flex;flex-flow: row wrap;">
            <el-dropdown-item  v-for="(item, index) in category(key)" :key="index">
            <span @click="handleClick(item.name)"> {{item.name}} </span>
          </el-dropdown-item></div>

        </a>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getRequest } from '@/utils/network.js'
export default {
  data () {
    return {
      catlist: { 'all': { 'name': '全部风格' } },
      currentCat: '全部风格'
    }
  },
  components: {

  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      getRequest('/musicApi/playlist/catlist')
        .then(res => {
          console.log(res.data)

          this.catlist = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleClick (cat) {
      // console.log('test');
      console.log('Cat cmp changed', cat)

      this.currentCat = cat
      this.$emit('changeCat', { cat, offset: 0, limit: 10 })
    }
  },
  computed: {
    category () {
      console.log('category', this.catlist.sub)

      let obj = this
      return function (cat) {
        return obj.catlist.sub.filter(item => {
          return item.category === cat
        })
      }
    }
  }
}
</script>

<style>

</style>
