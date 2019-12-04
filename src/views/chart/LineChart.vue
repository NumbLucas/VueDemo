<template>
  <div class="linechart-container">
    <!-- <h2> linechat page</h2> -->
    <el-button  @click="Random">Random</el-button>
    <div :id="id"  style="width: 100%; height:100%"
    :class="className" :option="option"
    :xdata="xdata" :ydata="ydata" />
    <!-- <div id="main" style="width: 600px;height:400px;"></div> -->
 </div>
</template>

<script>
import { LineChartOption } from './template.js'
import eCharts from 'echarts'

export default {
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    option: {
      type: Object,
      default () {
        return LineChartOption
      }
    },
    xdata: {
      type: Array,
      default () {
        return []
      }
    },
    ydata: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  components: {

  },
  mounted () {
    this.initCHart()
  },
  methods: {
    initCHart () {
      this.chart = eCharts.init(document.getElementById(this.id))
      console.log(this.chart)

      console.log('init chart')
      this.chart.setOption(this.option)

      this.Random()
      setTimeout((this.chart.hideLoading()), 1000)
    },
    Random () {
      let num = 100
      let xdata = []
      let ydata = []

      for (let i = 0; i < num; i++) {
        xdata.push(i)
        ydata.push(100 * Math.random())
      }
      // this.chart.showLoading()
      //  setTimeout((this.chart.hideLoading()), 10000)

      let option = {
        xAxis: {
          data: xdata
        },
        //  yAxis: {data: ydata},
        series: {
          data: ydata
        }
      }

      this.chart.setOption(option)
    }
  },
  watch: {

  }

}
</script>

<style>
.linechart-container {
  height: 500px
}

</style>
