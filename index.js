// Import modules
const http = require('http')
const fs = require('fs')


// Create a local server to receive data from browser
const server = http.createServer((req, res) => {
  let path = './views/'

  // Serve file based on url
  if (req.url === '/' || req.url === '/index') {
    path += 'index.html'
  } else if (req.url === '/about') {
    path += 'about.html'
  } else if (req.url === '/contact-me') {
    path += 'contact-me.html'
  } else {
    path += '404.html'
  }

  // Read and send html file
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    // Send file
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
})

server.listen(8080)
