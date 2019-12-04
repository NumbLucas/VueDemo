var ws = require('nodejs-websocket')
var net = require('net')

var wsServer
var flag = false
var msg = ''
var tcpClient = net.connect({ port: 10000 }, function () {
  console.log('连接到服务器！')
  let random = Math.random()
  tcpClient.write(random.toString())
})

wsServer = ws.createServer(function (conn) {
  conn.on('text', function (str) {
    tcpClient.write(str)
    // conn.sendText(str)
  })
  conn.on('close', function (code, reason) {
    console.log('关闭连接')
  })
  conn.on('error', function (code, reason) {
    console.log('异常关闭')
  })
})
wsServer.listen(8300)
console.log('WebSocket建立完毕')

tcpClient.on('data', function (data) {
  msg = data.toString()
  console.log('tcpClient received: ', msg)
  setTimeout(function () { flag = true }, 1000)
  wsServer.sendText(msg)
})
tcpClient.on('end', function () {
  console.log('断开与服务器的连接')
})
