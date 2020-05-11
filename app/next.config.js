console.log(process.env)

const env = process.env.NODE_ENV !== 'production' ?
  {...require('dotenv').config().parsed} :
  {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }

module.exports = {
  distDir: '../functions/dist',
  env
}