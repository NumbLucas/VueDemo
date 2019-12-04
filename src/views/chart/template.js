export const LineChartOption = {
  title: { text: '曲线图' },
  backgroundColor: '#FBFBFB',
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: [],
    name: 'id'
  },
  yAxis: {},
  series: [{
    name: 'data',
    type: 'line',
    data: [],
    smooth: true,
    itemStyle: {
      normal: {
        color: 'hotpink'
      }
    }
  }]
}
