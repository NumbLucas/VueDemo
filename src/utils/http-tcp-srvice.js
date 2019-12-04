var http = require('http')
var net = require('net')
var url = require('url')
var qs = require('querystring')

const PORT = 10000
const HOST = '127.0.0.1'

var flag = false
var msg = ''

var tcpClient = net.connect({ port: 10000 }, function () {
  console.log('连接到服务器！')
  //  let random = Math.random()
  //  tcpClient.write(random.toString());
})

tcpClient.on('data', function (data) {
  msg = data.toString()
  console.log('tcpClient received: ', msg)
  flag = true
  // setTimeout(function() {flag = true}, 1000)

  // let random = Math.random()
  // tcpClient.write(random.toString());
})
tcpClient.on('end', function () {
  console.log('断开与服务器的连接')
})
function getTCPServerMsg () {
  while (true) {
    if (flag) { break }
  }
  return msg
}
http.createServer(function (request, response) {
  var urlObj = url.URL(request.url)
  var qsObj = qs.parse(urlObj.query)
  console.log('urlObj:', urlObj)
  console.log('qsObj', qsObj)
  tcpClient.write(qsObj.scpi)
  // while(!flag) {

  // }
  // flag = false
  var msgSend = getTCPServerMsg()
  flag = false
  response.writeHead(200, { 'Content-Type': 'text-plain' })
  console.log('server send: ', msgSend)
  response.write(msgSend)
  // response.write(Math.random().toString())
  response.end()
}).listen(8124)
