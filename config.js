// config.js
export default {
  site: {
    title: 'Secrete Garden of React'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || '8cd46fb0-d2ca-11e9-9ea8-2b9d842385af',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || 'SFIUGVzhPtiv42U27qQ0ltH4acfGwO5Ts3QFRRIjafIGvBS5T0',
    write_key: process.env.COSMIC_WRITE_KEY || 'sjMKGBbCPsHo6YxNgJGa5zojffswHg5R81fWVrlvl1pp9fbWj1'
  },
}
