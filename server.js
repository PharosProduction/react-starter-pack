const express = require('express')
const next = require('next')
const process = require('process')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.post('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(5000, '0.0.0.0', (err) => {
      if (err) throw err
      console.log('> Ready on http://0.0.0.0:5000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })