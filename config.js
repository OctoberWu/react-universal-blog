// config.js
import dotenv from 'dotenv'
dotenv.config()

export default {
  site: {
    title: 'Secrete Garden of React'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || '',
    media_url:  'https://cosmic-s3.imgix.net' || '',
    read_key: process.env.COSMIC_READ_KEY || '',
    write_key: process.env.COSMIC_WRITE_KEY || ''
  },
}
