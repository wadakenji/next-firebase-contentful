const dotenvFilename = process.env.NODE_ENV !== 'production' ? '.env.dev' : '.env.prod'

module.exports = {
  distDir: '../functions/dist',
  env: {...require('dotenv').config({path: dotenvFilename}).parsed},
}