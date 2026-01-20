// Import modules
const express = require('express')

// Create express server
const app = express()

// Port number
const PORT = process.env.PORT || 8080
app.listen(PORT)

// Routes
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname })
})

app.get('/contact-me', (req, res) => {
  res.sendFile('./views/contact-me.html', { root: __dirname })
})


// Catch all
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})


