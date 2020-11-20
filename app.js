const http = require('http');

const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'text/html')
  res.write('<html><head><title>My Node app</title></head><body><h1>This is my first Node app</h1></body></html>')
  // res.write('<head><title>My Node App</title></head>')
  // res.write('<body>This is my first Node app</body>')
  // res.write('</html>')
  res.end()
})

server.listen(3000);