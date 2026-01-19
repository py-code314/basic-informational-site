// Import modules
const http = require('http')
const fs = require('fs')


// Create a local server to receive data from browser
const server = http.createServer((req, res) => {
  let path = './views/'

  // Serve file based on the url
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
    // Handle error
    if (err) {
      console.log(err)
      return
    }

    // Status code 404 for 404 page
    if (path === './views/404.html') {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end(data)
      return
    }

    // Status code 200 for other pages
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
})

server.listen(8080)
