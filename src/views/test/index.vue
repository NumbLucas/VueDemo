<template>
  <div>
    <h2>this is a test page</h2>
    <h2>{{msg}}</h2>
    <el-input v-model="input" placeholder="请输入SCPI"></el-input>
    <el-button type="primary" @click="btnClick">test</el-button>
    <el-button type="primary" @click="getJson">test-getJson</el-button>
    <!-- <websocket-test></websocket-test> -->
  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>
  import {getRequest} from '@/utils/network.js'
  import WebsocketTest from '@/components/websocket/websocket'
  import $ from 'jquery'
  import axios from 'axios'

    //     $.ajaxSetup({
    //   error: function (x, e) {
    //     console.log('err');

    //     return false;
    //   }
    // });
  export default {
    data() {
      return {
        msg: 'msg',
        input: ''
      }
    },
    created() {
      // this.initWebsocket()
    },
    components: {
      WebsocketTest
    },
    methods: {
      btnClick() {
        console.log('click')
        axios.get('/api', {
          params: {
            scpi: this.input
          }
        }).then(res => {
            console.log(res.data)
            this.msg = res.data
            })
          .catch(err => {
            console.log('err:');
            console.log(err);
            this.$message('error');
          })
          console.log('end request');

      },
      getJson() {
        console.log('getJson click')
        var random = Math.random()
        $.getJSON("http://localhost:10000?/random=" + random + "jsoncallback=?", null, function (data) {
          console.log('getJson:');

          console.log('data:', data);

        })
      },
          initWebsocket() {
        let _this = this
        let ws = new WebSocket('ws://127.0.0.1:8300')
        //保持连接
        ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
            console.log('数据发送中...')
            setInterval(() => {
                let msg = {
                    msg: '心跳内容'
                }
                ws.send(JSON.stringify(msg))
            }, 5000)
            console.log('数据发送完成')
        }
        //数据接收
        ws.onmessage = evt => {
            _this.websocketonmessage(evt)
             console.log('数据已接收...')
        }
        // 关闭 websocket 时的 钩子
        ws.onclose = () => {
            console.log('连接已关闭...')
            _this.websocket()
        }
        // 路由跳转时结束websocket链接
        this.$router.afterEach(() => {
            ws.close()
        })
    },//数据接收
    websocketonmessage(e) {
        // 数据处理
        let obj = JSON.parse(e.data)
    }

    }
  }
</script>

<style>

</style>
