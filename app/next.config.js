console.log(process.env)

const env = process.env.NODE_ENV !== 'production' ?
  {...require('dotenv').config().parsed} :
  {...process.env.SECRETS}

module.exports = {
  distDir: '../functions/dist',
  env
}