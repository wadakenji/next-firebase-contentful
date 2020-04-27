const functions = require('firebase-functions')
const next = require('next')

const app = next({
  dev: false,
  dir: __dirname,
  conf: {distDir: 'dist'},
})
const handle = app.getRequestHandler()

exports.nextApp = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return app.prepare().then(() => handle(req, res))
})