<template>
  <div>
    <el-timeline :reverse="reverse">
      <el-timeline-item color="#409EFF" v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  props: {
    activities: {
      type: Array,
      default () {
        return [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
      }
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
