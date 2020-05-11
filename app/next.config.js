const env = process.env.NODE_ENV !== 'production' ?
  {...require('dotenv').config().parsed} :
  {...process.env}

module.exports = {
  distDir: '../functions/dist',
  env
}