module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'projects/spectral_extractor/node_content/dist'
}